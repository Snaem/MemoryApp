import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Music } from 'src/app/pages/shared/class/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  path = '/musics';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  getAllVideo() {
    return this.http.get<Music[]>(this.URL + this.path);
  }

  saveMusic(music: Music) {
    return this.http.post<Music>(this.URL + this.path, music, { observe: 'response' });
  }

  updateMusic(music: Music, youtubeVideoId: string) {
    return this.http.put<Music>(this.URL + this.path, music, { params: { youtubeVideoId } });
  }

  deleteMusic(youtubeVideoId: string) {
    return this.http.delete(this.URL + this.path, { params: { youtubeVideoId } });
  }
}
