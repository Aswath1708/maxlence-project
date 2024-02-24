import React from "react";

const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group mb-4 p-5">
          {posts.map((post, i) => (
            <li key={i} className="list-group-item">
              {post.id}. {post.title}{" "}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
