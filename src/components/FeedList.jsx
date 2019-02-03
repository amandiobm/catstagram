// Exercise 3: Prop It Up
// FeedList should accept props as params
// destructure photos from props
// iterate over the data and map each photo data to a FeedItem

import React from "react";
import FeedItem from "./FeedItem";

class FeedList extends React.Component {
  render() {
    return (
      <div className="FeedList">
        <FeedItem />
      </div>
    );
  }
}

export default FeedList;
