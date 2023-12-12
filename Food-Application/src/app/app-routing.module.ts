import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
  {path:'', component:PagesComponent},
  {path:'search/:searchTerm', component:PagesComponent},
  {path:'tag/:tag', component:PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
