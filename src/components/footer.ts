import { Component } from './component';
import '../sass/style.scss';

export class Footer extends Component {
  constructor(selector: string, public brand: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer>
      <address>${this.brand}</address>
    </footer>
    `;
  }
}
