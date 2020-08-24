import { Music } from './music';

export class AuthUser {
  constructor(
    public id: number,
    public username: string,
    public musics: Music[]) { }
}
