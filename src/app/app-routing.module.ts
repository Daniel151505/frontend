import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { UsersComponent } from './views/admin/users/users.component';
import { UserComponent } from './layouts/user/user.component';

const routes: Routes = [

  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path:'admin',
    component: AdminComponent,
    // Rutas hijos
    children: [
      // Redireccionamiento automatico
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      // Importa el home.module y lee todo lo que esta
      {
        path: 'admins',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path:'user',
    component:UserComponent,
    // Rutas hijos
    children: [
      // Redireccionamiento automatico
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      // Importa el home.module y lee todo lo que esta
      {
        path: 'users',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
