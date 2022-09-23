import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: AppComponent,
    children: [
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      }
    ]
  },
  {
    path: 'charts',
    component: ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
