import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', redirectTo: '/first', pathMatch: 'full'},
  {path: 'first', component: HomeComponent, },
  {path: 'second', component: DetailsComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
