import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { AddMusicFormComponent } from './add-music/add-music-form/add-music-form.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { DetailsPlaylistComponent } from './playlist/details-playlist/details-playlist.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { MusicListComponent } from './shared/component/music-list/music-list.component';
import { MusicCardComponent } from './shared/component/music-list/music-card/music-card.component';
import { MusicothequeComponent } from './musicotheque/musicotheque.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AddMusicComponent,
    AddMusicFormComponent,
    PlaylistComponent,
    CreatePlaylistComponent,
    DetailsPlaylistComponent,
    NavbarComponent,
    MusicListComponent,
    MusicCardComponent,
    MusicothequeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class MainModule { }
