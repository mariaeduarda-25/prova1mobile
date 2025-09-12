import { StyleSheet, Text, View } from "react-native";
import { ImagemTypes } from "../navigations/ImagemStackNavigation";
import { useRoute } from "@react-navigation/native";
import { ComponentButtonInterface } from "../components";
import { IDados } from "../services/data";


export function ListaScreen({ navigation }: ImagemTypes) {
    const route = useRoute()
    const disco = route.params as IDados
    return (
        <View style={styles.container}>
            <Text>Lista</Text>
            <Text>Banda: {disco.banda}</Text>
            <Text>Álbum: {disco.album}</Text>
            <Text>Ano: {disco.ano}</Text>
            <Text>Músicas: {disco.musicas}</Text>
            <Text>Proprietário: {disco.user.name}</Text>
            <Text>Disponível: {disco.user.disponivel? "Sim" : "Não"}</Text>
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