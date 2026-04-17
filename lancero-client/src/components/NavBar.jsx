import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import Button from './Button';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'bg-yellow-400 text-zinc-900'
      : 'text-zinc-100 hover:text-zinc-900 hover:bg-yellow-400/60',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 drop-shadow-lg bg-[#34418f] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-zinc-100">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>  
        <Button to="/auth/signin" variant="primary">
          Sign Out
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
