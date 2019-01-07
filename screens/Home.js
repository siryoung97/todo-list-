import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { todos } = this.props.screenProps;
    console.log(todos);

    return (
      <View>
        <Text>Home</Text>
        {todos.map((todo, index) =>
          <Text numberOfLines={1} key={index}>{ todo }</Text>
        )}
        <Button
          onPress={this.handleAdd}
          title="Add"
        />
      </View>
    );
  }

  handleAdd = () => {
    const { navigate } = this.props.navigation;
    navigate('AddTodo');
  }
}
