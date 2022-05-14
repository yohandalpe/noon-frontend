import Seo from "./components/common/seo";
import Post from "./components/post";

function Home({ posts }) {
  return (
    <>
      <Seo title="Home" />
      <Post posts={posts} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`${process.env.apiEndpoint}/api/posts`);
  const posts = await response.json();

  // Pass data to the page via props
  return { props: { posts: posts.data } };
}

export default Home;
