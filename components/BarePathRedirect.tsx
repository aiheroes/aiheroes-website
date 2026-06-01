import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { resolveBarePath } from '../utils/routing';
import { NotFound } from '../pages/NotFound';

/**
 * Catch-all for unmatched routes. If the URL is prefix-less (no /nl or /en) we
 * redirect it to the correct language-prefixed page; truly unknown URLs fall
 * through to the 404 page.
 *
 * This gives the whole site one rule: a real page resolves whether or not the
 * visitor typed the language prefix (e.g. /over-ons -> /nl/over-ons,
 * /about -> /en/about, /ai-salon -> /nl|en/ai-salon based on preference).
 */
export const BarePathRedirect: React.FC = () => {
  const location = useLocation();
  const target = resolveBarePath(location.pathname);

  if (target) {
    return <Navigate to={`${target}${location.search}${location.hash}`} replace />;
  }
  return <NotFound />;
};
