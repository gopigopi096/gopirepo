import { Routes, RouterModule } from '@angular/router';
import { FormdataComponent} from '../../app/formdata/formdata.component';
import { ResumeComponent} from '../../app/formdata/resume/resume.component';
import { TemplateResumeComponent} from '../../app/templateResume/templateResume.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  {
    path: 'one', component: TemplateResumeComponent
  },
  {
    path:'resumedata',component:ResumeComponent
  }
];

export const FormdataRoutes = RouterModule.forChild(routes);
