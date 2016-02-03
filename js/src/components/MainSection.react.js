import React from 'react';
let ReactPropTypes = React.PropTypes;

import TodoActions from '../actions/TodoActions';

import TodoItem from './TodoItem.react';

export default class MainSection extends React.Component {
  constructor(props) {
    super(props);

    this._onToggleCompleteAll = this._onToggleCompleteAll.bind(this);
  }

  render() {
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let allTodos = this.props.allTodos;
    let todos = [];

    for (var key in allTodos) {
      todos.push(
        <TodoItem
          key={key}
          todo={allTodos[key]}
        />
      );
    }

    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete
            ? 'checked'
            : ''
          }
        />
        <label
          htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }

  _onToggleCompleteAll() {
    TodoActions.toggleCompleteAll();
  }

  static propTypes = {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  };
}
