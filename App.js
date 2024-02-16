import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, Alert, Modal, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./App.style";

const DATA = [
    {
        id: 1,
        title: 'Meditation',
        completed: false,
        color: '#91b6f2',
    },
    {
        id: 2,
        title: 'Coding',
        completed: false,
        color: '#c091f2',
    },
    {
        id: 3,
        title: 'Journaling',
        completed: false,
        color: '#f2cd91',
    }
]


export default function App() {
    const [items, setItems] = useState(DATA);
    const [text, setText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const addNewTodo = () => {
        let newTodo = {
        id: Date.now(),
        title: text,
        completed: false,
        color: '#adc7b4',
        };

        setItems([...items, newTodo]);
        setText("");
        setIsModalVisible(false);
    }

    const markItemCompleted = (item) => {
        const itemIndex = items.findIndex(currItem => currItem.id === item.id);

        if (itemIndex !== -1) {
            const updatedItems = [...items];
            updatedItems[itemIndex] = {...items[itemIndex], completed: true};
            setItems(updatedItems);
        }
    }

    const deleteToDo = (item) => {
        const newItems = items.filter((i) => i.id !== item.id);
        setItems(newItems);
    }

    const TodoItem = ({ item }) => (
        <TouchableOpacity style={[styles.items, { backgroundColor: item.color}]} onPress={() => markItemCompleted(item)}>
            <Text style={item.completed ? styles.itemTextCompleted : styles.itemText}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteToDo(item)}><AntDesign name="close" size={22} color="white" /></TouchableOpacity>
        </TouchableOpacity>
    )

    const renderAddButton = () => {
        return (
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <View style={styles.icon}>
                <Ionicons name="add" size={24} color="black" />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView  style={styles.container}>
        <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TextInput style={styles.input} onChangeText={setText} value ={text}/>
                <Button title='Add Todo' onPress={addNewTodo} />
            </View>
            </View>
            <StatusBar style="auto" />
        </Modal>
        <FlatList
            style={styles.list}
            data={items}
            renderItem={({item}) => <TodoItem item={item} />}
            keyExtractor={item => item.id}
            ListFooterComponent={renderAddButton}
            />
        </SafeAreaView>
    );
}
