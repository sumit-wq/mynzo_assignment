import React from "react";
import NewsCard from "../../components/card";
import NoDataAvailable from "../../components/noDataAvailable";
import { IArticle } from "../../interfaces";
import "./NewsCardList.css";

interface NewsCardListProps {
  news: IArticle[];
}

const NewsCardList: React.FC<NewsCardListProps> = ({ news }) => {
  return (
    <>
      {news && news.length ? (
        <div className="news-card-list">
          {news?.map((item: IArticle) => (
            <NewsCard
              key={item.url}
              title={item?.title ?? ""}
              image={item.urlToImage}
              date={item.publishedAt}
              description={item.description}
              source={item?.source?.name}
              url={item.url}
            />
          ))}
        </div>
      ) : (
        <NoDataAvailable />
      )}
    </>
  );
};

export default NewsCardList;
