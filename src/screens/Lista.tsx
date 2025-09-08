import { StyleSheet, Text, View } from "react-native";
import { ImagemTypes, IParam } from "../navigations/ImagemStackNavigation";
import { useRoute } from "@react-navigation/native";
import { ComponentButtonInterface } from "../components";


export function ListaScreen({ navigation }: ImagemTypes) {
    const route = useRoute()
    const { name } = route.params as IParam
    return (
        <View style={styles.container}>
            <Text>Lista</Text>
            <Text>{name}</Text>
            <ComponentButtonInterface type="primary" title="Voltar"
                onPress={() => navigation.navigate("Camera")}
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