import { User } from 'src/app/models/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './../services/company/company.service';
import { FYPSubject } from './../models/fyp/fyp-subject';
import { AuthenticationService } from './../services/security/authentication.service';
import { Component, OnInit } from '@angular/core';

import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(public auth: AuthenticationService, public service: CompanyService, public modalService: NgbModal) { }

  currentUserValue: User;
  mySubjects: FYPSubject[];
  selectedSubject: FYPSubject;

  fakeDelay = 1000;
  loadingSubjectDetails = false;

  ngOnInit() {
    this.service.GetFypSubjectsByCompanyId(this.auth.currentUserValue.id).subscribe(e => {

      from(e).pipe(
        concatMap(item => of(item).pipe(delay(this.fakeDelay)))
      ).subscribe(timedItem => {
        this.currentUserValue = this.auth.currentUserValue;
        this.mySubjects = e;
      });

    }
    );
  }

  openSubjectDetails(subjectContent, i) {

    console.log(this.mySubjects[i]);

    this.loadingSubjectDetails = true;
    this.selectedSubject = null;
    const wantedId = this.mySubjects[i].id;

    this.service.GetStudentFypSubjectsOfSubjectByStatus(wantedId, 'x', true).subscribe(
      data => {
        console.log(data);
        from('x').pipe(
          concatMap(item => of(item).pipe(delay(this.fakeDelay)))
        ).subscribe(timedItem => {
          this.loadingSubjectDetails = false;
          this.selectedSubject = this.mySubjects[i];
          this.selectedSubject.studentsAppliances = data;
        });
      }
    );
  }

  goToWebsite() {
    window.open('https://' + this.auth.currentUserValue.website + '', '_blank');
  }
}
