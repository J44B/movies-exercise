import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, Footer } from './index';

export const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  useEffect(() => {
    setSearchQuery('');
  }, [location]);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="container mx-auto">
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>
      <Footer />
    </>
  );
};
