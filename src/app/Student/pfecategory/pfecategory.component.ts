import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/student/subjects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FypCategory } from 'src/app/models/fyp/fyp-category';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';

@Component({
  selector: 'app-pfecategory',
  templateUrl: './pfecategory.component.html',
  styleUrls: ['./pfecategory.component.css']
})
export class PFECategoryComponent implements OnInit {

  allFypCategory: FypCategory[];
  fypCategory: FypCategory;
  AllfypSubject: FYPSubject[];
  fypSubject: FYPSubject;
  id:number;

  constructor(private subjectsService: SubjectsService, private router: Router,private ar:ActivatedRoute) { }

  ngOnInit() {

    this.subjectsService.Getcats().subscribe(fypts => {
      this.AllfypSubject = fypts as FYPSubject[];
      console.log(this.AllfypSubject);})
      
  }
  /*onClick(id: string){

    this.subjectsService.findCat(id).subscribe( (data) => {

      this.fypCategory = data[1] as FypCategory ;
      console.log(data);
      
      
      console.log(this.fypCategory)
     // console.log(this.currFYPSubject);
     
   ;})
     // this.ar.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  
    this.router.navigate(['student/skills/find/',id]);

  }*/

  onClick(id: number){
    console.log(this.fypSubject)
    this.router.navigate(['student/skills/find/',id]);
  }


  GetFypCategory() {
   
    const subject = [
      {
        'id': 0,
        'name': 'title',
        
        'approved':false,
       
      }
 
  ];

  return { id: 0, name: 'Untitled', approved :false};
}

onChange_FYPSubjectIndex(index: number) {
  this.subjectsService.Getcats().subscribe(
    (data: any) => {
     
      console.log(data);
      this.fypCategory = data[index];
      
      console.log(this.fypCategory);
     
    });
   //this.getS();
  
  //console.log(this.currFYPSubject);
}








}
