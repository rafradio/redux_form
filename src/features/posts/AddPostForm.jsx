import React from 'react'
import { postAdded } from '../CounterSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

export const AddPostForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const { elements } = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;
        console.log('Values: ', { title, content })
        const newPost = {
            id: nanoid(),
            title,
            content
          }
        dispatch(postAdded(newPost))
        e.currentTarget.reset();
    }

    return (
        <section>
          <h2>Add a New Post</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" id="postTitle" defaultValue="" required />
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              defaultValue=""
              required
            />
            <button>Save Post</button>
          </form>
        </section>
      )
}