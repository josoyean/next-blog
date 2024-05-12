import PostDetail from "@/components/post/PostDetail";
import { posts } from "@/data/posts";
import { PostTypes } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
interface PostProps {
  post: PostTypes;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths, // 생성된 동적 경로를 반환합니다.
    fallback: false, // fallback을 false로 설정하여 없는 페이지는 404 페이지를 반환합니다.
  };
};

export const getStaticProps: GetStaticProps<
  PostProps,
  { id: string }
> = async ({ params }) => {
  const post = posts.find((post) => post.id === Number(params?.id));

  if (!post) {
    return { notFound: true }; // 포스트가 없는 경우 404 페이지를 반환
  }

  return {
    props: {
      post,
    },
  };
};
const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h1>Post</h1>
      <PostDetail post={post} />
    </div>
  );
};

export default Post;
