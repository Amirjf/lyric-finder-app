import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import singer from "./singer.png";

export default function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-lg card-track">
        <div className="card-body text-center">
          <img src={singer} alt="singer" />
          <hr className="hr-main" />
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i> Track:{" "}
            </strong>
            {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album:
            </strong>
            {track.album_name}
          </p>
          <Link
            to={`lyric/track/${track.track_id}`}
            className="btn btn-warning btn-md0"
          >
            <i className="fas fa-chevron-right"></i> View Lyric
          </Link>
        </div>
      </div>
    </div>
  );
}
