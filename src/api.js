import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsApp() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Make API request when component mounts
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey={dce3fb29665f4f56bff0c0bae0dee50a}`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Today's Top Headlines</h1>
      <ul>
        {articles.map(article => (
          <li key={article.url}>
            <img src={article.urlToImage} alt={article.title} />
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsApp;
