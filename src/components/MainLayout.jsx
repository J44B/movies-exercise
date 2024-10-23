import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, Footer } from './index';

export const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery('');
  }, [location]);

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <main className="container mx-auto">
        <Outlet context={{ searchQuery }} />
      </main>
      <Footer />
    </>
  );
};
