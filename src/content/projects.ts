// Single source of truth for the home grid and /projects/:slug.
// Images: put them in src/assets/projects/<slug>/, import them here and set
// thumbnail/diagram, so Vite fingerprints them.

export type Category = 'ML' | 'Cloud' | 'Full stack' | 'Desktop'

export type Project = {
  slug: string
  title: string
  blurb: string // One line, shown on the tile
  description: string // Longer intro on the project page
  categories: Category[]
  stack: string[]
  role?: string // For team projects: what you built
  github?: string
  live?: string // Live button is hidden when this is missing
  thumbnail?: string
  diagram?: string // Architecture diagram for "How it was built"
  decisions: string[] // Key decisions for "How it was built"
}

export const projects: Project[] = [
  {
    slug: 'corallineage',
    title: 'CoralLineage',
    blurb: 'TODO: one-line description',
    description: 'TODO: Final year project.',
    categories: ['ML', 'Full stack'],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Flask', 'PyTorch', 'DVC', 'MLflow', 'Docker Compose'],
    github: 'https://github.com/naawkaz/corallineage',
    decisions: [],
  },
  {
    slug: 'rescuenet',
    title: 'RescueNet',
    blurb: 'TODO: one-line description',
    description: 'TODO: Disaster relief management system, team coursework.',
    categories: ['Cloud', 'Full stack'],
    stack: ['React', 'Express', 'PostgreSQL', 'AWS Lambda', 'API Gateway', 'RDS', 'SNS', 'AWS SAM'],
    role: 'Team of 4. I built the public module.',
    github: 'https://github.com/Legendary-Phoenix/RescueNet-Disaster-Relief-Management-System',
    decisions: [],
  },
  {
    slug: 'coral-classification',
    title: 'Coral Classification',
    blurb: 'TODO: one-line description',
    description: 'TODO: CNN vs DNN comparison.',
    categories: ['ML'],
    stack: ['TODO'],
    github: 'https://github.com/naawkaz/coral_classification',
    decisions: [],
  },
  {
    slug: 'higher-or-lower',
    title: 'Higher or Lower',
    blurb: 'TODO: one-line description',
    description: 'TODO',
    categories: ['Desktop'],
    stack: ['Java', 'Swing', 'SonarQube'],
    github: 'https://github.com/naawkaz/HigherOrLower',
    decisions: [],
  },
  {
    slug: 'file-sorter',
    title: 'File Sorter',
    blurb: 'TODO: one-line description',
    description: 'TODO',
    categories: ['Desktop'],
    stack: ['C#', '.NET', 'WinForms'],
    decisions: [],
  },
  {
    slug: 'portfolio-site',
    title: 'This portfolio',
    blurb: 'TODO: one-line description',
    description: 'TODO',
    categories: ['Cloud'],
    stack: ['React', 'Vite', 'TypeScript', 'S3', 'CloudFront', 'GitHub Actions'],
    github: 'https://github.com/naawkaz/portfolio-site',
    live: 'https://ahmedzakwaan.site',
    decisions: [],
  },
]

export function findProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug)
}
