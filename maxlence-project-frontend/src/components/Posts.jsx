import React from "react";
import thumbnail from "../assets/thumbnail.png";

const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading ? (
        <p className="text-center py-4">Loading...</p>
      ) : (
        <ul className="list-group mb-4 p-5">
          {posts.map((post, i) => (
            <li key={i} className="d-flex flex-md-row flex-column lg-flex-col gap-3 list-group-item">
                <div className="">
                <img
                  src={thumbnail}
                  alt="thumbnail-card"
                  className="rounded"
                />
                </div>
                <div>
                <p className="fw-bolder">
                  {post.id}. {post.title}{" "}
                </p>
                <p className="fst-italic color-grey">{post.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
