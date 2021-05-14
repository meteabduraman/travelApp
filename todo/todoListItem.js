import { LitElement, html } from 'lit-element';

class TodoListItem extends LitElement {
  static get properties() {
    return {
      todoItem: { type: Object },
      _isEditing: { type: Boolean },
    };
  }

  render() {
    return html`
      ${this._isEditing
        ? html`<form @submit=${this._handleValueChanged}>
            <input type="text" .value=${this.todoItem.text} name="text" />
          </form>`
        : this.todoItem.text}
      <button @click=${this._handleEditClick}>
        ${this._isEditing ? 'Save' : 'Edit'}
      </button>
    `;
  }

  _handleEditClick() {
    this._isEditing = true;
  }

  _handleValueChanged(e) {
    e.preventDefault();
    this._isEditing = false;

    const updateTodoEvent = new CustomEvent('updateTodo', {
      detail: Object.fromEntries(new FormData(e.target)),
    });

    this.dispatchEvent(updateTodoEvent);
  }
}

customElements.define('todo-list-item', TodoListItem);
