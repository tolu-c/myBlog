import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./articleContent";
import Articles from "../components/Articles";
import PageNotFound from "./PageNotFound";
import "whatwg-fetch";
import CommentList from '../components/CommentList'
import AddCommentForm from "../components/AddCommentForm";

function Article() {
  const params = useParams();
  const name = params.name;

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      // console.log(body)
      setArticleInfo(body);
    };
    fetchData()
  }, [name]);

  const article = articleContent.find((article) => article.name === name);
  if (!article) return <PageNotFound />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="text-4xl font-bold my-6 text-gray-800">{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentList comments={articleInfo} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="text-xl font-bold my-4 mt-8 txt-gray-800">
        Other Articles
      </h1>
      <div className="flex flex-wrap">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
}

export default Article;
