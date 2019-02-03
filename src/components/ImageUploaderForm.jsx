import React from "react";

class ImageUploaderForm extends React.Component {
  state = {
    title: "",
    url: ""
  };
  handleTitle = event => this.setState({ title: event.target.value });

  handleUrl = event => this.setState({ url: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ url: "", title: "" });

    const newPhoto = {
      title: this.state.title,
      url: this.state.url,
      likes: 0,
      userLiked: false
    };

    this.props.handleAddPhoto(newPhoto);
  };

  render() {
    return (
      <form className="ImageUploaderForm" onSubmit={this.handleSubmit}>
        <label>
          Title:{" "}
          <input
            name="title"
            id="title"
            type="text"
            onChange={this.handleTitle}
            value={this.state.title}
          />
        </label>

        <label>
          URL:
          <input
            name="url"
            id="url"
            type="text"
            onChange={this.handleUrl}
            value={this.state.url}
          />
        </label>

        <button id="button" type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default ImageUploaderForm;
