
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpendateComponent } from './opendate/opendate.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path:'message', component: MessageboardComponent},
  {path:'opendata', component: OpendateComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'todoList', component: TodoListComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
