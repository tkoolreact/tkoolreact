import { StatusBar } from 'expo-status-bar';
import React, {useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default myComponent = ({setStateProp}) => {
  //console.log('props1 is ' , prop1 )

  // In "react": "16.13.1" we need to wrap in useEffect to prevent
  // Cannot update a component from inside the function body of a different component warning

  useEffect(() => {
      setStateProp('Hair of the dog');  // set here in use effect to bubble up to parent
  }, [setStateProp]);

  
  return (
      <View>
        <Text>Hi from the comonent</Text>
      </View>

  )
} 