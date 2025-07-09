import { type ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface BaseLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const BaseLayout = ({ children, showFooter = true }: BaseLayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default BaseLayout;
