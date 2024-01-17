import { View,  TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { useUsers } from '../context/UserContext';

import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

const Form = () => {
    const [name, setName] =useState ("");
    const { addUser} = useUsers();

    const handleSubmit = () => {

        if(!name) {
            return false;
        }
        addUser({ name });
        setName(""); //yazdıktan sonra text kutusunu sıfırlar.
    };

  return (
    <View style = {styles.container}>
      <TextInput 
      style = {styles.input} 
      returnKeyType='go' 
      value ={name} 
      onChangeText={(text) => setName(text)}
      onEndEditing={handleSubmit}
      placeholder='Enter username'
    
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        padding:10,
    },

    input:
    {   
        borderWidth: 2, 
        borderColor: "gray",
        width: "100%" ,
        height: 50,
        padding:5,
        fontSize: 20,
    },
});
export default Form;