import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { MusicothequeComponent } from './musicotheque/musicotheque.component';

const routes: Routes = [
  { path: 'acceuil', component: DashboardComponent },
  { path: 'ajout-musique', component: AddMusicComponent },
  { path: 'ma-musicothèque', component: MusicothequeComponent },
  { path: 'creation-playlist', component: CreatePlaylistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
