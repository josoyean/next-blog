import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/post">Go to Post</Link>
    </div>
  );
};

export default Home;
