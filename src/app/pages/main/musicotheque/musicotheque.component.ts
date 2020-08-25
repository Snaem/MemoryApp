import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/services/music.service';
import { Music } from '../../shared/class/music';

@Component({
  selector: 'mmy-musicotheque',
  templateUrl: './musicotheque.component.html',
  styleUrls: ['./musicotheque.component.scss']
})
export class MusicothequeComponent implements OnInit {

  allMusic: Music[];

  constructor(private musicService: MusicService) { }

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

}
