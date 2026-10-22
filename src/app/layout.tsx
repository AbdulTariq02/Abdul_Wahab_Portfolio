import './globals.css';
import BackgroundWrapper from './BackgroundWrapper';
import Footer from './components/footer';
import WhatsappChat from './components/whatsapp';

export const metadata = {
  title: {
    default: 'Abdul Wahab Portfolio',
    template: '%s | Abdul Wahab',
  },
  description: 'Portfolio of Abdul Wahab Tariq, a web developer from Karachi, Pakistan.',
  openGraph: {
    title: 'Abdul Wahab Portfolio',
    description: 'Portfolio of Abdul Wahab Tariq, a web developer from Karachi, Pakistan.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-clip text-white">
        <BackgroundWrapper>
          {children}
          <WhatsappChat />
          <Footer />
        </BackgroundWrapper>
      </body>
    </html>
  );
}
