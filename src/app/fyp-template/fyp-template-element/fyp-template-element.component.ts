import { FypTemplateService } from './../../services/fyp-template/fyp-template.service';
import { FypTemplateElement } from './../../models/fyp-template-element';
import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { CdkDragRelease, CdkDragEnd } from '@angular/cdk/drag-drop';

declare var jQuery: any;

@Component({
  selector: 'app-fyp-template-element',
  templateUrl: './fyp-template-element.component.html',
  styleUrls: ['./fyp-template-element.component.css']
})
export class FypTemplateElementComponent implements OnInit {

  @Input() element: FypTemplateElement;

  coords2D: any;
  fypTemplateService: FypTemplateService;

  constructor(fypTemplateService: FypTemplateService) {
    this.fypTemplateService = fypTemplateService;
  }

  onDragEnded(event: CdkDragEnd): void {
    const pos = event.source.getFreeDragPosition();

    this.element.x_coord = pos.x;
    this.element.y_coord = pos.y;

    console.log('Updating called!');
    this.fypTemplateService.UpdateTemplateElement(this.element).subscribe(res => { });
  }

  ngOnInit() {
    this.coords2D = { x: this.element.x_coord, y: this.element.y_coord };
  }

}
