import React from "react";
import Likes from "./Likes";

class FeedItem extends React.Component {
  state = {
    isSelected: false
  };

  handleSelect = event => {
    event.preventDefault();
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  handleDelete = event => {
    const { id } = event.target.dataset;
    this.props.handle(id);
  };

  render() {
    const { id, likes, title, url, userLiked } = this.props.photo;
    return (
      <div className="FeedItem" onClick={this.handleSelect}>
        <img className="Image" src={url} />
        <Likes likeCount={likes} userLiked={userLiked} />
        {this.state.isSelected && (
          <button
            className="DeleteButton"
            type="button"
            data-id={id}
            onClick={this.handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default FeedItem;
