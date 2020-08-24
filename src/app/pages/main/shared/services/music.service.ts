import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Music } from 'src/app/pages/shared/class/music';
import { UserService } from 'src/app/pages/auth/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  path = '/musics';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  getAllMusic() {
    return this.http.get<Music[]>(this.URL + this.path);
  }

  saveMusic(music: Music, userId: string) {
    return this.http.post<Music>(this.URL + this.path, music);
  }

  updateMusic(music: Music, youtubeVideoId: string) {
    return this.http.put<Music>(this.URL + this.path, music, { params: { youtubeVideoId } });
  }

  deleteMusic(youtubeVideoId: string) {
    return this.http.delete(this.URL + this.path, { params: { youtubeVideoId } });
  }
}
