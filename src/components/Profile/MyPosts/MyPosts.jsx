import react, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post massage={p.massage} likesCount={p.likesCount}/>)

    return <div className={s.postsBlock}>
        <h3> My Posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;