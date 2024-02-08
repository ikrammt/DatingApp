import { StyleSheet, Text, View } from "react-native";
export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome Back</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
        width: 500,
        height: 80,
    },  
    headerText: {
        fontSize: 30,
        color: 'black',
      },
});
