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
