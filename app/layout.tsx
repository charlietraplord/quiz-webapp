import './globals.css';
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: 'Anisa Quiz App',
  description: 'Turning your aviation dreams to reality',
}


export default function RootLayout({
children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
