import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/services/music.service';
import { Music } from '../../shared/class/music';
import { UserService } from '../../auth/shared/services/user.service';

@Component({
  selector: 'mmy-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allMusic: Music[];

  firstFiveMusic: Music[] = [];

  isPlaylist = false;

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {

    this.musicService.getAllMusic().subscribe(data => {
      this.allMusic = data;
      this.allMusic.sort((a, b) => {
        const miliA = new Date(a.addedAt).getTime();
        const miliB = new Date(b.addedAt).getTime();
        return miliA - miliB;
      });
      console.log(this.allMusic);
      for (let i = this.allMusic.length - 1; i > this.allMusic.length - 6; i--) {
        if (this.allMusic[i] !== undefined) {
          this.firstFiveMusic.push(this.allMusic[i]);
        }
      }
    });
  }
}
