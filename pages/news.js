function News({ articles }) {
  console.log(articles);
  return (
    <ul>
      {articles.map((article) => (
        <li>
          <img src={article.urlToImage}></img>
          {article.title}
        </li>
      ))}
      hei
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=28d3d8caa9394b7da273ddac32e3aa75"
  );
  const news = await res.json();

  return {
    props: {
      articles: [...news.articles],
    },
  };
}

export default News;
