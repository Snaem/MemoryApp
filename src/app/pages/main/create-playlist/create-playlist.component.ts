import { Component, OnInit } from '@angular/core';
import { Music } from '../../shared/class/music';
import { MusicService } from '../shared/services/music.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Playlist } from '../../shared/class/playlist';
import { PlaylistService } from '../shared/services/playlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private musicService: MusicService,
    private fb: FormBuilder,
    private playlistService: PlaylistService,
    private matSnack: MatSnackBar
  ) { }

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
    if (this.playlistForm.value.playlistTitle === '') {
      this.matSnack.open('Tu n\'as pas mis de titre à ta playlist, attention !', null, {
        duration: 5000,
      });
    } else if (!this.playlistToSave) {
      this.matSnack.open('Tu n\'as pas sélectionné de vidéo !', null, {
        duration: 5000,
      });
    } else {
      this.newPlaylist = new Playlist(this.playlistForm.value.playlistTitle, this.playlistToSave);
      this.playlistService.savePlaylist(this.newPlaylist).subscribe();
    }
  }
}
