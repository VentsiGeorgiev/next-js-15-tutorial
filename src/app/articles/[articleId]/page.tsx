'use client'
import Link from 'next/link'
import { use } from 'react';

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{lang?: 'en' | 'fr' | 'sp'}>
}) {
  const { articleId } = use(params)
  const { lang = 'en' } = use(searchParams)
  return (
    <>
      <h1>News article {articleId}</h1>
      <p>Reading in language - {lang}</p>

      <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
      <Link href={`/articles/${articleId}?lang=sp`}>Read in Spanish</Link>
      <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
    </>
  )
}
