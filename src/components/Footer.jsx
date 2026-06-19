import { Building2 } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Support',
    links: ['Manage your trips', 'Contact customer service', 'Safety resource centre'],
  },
  {
    title: 'Discover',
    links: ['Loyalty programme', 'Seasonal deals', 'Traveller reviews', 'Travel articles'],
  },
  {
    title: 'Terms & settings',
    links: ['Privacy notice', 'Terms of service', 'Accessibility statement'],
  },
  {
    title: 'Partners',
    links: ['List your property', 'Partner help', 'Become an affiliate'],
  },
  {
    title: 'About',
    links: ['About StayHub', 'How we work', 'Careers', 'Press centre'],
  },
];

export default function Footer() {
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-white">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={handleLinkClick}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-2 text-white">
            <Building2 className="h-5 w-5 text-accent" />
            <span className="font-heading font-bold">StayHub</span>
          </div>
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} StayHub. A student clone project, not affiliated with any booking platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
