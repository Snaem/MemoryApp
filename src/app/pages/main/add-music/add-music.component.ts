import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../shared/services/youtube.service';
import { YoutubeData } from '../../shared/class/youtubeData';
import { Music } from '../../shared/class/music';
import { MusicService } from '../shared/services/music.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mmy-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {

  constructor(private youtubeService: YoutubeService, private musicService: MusicService, private matSnack: MatSnackBar) { }

  videoData: YoutubeData;

  musicToSave: Music;

  ngOnInit(): void {
  }

  saveVideoData(youtubeVideoId: string) {
    this.youtubeService.getYoutubeData(youtubeVideoId).subscribe((data: YoutubeData) => {
      this.videoData = data;
      this.musicToSave = null;
      for (const item of this.videoData.items) {
        if (item.snippet.thumbnails.maxres !== null) {
          this.musicToSave = new Music(item.snippet.title, item.snippet.thumbnails.maxres.url, youtubeVideoId, new Date());
        } else if (item.snippet.thumbnails.standard !== null) {
          this.musicToSave = new Music(item.snippet.title, item.snippet.thumbnails.standard.url, youtubeVideoId, new Date());
        } else {
          this.musicToSave = new Music(item.snippet.title, item.snippet.thumbnails.high.url, youtubeVideoId, new Date());
        }
      }
      this.musicService.saveMusic(this.musicToSave).subscribe(res => {
        this.matSnack.open('C\'est bon, ta vidéo a bien été enregistrée !', null, {
          duration: 5000,
        });
      }, (error) => {
        this.matSnack.open('⚠ Une erreur s\'est produite, la vidéo n\'a pas pu être enregistrée', null, {
          duration: 5000,
        });
      });
    });
  }
}
