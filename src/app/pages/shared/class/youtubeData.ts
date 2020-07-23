export class YoutubeData {

  constructor(public kind: string, public etag: string, public id: string, public items: Item[], public pageInfo: PageInfo) { }
}

export class Item {

  constructor(public kind: string, public etag: string, public id: string, public snippet: Snippet) { }

}


export class Snippet {

  constructor(
    public publishedAt: Date,
    public channelId: string,
    public title: string,
    public description: string,
    public thumbnails: Thumbnails,
    public channelTitle: string,
    public tags: string[],
    public categoryId: string,
    public liveBroadcastContent: string,
    public localized: Localized
  ) { }
}

export class Localized {

  constructor(public title: string, public description: string) { }

}
export class Thumbnails {

  constructor(public defaut: Default, public medium: Medium, public high: High, public standard: Standard) { }

}

export class Default {

  constructor(public url: string, public width: number, public height: number) { }

}

export class Medium {
  constructor(public url: string, public width: number, public height: number) { }

}

export class High {
  constructor(public url: string, public width: number, public height: number) { }

}

export class Standard {
  constructor(public url: string, public width: number, public weight: number) { }
}


export class PageInfo {
  constructor(public totalResults: number, public resultsPerPage: number) { }

}

