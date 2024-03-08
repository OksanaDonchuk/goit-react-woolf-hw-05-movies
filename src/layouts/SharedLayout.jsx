import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLauout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLauout;
