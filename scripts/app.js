// DATA SECTION

// SKILLS DATA
const devIcons = [
  {
    name: 'Apple',
    class: 'devicon-apple-original'
  },
  {
    name: 'Atom',
    class: 'devicon-atom-original'
  },
  {
    name: 'Babel',
    class: 'devicon-babel-plain'
  },
  {
    name: 'Chrome',
    class: 'devicon-chrome-plain'
  },
  {
    name: 'CSS3',
    class: 'devicon-css3-plain'
  },
  {
    name: 'Django',
    class: 'devicon-django-plain'
  },
  {
    name: 'Express',
    class: 'devicon-express-original'
  },
  {
    name: 'Git',
    class: 'devicon-git-plain'
  },
  {
    name: 'GitHub',
    class: 'devicon-github-plain'
  },
  {
    name: 'Heroku',
    class: 'devicon-heroku-original'
  },
  {
    name: 'HTML5',
    class: 'devicon-html5-plain'
  },
  {
    name: 'JavaScript',
    class: 'devicon-javascript-plain'
  },
  {
    name: 'Mocha',
    class: 'devicon-mocha-plain'
  },
  {
    name: 'MongoDB',
    class: 'devicon-mongodb-plain'
  },
  {
    name: 'Node.js',
    class: 'devicon-nodejs-plain'
  },
  {
    name: 'PostgreSQL',
    class: 'devicon-postgresql-plain'
  },
  {
    name: 'Python',
    class: 'devicon-python-plain'
  },
  {
    name: 'React',
    class: 'devicon-react-original'
  },
  {
    name: 'Sass',
    class: 'devicon-sass-original'
  },
  {
    name: 'Webpack',
    class: 'devicon-webpack-plain'
  },
  {
    name: 'VSCode',
    class: 'devicon-visualstudio-plain'
  },
  {
    name: 'Slack',
    class: 'devicon-slack-plain'
  }
]

// PROFILE IMAGES
const profileImages = ['assets/images/BGA_1427.jpg', 'assets/images/BGA_1428.jpg', 'assets/images/BGA_1429.jpg', 'assets/images/BGA_1430.jpg', 'assets/images/BGA_1431.jpg', 'assets/images/BGA_1432.jpg', 'assets/images/BGA_1433.jpg', 'assets/images/BGA_1434.jpg']

// PROJECTS DATA

const projectsContent = [
  {
    name: 'Find That Flight',
    imagePath: 'assets/images/project4.png',
    description: 'Flight ticket search app, built as final solo project at General Assembly.',
    tools: 'HTML | SCSS | JavaScript | React | Python | Django | PostgreSQL | MapBoxGL | External API\'s',
    urlLive: 'https://findthatflight.herokuapp.com/',
    urlGithub: 'https://github.com/GRudinsky/SEI-project-04'
  },
  {
    name: 'Rekordr',
    imagePath: 'assets/images/project3.png',
    description: 'Music collection organizing page, built as group project at General Assembly.',
    tools: 'HTML | SCSS | JavaScript | React | Node.js | MongoDB | Deezer API',
    urlLive: 'https://rekordr.herokuapp.com/',
    urlGithub: 'https://github.com/GRudinsky/SEI-group-project'
  },
  {
    name: 'News On The Mews',
    imagePath: 'assets/images/project2.png',
    description: 'News aggregating website, built as pair-programming project at General Assembly.',
    tools: 'HTML | SCSS | JavaScript | React | NewsAPI',
    urlLive: 'https://newsonthemews.herokuapp.com/',
    urlGithub: 'https://github.com/GRudinsky/sei-project-2'
  },
  {
    name: 'Pacman Game',
    imagePath: 'assets/images/project1.png',
    description: 'Pac-Man game, built as solo project at General Assembly.',
    tools: 'HTML | CSS | JavaScript',
    urlLive: 'https://grudinsky.github.io/project-pacman/',
    urlGithub: 'https://github.com/GRudinsky/project-pacman'
  }
]

// CONTACTS DATA

const contactsContent = [
  {
    name: 'linkedIn',
    href: 'https://www.linkedin.com/in/giedrius-rudzianskas/',
    class: 'fab fa-linkedin'
  },
  {
    name: 'email',
    href: 'mailto:g.rudzianskas@gmail.com',
    class: 'fas fa-envelope-square'
  },
  {
    name: 'github',
    href: 'https://github.com/grudinsky',
    class: 'fab fa-github-square'
  }
]

// LANDING PAGE

function makeTextBlink(arg) {
  const f = document.getElementById(arg)
  setInterval(() => {
    f.style.visibility = (f.style.visibility === 'hidden' ? 'visible' : 'hidden')
  }, 500)
}

function getDayTime(idName, content) {
  const f = document.getElementById(idName)
  const t = new Date()
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayHours = t.getHours()
  const dayTime = dayHours < 12 ? 'morning' : (dayHours > 12 && dayHours < 17 ? 'afternoon' : 'evening')
  f.innerHTML = content === 'weekDay' ? weekDays[t.getDay()] : (content === 'dayTime' ? dayTime : 'day')
  return f.innerHTML
}
// ABOUT SECTION

function displayProfileImage() {
  const container = document.getElementById('profile-wrapper')
  const headshot = document.createElement('div')
  headshot.addEventListener('mouseenter', changeImages)
  headshot.classList.add('headshot')
  container.appendChild(headshot)
}
function changeImages() {
  const f = document.querySelector('.headshot')
  profileImages.forEach((image, i) => {
    setTimeout(() => {
      f.style.backgroundImage = `url(${image})`
    }, i * 100)
  })
}

function displayIcons() {
  const iconsContainer = document.getElementById('devicons-wrapper')
  devIcons.forEach(icon => {
    const iconContainer = document.createElement('div')
    iconContainer.addEventListener('mouseenter', toggleHiddenChild)
    iconContainer.addEventListener('mouseleave', toggleHiddenChild)
    iconsContainer.appendChild(iconContainer)
    const devIcon = document.createElement('div')
    devIcon.classList.add(icon.class, 'icon')
    iconContainer.appendChild(devIcon)
    const name = document.createElement('div')
    name.classList.add('icon-name', 'hidden')
    name.innerHTML = icon.name
    iconContainer.appendChild(name)
  })
}

// PROJECTS SECTION

function displayProjects() {
  const grid = document.getElementById('projects-wrapper')
  projectsContent.forEach(project => {

    const element = document.createElement('div')
    element.style.backgroundImage = `url(${project.imagePath})`
    element.classList.add('project-card')
    grid.appendChild(element)

    // const title = document.createElement('div')
    // title.innerHTML = project.name
    // title.classList.add('project-title', 'red-background')
    // grid.appendChild(title)

    const content = document.createElement('div')
    content.classList.add('project-content', 'text-white')
    element.appendChild(content)

    const description = document.createElement('p')
    description.classList.add('project-description')
    content.appendChild(description)
    description.textContent = project.description

    const links = document.createElement('div')
    links.classList.add('project-links')
    content.appendChild(links)

    const githubLink = document.createElement('A')
    githubLink.classList.add('github-link', 'devicon-github-plain')
    githubLink.href = project.urlGithub
    githubLink.target = '_blank'
    githubLink.rel = 'noreferrer'
    links.appendChild(githubLink)

    const liveLink = document.createElement('A')
    liveLink.classList.add('live-link', (project.urlLive.slice(18, 24) === 'github' ? 'devicon-github-plain' : 'devicon-heroku-original'))
    liveLink.href = project.urlLive
    liveLink.target = '_blank'
    liveLink.rel = 'noreferrer'
    links.appendChild(liveLink)

    const tools = document.createElement('P')
    tools.classList.add('project-description')
    content.appendChild(tools)
    tools.textContent = project.tools
  }
  )
}

function toggleHiddenChild(e){
  e.target.lastChild.classList.toggle('hidden')
}
// CONTACTS SECTION

function displayContacts() {
  const container = document.getElementById('contacts-wrapper')
  contactsContent.forEach(contact => { 
    const element = document.createElement('a')
    element.classList.add(contact.class.slice(0, 3), contact.class.slice(4), 'contact-link')
    element.href = contact.href
    element.target = '_blank'
    element.rel = 'noreferrer'
    container.appendChild(element)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  makeTextBlink('top-arrow')
  makeTextBlink('text-cursor')
  getDayTime('time-of-day', 'dayTime')
  // getDayTime('time-of-week', 'weekDay')
  displayProfileImage()
  displayIcons()
  displayProjects()
  displayContacts()
})

