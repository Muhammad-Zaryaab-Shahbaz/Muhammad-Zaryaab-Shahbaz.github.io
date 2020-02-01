import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'library'
      },
      {
        path: 'library',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class AppRoutingModule {
}
