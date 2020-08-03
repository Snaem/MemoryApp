import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Playlist } from 'src/app/pages/shared/class/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  path = '/playlists';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  getAllPlaylists() {
    return this.http.get<Playlist[]>(this.URL + this.path);
  }

  savePlaylist(playlist: Playlist) {
    return this.http.post<Playlist>(this.URL + this.path, playlist);
  }
}
