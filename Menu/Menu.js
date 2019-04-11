
const toggleMenu = () => {
  menu.element.classList.toggle("menu--open")
  
  // Toggle the "menu--open" class on your menu refence. 
}


// Start Here: Create a reference to the ".menu" class

class Menu {
  constructor(element) {
    this.element = element;
  }
}

const menuContent = document.querySelector('.menu')


const menu = new Menu(menuContent);


// create a reference to the ".menu-button" class


class MenuButton {
  constructor(menuButton) {
    this.menuButton = menuButton;
    this.menuButton.addEventListener('click', toggleMenu);
  }
}

const menuButtonElement = document.querySelector('.menu-button')

const menuButton = new MenuButton(menuButtonElement)

// Using your menuButton reference, add a click handler that calls toggleMenu
