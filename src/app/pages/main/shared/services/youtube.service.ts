import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pathToFileURL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  path = '/youtubeData';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  getYoutubeData(youtubeVideoId: string) {
    return this.http.get(this.URL + this.path, { params: { youtubeVideoId } });
  }

}
