import Button from '../../components/Button/Button'
import DownloadIcon from '../../components/icons/DownloadIcon'
import { experience, intro, links, studies, type TimelineEntry } from '../../content/about'
import styles from './AboutPage.module.css'

function Timeline({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardHeading}>{heading}</h2>
      <ul className={styles.timeline}>
        {entries.map((e) => (
          <li key={e.title + e.org}>
            <h3 className={styles.entryTitle}>{e.title}</h3>
            <p className={styles.meta}>{e.org}</p>
            {e.period && <p className={styles.meta}>{e.period}</p>}
            {e.detail && <p className={styles.detail}>{e.detail}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

// Desktop follows the wireframe: experience | about text | pictures.
// Mobile stacks the about text first.
function AboutPage() {
  return (
    <div className={styles.page}>
      <title>About Zakwaan</title>

      <section className={`${styles.card} ${styles.about}`}>
        <h1 className={styles.heading}>About me</h1>
        <p className={styles.intro}>{intro}</p>
      </section>


      <div className={styles.experience}>
        <Timeline heading="Work Experience" entries={experience} />
        <Timeline heading="Studies" entries={studies} />
        <div className={styles.cv}>
          <Button href={links.cv} download size='sm'>
            <DownloadIcon size={16} /> Download CV
          </Button>
        </div>
      </div>

    </div>
  )
}

export default AboutPage
