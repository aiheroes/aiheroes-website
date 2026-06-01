import React from 'react';
import { Navigate } from 'react-router-dom';
import { detectVisitorLang } from '../utils/routing';

/**
 * Contact is the #contact section on the homepage, not a standalone page.
 * A prefix-less /contact resolves to the right homepage anchor based on the
 * visitor's language preference. The language-prefixed /nl/contact and
 * /en/contact are handled by plain <Navigate> routes in App.tsx.
 */
export const ContactRedirect: React.FC = () => {
  const target = detectVisitorLang() === 'en' ? '/en#contact' : '/#contact';
  return <Navigate to={target} replace />;
};
