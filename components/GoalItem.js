import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={onDeleteItem.bind(this, id)} android_ripple={{color:'#210644'}} style={({pressed})=>pressed && styles.pressedItem}>
        <Text style={{ color: "white", padding: 8 }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
   opacity: 0.5  
  }
});
