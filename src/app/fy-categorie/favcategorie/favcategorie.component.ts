import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favcategorie',
  templateUrl: './favcategorie.component.html',
  styleUrls: ['./favcategorie.component.css']
})
export class FavcategorieComponent implements OnInit {
  @Input() tab;

  constructor() { }

  ngOnInit() {
    console.log(this.tab);
  }

}
