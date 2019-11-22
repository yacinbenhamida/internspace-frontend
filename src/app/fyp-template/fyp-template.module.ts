import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FypTemplateManagementComponent } from './fyp-template-management/fyp-template-management.component';

/**
 * CDK
 */
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FypTemplateManagementComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class FypTemplateModule { }
