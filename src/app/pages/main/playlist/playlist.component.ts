import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../shared/class/music';

@Component({
  selector: 'mmy-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
