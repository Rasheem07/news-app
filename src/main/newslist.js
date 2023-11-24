import React from "react";

export default function Newslist(props) {
  return (
    <div
      className="col-lg-3 col-md-3 col-sm-6 mx-1 my-3 p-2 card p-1"
      style={{ maxWidth: "90%", maxHeight: "75%", textOverflow: "ellipsis" }}
    >
      <img
        src={props.imageURL}
        alt={props.title}
        className="img-fluid rounded"
        style={{
          minHeight: "150px",
          maxHeight: "150px",
          width: "100%",
          objectFit: "cover",
          background: "#f2f2f2",
        }}
      />
      <div className="mt-3">
        <h4
          className="h5"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: "2",
          }}
        >
          {props.title}
        </h4>
        <p
          className="p m-0 desc text-muted"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: "3",
            padding: "none",
          }}
        >
          {props.desc}
        </p>
        <p class="card-text p-1">
          <small class="text-success" style={{ fontWeight: "600" }}>
            {props.publishtime}
          </small>
        </p>
        <button className="btn btn-dark mx-3 mb-1" style={{ float: "left" }}>
          <a
            style={{ color: "#f2f2f2", textDecoration: "none" }}
            href={props.url}
          >
            read more
          </a>
        </button>
      </div>
    </div>
  );
}
