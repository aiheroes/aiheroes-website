// Drop-in shim for react-router-dom so the existing React components (Navbar, Hero,
// Services, Footer, HomePage, …) can be reused as Astro islands WITHOUT a Router.
// Aliased to "react-router-dom" in astro.config.mjs. Links become real <a> tags
// (full-page navigation, smoothed by Astro's View Transitions); navigation hooks
// fall back to window.location. SSR-safe.
import React from 'react';

type AnyProps = Record<string, any>;

export function Link({ to, children, ...rest }: AnyProps) {
  const href = typeof to === 'string' ? to : (to && to.pathname) || '#';
  return React.createElement('a', { href, ...rest }, children);
}

export const NavLink = Link;

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== 'undefined' && typeof to === 'string') window.location.assign(to);
  };
}

const SSR_LOCATION = { pathname: '/', hash: '', search: '', state: null, key: 'default' };

// Hydration-safe: returns the SSR value ('/') on the server AND the first client
// render so the two match, then updates to the real URL after mount. Without this,
// components that branch on pathname (Footer contact link, language switcher) render
// different HTML on server vs client and trigger a hydration mismatch that makes
// React regenerate the whole island — which breaks the navbar's hover handlers.
// These islands have no client-side routing, so a one-time post-mount update is enough.
export function useLocation() {
  const [loc, setLoc] = React.useState(SSR_LOCATION);
  React.useEffect(() => {
    setLoc({
      pathname: window.location.pathname,
      hash: window.location.hash,
      search: window.location.search,
      state: null,
      key: 'default',
    });
  }, []);
  return loc;
}

export function useParams() {
  return {} as Record<string, string>;
}

export function useSearchParams() {
  const params =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const setParams = () => {};
  return [params, setParams] as const;
}

export function Navigate({ to }: AnyProps) {
  if (typeof window !== 'undefined' && typeof to === 'string') window.location.assign(to);
  return null;
}

// Router wrappers are no-ops in island context.
export function BrowserRouter({ children }: AnyProps) {
  return children;
}
export const MemoryRouter = BrowserRouter;
export function Routes({ children }: AnyProps) {
  return children;
}
export function Route() {
  return null;
}
