// importa funções e tipos para criar navegação em stack (pilha de telas)
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"

// importa as telas (câmera e lista) que serão usadas dentro dessa navegação
import { ScreenCamera, ScreenLista } from "../screens"

// importa tipos auxiliares do React Navigation
import { StaticParamList } from "@react-navigation/native"

// importa a interface IDados (definição dos dados que serão passados entre as telas)
import { IDados } from "../services/data"

// ---- DEFINIÇÃO DOS TIPOS ----

// define as telas (rotas) e os parâmetros que cada uma recebe
type ImagemParamList = {
    // Tela "Camera" não recebe nenhum parâmetro
    Camera: undefined
    // Tela "Lista" recebe um objeto do tipo IDados
    Lista: IDados
}

// cria um tipo que representa a navegação partindo da tela "Camera"
// isso serve para tipar `navigation.navigate()` e evitar erros de rota
type ImagemScreenProp = NativeStackNavigationProp<ImagemParamList, 'Camera'>

// exporta o tipo que será usado nos componentes das telas
export type ImagemTypes = {
    navigation: ImagemScreenProp
}

// ---- CRIAÇÃO DA NAVEGAÇÃO ----

// cria a pilha de navegação usando os tipos definidos em ImagemParamList
const ImagemStack = createNativeStackNavigator<ImagemParamList>()

// componente que encapsula a navegação dessa parte do app
export function ImagemStackNavigation() {
    return (
        // define o stack navigator e remove o header padrão (headerShown: false)
        <ImagemStack.Navigator screenOptions={{ headerShown: false }}>
            {/* Tela da câmera */}
            <ImagemStack.Screen name="Camera" component={ScreenCamera} />
            {/* Tela da lista, que recebe os dados do tipo IDados */}
            <ImagemStack.Screen name="Lista" component={ScreenLista} />
        </ImagemStack.Navigator>
    )
}
