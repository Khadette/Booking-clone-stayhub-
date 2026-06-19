import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Signup() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-xl2 border border-gray-200 bg-white p-8 shadow-card">
        <div className="flex flex-col items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <h1 className="font-heading text-2xl font-bold text-ink">Create your account</h1>
          <p className="text-sm text-ink-muted">It only takes a minute</p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Full name</span>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Email address</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Password</span>
            <input
              type="password"
              required
              placeholder="At least 8 characters"
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>

          <label className="flex items-start gap-2 text-sm text-ink-soft">
            <input type="checkbox" required className="mt-0.5 accent-primary" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-accent py-2.5 font-bold text-primary-dark transition-colors hover:bg-accent-dark focus-ring"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-muted">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
