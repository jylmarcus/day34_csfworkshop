import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityrequestComponent } from './cityrequest/cityrequest.component';

const routes: Routes = [
  {path: '', redirectTo: 'weather/home', pathMatch: 'full' },
  {path: 'weather/home', component: CityrequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
