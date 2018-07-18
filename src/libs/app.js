
import pkg from './../../package.json';
import styles from './../styles/app.scss';
import { kitchenSink } from './kitchen';

const root = document.querySelector('#root');

const hello = /*html*/`
  <main class="${styles.container}">
    <h1>Hello <span>${pkg.name}</span>!</h1>
    <p><small>another awesome <span class=${styles.strong}>Bitrock</span> application!</small></p>
    <hr />
    <img 
      class="${styles.cover}" 
      src="https://placeimg.com/1000/500/nature" 
      alt="example cover image"
    >
    ${kitchenSink}
  </main>
`;

root.innerHTML = hello;

export { root, pkg };