// Text for the About page. Never describe MWSC internship systems here (no internals, no screenshots).
// Phone number and references from the CV stay off the site.

export type TimelineEntry = {
  title: string
  org: string
  period?: string
  detail?: string
}

// Blank lines become paragraph breaks
export const intro = `I'm a final-year Software Engineering student at Asia Pacific University, based in Malé, Maldives. I like building things end to end: React frontends, APIs in Spring Boot and Express, and getting them running on AWS.

My final year project, CoralLineage, brings that together with machine learning: a tracked, reproducible workflow for annotating coral reef images.

Before software, I worked as a dental assistant.`

export const experience: TimelineEntry[] = [
  {
    title: 'Application Development Intern',
    org: 'Malé Water and Sewerage Company (MWSC)',
    period: 'Oct 2025 – Jan 2026',
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
