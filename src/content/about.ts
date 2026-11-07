// Text for the About page. Never describe MWSC internship systems here (no internals, no screenshots).

export type TimelineEntry = {
  title: string
  org: string
  period: string
  detail?: string
}

export const intro = 'TODO: a short paragraph about you.'

export const experience: TimelineEntry[] = [
  { title: 'TODO: role', org: 'TODO: organisation', period: 'TODO' },
]

export const studies: TimelineEntry[] = [
  { title: 'TODO: degree name', org: 'Asia Pacific University (APU)', period: 'TODO' },
]

export const links = {
  github: 'https://github.com/naawkaz',
  linkedin: '', // TODO
  email: '', // TODO: used as mailto:
  cv: '/zakwaan-shareef-cv.pdf', // Put the file in public/ with this name
}
