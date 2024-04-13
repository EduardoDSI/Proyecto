import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { DashboardPersonaComponent } from './pages/dashboard/dashboard-persona/dashboard-persona.component'
import { DashboardUsuarioComponent } from './pages/dashboard/dashboard-usuario/dashboard-usuario.component'
import { DashboardCargoComponent } from './pages/dashboard/dashboard-cargo/dashboard-cargo.component'
import { DashboardSucursalComponent } from './pages/dashboard/dashboard-sucursal/dashboard-sucursal.component'
import { DashboardRolComponent } from './pages/dashboard/dashboard-rol/dashboard-rol.component'
import { DashboardEstadoComponent } from './pages/dashboard/dashboard-estado/dashboard-estado.component'
import { DashboardMetodoPagoComponent } from './pages/dashboard/dashboard-metodopago/dashboard-metodopago.component'
import { DashboardTipoTelaComponent } from './pages/dashboard/dashboard-tipotela/dashboard-tipotela.component'
import { DashboardClientesComponent } from './pages/dashboard/dashboard-clientes/dashboard-clientes.component'
import { DashboardProductoComponent,  } from './pages/dashboard/dashboard-producto/dashboard-producto.component'
import { DashboardTipoComprobanteComponent } from './pages/dashboard/dashboard-tipocomprobante/dashboard-tipocomprobante.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'dashboard', redirectTo: '/dashboard/persona', pathMatch: 'full'},

  { path:'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'persona',
        component: DashboardPersonaComponent
      },
      {
        path: 'usuario',
        component: DashboardUsuarioComponent
      },
      {
        path: 'cargo',
        component: DashboardCargoComponent
      },     
      {
        path: 'sucursal',
        component: DashboardSucursalComponent
      },
      {
        path: 'rol',
        component: DashboardRolComponent
      },
      {
        path: 'estado',
        component: DashboardEstadoComponent
      },
      {
        path: 'metodopago',
        component: DashboardMetodoPagoComponent
      },
      {
        path: 'tipotela',
        component: DashboardTipoTelaComponent
      },
      {
        path: 'cliente',
        component: DashboardClientesComponent
      },
      {
        path: 'producto',
        component: DashboardProductoComponent
      },
      {
        path: 'tipocomprobante',
        component: DashboardTipoComprobanteComponent
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
