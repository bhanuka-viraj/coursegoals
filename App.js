import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, SafeAreaView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length > 0) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredGoalText, id: Math.random().toString() }
      ]);
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => (goal.id !== id));
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={styles.appContainer}>

        <Button title='Add new Goal' color={'#5e0acc'} onPress={startAddGoalHandler} />

        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.id} />
          }}
            keyExtractor={(item, index) => { return item.id }}
            alwaysBounceVertical={false} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4,
    paddingBottom: 20
  },
  addGoalBtn: {
    width: '20%'
  }
});

