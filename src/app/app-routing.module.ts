import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'Register',
    loadChildren: () => import('./View/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./View/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./View/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./View/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'Admin',
    loadChildren: () => import('./View/barternder/home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'User',
    loadChildren: () => import('./View/User/home/home.module').then( m => m.HomePageModule)


  },
  {
    path: 'historial',
    loadChildren: () => import('./View/User/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./View/User/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'confirmar-pedido',
    loadChildren: () => import('./View/User/confirmar-pedido/confirmar-pedido.module').then( m => m.ConfirmarPedidoPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./View/barternder/nuevo/nuevo.module').then( m => m.NuevoPageModule)


  },
  {
    path: 'perfil',
    loadChildren: () => import('./View/barternder/perfil/perfil.module').then( m => m.PerfilPageModule)


  },
  {
    path: 'historial-top',
    loadChildren: () => import('./View/barternder/historial/historial.module').then( m => m.HistorialPageModule)


  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
