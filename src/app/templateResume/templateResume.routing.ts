import { Routes, RouterModule } from '@angular/router';
import { TemplateResumeComponent} from '../templateResume/templateResume.component';
import {FormdataComponent } from '../formdata/formdata.component';
const routes: Routes = [
  {path:'formdata',component:FormdataComponent}
];

export const TemplateResumeRoutes = RouterModule.forChild(routes);
