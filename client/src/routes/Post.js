import '../css/Post.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
         axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
            setPostObject(response.data)
        })
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data)
        })
    }, [id]);

    const addNewComment = () => {
        axios.post('http://localhost:3001/comments', {
            commentBody: newComment,
            PostId: id
        }).then((response) => {
                setComments([...comments, { commentBody: response.data.commentBody }]);
                setNewComment('');
        })
    }

    return (
        <div className="post__container">
            <div className="post__left">
                <div className="post__title">{postObject.title}</div>
                <div className="post__body">{postObject.postText}</div>
                <div className="post__footer">{postObject.username}</div>
            </div>
            <div className="comment__right">
                <div className='addComment__container'>
                    <input value={newComment} type="text" placeholder="Comment..." autoComplete='off' onChange={(event) => { setNewComment(event.target.value) }} />
                    <button onClick={addNewComment}>Add Comment</button>
                </div>
                <div className='listOfComments'>
                    {comments.map((comment, key) => { 
                        return <div className='commentBody'>{comment.commentBody}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Post
