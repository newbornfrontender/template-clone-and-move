const template = document.querySelector('#template');
const templateContent = template.content.querySelector('.title');

const templateClone = document.importNode(templateContent, true);

const switcher = document.querySelector('.switcher');

const wrappers = document.querySelectorAll('.wrapper');
const firstWrapper = wrappers[0];
const secondWrapper = wrappers[1];

firstWrapper.appendChild(templateClone);

function trigger(targetClass, color) {
  const addedTemplateContent = document.querySelector(`.${targetClass}`);

  addedTemplateContent.addEventListener('click', function() {
    this.attributeStyleMap.set('color', color);
  });
};

trigger('title', 'red');

switcher.addEventListener('click', () => {
  while (firstWrapper.firstChild) {
    firstWrapper.firstChild.remove();
  }

  secondWrapper.appendChild(templateClone);

  trigger('title', 'green');
});
