import React from 'react';

import Navbar from '@components/Navbar/Navbar';
import { Hero } from '@components/Hero/Hero';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <Hero />
    {children}
  </>
);

export default Layout;
