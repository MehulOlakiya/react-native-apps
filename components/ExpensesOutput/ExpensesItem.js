import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constant/styles";
import { getDateFormate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({ id, description, amount, date }) {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getDateFormate(new Date(date))}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItem;

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
  expenseItem: {
    padding: 16,
    margin: 6,
    backgroundColor: "#3c3232",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "white",
  },
  description: {
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 16,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#605656",
    minWidth: 80,
  },
  amount: {
    color: "white",
    fontWeight: "bold",
  },
});
