import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './content.module.css';

const everydayProjects = [
  {
    tag: 'Laser engraving',
    title: 'Phone details',
    description:
      'Personal marks, patterns, and artwork engraved on approved phone cases and compatible surfaces.',
  },
  {
    tag: 'Photo engraving',
    title: 'Photographs on wood',
    description:
      'Turn a photograph into a warm, tactile wooden print after a few useful material tests.',
  },
  {
    tag: 'Woodworking',
    title: 'Jewellery boxes',
    description:
      'Small boxes that teach measuring, joinery, finishing, and the astonishing power of a lid that fits.',
  },
  {
    tag: '3D printing',
    title: 'Guitar picks',
    description:
      'Prototype different shapes, thicknesses, and textures until one feels right in your hand.',
  },
  {
    tag: 'Woodworking',
    title: 'Dog houses',
    description:
      'A practical build involving structure, weather protection, sizing, and a highly opinionated end user.',
  },
  {
    tag: '3D printing',
    title: 'Crocs Jibbitz charms',
    description:
      'Tiny custom charms for hobbies, inside jokes, club identities, or just making your shoes unmistakably yours.',
  },
  {
    tag: 'Mixed media',
    title: 'Art and display pieces',
    description:
      'Combine digital fabrication, paint, light, textiles, electronics, or whatever the work actually needs.',
  },
  {
    tag: 'Product design',
    title: 'Headphone stands',
    description:
      'A compact exercise in proportion, stability, material choice, and making your desk less chaotic.',
  },
  {
    tag: 'Textiles',
    title: 'Custom dresses',
    description:
      'Develop a garment from pattern and fabric through fitting, construction, finishing, and personal detail.',
  },
  {
    tag: 'Embroidery',
    title: 'Stitched graphics',
    description:
      'Translate illustrations, lettering, and motifs into thread for clothing, patches, gifts, and experiments.',
  },
  {
    tag: 'Hybrid fabrication',
    title: '3D printing on fabric',
    description:
      'Explore flexible structures and raised forms printed directly onto prepared textile surfaces.',
  },
  {
    tag: 'Lighting + electronics',
    title: 'Lights for your room',
    description:
      'Build a lamp, ambient light, or responsive installation with an enclosure that belongs in the space.',
  },
];

const projects = [
  {
    tag: 'Environment + IoT',
    title: 'Indoor Air Quality Sensor Network',
    description:
      'Open-source sensor nodes track particulate matter, carbon dioxide, volatile organic compounds, temperature, and humidity, with a shared dashboard for campus-wide monitoring.',
  },
  {
    tag: 'Robotics + Open source',
    title: 'SLAM Robot',
    description:
      'An autonomous navigation system using depth cameras and stereoscopic vision, developed as an open-source Maker-in-Residence project.',
  },
  {
    tag: 'Biology + Custom instrument',
    title: 'Drosophila Thermal Maze',
    description:
      'A purpose-built apparatus for sleep and behaviour research, combining Peltier temperature control, an LED panorama, and infrared camera tracking.',
  },
  {
    tag: 'Education + 3D printing',
    title: 'IKS Jantar Mantar',
    description:
      'Parametric, 3D-printed reconstructions of Jantar Mantar instruments made for hands-on astronomy and science learning.',
  },
  {
    tag: 'Accessibility + Interaction',
    title: 'Dots: Tactile Dot Grid',
    description:
      'A refreshable tactile dot interface for accessible interaction, presented at HCII 2025 in Gothenburg.',
  },
  {
    tag: 'Community + Open design',
    title: 'DIY Air Purifier',
    description:
      'A low-cost, community-buildable air purifier using HEPA and activated-carbon filtration, refined through a second generation.',
  },
  {
    tag: 'Electronics + Production',
    title: 'Hexagon PCB',
    description:
      'A custom printed circuit board project designed for repeatable production and stronger in-house electronics capability.',
  },
];

export default function Projects(): ReactNode {
  return (
    <Layout title="Projects" description="Projects designed, built, tested, and shared through the Makerspace.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={clsx('container', styles.heroGrid)}>
            <p className={styles.eyebrow}>Project archive</p>
            <h1>Useful ideas, made real enough to test.</h1>
            <p className={styles.lead}>
              These projects move between electronics, fabrication, code,
              research, accessibility, and community use. None of them belong to
              a single machine or a single kind of maker.
            </p>
          </div>
        </header>

        <section className={styles.statsBand} aria-label="Project principles">
          <div className={clsx('container', styles.statsGrid)}>
            <div className={styles.stat}><strong>Build</strong><span>Turn the question into something testable.</span></div>
            <div className={styles.stat}><strong>Test</strong><span>Let the rough version tell you what is wrong.</span></div>
            <div className={styles.stat}><strong>Learn</strong><span>Ask people and evidence, not just your hunch.</span></div>
            <div className={styles.stat}><strong>Share</strong><span>Leave notes that help the next maker begin.</span></div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx('container', styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>Made for actual life</p>
              <h2>Small projects count.</h2>
              <p>
                Make something useful, personal, funny, beautiful, or all four.
                A project does not need a grant proposal to teach you a lot.
              </p>
            </div>
            <div className={styles.ideaGrid}>
              {everydayProjects.map((project) => (
                <article key={project.title} className={styles.idea}>
                  <p className={styles.tag}>{project.tag}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={clsx('container', styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>Larger builds from the space</p>
              <h2>Built across disciplines.</h2>
              <p>
                Projects get stronger when the right people, processes, and
                tools meet around a real problem.
              </p>
            </div>
            <div className={styles.itemGrid}>
              {projects.map((project) => (
                <article key={project.title} className={styles.item}>
                  <p className={styles.tag}>{project.tag}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx('container', styles.cta)}>
            <h2>Your first version can be embarrassingly small. That is still a version.</h2>
            <Link className={styles.primaryLink} to="/docs/making-guide">
              Plan a project
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
