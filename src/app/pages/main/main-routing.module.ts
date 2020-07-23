import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-music', component: AddMusicComponent },
  { path: 'create-playlist', component: CreatePlaylistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
