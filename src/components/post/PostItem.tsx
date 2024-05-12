import styles from "@/styles/Post.module.css";
import { PostTypes } from "@/types/types";
import Link from "next/link";
interface PostProps {
  post: PostTypes;
}

const PostItem = ({ post }: PostProps) => {
  return (
    <div className={styles.post}>
      {/* 제목을 Link 컴포넌트로 감싸고 href에 동적 경로를 지정합니다. */}
      <h2>
        <Link href={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p
        style={{
          whiteSpace: "nowrap",
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {post.content}
      </p>
      <p>{post.date}</p>
      <ul>
        {post.tags?.map((tag, index) => {
          return <li key={index}>{tag}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostItem;
