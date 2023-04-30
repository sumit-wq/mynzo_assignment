import React from "react";
import NewsCardList from "./NewsCardList";
import useFetch from "../../hooks/useFetch";
import { Get } from "../../interfaces";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";
import { fetchNews } from "../../service/fetchNews";
import "./NewsCardList.css";

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
    if (error){
    return (
      <div className="error-msg">
        {error?.message ?? `There is an error.`}
      </div>
    );
    }
    if (!data) return <Loader />;
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
