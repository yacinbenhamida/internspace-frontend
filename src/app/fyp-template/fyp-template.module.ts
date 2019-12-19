import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FypTemplateManagementComponent } from './fyp-template-management/fyp-template-management.component';
import { CdkDragRelease } from '@angular/cdk/drag-drop';

/**
 * CDK
 */
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FypTemplateElementComponent } from './fyp-template-element/fyp-template-element.component';

/**
 * Search
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Importing REST Services Providers
 */
import { FypTemplateService } from './../services/fyp-template/fyp-template.service';

@NgModule({
  declarations: [FypTemplateManagementComponent, FypTemplateElementComponent],
  imports: [
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],

  providers: [FypTemplateService]
})
export class FypTemplateModule { }
