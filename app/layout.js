
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/nav/Header";
import { Poppins } from 'next/font/google'
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
    <Header/>
    <main className=""> 
    {children}
    </main>
    <Footer/>
    </ThemeProvider>
      
      </body>
    </html>
  );
}
