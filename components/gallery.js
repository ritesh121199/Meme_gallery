import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";

let getThumbnailContent = (item) => {
  return <img src={item.thumbnail} width={180} height={180} />;
};

class Gallery extends React.Component {
  render() {
    return (
      <PhotoSwipeGallery
        items={this.props.items}
        thumbnailContent={getThumbnailContent}
      />
    );
  }
}

export default Gallery;
