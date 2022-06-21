import React, {useState} from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    const onSubmit = (text) => {
        submitHandler(text);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New todo.."
                onChangeText={(val) => changeHandler(val)}
            />
            <Button onPress={() => onSubmit(text)} title='Add ToDo' color='#FF8C8C' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10, 
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1, 
        borderBottomColor: '#ddd',
    }
});
