import React from "react";

class Kitten extends React.Component {
  render() {
    return (
      <div>
        {this.props.isDisplay && <img src="http://i.imgur.com/Bz0AsI6.gif" />}
      </div>
    );
  }
}

export default Kitten;
