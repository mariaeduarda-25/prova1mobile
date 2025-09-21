// importa componentes básicos do React Native
import {
  FlatList,        // lista otimizada para exibir muitos itens
  StyleSheet,      // para definir estilos
  Text,            // para renderizar textos
  TouchableOpacity,// (não usado aqui, mas serve para botões customizados)
  View,            // container genérico
} from "react-native";

// importa um botão customizado definido no projeto
import { ComponentButtonInterface } from "../components";

// importa os tipos de navegação para esta tela (para tipagem do navigation)
import { ImagemTypes } from "../navigations/ImagemStackNavigation";

// importa os dados (mock/lista) e o tipo da estrutura de cada dado
import { dados, IDados } from "../services/data";

// importa as cores padrão do projeto
import { colors } from "../styles/colors";


// ---- DEFINIÇÃO DA TELA ----
export function CameraScreen({ navigation }: ImagemTypes) {
  // função que renderiza cada item da lista (recebe um "disco")
  const renderItem = ({ item }: { item: IDados }) => (
    <View style={styles.itemContainer}>
      {/* título do item: exibe nome da banda e usuário */}
      <Text style={styles.itemTitle}>
        {item.banda} - {item.user.name}{" "}
      </Text>

      {/* botão customizado que leva para a tela "Lista",
          passando o item selecionado como parâmetro */}
      <ComponentButtonInterface 
        title="detalhes" 
        type="primary" 
        onPress={() => navigation.navigate("Lista", item)} 
      />
    </View>
  );

  // retorno da interface da tela
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}                         // dados a serem listados
        renderItem={renderItem}              // como cada item será exibido
        keyExtractor={(i) => i.id}           // chave única para cada item
        ListHeaderComponent={<Text>Ver discos</Text>} // cabeçalho da lista
        ListEmptyComponent={<Text>Nenhum disco registrado.</Text>} // caso não haja dados
      />
    </View>
  );
}


// ---- ESTILOS DA TELA ----
export const styles = StyleSheet.create({
  container: {
    flex: 1,        // ocupa toda a tela
    padding: 10,    // margem interna
  },
  itemContainer: {
    backgroundColor: colors.secondary, // cor de fundo de cada item
    padding: 15,
    borderRadius: 8,    // bordas arredondadas
    marginBottom: 10,   // espaço entre os itens
    borderWidth: 1,     // borda em volta do item
    borderColor: colors.black,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 20,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: colors.black,
    textAlign: "center",
    marginTop: 50,
  },
});
