document.addEventListener('DOMContentLoaded', () => {

  ////////////////////////////// SCROLL OBSERVER SECTION ///////////////////////////////

  window.onscroll = function () {
    scrollLog()
  }

  

  ////////////////////////////// DATA SECTION ///////////////////////////////

  // SKILLS DATA
  const devIcons = [
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

  const changingText = ['FRONT END', 'BACK END', 'FULL STACK']
  let profileImages = ['https://i.imgur.com/pO3gg7k.jpg', 'https://i.imgur.com/0zAJrpw.jpg', 'https://i.imgur.com/KXdMgGS.jpg', 'https://i.imgur.com/B3laqtU.jpg']
  let backgroundColors = ['background-black', 'background-white']
  let textColors = ['text-black', 'text-white']

  // PROJECTS DATA

  const projectsContent = [
    {
      name: 'Find That Flight',
      imagePath: 'assets/images/project4.png',
      description: 'Find that Flight - flight destination and ticket search application that gives out the destination suggestions on image tiles and displays them on dynamic map.',
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
      tools: 'HTML | SCSS | JavaScript | React | Node.js | MongoDB | RESTful API' ,
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
    title.classList.add('fade-in')
    setInterval(() => {
      changingText.forEach((text, i) => {
        setTimeout(() => {
          title.classList.remove('fade-out')
          title.classList.add('fade-in')
          title.innerHTML = text
          setTimeout(() => {
            title.classList.remove('fade-in')
            title.classList.add('fade-out')
          },1000)
        }, i * 3000)
  
      })
    }, 9000)
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
        headshot.style.backgroundImage = `url(${ image })`
      }, i * 100)
    })
  // toggleDarkMode()
  }

  function toggleDarkMode() {
    backgroundColors = backgroundColors.reverse()
    textColors = textColors.reverse()
  
    const whiteBackgrounds = ['landing-name']
    const blackBackgrounds = ['bd',...blackBackgroundsArray ]
    const whiteTextIds = ['landing-title', 'text-wh-0', 'text-wh-1', 'text-wh-2', 'text-wh-3', 'contacts-wrapper', 'footer', 'down-arrow', ...whiteTextArray]
    const blackTextIds = ['landing-name']

    blackBackgrounds.forEach(element => document.getElementById(element).classList.add(backgroundColors[0]))
    blackBackgrounds.forEach(element => document.getElementById(element).classList.remove(backgroundColors[1]))

    whiteBackgrounds.forEach(element => document.getElementById(element).classList.add(backgroundColors[1]))
    whiteBackgrounds.forEach(element => document.getElementById(element).classList.remove(backgroundColors[0]))

    whiteTextIds.forEach(element => document.getElementById(element).classList.add(textColors[1]))
    whiteTextIds.forEach(element => document.getElementById(element).classList.remove(textColors[0]))

    blackTextIds.forEach(element => document.getElementById(element).classList.add(textColors[0]))
    blackTextIds.forEach(element => document.getElementById(element).classList.remove(textColors[1]))
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

      const element = document.createElement('div')
      element.style.backgroundImage = `url(${ project.imagePath })`
      element.id = `p-${idx}`
      element.classList.add('project-card')
      element.classList.add('parallax-layer-2')
      parent.appendChild(element)

      const content = document.createElement('div')
      content.id = `project${ idx } `
      whiteTextArray.push(`project${ idx } `)
      blackBackgroundsArray.push(`project${ idx } `)
      content.classList.add('project-content', 'background-black', 'text-white')
      element.appendChild(content)

      const description = document.createElement('p')
      description.classList.add('project-description')
      content.appendChild(description)
      description.textContent = `${ project.name } - ${ project.description } `

      const links = document.createElement('div')
      links.classList.add('flex-row')
      content.appendChild(links)

      const githubContainer = document.createElement('div')
      githubContainer.classList.add('flex-column', 'centered')
      githubContainer.addEventListener('mouseenter', toggleHiddenChild)
      githubContainer.addEventListener('mouseleave', toggleHiddenChild)
      links.appendChild(githubContainer)

      const githubLink = document.createElement('A')
    
      githubLink.setAttribute('id', `codeLink${ idx } `)
      whiteTextArray.push(`codeLink${ idx } `)
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
      liveLink.setAttribute('id', `liveLink${ idx } `)
      whiteTextArray.push(`liveLink${ idx } `)
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
    }
    )
  }

  function toggleHiddenChild(e){
    e.target.lastChild.classList.toggle('hidden')
  }
  // CONTACTS SECTION

  function displayContacts() {
    const container = document.getElementById('contacts-wrapper')
    contactsContent.forEach((contact, idx) => { 
      const element = document.createElement('a')
      element.id = `contactLink${ idx } `
      whiteTextArray.push(`contactLink${ idx } `)
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
    const lTag = document.getElementById('landing')

    const aboutTag = document.getElementById('abt')
    const projectsTag = document.getElementById('works')
    const contactsTag = document.getElementById('contact')
    const project0 = document.getElementById('p-0')
    const project1 = document.getElementById('p-1')
    const project2 = document.getElementById('p-2')
    const project3 = document.getElementById('p-3')
    

    lTag.style.transform = `translateZ(${-scr / 120}vmin)`
    aboutTag.style.transform = `translateZ(${(scr - winH) / 120}vmin)`
    projectsTag.style.transform = `translateZ(${(scr - 1.5 * winH) / 120}vmin)`
    project0.style.transform = `translateZ(${(scr - 2 * winH) / 120}vmin)`
    project1.style.transform = `translateZ(${(scr - 2.5 * winH) / 120}vmin)`
    project2.style.transform = `translateZ(${(scr - 3 * winH) / 120}vmin)`
    project3.style.transform = `translateZ(${(scr - 3.5 * winH) / 120}vmin)`
    contactsTag.style.transform = `translateZ(${(scr - 4 * winH) / 120}vmin)`
  }



  changeTitle()
  makeTextBlink('text-cursor')
  getDayTime('time-of-day', 'dayTime')
  displayProfileImage()
  displayIcons()
  displayProjects()
  displayContacts()
})

