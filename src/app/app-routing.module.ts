import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamentos', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamentoComponent },
  { path: 'listarPensamentos', component: ListarPensamentoComponent },
  { path: 'editarPensamento/:id', component: PensamentoComponent },
  { path: 'pensamentos/excluirPensamentos/:id', component: ExcluirPensamentoComponent },
  { path: 'pensamentos/editarPensamentos/:id', component: EditarPensamentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
