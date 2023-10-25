import { getMockPets } from '../data/metadata';
import { Pet } from '../models/pet';
import { Component } from './component';

import '../sass/style.scss';

export class PetsList extends Component {
  pets!: Pet[];
  constructor(selector: string) {
    super(selector);
    this.pets = getMockPets();
    this.pets[1].isAdopted = true;
    this.render();
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  handleDelete(event: Event) {
    const element = event.target as HTMLSpanElement;
    this.pets = this.pets.filter((item) => item.id !== element.dataset.id);
    this.render();
  }

  createTemplate() {
    const list = this.pets
      .map(
        (item) => `
          <tr>
          <td> ${item.id}</td>
          <td> ${item.name}</td>
          <td> ${item.breed}</td>
          <td> ${item.owner}</td>
          <td>        
            <input id="adopt" type="checkbox" ${
              item.isAdopted ? 'checked' : ''
            }>
          </td>
          <td>
          <button type="button" class="btn btn-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button type="button" class="btn btn-warning">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          </td>
          </tr>`
      )
      .join('');

    return `<table class="table table-striped">
            <thead>
            <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Raza / Especie</td>
            <td>Dueño</td>
            <td>Adoptado</td>
            <td></td>
            </tr>
            </thread>
            <tbody>${list}</tbody></table>`;
  }
}
