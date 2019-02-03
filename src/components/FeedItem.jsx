// Exercise 3: Prop It Up
// pass in props as params to the component
// destructure what you need from the props
// Hint: what do you need in order to get the image to display?
// Hint: what do you need in order to get likes to display in the Likes component?

import React from "react";
import Likes from "./Likes";

class FeedItem extends React.Component {
  render() {
    return (
      <div className="FeedItem">
        <img src="https://tinyurl.com/GDISFbanner" width="100%" />
        <Likes />
      </div>
    );
  }
}

export default FeedItem;
