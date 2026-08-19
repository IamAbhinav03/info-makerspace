import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const quickAccess = [
  {
    icon: '🛠',
    title: 'Equipment & Facility',
    description: 'Find machines, tools, and facilities available in the Makerspace.',
    link: '/docs/equipment',
  },
  {
    icon: '🔧',
    title: 'Projects',
    description: 'Explore projects that have been built in the Makerspace.',
    link: '/projects',
  },
  {
    icon: '📜',
    title: 'Code of Conduct',
    description: 'Read the rules and expectations for using the Makerspace.',
    link: '/docs/code-of-conduct',
  },
];

const equipment = [
  '3D Printers',
  'Laser Cutter',
  'Electronics',
  'CNC',
  'Soldering',
  'Hand Tools',
];

const projects = [
  {
    title: 'Split-Flap Display',
    description: 'An electromechanical display built at Makerspace.',
    link: '/projects/split-flap',
  },
  {
    title: 'Self-Balancing Cube',
    description: 'A reaction-wheel project exploring control and mechanics.',
    link: '/projects/self-balancing-cube',
  },
  {
    title: 'Future Project',
    description: 'More projects from the Makerspace project archive.',
    link: '/projects',
  },
];

function QuickAccessCard({
  icon,
  title,
  description,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
}): ReactNode {
  return (
    <Link to={link} className={styles.quickCard}>
      <div className={styles.quickIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.arrow}>Explore →</span>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Makerspace Handbook"
      description="Everything you need to know to make, build, and explore.">

      {/* HERO */}
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>MPHASIS AI AND APPLIED TECH LAB</p>

          <h1>MAKERSPACE HANDBOOK</h1>

          <p className={styles.heroTagline}>
            Everything you need to know to make, build, and explore.
          </p>

          <div className={styles.searchPlaceholder}>
            <span>⌕</span>
            <span>Search the Makerspace Handbook...</span>
          </div>
        </div>
      </header>

      <main>

        {/* QUICK ACCESS */}
        <section className={styles.section}>
          <div className="container">

            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>QUICK ACCESS</p>
              <h2>Find what you need.</h2>
            </div>

            <div className={styles.quickGrid}>
              {quickAccess.map((item) => (
                <QuickAccessCard key={item.title} {...item} />
              ))}
            </div>

          </div>
        </section>

        {/* CODE OF CONDUCT */}
        <section className={styles.conductSection}>
          <div className="container">

            <div className={styles.conductContent}>
              <div>
                <p className={styles.eyebrow}>BEFORE USING THE LAB</p>

                <h2>Code of Conduct</h2>

                <p>
                  Before using the Makerspace, please familiarize yourself
                  with the rules and expectations for using the space,
                  equipment, and shared facilities.
                </p>
              </div>

              <Link
                className={clsx('button', styles.darkButton)}
                to="/docs/code-of-conduct">
                Read the Code →
              </Link>
            </div>

          </div>
        </section>

        {/* EQUIPMENT */}
        <section className={styles.section}>
          <div className="container">

            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>EQUIPMENT & FACILITY</p>

              <h2>Explore the lab.</h2>

              <p>
                Find the machines, tools, and facilities available in the
                Makerspace.
              </p>
            </div>

            <div className={styles.equipmentGrid}>
  {equipment.map((item) => (
    <div
      key={item}
      className={styles.equipmentCard}>
      {item}
    </div>
  ))}
</div>

<div className={styles.centerLink}>
  <Link to="/docs/equipment">
    View all equipment →
  </Link>
</div>

          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.projectsSection}>
          <div className="container">

            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>PROJECT ARCHIVE</p>

              <h2>What has been built?</h2>

              <p>
                Explore projects created, developed, and documented in the
                Makerspace.
              </p>
            </div>

            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <Link
                  key={project.title}
                  to={project.link}
                  className={styles.projectCard}>

                  <div className={styles.projectImage}>
                    PROJECT IMAGE
                  </div>

                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <span>View project →</span>
                  </div>

                </Link>
              ))}
            </div>

            <div className={styles.centerLink}>
              <Link to="/projects">
                View all projects →
              </Link>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className={styles.aboutSection}>
          <div className="container">

            <p className={styles.eyebrow}>ABOUT MAKERSPACE</p>

            <h2>A space for making.</h2>

            <p>
              Makerspace is a space for students to design, build,
              experiment, and learn through making.
            </p>

            <Link
              className={styles.aboutLink}
              to="/about">
              Learn more about Makerspace →
            </Link>

          </div>
        </section>

      </main>

    </Layout>
  );
}