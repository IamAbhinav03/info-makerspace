import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./content.module.css";

const visitSteps = [
  {
    number: "01",
    title: "Walk in or send a note",
    description:
      "Drop by AC06 on the third floor, or email a sentence, sketch, repair photo, or half-formed question. That is plenty to begin.",
  },
  {
    number: "02",
    title: "Confirm access and training",
    description:
      "Check current access arrangements, complete fire and safety training, and book the relevant machine primer before planning around equipment.",
  },
  {
    number: "03",
    title: "Ask who else should be in the conversation",
    description:
      "A student mentor, resident maker, researcher, club, or external partner may already know the awkward bit you are stuck on.",
  },
];

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact"
      description="Contact and visit information for the Makerspace at Ashoka University."
    >
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={clsx("container", styles.heroGrid)}>
            <p className={styles.eyebrow}>Contact</p>
            <h1>Tell us what you are trying to make, fix, or figure out.</h1>
            <p className={styles.lead}>
              You do not need a polished proposal. Send the useful facts,
              mention any deadline, and be honest about what you do and do not
              know.
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <div className={clsx("container", styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>Find the space</p>
              <h2>Walk in or write.</h2>
              <p>
                Come by for a conversation, or email before a time-sensitive
                visit or when you need a specific machine.
              </p>
            </div>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <strong>Email</strong>
                <p>
                  <a href="mailto:makerspace@ashoka.edu.in">
                    makerspace@ashoka.edu.in
                  </a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <strong>Location</strong>
                <address>
                  Ashoka University
                  <br />
                  AC06, 3rd Floor
                </address>
              </div>
              <div className={styles.contactItem}>
                <strong>Good reasons to write</strong>
                <p>
                  First visits, project guidance, repair questions, equipment
                  access, training, events, collaborations, community outreach,
                  and Maker-in-Residence enquiries.
                </p>
              </div>
              <div className={styles.contactItem}>
                <strong>Before using a machine</strong>
                <p>
                  Complete the required fire and safety training and the
                  machine-specific primer. Manuals are preparation, not
                  permission.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={clsx("container", styles.sectionGrid)}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>First visit</p>
              <h2>Make the first conversation useful.</h2>
            </div>
            <div className={styles.steps}>
              {visitSteps.map((step) => (
                <div key={step.number} className={styles.step}>
                  <strong>{step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx("container", styles.cta)}>
            <h2>
              Need a tool manual first? The sensible rabbit hole is organised.
            </h2>
            <Link className={styles.primaryLink} to="/docs/equipment">
              Browse equipment
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
