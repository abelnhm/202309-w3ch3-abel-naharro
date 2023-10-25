import '../sass/style.scss';
import { Component } from './component';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main>
      <h2>Registros:</h2>
      <p>
      <button type="button" class="btn btn-success">
        <i class="fa fa-plus" aria-hidden="true"></i>Añadir
      </button>
      
      </p>
    </main>
    `;
  }
}
