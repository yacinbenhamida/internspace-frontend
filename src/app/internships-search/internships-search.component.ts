import { startWith, map } from 'rxjs/operators';
import { FypCategory } from './../models/fyp/fyp-category';
import { UniStatsService } from './../services/dashboard/uni-stats.service';
import { StateGroup } from './../dashboard/university-stats/students-internship-by-year-loc/students-internship-by-year-loc.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './../services/company/company.service';
import { FYPSubject } from './../models/fyp/fyp-subject';
import { AuthenticationService } from './../services/security/authentication.service';
import { Component, OnInit } from '@angular/core';

import { from, of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';
import { coerceNumberProperty } from '@angular/cdk/coercion';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-internships-search',
  templateUrl: './internships-search.component.html',
  styleUrls: ['./internships-search.component.css']
})
export class InternshipsSearchComponent implements OnInit {

  currentUserValue: User;
  mySubjects: FYPSubject[];
  selectedSubject: FYPSubject;
  mySubjectsToShow: FYPSubject[];

  fakeDelay = 1;
  loadingSubjectDetails = false;
  bShowInternshipDetails = false;

  // Form section
  subjectForm: FormGroup = this._formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    maxApplicants: new FormControl('', [Validators.required]),
    selectedCategoryTags: new FormControl('', [Validators.required]),
  });

  categoriesGroup: StateGroup[];
  showCreateForm = false;

  stateGroupOptions: Observable<StateGroup[]>;
  categories: FypCategory[];
  selectedCategoryName: string;
  selectedMaxApplicants = 1;
  categoryNamesDisplay = [];
  toAddFypSubject: FYPSubject;

  currentApplianceStatus = 'unapplied'; // possible values: unapplied / accepted/ pending
  refusalMessage = 'We weren\'t looking for this specific skillset';

  suggestedSubjects: FYPSubject[];

  onCategoryTagAdd(item: any) {
    console.log(item);
  }

  constructor(private _formBuilder: FormBuilder,
    public auth: AuthenticationService,
    private service: CompanyService,
    private uniStatsService: UniStatsService,
    public modalService: NgbModal) {

    // this.subjectForm = this.createFormGroup();

  }

  ngOnInit() {
    this.refreshFypSubjects();
    this.service.GetSuggestedSubjectsByStudent(this.auth.currentUserValue.id, false).subscribe(e => {
      console.log(e);
      this.suggestedSubjects = e;
    });

    this.uniStatsService.GetCategories().subscribe(data => {

      this.categoriesGroup = [];
      this.categories = data;

      for (let i = 0; i < this.categories.length; ++i) {

        if (!this.categories[i] || !this.categories[i].approved) {
          continue;
        }

        this.categoryNamesDisplay.push({ display: this.categories[i].name, value: this.categories[i].id });
      }

    });

  }


  // NEW!

  revert() {
    this.subjectForm.reset();
  }


  onClick_SelectedSubject() {

  }

  SetSubjectsSearchStr(event: any) {
    this.bShowInternshipDetails = false;
    this.mySubjectsToShow = this.mySubjects.filter(e => e.title.toLowerCase().includes(event.target.value.toLowerCase()));
  }

  applySubject(subjectId: number) {
    const targetSubjectId = subjectId ? subjectId : this.selectedSubject.id;
    this.currentApplianceStatus = 'pending';

    this.service.ApplyToSubject(this.auth.currentUserValue.id, targetSubjectId).subscribe(e => {
      console.log(e);
    });
  }

  unapplySubject(subjectId: number) {
    const targetSubjectId = subjectId ? subjectId : this.selectedSubject.id;
    this.currentApplianceStatus = 'unapplied';

    this.service.UnapplyToSubject(this.auth.currentUserValue.id, targetSubjectId).subscribe(e => {
      console.log(e);
    });
  }


  GetShortenedContent(content: string, maxLenght: number) {

    let finalContent = content;

    if (content.length > maxLenght) {
      finalContent = content.substring(0, maxLenght) + '...';
    }
  }

  get title() {
    return this.subjectForm.get('title');
  }
  get description() {
    return this.subjectForm.get('description');
  }

  formatLabel(value: number) {
    this.selectedMaxApplicants = value;
    return value;
  }

  refreshFypSubjects() {

    this.service.GetAllSubjects().subscribe(e => {
      from(e).pipe(
        concatMap(item => of(item).pipe(delay(this.fakeDelay)))
      ).subscribe(timedItem => {
        this.currentUserValue = this.auth.currentUserValue;
        this.mySubjects = e;
        this.mySubjectsToShow = e;


      });
    });


    return;

    this.service.GetFypSubjectsByCompanyId(this.auth.currentUserValue.id).subscribe(e => {


      from(e).pipe(
        concatMap(item => of(item).pipe(delay(this.fakeDelay)))
      ).subscribe(timedItem => {
        this.currentUserValue = this.auth.currentUserValue;
        this.mySubjects = e;
        this.mySubjectsToShow = e;
      });

    }
    );
  }

  openSubjectDetails(i) {

    this.loadingSubjectDetails = true;
    this.bShowInternshipDetails = false;
    this.showCreateForm = false;
    this.selectedSubject = null;
    const wantedId = this.mySubjects[i].id;

    this.service.GetStudentFypSubjectsOfSubjectByStatus(wantedId, 'x', true).subscribe(
      data => {
        from('x').pipe(
          concatMap(item => of(item).pipe(delay(this.fakeDelay)))
        ).subscribe(timedItem => {
          this.loadingSubjectDetails = false;
          this.selectedSubject = this.mySubjects[i];


          // Set student btn:

          this.currentApplianceStatus = 'unapplied';
          this.selectedSubject.studentSubjects = data;

          console.log(this.selectedSubject.studentSubjects);
          for (const elem of this.selectedSubject.studentSubjects) {
            console.log(elem);
            if (elem.student.id !== this.auth.currentUserValue.id) {
              continue;
            }

            this.refusalMessage = elem.refusalReason;

            this.currentApplianceStatus = elem.applianceStatus;
            break;
          }

          this.bShowInternshipDetails = true;

        });
      }
    );
  }

  openSuggestedSubjectDetails(i) {

    this.loadingSubjectDetails = true;
    this.bShowInternshipDetails = false;
    this.showCreateForm = false;
    this.selectedSubject = null;
    const wantedId = this.mySubjects[i].id;

    this.service.GetStudentFypSubjectsOfSubjectByStatus(wantedId, 'x', true).subscribe(
      data => {
        from('x').pipe(
          concatMap(item => of(item).pipe(delay(this.fakeDelay)))
        ).subscribe(timedItem => {
          this.loadingSubjectDetails = false;
          this.selectedSubject = this.suggestedSubjects[i];


          // Set student btn:

          this.currentApplianceStatus = 'unapplied';
          this.selectedSubject.studentSubjects = data;

          console.log(this.selectedSubject.studentSubjects);
          for (const elem of this.selectedSubject.studentSubjects) {
            console.log(elem);
            if (elem.student.id !== this.auth.currentUserValue.id) {
              continue;
            }

            this.refusalMessage = elem.refusalReason;

            this.currentApplianceStatus = elem.applianceStatus;
            break;
          }

          this.bShowInternshipDetails = true;

        });
      }
    );
  }


  openFormModal(formModalContent, i) {
    // this.studentDetails = i;
    this.showCreateForm = true;
    // this.modalService.open(formModalContent, { scrollable: true, size: 'lg' });
  }

  goToWebsite() {
    window.open('https://' + this.auth.currentUserValue.website + '', '_blank');
  }

  setApplianceAction(actionStr: string, applicationIndex: number) {

    const ap = this.selectedSubject.studentSubjects[applicationIndex];
    if (!ap) { return; }

    const studentId = ap.student.id;
    if (actionStr === 'accept') {

      this.selectedSubject.studentSubjects[applicationIndex].applianceStatus = 'accepted';
      this.service.SetStudentApplianceToSubject(studentId, this.selectedSubject.id, 'accept').subscribe(msg => msg);
      return;
    }

    if (actionStr === 'refuse') {

      this.selectedSubject.studentSubjects[applicationIndex].applianceStatus = 'refused';
      this.service.SetStudentApplianceToSubject(studentId, this.selectedSubject.id, 'refuse').subscribe(msg => msg);
      return;
    }

    if (actionStr === 'rethink') {

      console.log('Poor guy, don\'t remove your approval!');
      return;
    }

  }
}
