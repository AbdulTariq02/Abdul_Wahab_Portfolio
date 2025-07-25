import './globals.css';
import BackgroundWrapper from './BackgroundWrapper';
import Footer from './components/footer';
import WhatsappChat from './components/whatsapp';


export const metadata = {
  title: 'Abdul Wahab Portfolio',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden text-white ">
        <BackgroundWrapper>
          {children}

          <WhatsappChat />
          <Footer />
        </BackgroundWrapper>
      </body>
    </html>
  );
}
