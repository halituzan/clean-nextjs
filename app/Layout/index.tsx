import React from "react";
import Footer from "../Components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-start'>
      <main className='max-w-[1024px] mx-auto flex-1 pt-20'>{children}</main>
      <footer className='w-full h-10 flex bg-rose-600 text-white'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
