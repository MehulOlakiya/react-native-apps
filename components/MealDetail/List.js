import { Text, StyleSheet, FlatList, View } from "react-native";

function List({ listIem }) {
  return listIem.map((item) => (
    <View style={styles.listItem}>
      <Text key={item + Math.random()} style={styles.itemText}>
        {item}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#3e200e",
    textAlign: "center",
  },
});
