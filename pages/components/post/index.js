import { Fragment } from "react";
import Image from "next/image";
import * as PostCard from "./styles/post";

export default function Post({ posts }) {
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
                      <i className="fa fa-heart-o fa-2x"></i>
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
