import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-students-site',
  templateUrl: './students-site.component.html',
  styleUrls: ['./students-site.component.css']
})
export class StudentsSiteComponent implements OnInit {

  @Input() uniId = '2';
  siteId = '4';

  selectedStudent: any;

  studentsCache = [];
  uniStatsService: UniStatsService;
  modalService: NgbModal;

  constructor(uniStatsService: UniStatsService, modalService: NgbModal) {
    this.uniStatsService = uniStatsService;
    this.modalService = modalService;
  }

  ngOnInit() {
    this.uniStatsService.GetStudentsBySite(this.siteId).subscribe(res => {
      this.studentsCache = res;
      console.log(res);
      this.selectedStudent = res.length > 0 ? res[0] : null;
    });
  }

  openScrollableContent(longContent, i) {
    // this.studentDetails = i;
    this.selectedStudent = this.studentsCache[i];
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }
}
