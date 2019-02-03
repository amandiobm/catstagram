import React from "react";
import Likes from "./Likes";

class FeedItem extends React.Component {
  render() {
    const { id, likes, title, url, userLiked } = this.props.photo;
    return (
      <div className="FeedItem">
        <img className="Image" src={url} />
        <Likes likeCount={likes} userLiked={userLiked}/>
      </div>
    );
  }
}

export default FeedItem;
