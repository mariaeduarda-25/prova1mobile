import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ComponentButtonInterface } from "../components";
import { ImagemTypes } from "../navigations/ImagemStackNavigation";
import { dados, IDados } from "../services/data";
import { colors } from "../styles/colors";

export function CameraScreen({ navigation }: ImagemTypes) {
  const renderItem = ({ item }: { item: IDados }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>
        {item.banda} - {item.user.name}{" "}
      </Text>
      <ComponentButtonInterface title="detalhes" type="primary" onPress={() => navigation.navigate("Lista", item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        ListHeaderComponent={<Text>Ver discos</Text>}
        ListEmptyComponent={<Text>Nenhum disco registrado.</Text>}
      />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  itemContainer: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
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
