import React from 'react';

import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class AddTodoForm extends React.Component {
    state = {
      todo: '',
      date: '',
    };

    render() {
      const { todo, date } = this.state;

      return (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={text => this.handleChangeTodo(text)}
            placeholder="To do"
            value={todo}
          />
          <DatePicker
            style={styles.input}
            onDateChange={date => this.handleChangeDate(date)}
            date={date}
          />
          <Button onPress={this.handleSubmit} title="submit" />
        </View>
      );
    }

    handleChangeTodo(todo) {
      this.setState({ todo });
    };

    handleChangeDate(date) {
      this.setState({ date });
    };

    handleSubmit = () => {
      const { todo, date } = this.state;

      if (!todo) {
        Alert.alert('Error!', '왜 입력을 안 하니?', [
          { text: '잘못했습니다' },
          { text: '그러게요' },
        ]);
        return;
      } else if (todo.length > 50) {
        Alert.alert('Error!', '너무 길어');
        return;
      }

      const { onAddTodo, onSubmit } = this.props;

      onAddTodo({ todo, date });
      onSubmit();
    }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
