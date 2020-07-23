import { Component, OnInit, Input } from '@angular/core';
import { Music } from 'src/app/pages/shared/class/music';

@Component({
  selector: 'mmy-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  @Input() musicToDisplay: Music[];


  constructor() { }

  ngOnInit(): void {
  }

}
