import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Next JS tutorial</h1>
    <div>
    <Link href="blog">Blog</Link>
    </div>
    <div>
    <Link href="products">Products</Link>
    </div>
    <div>
      <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
    </div>
    <div>
      <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
    </div>
    </>
  )
}
