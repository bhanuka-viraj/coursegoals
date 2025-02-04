import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='cancel' onPress={props.onCancel} color={'#f31282'} />
                    </View>
                    
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color={'#b180f0'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 20,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#c4b8e6',
        color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        margin: 10,
        padding: 10,
        width: '35%'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});

export default GoalInput;