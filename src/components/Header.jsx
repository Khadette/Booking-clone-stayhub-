import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Building2, Globe, HelpCircle } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
      isActive ? 'bg-white text-primary' : 'text-white/85 hover:bg-white/10'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-card">
      {/* Top utility row */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-2 text-xs text-white/85 sm:flex sm:px-6 lg:px-8">
        <span />
        <div className="flex items-center gap-4">
          <span className="font-medium">USD</span>
          <button className="flex items-center gap-1 hover:text-white" aria-label="Language">
            <Globe className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 hover:text-white" aria-label="Help">
            <HelpCircle className="h-4 w-4" />
          </button>
          <Link to="/signup" className="hover:text-white">List your property</Link>
          <Link
            to="/signup"
            className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:bg-white/90"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:bg-white/90"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Main brand + nav row */}
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Building2 className="h-7 w-7 text-accent" strokeWidth={2.2} />
          <span className="font-heading text-xl font-bold tracking-tight">StayHub</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navLinkClass} end>Stays</NavLink>
          <NavLink to="/properties" className={navLinkClass}>All properties</NavLink>
        </nav>

        <button
          className="text-white md:hidden focus-ring rounded-md p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            <NavLink to="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10" end>Stays</NavLink>
            <NavLink to="/properties" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">All properties</NavLink>
            <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 rounded-md py-2 text-center text-sm font-semibold text-white hover:bg-white/10">Sign in</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 rounded-md bg-accent py-2 text-center text-sm font-semibold text-primary-dark">Register</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
