import Button from '../../components/Button/Button'
import GitHubIcon from '../../components/icons/GitHubIcon'
import LinkedInIcon from '../../components/icons/LinkedInIcon'
import MailIcon from '../../components/icons/MailIcon'
import { experience, intro, links, studies, type TimelineEntry } from '../../content/about'
import styles from './AboutPage.module.css'

function Timeline({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <section className={styles.card}>
      <h2>{heading}</h2>
      {entries.map((e) => (
        <div key={e.title + e.org} className={styles.entry}>
          <h3>{e.title}</h3>
          <p className={styles.meta}>
            {e.org} · {e.period}
          </p>
          {e.detail && <p>{e.detail}</p>}
        </div>
      ))}
    </section>
  )
}

function AboutPage() {
  return (
    <div className={styles.page}>
      <title>About · Ahmed Zakwaan</title>
      <div className={styles.main}>
        <h1>About</h1>
        <p>{intro}</p>
        <div className={styles.links}>
          <a href={links.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          )}
          {links.email && (
            <a href={`mailto:${links.email}`}>
              <MailIcon /> Contact
            </a>
          )}
        </div>
        <Timeline heading="Work Experience" entries={experience} />
        <Timeline heading="Studies" entries={studies} />
        <div>
          <Button href={links.cv} download>
            Download CV
          </Button>
        </div>
      </div>
      <aside className={styles.side}>
        {/* TODO: picture carousel; music card still undecided */}
        <div className={styles.placeholder} />
      </aside>
    </div>
  )
}

export default AboutPage
