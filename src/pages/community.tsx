import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './content.module.css';

const communityRoles = [
  {
    tag: 'Peer learning',
    title: 'Student mentors',
    description:
      'Trained student mentors help newcomers find a first step, share practical knowledge, and grow into peer leaders themselves.',
  },
  {
    tag: 'Deep practice',
    title: 'Makers-in-Residence',
    description:
      'Resident makers bring sustained engineering and design practice into the space while building ambitious, openly shared projects alongside the Lab.',
  },
  {
    tag: 'Beyond campus',
    title: 'Outreach and open events',
    description:
      'School programmes, community builds, talks, hackathons, and demonstrations connect campus makers with a wider public culture of learning by doing.',
  },
];

const partners = [
  {
    tag: 'Hackathons + educational grants',
    title: 'Param Foundation',
    description:
      'A partner for co-hosted hackathons, educational support, and collaboration around public exhibit space in Delhi.',
  },
  {
    tag: 'Student maker community',
    title: 'TinkerHub Foundation',
    description:
      'A Kochi-based maker community sharing experience with challenge-led hackathons and student participation.',
  },
  {
    tag: 'Makerspace development',
    title: 'Maker Bhavan Foundation',
    description:
      'An advisory and event collaborator supporting Makerspace development and strengthening the wider maker ecosystem.',
  },
  {
    tag: 'Research connection',
    title: 'Stanford University',
    description:
      'A connection formed when the RedBrick Hacks III Outstanding Award team was selected for research collaboration with Prof. Manu Prakash\'s lab.',
  },
];

const events = [
  {
    number: '01',
    title: 'Talks and fireside conversations',
    description:
      'Kailash Nadh\'s “Tinker Thinker Maker Mover” session brought more than 100 people together around a life spent building.',
  },
  {
    number: '02',
    title: 'Hacktoberfest',
    description:
      'Open-source contributions, OSINT, and custom projects created more than 240 interactions in the 2025 edition.',
  },
  {
    number: '03',
    title: 'Cross-campus collaborations',
    description:
      'A Halloween build with Ashoka\'s student Cultural Ministry reached roughly 1,000 participants.',
  },
  {
    number: '04',
    title: 'RedBrick Hacks III',
    description:
      'More than 430 applicants from 91 universities led to 60 on-campus finalists and new relationships beyond the event itself.',
  },
];

export default function Community(): ReactNode {
  return (
    <Layout title="Community" description="The people, programmes, events, and partners that make the Makerspace a network.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={clsx('container', styles.heroGrid)}>
            <p className={styles.eyebrow}>The maker network</p>
            <h1>You do not have to know everything. You do need people to ask.</h1>
            <p className={styles.lead}>
              A makerspace is more than a room full of machines. It is a network
              where skills travel between students, mentors, researchers,
              residents, clubs, schools, and partner communities.
            </p>
          </div>
        </header>

        <section className={styles.statsBand} aria-label="Community reach">
          <div className={clsx('container', styles.statsGrid)}>
            <div className={styles.stat}><strong>17</strong><span>student mentors trained in peer leadership</span></div>
            <div className={styles.stat}><strong>2,000+</strong><span>students and community members reached</span></div>
            <div className={styles.stat}><strong>800+</strong><span>first-year students engaged through Orientation Week</span></div>
            <div className={styles.stat}><strong>91</strong><span>universities represented at RedBrick Hacks III</span></div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx('container', styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>How it works</p>
              <h2>Knowledge moves through the room.</h2>
              <p>
                Experienced makers support emerging makers, and today\'s beginner
                can become tomorrow\'s mentor.
              </p>
            </div>
            <div className={styles.itemGrid}>
              {communityRoles.map((role) => (
                <article key={role.title} className={styles.item}>
                  <p className={styles.tag}>{role.tag}</p>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={clsx('container', styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>The wider circle</p>
              <h2>Partners make the map larger.</h2>
              <p>
                These relationships connect campus projects with maker networks,
                grants, events, advice, and research opportunities elsewhere.
              </p>
            </div>
            <div className={styles.itemGrid}>
              {partners.map((partner) => (
                <article key={partner.title} className={styles.item}>
                  <p className={styles.tag}>{partner.tag}</p>
                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx('container', styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>Gather and make</p>
              <h2>Events are working sessions with more chairs.</h2>
            </div>
            <div className={styles.steps}>
              {events.map((event) => (
                <div key={event.number} className={styles.step}>
                  <strong>{event.number}</strong>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={clsx('container', styles.cta)}>
            <h2>Bring a question. Leave with three names and a next step.</h2>
            <Link className={styles.primaryLink} to="/contact">
              Get connected
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
