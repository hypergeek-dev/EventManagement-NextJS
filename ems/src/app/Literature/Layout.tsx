import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-100 p-8">
      <div className="flex-grow flex flex-col justify-center items-center max-w-prose bg-white shadow-md rounded-md p-8 double-border">
        {children}
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-bold">Reprinted from the Little White Booklet, Narcotics Anonymous.</p>
        <p className="text-lg font-bold">
          © 1986 by Narcotics Anonymous World Services, Inc., PO Box 9999, Van Nuys, CA 91409
        </p>
        <p className="text-lg font-bold">ISBN 0-912075-65-1 10/00</p>
      </div>
    </div>
  );
};

export default Layout;
