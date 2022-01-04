import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './app-header.scss';

export const AppHeader = () => {
  const peoplePage =
    useLocation().pathname === '/' ? '#CB0A1C' : null;
  const planetsPage =
    useLocation().pathname === '/planets' ? '#CB0A1C' : null;

	const shipsPage =
	useLocation().pathname === '/starships' ? '#CB0A1C' : null;

  return (
    <header className='header'>
      <Link
        style={{ color: peoplePage }}
        className="header__link"
        to='/'
      >
        People
      </Link>
      <Link
        style={{ color: planetsPage }}
        className="header__link"
        to='/planets'
      >
        Planets
      </Link>
      <Link
        style={{ color: shipsPage }}
        className="header__link"
        to='/starships'
      >
        Starships
      </Link>
    </header>
  );
};
