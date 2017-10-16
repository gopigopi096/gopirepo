import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormdataModule} from '../app/formdata/formdata.module';
import { TemplateResumeModule} from '../app/templateResume/templateResume.module';
import { AppComponent } from './app.component';
import {AppRoutes} from '../app/app.routing';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormdataModule,
    AppRoutes,FormsModule,TemplateResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
