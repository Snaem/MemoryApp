import { Component, OnInit, Input } from '@angular/core';
import { Music } from 'src/app/pages/shared/class/music';

@Component({
  selector: 'mmy-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() musicToDisplay: Music[];

  constructor() { }

  ngOnInit(): void {
  }

}
