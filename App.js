import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Meditation',
    completed: false,
  },
  {
    id: '2',
    title: 'Coding',
    completed: false,
  },
  {
    id: '3',
    title: 'Journaling',
    completed: false,
  }
]


export default function App() {
  const [items, setItems] = useState(DATA);
  const [text, setText] = useState("");

  const addNewTodo = () => {
    let newTodo = {
      id: items.length + 1,
      title: text,
      completed: false,
    };

    setItems([...items, newTodo]);
    setText("");
  }

  const markItemCompleted = (item) => {
    const itemIndex = items.findIndex(currItem => currItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex] = {...items[itemIndex], completed: true};
      setItems(updatedItems);
      }
      console.log(items);
    }

    const TodoItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => markItemCompleted(item)}>
        <Text style={item.completed ? styles.itemTextCompleted : styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    )

  return (
    <SafeAreaView  style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={setText} value ={text}/>
      <Button title='Add Todo' onPress={addNewTodo} />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: 'gray',
  },
  list: {
    alignSelf: 'stretch',
    alignContent: 'center',
  },
  item: {
    backgroundColor: '#adc7b4',
    padding: 17,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  itemText: {
    color: '#fff'
  },
  itemTextCompleted: {
    color: '#fff',
    textDecorationLine: 'line-through'
  }
});
