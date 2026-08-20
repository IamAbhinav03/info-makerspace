import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const waysIn = [
  {
    number: '01',
    eyebrow: 'Start safe',
    title: 'Get oriented',
    description:
      'Learn how the shared workshop works, complete the required training, and meet the people who can help.',
    link: '/docs/intro',
    linkLabel: 'Start here',
  },
  {
    number: '02',
    eyebrow: 'Choose a process',
    title: 'Find your tool',
    description:
      'Browse fabrication, electronics, textiles, computing, and visualisation equipment with manuals close at hand.',
    link: '/docs/equipment',
    linkLabel: 'Browse equipment',
  },
  {
    number: '03',
    eyebrow: 'Making is social',
    title: 'Find your people',
    description:
      'Meet student mentors, collaborators, resident makers, and partner communities who know things you do not. Yet.',
    link: '/community',
    linkLabel: 'Meet the network',
  },
  {
    number: '04',
    eyebrow: 'Leave a trail',
    title: 'Make, test, share',
    description:
      'Build the rough version, learn from it, then document enough that the next person can begin one step ahead.',
    link: '/projects',
    linkLabel: 'Explore projects',
  },
];

const capabilities = [
  '3D printing',
  'Laser cutting',
  'CNC',
  'Woodworking',
  'Textiles',
  'Electronics',
  'Creative computing',
  'Peer learning',
];

const communitySignals = [
  {value: '17', label: 'student mentors trained in peer leadership'},
  {value: '2,000+', label: 'students and community members reached'},
  {value: '91', label: 'universities represented at RedBrick Hacks III'},
];

const featuredProjects = [
  {
    type: 'Environment + IoT',
    title: 'Indoor Air Quality Sensor Network',
    description:
      'Open-source sensor nodes and a shared dashboard for real-time campus air-quality monitoring.',
  },
  {
    type: 'Robotics + Open source',
    title: 'SLAM Robot',
    description:
      'An autonomous navigation system built with depth cameras, stereoscopic vision, and publishable code.',
  },
  {
    type: 'Access + Interaction',
    title: 'Dots: Tactile Dot Grid',
    description:
      'A refreshable tactile interface that turns a careful prototype into a more accessible way to interact.',
  },
];

const faqs = [
  {
    question: 'Who can access the Makerspace?',
    answer:
      'The space is intended for Ashoka students, researchers, staff, and approved participants. Access depends on current lab hours, required inductions, and the kind of work you plan to do. Check with the Makerspace team before your first visit.',
  },
  {
    question: 'Do I need training before using a machine?',
    answer:
      'Yes. You must complete the required fire and safety training and a machine-specific primer before that machine is made available to you. A manual is useful, but it does not replace hands-on training.',
  },
  {
    question: 'Can I bring my own materials?',
    answer:
      'Usually, but ask first. Some materials release harmful fumes, damage tooling, or simply do not work with a particular process. The team can confirm what is approved before anything goes near a laser, printer, or cutting tool.',
  },
  {
    question: 'Are materials and consumables free?',
    answer:
      'Basic consumables may be available for learning and small tests. Larger projects, specialist materials, or repeated production runs may require you to supply materials or cover their cost. Confirm this before starting your build.',
  },
  {
    question: 'Can I use the space to repair something?',
    answer:
      'Absolutely, when the repair is safe and fits the tools available. Bring the object, explain what failed, and ask for guidance if you are unsure. Repair is one of the best ways to understand how things are made.',
  },
  {
    question: 'Do I need a finished idea before I visit?',
    answer:
      'No. A sketch, a broken object, a vague question, or simple curiosity is enough. Talk to a mentor or another maker and turn the fuzzy bit into a small first experiment.',
  },
  {
    question: 'Can I work alone?',
    answer:
      'That depends on the machine and your level of training. High-risk equipment may only be used during supervised hours. Many projects also get better faster when you ask the room what it thinks.',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Makerspace"
      description="A shared workshop at the Mphasis AI & Applied Tech Lab where people learn, build, repair, and make together.">
      <header className={styles.hero}>
        <div className={clsx('container', styles.heroInner)}>
          <p className={styles.kicker}>Mphasis AI &amp; Applied Tech Lab</p>
          <h1>A place to learn by making.</h1>
          <p className={styles.heroCopy}>
            Build an idea, repair what you already own, or learn how a machine
            works. The Makerspace makes tools, guidance, and a generous network
            of people accessible to everyone.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} to="/docs/intro">
              Start here
            </Link>
            <Link className={styles.textAction} to="/community">
              Meet the community
            </Link>
          </div>
        </div>
        <p className={styles.imageNote}>Ideas welcome. Perfection can wait outside.</p>
      </header>

      <main>
        <section className={styles.capabilityStrip} aria-label="Makerspace capabilities">
          <div className={styles.capabilityTrack}>
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={clsx('container', styles.introGrid)}>
            <p className={styles.sectionLabel}>The short version</p>
            <h2>A shared workshop for curious people at every skill level.</h2>
            <div className={styles.introCopy}>
              <p>
                Bring an idea, a broken thing, or simply a question. Learn from
                trained mentors and other makers, then leave with more confidence
                than you came in with.
              </p>
              <p>
                The point is not to already know. The point is to begin, test,
                improve, and help somebody else begin too.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.waysSection}>
          <div className="container">
            <div className={styles.waysHeading}>
              <p className={styles.sectionLabel}>Pick your way in</p>
              <p>Tools, people, and a sensible first step.</p>
            </div>

            <div className={styles.waysList}>
              {waysIn.map((item) => (
                <Link key={item.number} to={item.link} className={styles.wayRow}>
                  <span className={styles.wayNumber}>{item.number}</span>
                  <div>
                    <p>{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <p className={styles.wayDescription}>{item.description}</p>
                  <strong>{item.linkLabel}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.networkSection}>
          <div className={clsx('container', styles.networkGrid)}>
            <div className={styles.networkIntro}>
              <p className={styles.sectionLabel}>People make the space</p>
              <h2>Machines are useful. A network changes what is possible.</h2>
              <p>
                Making is a social practice. Student mentors, peers, resident
                makers, clubs, visiting speakers, and partner organisations bring
                knowledge into the room and send it back out again.
              </p>
              <Link to="/community">See how the network works</Link>
            </div>
            <div className={styles.signalList}>
              {communitySignals.map((signal) => (
                <div key={signal.label} className={styles.signalItem}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className="container">
            <div className={styles.projectsHeading}>
              <div>
                <p className={styles.sectionLabel}>Made through the network</p>
                <h2>Projects with a reason to exist.</h2>
              </div>
              <Link to="/projects">Explore all projects</Link>
            </div>
            <div className={styles.projectList}>
              {featuredProjects.map((project) => (
                <article key={project.title} className={styles.projectItem}>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.manifestoSection}>
          <div className={clsx('container', styles.manifestoGrid)}>
            <p className={styles.sectionLabel}>How we work</p>
            <blockquote>
              Try it. Ask for help. Learn what changed. Share what worked.
            </blockquote>
            <div>
              <p>
                Nobody is born knowing how to run a CNC router. Skill grows
                through careful practice, useful feedback, and people passing
                knowledge to one another face to face.
              </p>
              <Link to="/docs/making-guide">Read the making guide</Link>
            </div>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={clsx('container', styles.faqGrid)}>
            <div className={styles.faqIntro}>
              <p className={styles.sectionLabel}>General FAQ</p>
              <h2>Good questions, before the machine gets loud.</h2>
              <p>
                Access, training, materials, repairs, and the practical bits that
                are worth knowing before you arrive.
              </p>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closingSection}>
          <div className={clsx('container', styles.closingInner)}>
            <p className={styles.sectionLabel}>Your move</p>
            <h2>Bring your curiosity. The first rough version is allowed.</h2>
            <Link className={styles.primaryAction} to="/docs/intro">
              Plan your first visit
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
