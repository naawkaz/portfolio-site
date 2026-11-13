// Single source of truth for the home grid and /projects/:slug.
// Images: thumbnail/diagram are URL paths to files in public/ (public/thumbnails, public/diagrams).
// Files in public/ are served as they are, with no fingerprinting.

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
    blurb: 'Version-controlled, semi-automated coral image annotation',
    description:
      'My final year project. It establishes a semi-automated coral annotation workflow. Every dataset version and training run is tracked, so any model can be traced back to the exact data it learned from and the images that it annotated',
    categories: ['ML', 'Full stack'],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Flask', 'PyTorch', 'DVC', 'MLflow', 'Docker Compose'],
    github: 'https://github.com/naawkaz/corallineage',
    thumbnail: '/thumbnails/corallineage_thumb.png',
    diagram: '/diagrams/corallineage_diagram.png',
    decisions: [
      'Split into three services: React frontend, Spring Boot API, and a Flask + PyTorch ML service. This allows ML stack to stay separate from the Java backend',
      'Dataset versioning module that tracks annotation dataset versions and allows comparisons between them',
      'Model registry that keeps record of metadata, training dataset version, and performance metrics for each model version',
      'Semi-automated image annotation pipeline for when importing images',
    ],
  },
  {
    slug: 'rescuenet',
    title: 'RescueNet',
    blurb: 'Serverless disaster relief platform on AWS',
    description:
      'A disaster relief management system built for a cloud development assessment. It incorporates public, volunteer, organisation and admin user roles during an emergencies, and runs as serverless services on AWS',
    categories: ['Cloud', 'Full stack'],
    stack: ['React', 'Express', 'PostgreSQL', 'AWS Lambda', 'API Gateway', 'RDS', 'SNS', 'AWS SAM'],
    role: 'Public Module \n Deploying Services',
    github: 'https://github.com/Legendary-Phoenix/RescueNet-Disaster-Relief-Management-System',
    thumbnail: '/thumbnails/rescuenet_thumb.png',
    diagram: '/diagrams/rescuenet_diagram.png',
    decisions: [
      'Five Express services (auth, admin, organisation, volunteer and public), each running as its own Lambda behind one API Gateway and defined in a single SAM template',
      'Public module is read-only',
      'The Lambdas run inside the VPC to reach RDS, so an SNS interface endpoint lets them publish emergency announcements without a NAT gateway',
    ],
  },
  {
    slug: 'coral-classification',
    title: 'Coral Classification',
    blurb: 'CNN vs DNN for classifying coral reef images',
    description:
      'Classifies expert point annotations from the Moorea Labeled Corals 2010 dataset into six groups, such as hard coral, sand and macroalgae, comparing a convolutional network with a fully connected one, both trained from scratch. CNN came out ahead while using about a fifth of the DNN\'s parameters',
    categories: ['ML'],
    stack: ['Python', 'TensorFlow', 'Keras Tuner', 'OpenCV', 'scikit-learn', 'pandas'],
    github: 'https://github.com/naawkaz/coral_classification',
    thumbnail: '/thumbnails/coral_classification_thumb.png',
    diagram: '/diagrams/coral_classification_diagram.png',
    decisions: [
      'Train, validation and test split is grouped by image for accurate splitting',
      'Classes were heavily skewed, so the common class was undersampled, rare ones oversampled, and models were chosen by balanced accuracy instead of plain accuracy',
      'Augmentation lives inside the model, so it runs only during training, and both models were tuned with Keras Tuner',
    ],
  },
  {
    slug: 'portfolio-site',
    title: 'Portfolio website',
    blurb: 'This site: React on S3 and CloudFront, deployed by GitHub Actions',
    description:
      'A static React build hosted on AWS, with HTTPS and automatic deploys',
    categories: ['Cloud'],
    stack: ['React', 'TypeScript', 'Vite', 'S3', 'CloudFront', 'ACM', 'GitHub Actions'],
    github: 'https://github.com/naawkaz/portfolio-site',
    live: 'https://ahmedzakwaan.site',
    decisions: [
      'A private S3 bucket behind CloudFront with Origin Access Control. Bucket is never public and HTTPS comes from an ACM certificate',
      'GitHub Actions deploys through OIDC',
    ],
  },
  {
    slug: 'file-sorter',
    title: 'File Sorter',
    blurb: 'Desktop app that sorts files into folders by extension',
    description:
      'Windows Forms app that sorts a folder by moving files into subfolders based on their extensions, using rules that the user can save and reuse',
    categories: ['Desktop'],
    stack: ['C#', '.NET', 'WinForms'],
    github: 'https://github.com/naawkaz/File-Sorter',
    thumbnail: '/thumbnails/filesorter_thumb.png',
    decisions: [
      'Parallelization used in sorting',
      'Presets save sets of folders and extensions',
      'Undo option to undo a sort',
    ],
  },
  {
    slug: 'higher-or-lower',
    title: 'Higher or Lower',
    blurb: 'Java Swing card game for a design patterns assignment',
    description:
      'A Higher or Lower card game in Java Swing, built for a design patterns assignment comparing a simple implementation with one structured around maintainability-focused patterns',
    categories: ['Desktop'],
    stack: ['Java', 'Swing', 'Maven'],
    github: 'https://github.com/naawkaz/HigherOrLower',
    thumbnail: '/thumbnails/highlow_thumb.png',
    decisions: [],
  },
]

export function findProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug)
}
