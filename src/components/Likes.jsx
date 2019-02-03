import React from "react";

class Likes extends React.Component {
  state = {
    isLiked: this.props.userLiked,
    count: this.props.likeCount
  };

  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });

    if (this.state.isLiked) {
      this.setState({
        count: this.state.count - 1
      });
    }

    if (!this.state.isLiked) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  render() {
    return (
      <div className="Likes">
        <span>{this.state.count} likes</span>
        <button className="LikesButton" onClick={this.handleClick}>
          {this.state.isLiked ? "Liked" : "Not liked (yet)"}
        </button>
      </div>
    );
  }
}

export default Likes;
