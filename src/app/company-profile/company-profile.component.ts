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
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  currentUserValue: User;
  mySubjects: FYPSubject[];
  selectedSubject: FYPSubject;
  mySubjectsToShow: FYPSubject[];

  fakeDelay = 1;
  loadingSubjectDetails = false;

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

  revert() {
    this.subjectForm.reset();
  }


  onSubmit() {
    const newValue = this.subjectForm.value;
    // ...
    const categories = [];

    console.log(newValue);

    for (const c of newValue.selectedCategoryTags) {
      categories.push({
        id: c.value
      });
    }

    this.toAddFypSubject = {
      id: 0,
      title: newValue.title,
      content: newValue.description,
      maxApplicants: newValue.maxApplicants,
      categories: categories,
      country: this.auth.currentUserValue.country.toString(),
      company: {
        id: this.auth.currentUserValue.id.toString(),
      },
    };

    console.log(this.toAddFypSubject);

    this.service.CreateNewSubject(this.toAddFypSubject).subscribe(e => {
      this.refreshFypSubjects();
    });

    this.showCreateForm = false;
  }

  SetSubjectsSearchStr(event: any) {
    this.mySubjectsToShow = this.mySubjects.filter(e => e.title.toLowerCase().includes(event.target.value.toLowerCase()));

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
          this.selectedSubject.studentSubjects = data;
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
