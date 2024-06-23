export interface WikiFeturedContent {
  tfa: Tfa;
  mostread: Mostread;
  image: WikipediaFeturedContentImage;
  news: News[];
  onthisday: Onthisday[];
}

export interface WikipediaFeturedContentImage {
  title: string;
  thumbnail: ThumbnailClass;
  image: ThumbnailClass;
  file_page: string;
  artist: Artist;
  credit: Credit;
  license: License;
  description: Description;
  wb_entity_id: string;
  structured: Structured;
}

export interface Artist {
  html: string;
  text: string;
  name: string;
  user_page: string;
}

export interface Credit {
  html: string;
  text: string;
}

export interface Description {
  html: string;
  text: string;
  lang: string;
}

export interface ThumbnailClass {
  source: string;
  width: number;
  height: number;
}

export interface License {
  type: string;
  code: string;
  url: string;
}

export interface Structured {
  captions: Captions;
}

export interface Captions {}

export interface Mostread {
  date: string;
  articles: Tfa[];
}

export interface Tfa {
  views?: number;
  rank?: number;
  view_history?: ViewHistory[];
  type?: string;
  title?: string;
  displaytitle?: string;
  namespace?: Namespace;
  wikibase_item?: string;
  titles?: Titles;
  pageid?: number;
  thumbnail?: ThumbnailClass;
  originalimage?: ThumbnailClass;
  lang?: string;
  dir?: string;
  revision?: string;
  tid?: string;
  timestamp?: Date;
  description?: string;
  description_source?: string;
  content_urls?: ContentUrls;
  extract?: string;
  extract_html?: string;
  normalizedtitle?: string;
  documentation_note?: string;
  coordinates?: Coordinates;
}

export interface ContentUrls {
  desktop: Desktop;
  mobile: Desktop;
}

export interface Desktop {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Namespace {
  id: number;
  text: string;
}

export interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

export interface ViewHistory {
  date: string;
  views: number;
}

export interface News {
  links?: Tfa[];
  story?: string;
  documentation_note?: string;
}

export interface Onthisday {
  text?: string;
  pages?: Tfa[];
  year?: number;
  documentation_note?: string;
}
