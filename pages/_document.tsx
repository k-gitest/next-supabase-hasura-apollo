import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Html data-theme="light" lang="ja">
      <Head />
      <body>
        {/* Layout UI */}
        {children}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
