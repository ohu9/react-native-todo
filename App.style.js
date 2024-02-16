import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    items: {
      backgroundColor: '#adc7b4',
      padding: 17,
      marginVertical: 8,
      marginHorizontal: 10,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    itemText: {
      color: '#fff'
    },
    itemTextCompleted: {
      color: '#fff',
      textDecorationLine: 'line-through'
    },
    centeredView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    icon: {
      backgroundColor: "white",
      borderRadius: '100%',
      padding: 10,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      alignSelf: 'center',
    }
  });