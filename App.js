import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'write code', key: 2 },
    { text: 'play tennis', key: 3 },
    { text: 'buy coffee', key: 1 },
  ]);

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (newText) => {
    if (newText.length > 2) {
      setTasks((prevTasks) => {
        return [
          { text: newText, key: Math.random().toString() },
          ...prevTasks
        ];
      });
    }
    else {
      Alert.alert('Oops', 'Todos must be over 2 chars long.', [
        { text: 'Understood', onPress: () => console.log("Alert closed !") }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  content: {
    flex: 1,
    padding: 40,
  }, 
  list: {
    flex: 1,
    marginTop: 20,
  }
});

export default App;
