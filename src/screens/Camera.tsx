import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ComponentButtonInterface } from "../components";
import { ImagemTypes } from "../navigations/ImagemStackNavigation";

export function CameraScreen({ navigation }: ImagemTypes) {
    return (
        <View style={styles.container}>
            <Text>Câmera</Text>
            <ComponentButtonInterface title="Lista" type="primary"
                onPress={() => navigation.navigate("Lista", { name: "Lázaro" })}
            />
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})