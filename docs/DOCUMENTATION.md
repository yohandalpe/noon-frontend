# How I built Noon Frontend with Next.js.

## Packages used
- [font-awesome](https://www.npmjs.com/package/font-awesome)
- [styled-components](https://www.npmjs.com/package/styled-components)

## Steps
1. Created a new project with the CLI tool `create-next-app`.
```
npx create-next-app@latest
```

2. Installed the required dependencies for this project.
```
npm install font-awesome styled-components
```

3. Initiated Git
```
git init
```

4. Defined breakpoints for responsive UI - mobile-first approach.
```js
// Define breakpoints for responsive UI
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

Object.keys(breakpoints).map((key) => {
  breakpoints[key] = `@media (min-width: ${breakpoints[key]})`;
});

export default breakpoints;
```

5. Created the global styled-component.

`styles/global-styles.js`
```js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
		 html, body {
		 margin: 0;
		 padding: 0;
		 font-family: 'Roboto', sans-serif;
		 background: #ffffff;
		}`;
```

`pages/_app.js`
```js
import { GlobalStyles } from "../styles/global-styles";
import "font-awesome/css/font-awesome.css";

		function MyApp({ Component, pageProps }) {
		 return <Component {...pageProps} />;
		 return (
		 <>
		 <GlobalStyles />
		 <Component {...pageProps} />
		 </>
		 );
		}

export default MyApp;
```

6. Created Navbar component.

`pages/components/navbar/styles/navbar.js`
```js
import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Wrapper component that'll render a <nav> tag with some styles
export const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  bottom: 0;
  top: unset;
  left: 0;
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  ${breakpoints.lg} {
    top: 0;
    bottom: unset;
  }
`;

// Create a Container component that'll render a <div> tag with some styles
export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 0 auto;
  ${breakpoints.sm} {
    width: 640px;
  }
  ${breakpoints.md} {
    width: 500px;
  }
`;

// Create a Button component that'll render an <a> tag with some styles
export const Button = styled.a`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 20px;
  span {
    font-size: 14px;
    margin-left: 0.5rem;
    display: none;
    ${breakpoints.lg} {
      display: block;
    }
  }
`;
```

`pages/components/navbar/index.js`
```js
import Link from "next/link";
import * as NavBar from "./styles/navbar";

function Navbar() {
  return (
    <>
      <NavBar.Wrapper>
        <NavBar.Container>
          <Link href="/" passHref>
            <NavBar.Button>
              <i className="fa fa-home" />{" "}
              <span className="nav-label">Home</span>
            </NavBar.Button>
          </Link>
          <Link href="/favourites" passHref>
            <NavBar.Button>
              <i className="fa fa-heart" />{" "}
              <span className="nav-label">Favourites</span>
            </NavBar.Button>
          </Link>
        </NavBar.Container>
      </NavBar.Wrapper>
    </>
  );
}

export default Navbar;
```

7. Created the Post component and a common component to handle Favourite posts.

`pages/components/common/like.js`
```js
const Favourite = (props) => {
  let classes = "fa fa-2x fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer", color: props.liked ? "rgb(255,0,0)" : "" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Favourite;

```

`pages/components/post/styles/post.js`
```js
import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Container component that'll render an <article> tag with some styles
export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid rgb(219, 219, 219);
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 50px;
  }
  ${breakpoints.lg} {
    &:first-of-type {
      margin-top: 50px;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

// Create a Header component that'll render a <div> tag with some styles
export const Header = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

// Create a Profile component that'll render a <div> tag with some styles
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// Create a Avatar component that'll render a <div> tag with some styles
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

// Create a User component that'll render a <span> tag with some styles
export const User = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: rgb(38, 38, 38);
  text-decoration: none;
  text-transform: lowercase;
`;

// Create a Content component that'll render a <div> tag with some styles
export const Content = styled.div`
  display: flex;
  position: relative;
`;

// Create a Media component that'll render a <div> tag with some styles
export const Media = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  position: relative;
  &:-webkit-scrollbar {
    display: none;
  }
`;

// Create a Meta component that'll render a <div> tag with some styles
export const Meta = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

// Create a MetaContainer component that'll render a <div> tag with some styles
export const MetaContainer = styled.div`
  display: flex;
  padding: 16px;
  span {
    font-weight: bold;
  }
`;

// Create a FavouriteButton component that'll render a <button> tag with some styles
export const FavouriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: auto;
  color: rgb(255, 255, 255);
`;

// Create a Info component that'll render a <div> tag with some styles
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 16px;
  gap: 10px;
  background-color: rgb(255, 255, 255);
`;

// Create a Likes component that'll render a <div> tag with some styles
export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    font-size: 14px;
    font-weight: 400;
    color: rgb(38, 38, 38);
  }
  a {
    font-size: 14px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    text-decoration: none;
  }
`;

// Create a Caption component that'll render a <div> tag with some styles
export const Caption = styled.div`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: rgb(38, 38, 38);
  a {
    font-size: 14px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    text-decoration: none;
  }
`;

// Create a Hashtags component that'll render a <div> tag with some styles
export const Hashtags = styled.div`
  margin: 0.5rem 0;
  a {
    color: blue;
  }
`;

// Create a Comments component that'll render a <div> tag with some styles
export const Comments = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgb(153, 153, 153);
`;

// Create a Message component that'll render a <div> tag with some styles
export const Message = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 0, 0);
  text-align: center;
  margin: 1rem 0;
`;

```

`pages/components/post/index.js`
```js
import { useState, Fragment } from "react";
import Image from "next/image";
import * as PostCard from "./styles/post";
import Favourite from "../common/favourite";

function Post({ posts }) {
  // Initialise state
  const [updatedPosts, setUpdatedPosts] = useState(null);

  // Update favourite posts on the API
  const updateFavouritePosts = async (id, isFavourite) => {
    const request = await fetch(
      `${process.env.apiEndpoint}/api/posts/favourite/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_favourite: isFavourite }),
      }
    );
    const updatedPosts = await request.json();
    return setUpdatedPosts(updatedPosts.results);
  };

  // Handle favourite button
  const allPosts = [...posts];
  const handleFavourite = (post) => {
    const index = allPosts.indexOf(post);
    allPosts[index] = { ...allPosts[index] };
    allPosts[index].is_favourite = !allPosts[index].is_favourite;
    updateFavouritePosts(allPosts[index].id, allPosts[index].is_favourite);
  };

  console.log(updatedPosts);

  // Check for updated posts after favourite posts update
  if (updatedPosts) {
    posts = updatedPosts.data;
    console.log(posts);
  }

  // Posts availability message
  const message = posts.length < 1 ? "No posts found." : "";

  return (
    <>
      {message && <PostCard.Message>{message}</PostCard.Message>}
      {posts.length > 0 &&
        posts.map((post) => (
          <Fragment key={post.id}>
            <PostCard.Container>
              <PostCard.Header>
                <PostCard.Profile>
                  <PostCard.Avatar>
                    <Image
                      src={post.pfp_url}
                      alt="User Picture"
                      width={32}
                      height={32}
                    />
                  </PostCard.Avatar>
                  <PostCard.User>{post.username}</PostCard.User>
                </PostCard.Profile>
              </PostCard.Header>

              <PostCard.Content>
                <PostCard.Media>
                  <Image
                    src={post.image}
                    alt="Post Content"
                    style={{
                      width: "100%",
                      flex: "none",
                      scrollSnapAlign: "start",
                      scrollSnapStop: "always",
                    }}
                    width={1080}
                    height={1080}
                  />
                </PostCard.Media>
                <PostCard.Meta>
                  <PostCard.MetaContainer>
                    <div>
                      {post.title}
                      <br />
                      <span>
                        {post.currency} {post.price}
                      </span>
                    </div>
                    <PostCard.FavouriteButton>
                      <Favourite
                        liked={post.is_favourite}
                        onClick={() => handleFavourite(post)}
                      />
                    </PostCard.FavouriteButton>
                  </PostCard.MetaContainer>
                </PostCard.Meta>
              </PostCard.Content>

              <PostCard.Info>
                <PostCard.Likes>
                  <i className="fa fa-heart"></i>
                  <span>
                    <a href="#">{post.likes_count} likes</a>
                  </span>
                </PostCard.Likes>
                <PostCard.Caption>
                  {post.caption}
                  <PostCard.Hashtags>
                    <a href="#">{post.hashtags}</a>
                  </PostCard.Hashtags>
                </PostCard.Caption>
                <PostCard.Comments>View 12 comments</PostCard.Comments>
              </PostCard.Info>
            </PostCard.Container>
          </Fragment>
        ))}
    </>
  );
}

export default Post;

```

8. Created a common component for dynamic meta title change (SEO).
   
`pages/components/common/seo.js`
```js
import Head from "next/head";

const Seo = ({ title }) => {
  return (
    <Head>
      <title>Noon: {title}</title>
      <meta
        name="description"
        content="A Next.js app built with custom NodeJS API."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;

```

1. Created a common layout for pages.
    
`pages/components/layout.js`
```js
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;

```

`pages/_app.js`
```js
import { GlobalStyles } from "../styles/global-styles";
import Layout from "../components/layout";
import "font-awesome/css/font-awesome.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

```

1.  Added external domains (for CDN images) and API endpoint in `next.config.js`.

```js
images: {
		 domains: ["i.picsum.photos"],
		 },
		 env: {
		 apiEndpoint: "http://localhost:3001",
		 },
```

11. Completed Home and Favourites pages.
`pages/index.js`
```js
import Seo from "../components/common/seo";
import Post from "../components/post";

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

```

`pages/favourites.js`
```js
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

```

12. Deployed the app on [Vercel](https://noon-frontend-yd.vercel.app/).