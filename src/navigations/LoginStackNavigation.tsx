// importa função e tipo para criar navegação em stack (pilha de telas)
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"

// importa as telas do fluxo de autenticação
import { LoginScreen } from "../screens/Login"
import { RegisterScreen } from "../screens/Register"

// importa tipo auxiliar do React Navigation
import { StaticParamList } from "@react-navigation/native"


// ---- CRIAÇÃO DA NAVEGAÇÃO ----

// cria o stack de login/registro
// OBS: esse formato com { screens: { ... } } não é o mais comum nas versões atuais,
// normalmente usamos createNativeStackNavigator<LoginStackParamList>().
// Mas a ideia é a mesma: definir as telas.
const LoginStack = createNativeStackNavigator({
    screens: {
        Login: LoginScreen,        // tela de login
        Register: RegisterScreen   // tela de registro
    }
})


// ---- TIPAGEM DAS ROTAS ----

// cria um tipo que mapeia automaticamente os parâmetros aceitos em cada rota do stack
type LoginStackParamList = StaticParamList<typeof LoginStack>

// define o tipo de navegação específico da tela "Login"
// isso garante que `navigation.navigate('Register')` por exemplo seja validado pelo TypeScript
type LoginScreenProp = NativeStackNavigationProp<LoginStackParamList, 'Login'>

// exporta o tipo que será usado nos componentes das telas de login
export type LoginTypes = {
    navigation: LoginScreenProp
}


// ---- COMPONENTE PRINCIPAL DE NAVEGAÇÃO ----
export function LoginStackNavigation() {
    return (
        // cria o container de navegação do stack de login
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            {/* Tela de login */}
            <LoginStack.Screen name="Login" component={LoginScreen} />
            
            {/* Tela de registro */}
            <LoginStack.Screen name="Register" component={RegisterScreen} />
        </LoginStack.Navigator>
    )
}
