import {useEffect, type ReactNode} from 'react';

type RootProps = {
  children: ReactNode;
};

export default function Root({children}: RootProps): ReactNode {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-theme-choice', 'light');

    try {
      localStorage.removeItem('theme');
    } catch {
      // Storage may be unavailable in privacy-restricted browser contexts.
    }
  }, []);

  return children;
}
