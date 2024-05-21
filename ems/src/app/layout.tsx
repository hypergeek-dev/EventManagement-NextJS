import { Inter, Playfair_Display_SC } from 'next/font/google';
import './globals.css';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import MeetingInfo from '../components/Pages/LandingPage/Meetinginfo';
import CurrentTime   from '../components/Pages/LandingPage/MeetingCountDown';
import Donation from '../components/Pages/LandingPage/Donations';

const inter = Inter({ subsets: ['latin'] });

const playfairDisplaySC = Playfair_Display_SC({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata = {
  title: 'Spiritual Awakenings',
  description: 'Virtual NA meetings',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      </head>
      <body className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          {children}
          <div className="flex flex-col md:flex-row gap-24 mt-2 justify-center items-center">
          <div className="p-6"><CurrentTime /></div>
            <div className="p-6"><MeetingInfo /></div>
            <div className="p-6"><Donation /></div>
          </div>
        </main>

      </body>
    </html>
  );
}
