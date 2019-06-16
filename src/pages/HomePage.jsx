import React from "react";
import ImageUploaderForm from "../components/ImageUploaderForm";
import FeedList from "../components/FeedList";
import InteractiveBox from "../components/InteractiveBox";
import data from "../../data.json";

class HomePage extends React.Component {
  state = {
    photos: data.photos
  };

  handleAddPhoto = newPhoto => {
    newPhoto.id = this.state.photos.length + 1;
    this.setState(prevState => {
      return { photos: [newPhoto].concat(prevState.photos) };
    });
  };

  handleRemovePhoto = index => {
    this.setState(prevState => {
      const photo = prevState.photos.find((item, i) => {
        if (item.id === parseInt(index, 10)) {
          return i;
        }
      });
      console.log(photo);
      return {  };
    });
  };

  get something() {
    return "something";
  }

  render() {
    return (
      <div className="HomePage">
        <InteractiveBox />
        <ImageUploaderForm handleAddPhoto={this.handleAddPhoto} />
        {this.something}
        <FeedList
          list={this.state.photos}
          handleRemovePhoto={this.handleRemovePhoto}
        />
      </div>
    );
  }
}

export default HomePage;
