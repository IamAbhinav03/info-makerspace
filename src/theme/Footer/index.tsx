import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  ArrowUpRight,
  BookOpen,
  Hammer,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from 'lucide-react';

const exploreLinks = [
  {label: 'Start Here', to: '/docs/intro', icon: BookOpen},
  {label: 'Equipment', to: '/docs/equipment', icon: Hammer},
  {label: 'Safety', to: '/docs/code-of-conduct', icon: ShieldCheck},
  {label: 'Community', to: '/community', icon: Users},
];

export default function Footer(): ReactNode {
  const logo = useBaseUrl('/img/MS_Isometric_Dark@2x.png');

  return (
    <footer id="site-footer" className="maker-footer">
      <div className="container maker-footer__main">
        <div className="maker-footer__brand">
          <Link className="maker-footer__brand-link" to="/">
            <img src={logo} alt="" width="52" height="52" />
            <span>Makerspace</span>
          </Link>
          <p>
            Tools, people, and room to learn by making. Come curious. Leave
            with sawdust, a new skill, or at least a better question.
          </p>
        </div>

        <nav className="maker-footer__column" aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul className="maker-footer__links">
            {exploreLinks.map(({label, to, icon: Icon}) => (
              <li key={to}>
                <Link to={to}>
                  <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="maker-footer__column maker-footer__contact">
          <h2>Visit or write</h2>
          <a href="mailto:makerspace@ashoka.edu.in">
            <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
            <span>makerspace@ashoka.edu.in</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ashoka+University+Sonipat"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" size={20} strokeWidth={1.8} />
            <span>
              Ashoka University
              <small>AC06, 3rd Floor</small>
            </span>
            <ArrowUpRight
              className="maker-footer__external"
              aria-hidden="true"
              size={16}
            />
          </a>
        </div>
      </div>

      <div className="container maker-footer__bottom">
        <span>© {new Date().getFullYear()} Makerspace</span>
        <span>Mphasis AI &amp; Applied Tech Lab</span>
        <span>Measure twice. Make something odd.</span>
      </div>
    </footer>
  );
}
