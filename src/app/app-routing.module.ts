import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClasseComponent } from './components/add-classe/add-classe.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ClasseComponent } from './components/classe/classe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IsLoggedGuard } from './guards/is-logged.guard';

const routes: Routes = [
  { path: 'user-register', component: RegisterComponent },
  { path: 'user-login', component: LoginComponent },
  { path: 'classe-list', component: ClasseComponent, canActivate: [IsLoggedGuard]},
  { path: 'add-classe', component: AddClasseComponent, canActivate: [IsLoggedGuard]},
  { path: 'add-student', component: AddStudentComponent, canActivate: [IsLoggedGuard]},
  { path: '**', redirectTo: 'classe-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
