import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/services/music.service';
import { Music } from '../../shared/class/music';

@Component({
  selector: 'mmy-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allMusic: Music[];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getAllMusic().subscribe(data => {
      this.allMusic = data;
    });
  }

}
