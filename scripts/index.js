const projects = [
  {
    id: 0,
    name: 'Multi-Post Stories',
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/cards/multi_post_project_image_desktop.png',
    fullImage: 'images/cards/popupbg.png',
    altImage: 'Woman practicing Yoga',
    languages: ['css', 'html', 'bootstrap', 'Ruby'],
    source: 'https://github.com/tanmaybhurkunde',
    liveVersion: 'https://github.com/tanmaybhurkunde',
  },
  {
    id: 1,
    name: 'Professional Art Printing Data',
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/cards/project_background.png',
    fullImage: 'images/cards/popupbg.png',
    altImage: '',
    languages: ['html', 'bootstrap', 'Ruby'],
    source: 'https://github.com/tanmaybhurkunde',
    liveVersion: 'https://github.com/tanmaybhurkunde',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/cards/data_dashboard.png',
    fullImage: 'images/cards/popupbg.png',
    altImage: '',
    languages: ['html', 'bootstrap', 'Ruby'],
    source: 'https://github.com/tanmaybhurkunde',
    liveVersion: 'https://github.com/tanmaybhurkunde',
  },
  {
    id: 3,
    name: 'Website Protfolio',
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/cards/website_project.png',
    fullImage: 'images/cards/popupbg.png',
    altImage: '',
    languages: ['html', 'bootstrap', 'Ruby'],
    source: 'https://github.com/tanmaybhurkunde',
    liveVersion: 'https://github.com/tanmaybhurkunde',
  },
 
];
// generate
function elementGenerator(type, cssClass) {
  const elem = document.createElement(type);

  const cssClassArr = cssClass.split(' ');

  cssClassArr.map((classElem) => elem.classList.add(classElem));
  return elem;
}

function languagesGenerator(project) {
  const languages = elementGenerator('ul', 'boxes');

  project.languages.forEach((language) => {
    const li = document.createElement('li');
    li.innerHTML = language;
    languages.appendChild(li);
  });

  return languages;
}

// render each card
function renderCard(project) {
  const card = elementGenerator('div', 'card');

  const inputHidden = elementGenerator('input', 'input-hidden');
  inputHidden.type = 'hidden';
  inputHidden.id = project.id;
  card.appendChild(inputHidden);

  const projectDetails = elementGenerator('div', 'project-details');
  projectDetails.title = project.name;
  projectDetails.style.background = `
        linear-gradient(
            180.45deg,
            rgba(38, 38, 38, 0) 0.75%,
            rgb(38 38 38 / 66%) 120%
        ),
        url(${project.image}) center / cover no-repeat
    `;
  const mask = elementGenerator('div', 'mask-card');
  mask.style.backgroundImage = `url(${project.image})`;
  projectDetails.appendChild(mask);

  const projectContent = elementGenerator('div', 'project-content');

  const projectName = elementGenerator('h3', 'project-name');
  projectName.innerHTML = project.name;

  const description = elementGenerator('p', 'description');
  description.innerHTML = project.shortDescription;

  const languages = languagesGenerator(project);
  projectContent.append(projectName, description, languages);

  projectDetails.appendChild(projectContent);

  const seeProject = elementGenerator('button', 'button see-project large');
  seeProject.innerHTML = 'See Project';

  card.append(projectDetails, seeProject);

  return card;
}

// render first card
function renderCardMain() {
  const project = projects[0];

  const cardDiffDiv = elementGenerator('div', 'card diff');

  const inputHidden = elementGenerator('input', 'input-hidden');
  inputHidden.type = 'hidden';
  inputHidden.id = project.id;
  cardDiffDiv.appendChild(inputHidden);

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.altImage;
  cardDiffDiv.appendChild(img);

  const secondDiv = document.createElement('div');
  const name = elementGenerator('h3', 'project-name');
  name.innerHTML = project.name;
  secondDiv.appendChild(name);

  const shortDescription = elementGenerator('p', 'description');
  shortDescription.innerHTML = project.shortDescription;
  secondDiv.appendChild(shortDescription);

  const languages = languagesGenerator(project);
  secondDiv.appendChild(languages);

  const seeProject = elementGenerator('button', 'button see-project visible');
  seeProject.innerHTML = 'See Project';
  secondDiv.appendChild(seeProject);

  cardDiffDiv.appendChild(secondDiv);

  document.getElementById('recent-works').appendChild(cardDiffDiv);
}

// render all cards
function renderCards() {
  const cards = elementGenerator('div', 'cards');

  projects.forEach((project, index) => {
    if (index > 0) {
      const card = renderCard(project);
      cards.appendChild(card);
    }
  });
  document.getElementById('recent-works').appendChild(cards);
}

// recent works cards hover
function maskMouseOver(card) {
  card.addEventListener('mouseover', () => {
    card.style.cursor = 'pointer';
    const mask = card.querySelector('.mask-card');
    const button = card.querySelector('.see-project');
    mask.classList.toggle('visible');
    button.classList.toggle('visible');
  });
}

function maskMouseOut(card) {
  card.addEventListener('mouseout', () => {
    const mask = card.querySelector('.mask-card');
    const button = card.querySelector('.see-project');
    mask.classList.toggle('visible');
    button.classList.toggle('visible');
  });
}

// only for desktop version
function addMaskCardHover() {
  const cards = document.querySelectorAll('.cards .card');
  cards.forEach((card) => {
    maskMouseOver(card);
    maskMouseOut(card);
  });
}

/* PopUp Window */
function closePopupWindow(closeButton) {
  closeButton.addEventListener('click', () => {
    const main = document.querySelector('main');
    const popupWindow = main.querySelector('.window-mask');
    document.body.style.overflow = 'unset';
    main.removeChild(popupWindow);
  });

  return closeButton;
}

function createPopupModal(button) {
  let card = button.parentElement;

  // for class diff
  if (card.classList.length === 0) {
    card = card.parentElement;
  }

  const project = projects[card.querySelector('.input-hidden').id];

  const popupWindow = elementGenerator('div', 'window-mask');
  const popupModal = elementGenerator('div', 'popup project');

  let closeButton = elementGenerator('button', 'close-popup');
  closeButton.setAttribute('aria-label', 'close');
  const closeIcon = elementGenerator('i', 'material-icons');
  closeIcon.innerHTML = 'close';
  closeButton.appendChild(closeIcon);
  closeButton = closePopupWindow(closeButton);

  const projectName = elementGenerator('h3', 'project-name');
  projectName.innerHTML = project.name;

  const firstRow = elementGenerator('div', 'first-row');
  firstRow.append(projectName, closeButton);

  const languages = languagesGenerator(project);
  const content = elementGenerator('div', 'content-modal-ds');
  const descModal = elementGenerator('div', 'desc-modal-ds');

  const img = elementGenerator('img', 'img');
  img.alt = project.altImage;
  img.src = project.fullImage;

  const description = elementGenerator('p', 'description');
  description.innerHTML = project.description;

  // TODO ADD BUTTONS ICONS
  const buttons = elementGenerator('div', 'buttons');
  const liveVersion = elementGenerator('a', 'button visible');
  liveVersion.innerHTML = 'See Live';
  liveVersion.href = project.liveVersion;

  const liveIcon = elementGenerator('img', 'icon');
  liveIcon.src = 'images/social_media_icons/icon-see live.svg';
  liveIcon.alt = '';

  liveVersion.appendChild(liveIcon);

  const source = elementGenerator('a', 'button visible');
  source.innerHTML = 'See Source';
  source.href = project.source;

  const github = elementGenerator('img', 'icon');
  github.src = 'images/social_media_icons/github.svg';
  github.alt = '';

  source.appendChild(github);

  buttons.append(liveVersion, source);
  descModal.append(description, buttons);
  content.append(img, descModal);
  popupModal.append(firstRow, languages, content);
  popupWindow.appendChild(popupModal);

  return popupWindow;
}

function openPopupWindow() {
  const seeProjectButtons = document.querySelectorAll('.see-project');

  seeProjectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const main = document.querySelector('main');
      document.body.style.overflow = 'hidden';
      main.appendChild(createPopupModal(button));
    });
  });
}

renderCardMain();
renderCards();
addMaskCardHover();
openPopupWindow();
