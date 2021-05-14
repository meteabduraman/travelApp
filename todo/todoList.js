import { LitElement, html, css } from 'lit-element';
import './todoListItem.js';

class TodoList extends LitElement {
  static get properties() {
    return {
      _todos: { type: Array },
    };
  }

  static get styles() {
    return css`
      article * {
        padding: 1rem;
        border: 1px solid red;
      }
    `;
  }

  constructor() {
    super();
    this._todos = [
      { text: 'lorem ipsum', done: false },
      { text: 'dolor sit', done: true },
      { text: 'amet', done: false },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('✅ Connected');
  }

  render() {
    return html`
      <h1>TODO list</h1>
      <ul>
        ${this._todos.map(
          (item, index) =>
            html`<li>
              <todo-list-item
                .todoItem=${item}
                @updateTodo=${e => this._handleUpdateTodo(index, e)}
              ></todo-list-item>
            </li>`
        )}
      </ul>

      <form @submit=${this._handleFormSubmit}>
        <label for="text">Text</label>
        <input type="text" name="text" id="text" />
        <button type="submit">Add</button>
      </form>

      <article
        @click=${event => console.log(event, event.target, event.currentTarget)}
      >
        <div>
          <p>
            <span>Hello</span>
          </p>
        </div>
      </article>
    `;
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    this._todos.push({ ...Object.fromEntries(formData), done: false });
    this.requestUpdate();

    form.reset();
  }

  _handleUpdateTodo(index, e) {
    this._todos = [
      ...this._todos.slice(0, index),
      { text: e.detail.text, done: this._todos[index].done },
      ...this._todos.slice(index + 1),
    ];
  }
}

customElements.define('todo-list', TodoList);
