// importa o criador de navegação Drawer (menu lateral)
import { createDrawerNavigator } from '@react-navigation/drawer'

// importa a navegação com abas (provavelmente a parte principal do app)
import { BottomTabNavigation } from './MeuTabNavigation'

// importa as cores definidas no projeto
import { colors } from '../styles/colors'

// importa a navegação que controla as telas da câmera e da lista de imagens
import { ImagemStackNavigation } from './ImagemStackNavigation'


// ---- CRIAÇÃO DO DRAWER ----

// cria a instância do Drawer Navigation
// OBS: esse formato passando { screens: {...} } é antigo,
// nas versões atuais só chamamos `createDrawerNavigator()` sem parâmetro.
const Drawer = createDrawerNavigator({
    initialRouteName: 'Meu',   // rota inicial quando abre o Drawer
    screens: {                 // definição de telas dentro do Drawer
        Meu: BottomTabNavigation
    }
})


// ---- COMPONENTE PRINCIPAL DO DRAWER ----
export function MainDrawerNavigation() {
    return (
        // define o container do Drawer Navigation
        <Drawer.Navigator
            // opções visuais e de estilo aplicadas a todas as telas do Drawer
            screenOptions={{
                // cor de fundo do cabeçalho (barra superior)
                headerStyle: { backgroundColor: colors.primary },
                // cor do texto e ícones do cabeçalho
                headerTintColor: colors.white,
                // estilo do menu lateral em si
                drawerStyle: {
                    backgroundColor: colors.primary,
                },
                // cor do item ativo no Drawer (quando selecionado)
                drawerActiveTintColor: colors.white,
                // cor dos itens inativos
                drawerInactiveTintColor: colors.white
            }}
        >
            {/* Tela principal do app (navegação por abas) */}
            <Drawer.Screen component={BottomTabNavigation} name='Meu' />

            {/* Navegação das telas de câmera e lista de imagens */}
            <Drawer.Screen component={ImagemStackNavigation} name='Imagem' />
        </Drawer.Navigator>
    )
}
