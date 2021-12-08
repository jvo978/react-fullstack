import '../css/Home.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

import React from 'react'

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

        useEffect(() => {
            axios.get("http://localhost:3001/posts").then((response) => {
              setListOfPosts(response.data)
            })
        }, []);
    return (
        <div className="post">{listOfPosts.map((post, key) => {
            return ( 
              <div className="post_description">
                <div className="post__title">{post.title}</div>
                <div className="post__body">{post.postText}</div>
                <div className="post__footer">{post.username}</div>
              </div>
            )
          })}
          </div>
    )
}

export default Home
