import { FypTemplateService } from './../../services/fyp-template/fyp-template.service';
import { FypTemplateElement } from './../../models/fyp-template-element';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-fyp-template-element',
  templateUrl: './fyp-template-element.component.html',
  styleUrls: ['./fyp-template-element.component.css']
})
export class FypTemplateElementComponent implements OnInit {

  @Input() element: FypTemplateElement;
  coords2D: any;
  ref: ElementRef;
  fypTemplateService: FypTemplateService;

  constructor(ref: ElementRef, fypTemplateService: FypTemplateService) {
    this.ref = ref;
    this.fypTemplateService = fypTemplateService;
  }

  onRelease_UpdateCoords(ref: ElementRef) {
    const transform = this.ref.nativeElement;
    let newCoords;
    (function ($) {
      newCoords = $('#a').position();
      console.log(newCoords);
    })(jQuery);

    this.element.x_coord = newCoords.left;
    this.element.y_coord = newCoords.top;

    console.log('Updating called!');
    this.fypTemplateService.UpdateTemplateElement(this.element).subscribe(res => { });
  }

  ngOnInit() {
    this.coords2D = { x: this.element.x_coord, y: this.element.y_coord };
  }

}
