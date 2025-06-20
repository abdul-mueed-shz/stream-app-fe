import './global.css';

import Header from '../Atoms/Header';
import Footer from '../Atoms/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Header />
        <div style={{ flexGrow: 1, minHeight: '100vh' }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
