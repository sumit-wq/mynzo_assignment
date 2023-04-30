import { INewsFetch } from "../interfaces";
import { BASE_URL, API_KEY } from "../utils/constants";
///everything?q=bbc-news&apiKey=${API_KEY}

export function fetchNews({
  newsType,
  q,
  page = 1,
  pageSize = 10,
}: INewsFetch): string {
  if (q) {
    return `${BASE_URL}${newsType}?q=${q}&sources=bbc-news&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
  } else {
    return `${BASE_URL}${newsType}?sources=bbc-news&apiKey=${API_KEY}`;
  }
}
