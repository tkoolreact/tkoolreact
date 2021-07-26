import { StatusBar } from 'expo-status-bar';
import { set } from 'lodash';
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import MyComponent from './components/myTestComponent'

export default App = () => {

  const [myText, setMyText] = useState(''); 

  useEffect(() => {
    console.log('The child component which has updated parent state is ', myText )  
  }, [myText]);


   const myfunction = () => { 
    return 'Hi'
  }

  // Both methods work
   const textInput = useRef();
  // const textInput = {} ;


  let focusTextInput = () => {
      textInput.current.focus();
      console.log('2nd textInput has no focus')            
    }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Here is my function {myfunction()}</Text>
      

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={'Hello world'}   
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={'Hello '}
        ref={textInput}
      />

       {/* Note the similarity between ref and setStateProp ! */} 
      
      <MyComponent setStateProp={setMyText}/>
      
      <Text>{myText}</Text>

      <Button title='Click me' onPress={focusTextInput}>Focus the text input</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
