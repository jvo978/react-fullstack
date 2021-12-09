import React from 'react';
import '../css/CreatePost.css';
import { Formik, Form, Field } from 'formik';

function CreatePost() {
    return (
        <div className="createPost__container">
            <Formik>
                <Form className="createPost__form">
                    <label>Title: </label><Field id="inputCreatePost" name="title" placeholder="Title" />
                    <label>Post: </label><Field id="inputCreatePost" name="postText" placeholder="Post" />
                    <label>Username: </label><Field id="inputCreatePost" name="username" placeholder="Username" />
                    <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost
