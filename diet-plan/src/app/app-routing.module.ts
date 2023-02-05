import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeResolver } from './home/home.resolver';
import { AuthGuard } from './guards/auth-guard.guard';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    resolve: { home: HomeResolver },
  //  canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
