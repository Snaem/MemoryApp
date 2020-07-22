import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { AddMusicFormComponent } from './add-music/add-music-form/add-music-form.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { CreatePlaylistFormComponent } from './create-playlist/create-playlist-form/create-playlist-form.component';
import { VideoListComponent } from './shared/component/video-list/video-list.component';
import { VideoCardComponent } from './shared/component/video-list/video-card/video-card.component';
import { PlaylistListComponent } from './shared/component/playlist-list/playlist-list.component';
import { PlaylistCardComponent } from './shared/component/playlist-list/playlist-card/playlist-card.component';



@NgModule({
  declarations: [DashboardComponent, AddMusicComponent, AddMusicFormComponent, CreatePlaylistComponent, CreatePlaylistFormComponent, VideoListComponent, VideoCardComponent, PlaylistListComponent, PlaylistCardComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
