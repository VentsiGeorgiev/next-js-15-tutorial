export const metadata = {
  title: 'Next js',
  description: 'Next js tutorial',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        <header>
          <h1>Header layout</h1>
        </header>
        {children}
        <footer>
          <h1>Footer layout</h1>
        </footer>
      </body>
    </html>
  )
}
