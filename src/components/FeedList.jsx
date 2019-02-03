import React from "react";
import FeedItem from "./FeedItem";

class FeedList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="FeedList">
        {list.map((photo, index) => {
          return <FeedItem key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}

export default FeedList;