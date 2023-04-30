import React, { useState } from "react";
import { BookmarkIcon } from "../../assets/icons/bookmarkIcon";
import "./newsCard.css";
import useThrottle from "../../hooks/useThrottle";
import { IBookmark } from "../../interfaces";
import useLocalStorage from "../../hooks/useLocalStorage";
import { toggleItemInArray } from "../../utils/functions";

interface NewsCardProps {
  title: string;
  image: string;
  date: string;
  description: string;
  source: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  image,
  date,
  description,
  source,
  url,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [bookmarkedItems, setBookmarkedItems] = useLocalStorage<IBookmark[]>(
    "bookmarked",
    []
  );

  const handleBookmarkClick = useThrottle(() => {
    setIsClicked((prev) => !prev);
    const updatedItem = toggleItemInArray(
      { title, url, urlToImage: image },
      bookmarkedItems
    );
    setBookmarkedItems(updatedItem);
  }, 1500);

  React.useEffect(() => {
    const getIndex = bookmarkedItems.findIndex((item) => item.url === url);
    if (getIndex !== -1) {
      setIsClicked(true);
    }
  }, [bookmarkedItems]);
  return (
    <div className="news-card">
      <div
        className="news-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          onClick={handleBookmarkClick}
          className={`bookmark-icon ${
            isClicked ? "bookmark-icon--clicked" : ""
          }`}
        >
          <BookmarkIcon />
        </div>
      </div>
      <div className="news-card-details">
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-date">{date}</p>
        <p className="news-card-description">{description}</p>
        <p className="news-card-source">Source: {source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
