import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/services/music.service';
import { Music } from '../../shared/class/music';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mmy-musicotheque',
  templateUrl: './musicotheque.component.html',
  styleUrls: ['./musicotheque.component.scss']
})
export class MusicothequeComponent implements OnInit {

  allMusic: Music[];

  constructor(private musicService: MusicService, private matSnack: MatSnackBar) { }

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

  deleteMusic(music: Music) {
    this.musicService.deleteMusic(music.youtubeVideoId).subscribe(() => {
      this.matSnack.open('La musique a bien été supprimée, la page va se recharger !', null, {
        duration: 3000,
      });
      setTimeout(() => { window.location.reload(); }, 3000);

    }, () => {
      this.matSnack.open('⚠ Une erreur s\'est produite, la vidéo n\'a pas pu être supprimée', null, {
        duration: 5000,
      });
    });
  }

}
