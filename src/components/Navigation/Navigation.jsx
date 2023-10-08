import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <Fragment>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </Fragment>
        ) : (
          <Fragment>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </Fragment>
        )}
      </nav>
    </header>
  );
};
