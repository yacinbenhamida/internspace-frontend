import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FypTemplateManagementComponent } from './fyp-template-management/fyp-template-management.component';

/**
 * CDK
 */
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FypTemplateElementComponent } from './fyp-template-element/fyp-template-element.component';

@NgModule({
  declarations: [FypTemplateManagementComponent, FypTemplateElementComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class FypTemplateModule { }
