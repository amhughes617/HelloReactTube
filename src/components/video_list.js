import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //key={video.etag} lets react find and update a list item without rerendering everything
    return <VideoListItem
      onVideoSelect ={props.onVideoSelect}
      key={video.etag}
      video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;
