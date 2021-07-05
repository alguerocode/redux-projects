import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectSearchInput,
  setBlogData
} from '../features/userSlice';
import '../styles/blogs.css'

const Blogs = () => {
  const searchInput = useSelector(selectSearchInput);
  const blogUrl = `https://gnews.io/api/v4/search?q=${searchInput}&token=f0d8806918cd33338f3207c907644100`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        dispatch(setBlogData(data));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);
  return (
    <div className="blog-page">
      <h1 className="blog-page-header">Blogs</h1>
      {loading && <h1 className="loading">Loading...</h1>}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a href={blog.url} className="blog" target="_blank">
            <img src={blog.image} alt="blog" />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}
        {blogs?.totalArticles === 0 && (
          <h1 className="no-blogs">no blogs found about: {searchInput}</h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
