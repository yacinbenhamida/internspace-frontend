import { FypTemplateElement } from './fyp-template-element';

export interface FypTemplate {
  templateName: string;
  isFyp: boolean;
  editor: number;
  templateElements: FypTemplateElement[];
}
