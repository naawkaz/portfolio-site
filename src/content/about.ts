// Text for the About page. Never describe MWSC internship systems here (no internals, no screenshots).
// Phone number and references from the CV stay off the site.

export type TimelineEntry = {
  title: string
  org: string
  period?: string
  detail?: string
}

// Blank lines become paragraph breaks
export const intro = `I'm a Software Engineering student graduate from Asia Pacific University. I like building end to end applications. Specifically React frontends, APIs in Spring Boot and Postgres databases.

I brought that together in my final year project, CoralLineage, with machine learning to produce a reproducible workflow for annotating coral reef images.`

export const experience: TimelineEntry[] = [
  {
    title: 'Application Development Intern',
    org: 'Malé Water and Sewerage Company (MWSC)',
    period: 'Oct 2025 - Jan 2026',
    detail: 'Built Flutter screens for internal systems, working alongside a .NET backend.',
  },
  // {
  //   title: 'Dental Assistant',
  //   org: 'Master Dental Care Centre',
  //   period: 'Jan 2022 – Aug 2023',
  // },
]

export const studies: TimelineEntry[] = [
  {
    title: 'BSc (Hons) Software Engineering',
    org: 'Asia Pacific University of Technology & Innovation',
    period: 'Nov 2023 - Jan 2027 (expected)',
    detail: 'CGPA 3.67 / 4.00',
  },
  // {
  //   title: 'MY5G Ericsson Malaysia Pioneers Programme',
  //   org: 'Certificate',
  // },
  {
    title: 'Edexcel A-Levels',
    org: 'Center for Higher Secondary Education',
    period: '2021',
    detail: '5A 1B'
  },
]

export const links = {
  github: 'https://github.com/naawkaz',
  linkedin: 'https://www.linkedin.com/in/zakwaan',
  email: 'ahmedzakwaanshareef@gmail.com',
  cv: '/zakwaan-shareef-cv.pdf', // Put the file in public/ with this name
}
