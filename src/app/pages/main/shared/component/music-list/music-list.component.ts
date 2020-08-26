import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Music } from 'src/app/pages/shared/class/music';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mmy-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  constructor() { }

  @Input() musicToDisplay: Music[];

  @Input() isPlaylist = false;

  @Input() isMusicotheque = false;

  open = true;

  musicsResume: Music[];

  @Output() musicPlaylistToSave: EventEmitter<Music[]> = new EventEmitter();

  @Output() deleteMusic: EventEmitter<Music> = new EventEmitter();


  ngOnInit(): void {
  }

  openCloseResume() {
    this.open = !this.open;
  }

  playlistToSave(musics: Music[]) {
    this.musicsResume = musics;
    this.musicPlaylistToSave.emit(this.musicsResume);
  }

  deleteMusicPlaylist(i: number) {
    this.musicsResume.splice(i, 1);
  }

  musicToDelete(music: Music) {
    this.deleteMusic.emit(music);
  }
}
