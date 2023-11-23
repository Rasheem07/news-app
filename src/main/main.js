import React, { useState, useEffect } from "react";
import Newslist from "./newslist";

export default function Main({category}) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalpages, setTotalPages] = useState(1);
  // const [category, setcategory] = useState('general')

  function handleClickOnPrev() {
    setpage((e) => Math.max(e - 1, 1));
  }

  function handleClickOnNext() {
    setpage((e) => Math.min(e + 1, totalpages));
  }

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=42d437807ba945d185b73f42f77bae87&pagesize=15&page=${page}`;
    // const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-10-22&sortBy=publishedAt&apiKey=42d437807ba945d185b73f42f77bae87"

    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 12)); 
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => setLoading(false));
  }, [page, totalpages, category, ]); // Empty dependency array to execute only once on component mount

  return (
    <div className="container h-100 w-100" style={{ minHeight: "100vh",minWidth:"85vw", margin: "0 auto" }}>
      <h1 className="text-center my-2">News app</h1>
      {!loading ? (
        <>
          <div className="row d-flex" style={{justifyContent: "space-evenly"}}>
            {news.map((newsItem) => (
              <Newslist
                key={newsItem.source.url}
                imageURL={newsItem.urlToImage}
                title={newsItem.title}
                desc={newsItem.description}
                url={newsItem.url}
              />
            ))}
          </div>
        </>
      ) : (
        <div style={{borderRadius:"8px", position: "relative",width:"35vw",zIndex:"999", height: "8px", backgroundColor: "#ccc", margin: "30vh auto" }}>
         <h4 className="py-3 text-center">loading...</h4>
         <span
           style={{
             transition: "5s ease-out",
             position: "absolute",
             top: "0",
             left: "10",
             borderRadius: "8px",
             height: "100%",
             width: loading ? '50%' : '85%',
             backgroundColor: "#333333",
             animation: "progress 15s ease-in forwards",
           }}
         ></span>
       </div>
      )}
             <div className="my-2" style={{ maxWidth: "80vw", display: "flex", justifyContent: "space-between", margin: "0 auto" }}>
               <button className="btn btn-secondary" disabled={page <= 1} onClick={handleClickOnPrev}>
                 &larr; Previous
               </button>
               <button className="btn btn-primary" disabled={page >= totalpages - 1} onClick={handleClickOnNext}>
                 Next &rarr;
               </button>
             </div>
    </div>
  );
}
