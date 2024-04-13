import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuBarComponent } from './components/layout/menu-bar/menu-bar.component'
import { SidebarComponent } from './components/layout/sidebar/sidebar.component'
import { FooterComponent } from './components/layout/footer/footer.component'

import { HomeComponent } from './pages/home/home.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'

import { DashboardPersonaComponent } from './pages/dashboard/dashboard-persona/dashboard-persona.component'

import { DashboardReducer } from './store';
import { DashboardUsuarioComponent } from './pages/dashboard/dashboard-usuario/dashboard-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardCargoComponent } from './pages/dashboard/dashboard-cargo/dashboard-cargo.component';
import { DashboardClientesComponent } from './pages/dashboard/dashboard-clientes/dashboard-clientes.component';
import { DashboardSucursalComponent } from './pages/dashboard/dashboard-sucursal/dashboard-sucursal.component';
import { DashboardRolComponent } from './pages/dashboard/dashboard-rol/dashboard-rol.component';
import { DashboardEstadoComponent } from './pages/dashboard/dashboard-estado/dashboard-estado.component';
import { DashboardMetodoPagoComponent } from './pages/dashboard/dashboard-metodopago/dashboard-metodopago.component';
import { DashboardTipoTelaComponent } from './pages/dashboard/dashboard-tipotela/dashboard-tipotela.component';
import { DashboardProductoComponent } from './pages/dashboard/dashboard-producto/dashboard-producto.component';
import { DashboardTipoComprobanteComponent } from './pages/dashboard/dashboard-tipocomprobante/dashboard-tipocomprobante.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SidebarComponent,
    FooterComponent,
    
    HomeComponent,
    SignInComponent,
    DashboardPersonaComponent,
    DashboardUsuarioComponent,
    DashboardComponent,
    DashboardCargoComponent,
    DashboardClientesComponent,
    DashboardSucursalComponent,
    DashboardRolComponent,
    DashboardEstadoComponent,
    DashboardMetodoPagoComponent,
    DashboardTipoTelaComponent,
    DashboardProductoComponent,
    DashboardTipoComprobanteComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ dashboardState: DashboardReducer}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
