export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ISource {
  id: string;
  name: string;
}

export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Get {
  articles: IArticle[];
  status: string;
  totalResults: number;
}

export type IBookmark = Pick<IArticle, "title" | "url" | "urlToImage">;

type NEWS_TYPE = "";

export interface INewsFetch {
  newsType: string;
  q: string;
  page?: number | string;
  pageSize?: number | string;
}

export interface IFetchNewsQuery {
  articles: IArticle[];
  status: string;
  totalResults: number;
}
