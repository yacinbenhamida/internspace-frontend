import { UniversitaryYear } from './../../../models/university/universitary-year';
import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, Input, NgZone, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-students-internship-by-year-loc',
  templateUrl: './students-internship-by-year-loc.component.html',
  styleUrls: ['./students-internship-by-year-loc.component.css']
})
export class StudentsInternshipByYearLocComponent implements OnInit, OnDestroy {

  zone: NgZone;
  uniStatsService: UniStatsService;
  chartChache: any;

  savedCachedData: any[];
  studentsCache: any[];


  selectedCountryName = '';
  countriesData: any;
  countryNames: string[];

  selectedUY: UniversitaryYear;
  selectedUYId: number;
  cachedUYs: any;

  @Input() uniId = '2';

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  countriesGroup: StateGroup[];

  stateGroupOptions: Observable<StateGroup[]>;


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartChache) {
        this.chartChache.dispose();
      }
    });
  }

  onClickCountry(countryName: string) {
    this.selectedCountryName = countryName;
    this.PlotData();
  }

  onChange_UY(uyIndex: number) {
    this.selectedUYId = this.cachedUYs[uyIndex].id;
    this.selectedUY = this.cachedUYs[uyIndex];
    this.PlotData();
  }

  PlotData() {

    if (!this.selectedCountryName || !this.selectedUY) {
      this.studentsCache = null;
      return;
    }

    const data = this.savedCachedData;

    const finalData = [];

    for (const d in data) {
      if (!d || d !== this.selectedCountryName) {
        continue;
      }


      for (const s of data[d] as any) {
        if (!s) { continue; }

        if (s.studyClass && s.studyClass.universitaryYear.id === this.selectedUYId) {
          finalData.push(s);
        }
      }

      break;
    }

    this.studentsCache = finalData;
  }

  constructor(private _formBuilder: FormBuilder, uniStatsService: UniStatsService, zone: NgZone) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;

    this.countriesGroup = [];
    this.countryNames = [];

    this.uniStatsService.GetStudentInternshipPerCountry(this.uniId).subscribe(data => {
      this.savedCachedData = data;
    });

    this.uniStatsService.GetUniversitaryYears().subscribe(uys => {
      this.cachedUYs = uys;
    });

    this.uniStatsService.GetCountryNames().subscribe(data => {
      for (const key in data) {
        if (key) {
          this.countryNames.push(data[key]);
        }
      }

      for (let i = 0; i < this.countryNames.length; ++i) {

        if (!this.countryNames[i]) {
          continue;
        }
        const names = [];
        const letter = this.countryNames[i].charAt(0);

        while (i < this.countryNames.length && this.countryNames[i].charAt(0) === letter) {
          names.push(this.countryNames[i++]);
        }

        this.countriesGroup.push({ letter: letter, names: names });
      }

      // console.log(this.countriesGroup);

      // tslint:disable-next-line: no-non-null-assertion
      this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterGroup(value))
        );
    });
  }


  ngOnInit() {


  }

  private _filterGroup(value: string): StateGroup[] {
    // Set it to a true one.
    // this.selectedCountryName = value;

    if (value) {
      return this.countriesGroup
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.countriesGroup;
  }

}
