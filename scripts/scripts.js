const speakers = [
  {
    name: 'Chris Andreson',
    bio: 'Curator of TED',
    about: 'After a long career in journalism and publishing, Chris Anderson became the curator of the TED Conference in 2002 and has developed it as a platform for identifying and disseminating ideas worth spreading.',
    picture: '../images/chris-anderson.jpg',
  },
  {
    name: 'Max Hawkins',
    bio: 'Artist and computer scientist',
    about: 'Since 2015, computer programs Max Hawkins wrote have been giving him randomly generated instructions on how to live his life.',
    picture: '../images/max-hawkins.jpg',
  },
  {
    name: 'Anna Piperal',
    bio: 'E-governance expert',
    about: 'Anna Piperal is a branding expert and digital enthusiast who strives to spread the idea of a "zero-bureaucracy" government ecosystem.',
    picture: '../images/anna-piperal.jpg',
  },
  {
    name: 'Tom Griffhits',
    bio: 'Psychologist, cognitive scientist',
    about: 'Tom Griffiths uses ideas from computer science to understand how human minds work.',
    picture: '../images/tom-griffiths.jpg',
  },
  {
    name: 'Karen Tordjman',
    bio: 'Customer experience pro',
    about: 'Karen Lellouche Tordjman is a global leader on customer experience and a BHI fellow on the future of customer interactions.',
    picture: '../images/karen-tordjman.jpg',
  },
  {
    name: 'Yann LeCun',
    bio: 'Computer scientist, AI researcher',
    about: 'Yann LeCun is chief AI scientist at Facebook and Silver Professor at New York University.',
    picture: '../images/yann-lecun.jpg',
  },
];

const speakerBtn = document.createElement('button');
speakerBtn.classList.add('my-speakers-btn');
speakerBtn.setAttribute('type', 'button');
speakerBtn.innerHTML = 'MORE <i class="fa fa-arrow-down"></i>';
speakerBtn.addEventListener('click', () => {
  document.querySelector('.my-speakers-group').innerHTML = '';
  for (let i = 0; i < speakers.length; i += 1) {
    const speaker = document.createElement('article');
    const speakerImg = document.createElement('div');
    const imageDots = document.createElement('img');
    const speakerPicture = document.createElement('img');
    const speakerInfo = document.createElement('div');
    const speakerName = document.createElement('h3');
    const speakerBio = document.createElement('h4');
    const hr = document.createElement('hr');
    const speakerAbout = document.createElement('p');
    speaker.classList.add('my-speaker');
    speakerImg.classList.add('my-speaker-img');
    imageDots.classList.add('my-speaker-dots');
    imageDots.setAttribute('src', '../images/image-dots.png');
    imageDots.setAttribute('alt', 'dots');
    speakerPicture.classList.add('my-speaker-picture');
    speakerPicture.setAttribute('src', speakers[i].picture);
    speakerPicture.setAttribute('alt', 'my-speaker-picture');
    speakerInfo.classList.add('my-speaker-info');
    speakerName.classList.add('my-speaker-name');
    speakerName.textContent = speakers[i].name;
    speakerBio.classList.add('my-speaker-bio');
    speakerBio.textContent = speakers[i].bio;
    speakerAbout.classList.add('my-speaker-about');
    speakerAbout.textContent = speakers[i].about;

    speakerImg.append(imageDots, speakerPicture);
    speakerInfo.append(speakerName, speakerBio, hr, speakerAbout);
    speaker.append(speakerImg, speakerInfo);

    document.querySelector('.my-speakers-group').append(speaker);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 2; i += 1) {
    const speaker = document.createElement('article');
    const speakerImg = document.createElement('div');
    const imageDots = document.createElement('img');
    const speakerPicture = document.createElement('img');
    const speakerInfo = document.createElement('div');
    const speakerName = document.createElement('h3');
    const speakerBio = document.createElement('h4');
    const hr = document.createElement('hr');
    const speakerAbout = document.createElement('p');
    speaker.classList.add('my-speaker');
    speakerImg.classList.add('my-speaker-img');
    imageDots.classList.add('my-speaker-dots');
    imageDots.setAttribute('src', '../images/image-dots.png');
    imageDots.setAttribute('alt', 'dots');
    speakerPicture.classList.add('my-speaker-picture');
    speakerPicture.setAttribute('src', speakers[i].picture);
    speakerPicture.setAttribute('alt', 'speaker-picture');
    speakerInfo.classList.add('my-speaker-info');
    speakerName.classList.add('my-speaker-name');
    speakerName.textContent = speakers[i].name;
    speakerBio.classList.add('my-speaker-bio');
    speakerBio.textContent = speakers[i].bio;
    speakerAbout.classList.add('my-speaker-about');
    speakerAbout.textContent = speakers[i].about;

    speakerImg.append(imageDots, speakerPicture);
    speakerInfo.append(speakerName, speakerBio, hr, speakerAbout);
    speaker.append(speakerImg, speakerInfo);

    document.querySelector('.my-speakers-group').append(speaker);
  }

  document.querySelector('.my-speakers-group').append(speakerBtn);
});

// mobile menu
const menuButton = document.querySelector('.my-menu-btn');
const mobileMenu = document.querySelector('.my-nav-menu-mobile');
const remButton = document.querySelector('.fa-times');

// transition styles
mobileMenu.style.left = '-800px';
mobileMenu.style.transition = 'left 800ms';

// listen for a click on the menu button and X button
menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  setTimeout(() => {
    mobileMenu.style.left = '0px';
  }, 1);
});

remButton.addEventListener('click', () => {
  mobileMenu.style.left = '-800px';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 900);
  menuButton.style.display = 'block';
});

document.querySelectorAll('.my-nav-link-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.left = '-800px';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 900);
    menuButton.style.display = 'block';
  });
});

// mobile menu
const mobMenuButton = document.querySelector('.my-mob-menu-bars');
const mobMenu = document.querySelector('.my-mob-menu');
const mobCloseButton = document.querySelector('.fa-times');

// transition styles
mobMenu.style.left = '-800px';
mobMenu.style.transition = 'left 800ms';

// listen for a click on the menu button and X button
mobMenuButton.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  setTimeout(() => {
    mobMenu.style.left = '0px';
  }, 1);
});

mobCloseButton.addEventListener('click', () => {
  mobMenu.style.left = '-800px';
  setTimeout(() => {
    mobMenu.style.display = 'none';
  }, 900);
  mobMenuButton.style.display = 'block';
});

document.querySelectorAll('.my-nav-link-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    mobMenu.style.left = '-800px';
    setTimeout(() => {
      mobMenu.style.display = 'none';
    }, 900);
    mobMenuButton.style.display = 'block';
  });
});
