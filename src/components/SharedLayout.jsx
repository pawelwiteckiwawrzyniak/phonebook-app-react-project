import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
