import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/skip-link.css';
import '../styles/navbar-menu.css';
import '../styles/jumbotron.css';
import '../styles/content.css';
import '../styles/footer.css';
import '../styles/detail.css';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#content'),
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});