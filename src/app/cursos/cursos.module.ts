import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './../curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './../curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule ({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  providers: [CursosService],
})

export class CursosModule { }
