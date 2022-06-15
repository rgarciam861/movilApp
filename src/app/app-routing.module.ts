import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefonoComponent } from './components/telefono/telefono.component';
import { TelefonodetailComponent } from './components/telefonodetail/telefonodetail.component';

const routes: Routes = [
  {path:'',component:TelefonoComponent},
  {path:'telefono/:id',component:TelefonodetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
