import { Component, OnInit, Input } from '@angular/core';
import { FypFileHistory } from 'src/app/models/fyp/fyp-file-history';

@Component({
  selector: 'app-fypfile-history-card',
  templateUrl: './fypfile-history-card.component.html',
  styleUrls: ['./fypfile-history-card.component.css']
})
export class FypfileHistoryCardComponent implements OnInit {
  @Input() historyElement : FypFileHistory;
  constructor() { }

  ngOnInit() {
  }

}
