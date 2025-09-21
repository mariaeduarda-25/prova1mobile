// importa o criador de navegação com abas inferiores
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// importa a tela de Perfil que será exibida dentro da aba
import { ScreenPerfil } from '../screens'

// importa as cores do projeto
import { colors } from '../styles/colors'

// importa os ícones (Ionicons é uma biblioteca de ícones do Expo)
import { Ionicons } from '@expo/vector-icons'


// ---- CRIAÇÃO DO TAB NAVIGATOR ----

// cria a instância do Bottom Tab Navigator
// OBS: esse formato passando { screens: {...} } é mais antigo.
// O comum hoje é só chamar: createBottomTabNavigator()
const Tab = createBottomTabNavigator({
    screens: {
        Perfil: ScreenPerfil, // define a tela de Perfil como parte das abas
    }
})


// ---- COMPONENTE PRINCIPAL DE NAVEGAÇÃO ----
export function BottomTabNavigation() {
    return (
        // define o container do Tab Navigator
        <Tab.Navigator
            // screenOptions: estilos e configurações aplicadas a todas as abas
            screenOptions={{
                // cor de fundo da aba ativa
                tabBarActiveBackgroundColor: colors.primary,
                // cor do texto/ícone da aba ativa
                tabBarActiveTintColor: colors.white,
                // esconde o cabeçalho padrão (header)
                headerShown: false,
                // cor de fundo da aba inativa
                tabBarInactiveBackgroundColor: colors.primary,
                // cor do texto/ícone da aba inativa
                tabBarInactiveTintColor: colors.white,
            }}
        >
            {/* Abas do app */}
            <Tab.Screen 
                name='Perfil'          // nome da aba
                component={ScreenPerfil} // componente renderizado nessa aba
                options={{
                    // ícone que aparece na aba "Perfil"
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
