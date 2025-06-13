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
    </>
  )
}
