import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { NopeComponent } from './components/nope/nope.component';



const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: ListPlayersComponent},
  {path: 'add', component: AddPlayerComponent},
  {path: 'edit/:id', component: EditPlayerComponent},
  {path: '**', component: NopeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
