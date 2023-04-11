import { ReactNode } from 'react';

import Navbar from './navbar/Navbar.component';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
      <div className="flex justify-center">{/* <Navbar /> */}</div>
    </div>
  );
};

export default Layout;
