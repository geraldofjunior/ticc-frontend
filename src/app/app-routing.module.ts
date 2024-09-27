import { BoardComponent } from './ui/board/board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './ui/table/table.component';

const routes: Routes = [
  { path: ''     , component: BoardComponent },
  { path: 'table', component: TableComponent },
  { path: 'board', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
