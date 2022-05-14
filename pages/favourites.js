import Seo from "../components/common/seo";
import Post from "../components/post";

function Favourites({ posts }) {
  const filter = {
    is_favourite: 1,
  };

  //filter favourite posts
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
  const response = await fetch(`${process.env.apiEndpoint}/api/posts`);
  const posts = await response.json();

  // Pass data to the page via props
  return {
    props: {
      posts: posts.data,
    },
  };
}

export default Favourites;
