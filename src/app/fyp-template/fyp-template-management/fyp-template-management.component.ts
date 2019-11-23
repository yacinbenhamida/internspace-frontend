import { Component, OnInit } from '@angular/core';
import { FypTemplateService } from './../../services/fyp-template/fyp-template.service';
import { FypTemplate } from './../../models/fyp-template';
import { FypTemplateElement } from './../../models/fyp-template-element';

@Component({
  selector: 'app-fyp-template-management',
  templateUrl: './fyp-template-management.component.html',
  styleUrls: ['./fyp-template-management.component.css']
})
export class FypTemplateManagementComponent implements OnInit {

  fakeEditorId = 35;
  allFypTemplates: FypTemplate[];
  fypTemplateService: FypTemplateService;
  currFypTemplate: FypTemplate;

  constructor(fypTemplateService: FypTemplateService) {
    this.fypTemplateService = fypTemplateService;
  }

  ngOnInit() {
    this.fypTemplateService.GetFypTemplatesForEditor(this.fakeEditorId).subscribe(fypts => {
      this.allFypTemplates = fypts as FypTemplate[];
      console.log(this.allFypTemplates);

      if (this.allFypTemplates === null || this.allFypTemplates.length === 0) {

        this.currFypTemplate = this.generateFypTemplate();

      } else {
        this.currFypTemplate = this.allFypTemplates[0];
      }

      console.log(this.currFypTemplate);

    });
  }

  generateFypTemplate() {
    const templateElements = [
      {
        'id': 0,
        'sectionName': 'title',
        'fileTemplateElementType': 'title',
        'x_coord': 0.0,
        'y_coord': 0.0,
        'height': 0.0,
        'weight': 0.0
      },
      {
        'id': 0,
        'sectionName': 'description',
        'fileTemplateElementType': 'description',
        'x_coord': 0.0,
        'y_coord': 0.0,
        'height': 0.0,
        'weight': 0.0
      },
    ];

    return { templateName: 'Untitled', isFyp: true, editor: this.fakeEditorId, templateElements };
  }

  onChange_FypTemplateIndex(index: number) {
    this.currFypTemplate = this.allFypTemplates[index];
    console.log(this.currFypTemplate);
  }

}
