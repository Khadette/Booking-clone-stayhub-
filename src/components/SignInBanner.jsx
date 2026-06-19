import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

export default function SignInBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-primary-50 p-6 sm:flex-row">
        <div>
          <p className="font-heading text-lg font-bold text-ink">Sign in, save more</p>
          <p className="mt-1 text-sm text-ink-soft">
            Save 10% or more at participating properties — look for the StayHub Plus label.
          </p>
          <div className="mt-3 flex gap-3">
            <Link
              to="/login"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-white"
            >
              Register
            </Link>
          </div>
        </div>
        <Gift className="h-16 w-16 flex-shrink-0 text-accent" strokeWidth={1.5} />
      </div>
    </section>
  );
}
