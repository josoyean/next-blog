import { PostTypes } from "@/types/types";
interface PostProps {
  post: PostTypes;
}
const PostDetail = ({ post }: PostProps) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <ul>
        {post.tags && post.tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>
    </div>
  );
};

export default PostDetail;
