import { posts } from "@/data/posts";
import PostItem from "./PostItem";
const PostList = () => {
  return (
    <div>
      {posts.map((item, index) => {
        return <PostItem post={item} key={index}></PostItem>;
      })}
    </div>
  );
};

export default PostList;
