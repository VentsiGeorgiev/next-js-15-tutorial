export const metadata = {
  title: 'Next js',
  description: 'Next js tutorial',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
