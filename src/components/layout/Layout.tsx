import Link from "next/link";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Link href="/">
        <h1>blog</h1>
      </Link>

      <nav className="">
        <Link href="/about">about</Link>
        <Link href="/post">post</Link>
      </nav>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
