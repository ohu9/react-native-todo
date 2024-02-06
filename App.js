import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, Flatlist, SafeAreaView } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Meditation'
  },
  {
    id: '2',
    title: 'Coding'
  },
  {
    id: '3',
    title: 'Journaling'
  }
]

const TodoTItem = (props) => (
  <View style={styles.item}>
    <Text style={style.itemText}>{props.item.title}</Text>
  </View>
)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input}/>
      <Button title='Start' onPress={() => Alert.alert('Simple Button pressed')} />
      <Flatlist
        data={DATA}
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
    borderColor: 'gray',
  },
  item: {
    backgroundColor: 'light-blue',
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16
  },
  itemText: {
    color: '#ffff'
  }
});
