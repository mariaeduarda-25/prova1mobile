import { createDrawerNavigator } from '@react-navigation/drawer'
import { BottomTabNavigation } from './MeuTabNavigation'
import { colors } from '../styles/colors'

const Drawer = createDrawerNavigator({
    initialRouteName: 'Meu',
    screens: {
        Meu: BottomTabNavigation
    }
})

export function MainDrawerNavigation() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.primary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen component={BottomTabNavigation} name='Meu' />
        </Drawer.Navigator>
    )
}
