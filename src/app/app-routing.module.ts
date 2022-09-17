import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path: '',redirectTo: '/registration-form',pathMatch: 'full'},
{path: 'registration-form', component: RegistrationFormComponent },
{path: 'users', component: UsersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
