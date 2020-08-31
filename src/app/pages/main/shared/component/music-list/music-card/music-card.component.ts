import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Music } from 'src/app/pages/shared/class/music';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mmy-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() musicToDisplay: Music[];

  @Input() isPlaylist = false;

  @Input() isDashboard = false;

  @Input() isMusicotheque = false;

  createdPlaylist: Music[] = [];

  @Output() playlistToSave: EventEmitter<Music[]> = new EventEmitter();

  @Output() musicToDelete: EventEmitter<Music> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addMusic(music: Music) {
    this.createdPlaylist.push(music);
    this.playlistToSave.emit(this.createdPlaylist);
  }

  deleteMusic(music: Music) {
    this.musicToDelete.emit(music);
  }
}
