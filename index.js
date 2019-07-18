const template = document.querySelector('#template');
const templateContent = template.content.querySelector('h1');
const templateClone = document.importNode(templateContent, true);

const switcher = document.querySelector('.switcher');

const wrappers = document.querySelectorAll('.wrapper');
const firstWrapper = wrappers[0];
const secondWrapper = wrappers[1];

firstWrapper.appendChild(templateClone);

switcher.addEventListener('click', () => {
  while (firstWrapper.firstChild) {
    firstWrapper.firstChild.remove();
  }

  secondWrapper.appendChild(templateClone);
});
