import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLauout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h3>loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLauout;
