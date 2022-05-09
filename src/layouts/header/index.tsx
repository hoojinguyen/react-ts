import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface IMenuItem {
  name: string;
  href: string;
  label: string;
}

export const HEADERS: IMenuItem[] = [
  {
    name: 'home',
    href: '/',
    label: 'Home',
  },
  {
    name: 'product',
    href: '/product/1',
    label: 'Product',
  },
  {
    name: 'category',
    href: '/category',
    label: 'Category',
  },
];

const Header: React.FC = () => {
  console.log('Header');

  const [section, setSection] = useState(HEADERS[0]);

  return (
    <header className="header fixed">
      <div className="logo-header">
        <div className="box-img-flex">
          <h4>Test</h4>
        </div>
      </div>
      <div className="menu">
        <ul>
          {HEADERS.map((item: IMenuItem, index: number) => (
            <li
              key={index}
              onClick={() => setSection(item)}
              className={section.name === item.name ? 'active' : ''}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
