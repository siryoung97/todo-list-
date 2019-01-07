import React from 'react';
import AppNavigator from './navigator';

class App extends React.Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          todos: this.state.todos,
          onAddTodo: this.addTodo,
        }}
      />
    );
  }

  addTodo = ({ todo, date }) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, `${date} ${todo}`],
    });
  }
}

export default App;
