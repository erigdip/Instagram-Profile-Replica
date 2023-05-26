const MenuDeployed = document.getElementById('menu-list-deployed');
const MenuImg = document.getElementById('toggle-menu');
MenuImg.addEventListener('click', function () {
  'use strict';
  MenuDeployed.classList.toggle('deploy');
});