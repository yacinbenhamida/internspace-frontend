import { FypFile } from './../../models/fyp/fyp-file';
import { FypTemplateService } from './../../services/fyp-template/fyp-template.service';
import { FypTemplateElement } from '../../models/fyp/fyp-template-element';
import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-fyp-template-element',
  templateUrl: './fyp-template-element.component.html',
  styleUrls: ['./fyp-template-element.component.css']
})
export class FypTemplateElementComponent implements OnInit {

  @Input() element: FypTemplateElement;
  @Input() previewFypFile: FypFile;
  @Input() orderz: number;

  coords2D: any;
  fypTemplateService: FypTemplateService;

  constructor(fypTemplateService: FypTemplateService) {
    this.fypTemplateService = fypTemplateService;
  }

  ngOnInit() {
    this.coords2D = { x: this.element.x_coord, y: this.element.y_coord };
  }

  onDragEnded(event: CdkDragEnd): void {
    const pos = event.source.getFreeDragPosition();

    this.element.x_coord = pos.x;
    this.element.y_coord = pos.y;

    console.log('Updating called!');
    this.fypTemplateService.UpdateTemplateElement(this.element).subscribe(res => { });
  }


}
