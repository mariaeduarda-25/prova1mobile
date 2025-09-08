import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ScreenCamera, ScreenLista } from "../screens"
import { StaticParamList } from "@react-navigation/native"

export interface IParam {
    name: string
}
type ImagemParamList = {
    Camera: undefined
    Lista: IParam
}
type ImagemScreenProp = NativeStackNavigationProp<ImagemParamList, 'Camera'>
export type ImagemTypes = {
    navigation: ImagemScreenProp
}
const ImagemStack = createNativeStackNavigator<ImagemParamList>()
export function ImagemStackNavigation() {
    return (
        <ImagemStack.Navigator screenOptions={{ headerShown: false }}>
            <ImagemStack.Screen name="Camera" component={ScreenCamera} />
            <ImagemStack.Screen name="Lista" component={ScreenLista} />
        </ImagemStack.Navigator>
    )
}