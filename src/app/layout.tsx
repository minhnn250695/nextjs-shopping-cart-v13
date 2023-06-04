'use client';
import Header from '@/components/header/heder';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/footer';
import './globals.scss';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="icon" type="image/png" href="/images/icons/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/fonts/iconic/css/material-design-iconic-font.min.css" />
        <link rel="stylesheet" type="text/css" href="/fonts/linearicons-v1.0.0/icon-font.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/animate/animate.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/css-hamburgers/hamburgers.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/animsition/css/animsition.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/select2/select2.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/MagnificPopup/magnific-popup.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" type="text/css" href="/css/util.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>React App</title>
      </head>
      <body className={inter.className}>
        <Header></Header>
        <div className='main-content'>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
