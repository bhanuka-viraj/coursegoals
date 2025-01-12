import { StyleSheet, View, Text, Pressable } from 'react-native'
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{ color: '#5e0aaa' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity:0.5
    }
})
export default GoalItem;