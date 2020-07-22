import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { AddMusicFormComponent } from './add-music/add-music-form/add-music-form.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { DetailsPlaylistComponent } from './playlist/details-playlist/details-playlist.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VideoListComponent } from './shared/video-list/video-list.component';
import { VideoCardComponent } from './shared/video-list/video-card/video-card.component';


@NgModule({
  declarations: [MainComponent, DashboardComponent, AddMusicComponent, AddMusicFormComponent, PlaylistComponent, CreatePlaylistComponent, DetailsPlaylistComponent, NavbarComponent, VideoListComponent, VideoCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
