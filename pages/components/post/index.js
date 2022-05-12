import Image from "next/image";
import * as PostCard from "./styles/post";
import profilePic from "../../../public/images/user.png";
import placeholder from "../../../public/images/placeholder.jpg";

export default function Post() {
  return (
    <>
      <PostCard.Container>
        <PostCard.Header>
          <PostCard.Profile>
            <PostCard.Avatar>
              <Image src={profilePic} alt="User Picture" />
            </PostCard.Avatar>
            <PostCard.User>helloworld</PostCard.User>
          </PostCard.Profile>
        </PostCard.Header>

        <PostCard.Content>
          <PostCard.Media>
            <Image
              src={placeholder}
              alt="Post Content"
              style={{
                width: "100%",
                flex: "none",
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
            />
          </PostCard.Media>
        </PostCard.Content>

        <PostCard.Footer>
          <PostCard.Meta>
            <div>
              Leaf iPhone Case<span>AED 40</span>
            </div>
            <PostCard.FavouriteButton>
              <i className="fa fa-heart-o fa-2x"></i>
            </PostCard.FavouriteButton>
          </PostCard.Meta>
        </PostCard.Footer>

        <PostCard.Info>
          <PostCard.Likes>
            <i className="fa fa-heart"></i>
            <span>
              <a href="#">42 likes</a>
            </span>
          </PostCard.Likes>
          <PostCard.Caption>
            <span>
              Responsive clone of Instagram UI. Made with ❤ for study purposes.
            </span>
          </PostCard.Caption>
          <PostCard.Comments>View 12 comments</PostCard.Comments>
        </PostCard.Info>
      </PostCard.Container>
    </>
  );
}
