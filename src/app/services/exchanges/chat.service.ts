import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { GoogleAuthService } from '../security/google-auth.service';
import { AuthenticationService } from '../security/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    private afs: AngularFirestore,
    private auth: GoogleAuthService,
    private router: Router,
    private authServ:AuthenticationService
  ) {}

  get(chatId) {
    return this.afs
      .collection<any>('chats')
      .doc(chatId)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }

  getUserChats() {
    return this.auth.user$.pipe(
      switchMap(user => {
        return this.afs
          //.collection('chats', ref => ref.where('uid', '==', user.uid))
          .collection('chats', ref => ref)
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                let data: Object
                let id;
                if(a.payload.doc.id != "UJrR0M10IK7VJDVCQIKF"){
                  data = a.payload.doc.data()
                  id = a.payload.doc.id;
                  console.log(id)
                }
                return { id, ...data };
              });
            })
          );
      })
    );
  }
  // creating a chatroom
  async create(name:string,creator:string) {
    const { uid } = await this.auth.getUser();

    const data = {
      uid,
      name,
      createdBy :creator,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };

    const docRef = await this.afs.collection('chats').add(data);

    return this.router.navigate(['chat', docRef.id]);
  }

  async sendMessage(chatId, content) {
    const { uid } = await this.auth.getUser();

    const data = {
      uid,
      content,
      sender : this.authServ.currentUserValue.username,
      createdAt: Date.now()
    };

    if (uid) {
      const ref = this.afs.collection('chats').doc(chatId);
      return ref.update({
        messages: firestore.FieldValue.arrayUnion(data)
      });
    }
  }

  async deleteMessage(chat, msg) {
    const { uid } = await this.auth.getUser();

    const ref = this.afs.collection('chats').doc(chat.id);
    console.log(msg);
    if (chat.uid === uid || msg.uid === uid) {
      // Allowed to delete
      delete msg.user;
      return ref.update({
        messages: firestore.FieldValue.arrayRemove(msg)
      });
    }
  }

  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        // Unique User IDs
        chat = c;
        let uids = Array.from(new Set())
        if(c && c.messages){
           uids = Array.from(new Set(c.messages.map(v =>{
            if(v) return v.id
          })));
        }        
        //const uids = Array.from(new Set(c.id));
        // Firestore User Doc Reads
        const userDocs = uids.map(u =>
          this.afs.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(arr => {
        console.log(arr)
        arr.forEach(v =>{
         if(v) (joinKeys[(<any>v).uid] = v)
        } );
        if(chat && chat.messages){
          chat.messages = chat.messages.map(v => {
            if(v) return { ...v, user: joinKeys[v.uid] };
          });
        }
        
        return chat;
      })
    );
  }
}