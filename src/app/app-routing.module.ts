import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { CreacionComponent } from './components/creacion/creacion.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'about',component:AboutComponent},
  {path:'consulta',component:ConsultaComponent},
  {path:'creacion',component:CreacionComponent},
  {path:'edicion/:id',component:EdicionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
