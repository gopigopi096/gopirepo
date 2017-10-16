import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdataComponent } from './formdata.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FormdataRoutes} from '../../app/formdata/formdata.routing';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,HttpModule,FormdataRoutes
  ],
  declarations: [FormdataComponent,
    ResumeComponent
]
})
export class FormdataModule { }