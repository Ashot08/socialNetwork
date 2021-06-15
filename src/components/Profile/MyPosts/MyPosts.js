import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.state.postsData.map(p => <Post message={p.message}/>);
    return (
        <div className={classes.posts}>
            {posts}
        </div>
    );
}
export default MyPosts;