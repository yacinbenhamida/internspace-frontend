import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/security/authentication.service';
import { FypFile } from './../../models/fyp/fyp-file';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FypTemplateService } from './../../services/fyp-template/fyp-template.service';
import { FypTemplate } from '../../models/fyp/fyp-template';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

declare var jQuery: any;

@Component({
  selector: 'app-fyp-template-management',
  templateUrl: './fyp-template-management.component.html',
  styleUrls: ['./fyp-template-management.component.css']
})
export class FypTemplateManagementComponent implements OnInit, AfterViewInit {

  fakeEditorId = 35;
  allFypTemplates: FypTemplate[];
  fypTemplateService: FypTemplateService;
  currFypTemplate: FypTemplate;
  // Previewing
  previewFypFile: FypFile;
  likeFypFileSearch: FypFile[];
  bExporting = false;

  // Creation
  // newTemplateName: string;
  // Form section
  templateForm: FormGroup = new FormGroup({
    templateName: new FormControl('', [Validators.required])
  });

  constructor(fypTemplateService: FypTemplateService, public auth: AuthenticationService, private _formBuilder: FormBuilder) {
    this.fypTemplateService = fypTemplateService;
    this.fakeEditorId = this.auth.currentUserValue.id;
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

    this.selectPreviewFypFile('');

  }

  onClick_ClearPreviewFypFile() {
    this.previewFypFile = null;
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

  selectPreviewFypFile(name: string) {
    this.fypTemplateService.GetSimilarFypFileByName(name).subscribe(files => {
      this.likeFypFileSearch = files as FypFile[];
      console.log(name);
    });
  }

  onChange_FypTemplateIndex(index: number) {
    this.currFypTemplate = this.allFypTemplates[index];
    console.log(this.currFypTemplate);
  }

  onChange_FypFileIndex(index: number) {
    this.previewFypFile = this.likeFypFileSearch[index];
    // this.previewFypFile.features = null;
    console.log(this.previewFypFile);
  }

  exportTemplate() {
    const data = document.getElementById('template-editor-window');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      this.bExporting = true;

      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      // Preprocess template...
      console.log(contentDataURL);

      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(this.currFypTemplate.templateName + '.pdf');

      this.bExporting = false;
    });
  }

  onClick_AddNewTemplate() {
    console.log('name');
    const name = this.templateForm.value.templateName;
    this.fypTemplateService.CreateFypTemplate(name, this.auth.currentUserValue.id).subscribe(e => {
      console.log(e);

      this.fypTemplateService.GetFypTemplatesForEditor(this.fakeEditorId).subscribe(fypts => {
        this.allFypTemplates = fypts as FypTemplate[];
        console.log(this.allFypTemplates);

        if (this.allFypTemplates === null || this.allFypTemplates.length === 0) {

          this.currFypTemplate = this.generateFypTemplate();

        } else {
          this.currFypTemplate = this.allFypTemplates[this.allFypTemplates.length - 1];
        }

        console.log(this.currFypTemplate);

      });

    });
  }

  ngAfterViewInit() {
  }

}
