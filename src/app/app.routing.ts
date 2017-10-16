import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'formdata',
  //   loadChildren: 'app/formdata/formdata.module#FormdataModule',
  //   data: { preload: true }
  // },
  {
    path: 'templateResume',
    loadChildren: 'app/templateResume/templateResume.module#TemplateResumeModule',
    data: { preload: true }
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
