import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateResumeComponent } from './templateResume.component';
import { TemplateResumeRoutes} from '../templateResume/templateResume.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    TemplateResumeRoutes,
    FormsModule
  ],
  declarations: [TemplateResumeComponent]
})
export class TemplateResumeModule { }