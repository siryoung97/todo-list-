import React from 'react';

import AddTodoForm from '../components/AddTodoForm';

export default class AddTodo extends React.Component {
  static navigationOptions = {
    title: 'Add To do!',
  };

  render() {
    const { onAddTodo } = this.props.screenProps;

    return (
      <AddTodoForm
        onAddTodo={onAddTodo}
        onSubmit={this.handleSubmit}
      />
    );
  }

  handleSubmit = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }
}
