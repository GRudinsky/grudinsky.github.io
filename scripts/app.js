
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

// PROJECTS SECTION

const projectsContent = [
  {
    name: 'Find That Flight',
    imagePath: 'assets/images/project4.png',
    description: 'Flight ticket search app, built as final project at General Assembly.',
    urlLive: 'https://findthatflight.herokuapp.com/',
    urlGithub: 'https://github.com/GRudinsky/SEI-project-04'
  },
  {
    name: 'Rekordr',
    imagePath: 'assets/images/project3.png',
    description: 'Music collection organizing page, built as group project at General Assembly.',
    urlLive: 'https://rekordr.herokuapp.com/',
    urlGithub: 'https://github.com/GRudinsky/SEI-group-project'
  },
  {
    name: 'News On The Mews',
    imagePath: 'assets/images/project2.png',
    description: 'News aggregating website, built as pair-programming project at General Assembly.',
    urlLive: 'https://newsonthemews.herokuapp.com/',
    urlGithub: 'https://github.com/GRudinsky/sei-project-2'
  },
  {
    name: 'Pacman Game',
    imagePath: 'assets/images/project1.png',
    description: 'Pac-Man game, built as solo project at General Assembly.',
    urlLive: 'https://grudinsky.github.io/project-pacman/',
    urlGithub: 'https://github.com/GRudinsky/project-pacman'
  }
]

function appendProjects() {
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
    content.classList.add('project-content', 'text-white', 'hidden')
    content.addEventListener('mouseenter', toggleHidden)
    content.addEventListener('mouseleave', toggleHidden)
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
    liveLink.classList.add('live-link', 'devicon-heroku-original')
    liveLink.href = project.urlLive
    liveLink.target = '_blank'
    liveLink.rel = 'noreferrer'
    links.appendChild(liveLink)
  }
  )
}

function toggleHidden(e){
  e.target.classList.toggle('hidden')
}

document.addEventListener('DOMContentLoaded', () => {

  makeTextBlink('text-cursor')
  getDayTime('time-of-day', 'dayTime')
  getDayTime('time-of-week', 'weekDay')
  appendProjects()
})

