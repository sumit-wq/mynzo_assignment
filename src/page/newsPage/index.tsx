import React from "react";
import NewsCardList from "./NewsCardList";
import useFetch from "../../hooks/useFetch";
import { Get } from "../../interfaces";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";
import { fetchNews } from "../../service/fetchNews";

function NewsPage() {
  const [query, setQuery] = React.useState<string>("");
  const [newsType, setNewsType] = React.useState<string>("everything");
  const { data, error } = useFetch<Get>(fetchNews({ newsType, q: query }));

  const handleSearch = (q: string) => {
    setQuery(q);
  };
  const handleNewsType = (val: string) => {
    setNewsType(val);
  };

  const renderListData = () => {
    if (!data) return <Loader />;
    else if (error) return <p>There is an error.</p>;
    else return <NewsCardList news={data.articles} />;
  };

  return (
    <div>
      <Navbar handleNewsType={handleNewsType} handleSearch={handleSearch} />
      <div className="app">{renderListData()}</div>
    </div>
  );
}

export default NewsPage;
