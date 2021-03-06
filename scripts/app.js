document.addEventListener('DOMContentLoaded', () => {

  ////////////////////////////// DATA SECTION ///////////////////////////////

  // SKILLS DATA
  const devIcons = [
    {
      name: 'HTML5',
      class: 'devicon-html5-plain'
    },
    {
      name: 'CSS3',
      class: 'devicon-css3-plain'
    },
    {
      name: 'Sass',
      class: 'devicon-sass-original'
    },
    {
      name: 'JavaScript',
      class: 'devicon-javascript-plain'
    },
    {
      name: 'TypeScript',
      class: 'devicon-typescript-plain'
    },
    {
      name: 'React',
      class: 'devicon-react-original'
    },
    {
      name: 'Redux',
      class: 'devicon-redux-original'
    },
    {
      name: 'D3',
      class: 'devicon-d3js-plain'
    },
    {
      name: 'Node.js',
      class: 'devicon-nodejs-plain'
    },
    {
      name: 'Mocha',
      class: 'devicon-mocha-plain'
    },
    {
      name: 'Cucumber',
      class: 'devicon-cucumber-plain'
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
      name: 'GitLab',
      class: 'devicon-gitlab-plain'
    },
    {
      name: 'MongoDB',
      class: 'devicon-mongodb-plain'
    },
    {
      name: 'Python',
      class: 'devicon-python-plain'
    },
    {
      name: 'Babel',
      class: 'devicon-babel-plain'
    },
    {
      name: 'Webpack',
      class: 'devicon-webpack-plain'
    },
    {
      name: 'Express',
      class: 'devicon-express-original'
    },
    {
      name: 'VSCode',
      class: 'devicon-visualstudio-plain'
    }
  ]

  const changingText = ['JAVASCRIPT ENGINEER','FRONT END DEVELOPER', 'REACT ENGINEER']
  let profileImages = ['https://i.imgur.com/pO3gg7k.jpg', 'https://i.imgur.com/0zAJrpw.jpg', 'https://i.imgur.com/KXdMgGS.jpg', 'https://i.imgur.com/B3laqtU.jpg']
  let backgroundColors = ['background-black', 'background-white']
  let textColors = ['text-black', 'text-white']

  // PROJECTS DATA

  const projectsContent = [
    {
      name: 'Find That Flight',
      imagePath: 'assets/images/project4.png',
      description: 'A flight destination and ticket search application that gives out the destination suggestions on image tiles and displays them on dynamic map.',
      tools: 'HTML | SCSS | JavaScript | React | Python | Django | PostgreSQL | MapBoxGL | External API\'s',
      urlLive: 'https://findthatflight.herokuapp.com/',
      urlGithub: 'https://github.com/GRudinsky/SEI-project-04'
    },
    {
      name: 'Rekordr',
      imagePath: 'assets/images/project3.png',
      description: 'Music collection organizing page, built as group project at General Assembly. It was a 3-person group MERN stack project, built using React.js on the front-end and MongoDb on the back-end. The final result is a web-app that allows the user to play album content, search for music albums in Deezer music database, add and remove from their personal collections and browse other users collection within Rekordr database.',
      tools: 'HTML | SCSS | JavaScript | React | Node.js | MongoDB | Deezer API',
      urlLive: 'https://rekordr.herokuapp.com/',
      urlGithub: 'https://github.com/GRudinsky/SEI-group-project'
    },
    {
      name: 'Restorent',
      imagePath: 'assets/images/project_homework.png',
      description: 'Car review platform, built as a weekend homework at General Assembly.',
      tools: 'HTML | SCSS | JavaScript | React | Node.js | MongoDB | REST API',
      urlLive: 'https://rustorrent.herokuapp.com/',
      urlGithub: 'https://github.com/GRudinsky/restorent'
    },
    {
      name: 'News On The Mews',
      imagePath: 'assets/images/project2.png',
      description: 'News aggregating website, built as 48 hour pair-programming Reactathon at General Assembly.',
      tools: 'HTML | SCSS | JavaScript | React | NewsAPI',
      urlLive: 'https://newsonthemews.herokuapp.com/',
      urlGithub: 'https://github.com/GRudinsky/sei-project-2'
    },
    {
      name: 'Pacman Game',
      imagePath: 'assets/images/project1.png',
      description: 'Pac-Man browser game, built as solo project at General Assembly.',
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

  const whiteTextArray = []
  const blackBackgroundsArray = []

  // LANDING PAGE

  function changeTitle() {
    const title = document.getElementById('landing-title')
    setInterval(() => {
      changingText.forEach((text, i) => {
        setTimeout(() => {
          title.innerHTML = text
        }, i * 2500)
      })
    }, changingText.length * 2500)
  }

  function getDayTime(idName, content) {
    const f = document.getElementById(idName)
    const t = new Date()
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayHours = t.getHours()
    const dayTime = dayHours < 12 ? 'morning' : (dayHours >= 12 && dayHours < 17 ? 'afternoon' : 'evening')
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
    const headshot = document.querySelector('.headshot')
    profileImages = profileImages.reverse()
    profileImages.forEach((image, i) => {
      setTimeout(() => {
        headshot.style.backgroundImage = `url(${image})`
      }, i * 100)
    })
    // toggleDarkMode()
  }

  function toggleDarkMode() {
    backgroundColors = backgroundColors.reverse()
    textColors = textColors.reverse()

    const whiteBackgrounds = ['landing-name']
    const blackBackgrounds = ['bd','project-content','profile-wrapper','devicons-container','parallax-layer', ...blackBackgroundsArray]
    const whiteTextIds = ['landing-title', 'text-wh-0', 'text-wh-1', 'text-wh-2', 'text-wh-3', 'contacts-wrapper', 'footer', 'down-arrow', ...whiteTextArray]
    const blackTextIds = ['landing-name']

    blackBackgrounds.forEach(element => document.getElementById(element).classList.replace(backgroundColors[1], backgroundColors[0]))

    whiteBackgrounds.forEach(element => document.getElementById(element).classList.replace(backgroundColors[0], backgroundColors[1]))

    whiteTextIds.forEach(element => document.getElementById(element).classList.replace(textColors[0], textColors[1]))

    blackTextIds.forEach(element => document.getElementById(element).classList.replace(textColors[1], textColors[0]))
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
    const parent = document.getElementById('top')
    projectsContent.forEach((project, idx) => {
      const section = document.createElement('section')
      section.id = `p-${idx}`
      section.classList.add('section-wrapper')
      section.classList.add('parallax-layer')
      parent.appendChild(section)

      const title = document.createElement('div')
      title.classList.add('project-title')
      title.classList.add('text-white')
      title.innerText = project.name.toUpperCase()
      section.appendChild(title)

      const element = document.createElement('div')
      element.style.backgroundImage = `url(${project.imagePath})`
      element.classList.add('project-card')
      section.appendChild(element)

      const content = document.createElement('div')
      content.id = `project${idx} `
      whiteTextArray.push(`project${idx} `)
      blackBackgroundsArray.push(`project${idx} `)
      content.classList.add('project-content', 'background-black', 'text-white')
      element.appendChild(content)

      const description = document.createElement('p')
      description.classList.add('project-description')
      content.appendChild(description)
      description.textContent = `${project.name} - ${project.description} `

      const links = document.createElement('div')
      links.classList.add('flex-row')
      content.appendChild(links)

      const githubContainer = document.createElement('div')
      githubContainer.classList.add('flex-column', 'centered')
      githubContainer.addEventListener('mouseenter', toggleHiddenChild)
      githubContainer.addEventListener('mouseleave', toggleHiddenChild)
      links.appendChild(githubContainer)

      const githubLink = document.createElement('A')

      githubLink.setAttribute('id', `codeLink${idx} `)
      whiteTextArray.push(`codeLink${idx} `)
      githubLink.classList.add('github-link', 'text-white', 'devicon-github-plain')
      githubLink.href = project.urlGithub
      githubLink.target = '_blank'
      githubLink.rel = 'noreferrer'
      githubContainer.appendChild(githubLink)

      const githubLinkText = document.createElement('P')
      githubLinkText.classList.add('hidden')
      githubContainer.appendChild(githubLinkText)
      githubLinkText.textContent = 'See code'

      const liveLinkContainer = document.createElement('div')
      liveLinkContainer.classList.add('flex-column', 'centered')
      liveLinkContainer.addEventListener('mouseenter', toggleHiddenChild)
      liveLinkContainer.addEventListener('mouseleave', toggleHiddenChild)
      links.appendChild(liveLinkContainer)

      const liveLink = document.createElement('A')
      liveLink.setAttribute('id', `liveLink${idx} `)
      whiteTextArray.push(`liveLink${idx} `)
      liveLink.classList.add('live-link', 'text-white', (project.urlLive.slice(18, 24) === 'github' ? 'devicon-github-plain' : 'devicon-heroku-original'))
      liveLink.href = project.urlLive
      liveLink.target = '_blank'
      liveLink.rel = 'noreferrer'
      liveLinkContainer.appendChild(liveLink)

      const liveLinkText = document.createElement('P')
      liveLinkText.classList.add('hidden')
      liveLinkContainer.appendChild(liveLinkText)
      liveLinkText.textContent = 'See live'

      const tools = document.createElement('P')
      tools.classList.add('project-description')
      content.appendChild(tools)
      tools.textContent = project.tools
    })
  }

  const toggleHiddenChild = (e) => {
    // e.target.style.perspective = '100px'
    e.target.lastChild.classList.toggle('hidden') 
    // e.target.firstChild.style.transform = 'translate3d(0, 2vmin, 5vmin)'
    // console.log(e.target)
  }

  // CONTACTS SECTION

  function displayContacts() {
    const container = document.getElementById('contacts-wrapper')
    contactsContent.forEach((contact, idx) => {
      const element = document.createElement('a')
      element.id = `contactLink${idx} `
      whiteTextArray.push(`contactLink${idx} `)
      element.classList.add(contact.class.slice(0, 3), contact.class.slice(4), 'contact-link', 'text-white')
      element.href = contact.href
      element.target = '_blank'
      element.rel = 'noreferrer'
      container.appendChild(element)
    })
  }
  function makeTextBlink(arg) {
    const f = document.getElementById(arg)
    setInterval(() => {
      f.style.visibility = (f.style.visibility === 'hidden' ? 'visible' : 'hidden')
    }, 500)
  }

  function scrollLog() {
    const scr = window.scrollY
    const winH = window.innerHeight
    const scrolledVh = scr / winH
    const sp = 200
    // console.log('scrolled', scrolledVh)

    const lTag = document.getElementById('landing')
    const aboutTag = document.getElementById('about')
    const projectsTag = document.getElementById('projects')
    const contactsTag = document.getElementById('contact')
    const project0 = document.getElementById('p-0')
    const project1 = document.getElementById('p-1')
    const project2 = document.getElementById('p-2')
    const project3 = document.getElementById('p-3')
    const project4 = document.getElementById('p-4')

    lTag.style.transform = `translateZ(${-scr / sp}vmin)`
    aboutTag.style.transform = `translateZ(${(scr - winH) / sp}vmin)`
    projectsTag.style.transform = `translateZ(${(scr - 1.5 * winH) / sp}vmin)`
    project0.style.transform = `translateZ(${(scr - 2 * winH) / sp}vmin)`
    project1.style.transform = `translateZ(${(scr - 2.5 * winH) / sp}vmin)`
    project2.style.transform = `translateZ(${(scr - 3 * winH) / sp}vmin)`
    project3.style.transform = `translateZ(${(scr - 3.5 * winH) / sp}vmin)`
    project4.style.transform = `translateZ(${(scr - 4 * winH) / sp}vmin)`
    contactsTag.style.transform = `translateZ(${(scr - 4.5 * winH) / sp}vmin)`

    scrolledVh < 0.7 ? lTag.style.zIndex = 999 : lTag.style.zIndex = 0
    aboutTag.style.zIndex = 800
    projectsTag.style.zIndex = 700
    project0.style.zIndex = 600
    project1.style.zIndex = 500
    project2.style.zIndex = 400
    project3.style.zIndex = 300
    project4.style.zIndex = 200
  }

  window.onscroll = () => scrollLog()
  changeTitle()
  makeTextBlink('text-cursor')
  getDayTime('time-of-day', 'dayTime')
  displayProfileImage()
  displayIcons()
  displayProjects()
  displayContacts()
})

