import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-xl2 border border-gray-200 bg-white p-8 shadow-card">
        <div className="flex flex-col items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <h1 className="font-heading text-2xl font-bold text-ink">Sign in</h1>
          <p className="text-sm text-ink-muted">Welcome back to StayHub</p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-ink-soft">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <a href="#" className="font-medium text-primary hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2.5 font-semibold text-white transition-colors hover:bg-primary-light focus-ring"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-primary hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
