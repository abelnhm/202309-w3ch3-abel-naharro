import { Component } from './component';
import '../sass/style.scss';

export class Header extends Component {
  constructor(selector: string, title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1>${this.title}</h1>
    </header>
    `;
  }
}
