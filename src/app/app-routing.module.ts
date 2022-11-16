import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from '@core/guards/logged.guard';
import { UnloggedGuard } from '@core/guards/unlogged.guard';
import { BaseAuthComponent } from '@presentation/layout/base-auth/base-auth.component';
import { BaseLoggedComponent } from '@presentation/layout/base-logged/base-logged.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLoggedComponent,
    canActivate: [LoggedGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./presentation/features/home/home.component')
            .then(c => c.HomeComponent),
      },
    ]
  },
  {
    path: 'auth',
    component: BaseAuthComponent,
    canActivate: [UnloggedGuard],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./presentation/features/auth/login/login.component')
            .then(c => c.LoginComponent),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./presentation/features/auth/signup/signup.component')
            .then(c => c.SignupComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
