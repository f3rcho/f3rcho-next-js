import React from 'react';

import Navbar from '@components/Navbar/Navbar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
