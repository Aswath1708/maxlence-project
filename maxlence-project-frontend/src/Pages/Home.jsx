import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import PageNumbersList from "../components/PageNumbersList";
import { apiURL } from "../utils/apiURL";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiURL())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavBar />
      <Posts posts={currentPosts} loading={loading} />
      <PageNumbersList totalPosts={posts.length} paginate={paginate} blogsPerPage={blogsPerPage} />
    </div>
  );
};

export default Home;
