import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'}, 
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuardGuard]  },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },  
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: `reload`})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
