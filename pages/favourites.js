import Seo from "./components/common/seo";
import Post from "./components/post";

function Favourites({ posts }) {
  //filter favourite posts
  const filter = {
    is_favourite: 1,
  };

  posts = posts.filter((item) => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });

  return (
    <>
      <Seo title="Favourites" />
      <Post posts={posts} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`http://localhost:3001/api/posts`);
  const posts = await response.json();

  // Pass data to the page via props
  return {
    props: {
      posts: posts.data,
    },
  };
}

export default Favourites;
