// importa utilitários do React Native
import { StyleSheet, Text, View } from "react-native";

// importa o tipo de navegação do stack de Imagem
import { ImagemTypes } from "../navigations/ImagemStackNavigation";

// hook para acessar os parâmetros enviados pela navegação
import { useRoute } from "@react-navigation/native";

// botão customizado do projeto
import { ComponentButtonInterface } from "../components";

// tipo da estrutura de dados de um disco
import { IDados } from "../services/data";


// ---- DEFINIÇÃO DA TELA ----
export function ListaScreen({ navigation }: ImagemTypes) {
    // pega as informações enviadas pela navegação (params)
    const route = useRoute()

    // converte os parâmetros recebidos para o tipo IDados
    const disco = route.params as IDados

    return (
        <View style={styles.container}>
            {/* título da tela */}
            <Text>Lista</Text>

            {/* exibição dos detalhes do disco */}
            <Text>Banda: {disco.banda}</Text>
            <Text>Álbum: {disco.album}</Text>
            <Text>Ano: {disco.ano}</Text>
            <Text>Músicas: {disco.musicas}</Text>

            {/* dados do proprietário */}
            <Text>Proprietário: {disco.user.name}</Text>
            <Text>
                Disponível: {disco.user.disponivel ? "Sim" : "Não"}
            </Text>

            {/* botão para voltar à tela "Camera" */}
            <ComponentButtonInterface 
                type="primary" 
                title="Voltar"
                onPress={() => navigation.navigate("Camera")}
            />
        </View>
    )
}


// ---- ESTILOS ----
export const styles = StyleSheet.create({
    container: {
        flex: 1,                 // ocupa toda a tela
        alignItems: "center",    // centraliza os itens horizontalmente
        justifyContent: "center" // centraliza verticalmente
    }
})
