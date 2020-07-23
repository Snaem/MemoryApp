import { Component, OnInit } from '@angular/core';
import { Music } from '../../shared/class/music';
import { MusicService } from '../shared/services/music.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Playlist } from '../../shared/class/playlist';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mmy-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  allMusic: Music[];

  playlistToSave: Music[];

  isPlaylist = true;

  newPlaylist: Playlist;

  playlistForm = this.fb.group({
    playlistTitle: ['', [
      Validators.required
    ]]
  });

  constructor(private musicService: MusicService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.musicService.getAllMusic().subscribe(data => {
      this.allMusic = data;
      this.allMusic.sort((a, b) => {
        const miliA = new Date(a.addedAt).getTime();
        const miliB = new Date(b.addedAt).getTime();
        return miliA - miliB;
      });
    });
  }

  savePlaylist(musics: Music[]) {
    this.playlistToSave = musics;
  }

  onSubmit() {
    this.newPlaylist = new Playlist(this.playlistForm.value.playlistTitle, this.playlistToSave);
  }
}
