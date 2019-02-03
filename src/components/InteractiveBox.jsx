import React from "react";

class InteractiveBox extends React.Component {
  state = {
    isShowKitten: false
  };

  handleClick = () => {
    this.setState({
      isShowKitten: !this.state.isShowKitten
    });
  };

  render() {
    return (
      <div className="InteractiveBox">
        <button onClick={this.handleClick}>Can you handle the cuteness?</button>
        <Kitten isDisplay={this.state.isShowKitten} />
      </div>
    );
  }
}

class Kitten extends React.Component {
  render() {
    const { isDisplay } = this.props;
    return (
      <div>{isDisplay && <img src="http://i.imgur.com/Bz0AsI6.gif" />}</div>
    );
  }
}

export default InteractiveBox;
