// importa o NavigationContainer, que é o componente raiz da navegação no React Navigation
import { NavigationContainer } from "@react-navigation/native";

// importa a navegação do menu principal (com Drawer, aquele menu lateral)
import { MainDrawerNavigation } from "./MainDrawerNavigation";

// importa a navegação da pilha de login (stack com as telas de autenticação)
import { LoginStackNavigation } from "./LoginStackNavigation";

// importa o hook useState (não está sendo usado aqui, mas poderia servir para estados locais)
import { useState } from "react";

// importa o hook de autenticação do contexto (provavelmente gerencia login, logout e usuário)
import { useAuth } from "../context/auth";


// ---- COMPONENTE PRINCIPAL DE NAVEGAÇÃO ----
export function Navigation() {
    // pega a informação de login do contexto de autenticação
    // se login for true, o usuário já está autenticado
    const { login } = useAuth()

    return (
        // NavigationContainer é obrigatório, é o "container global" de todas as rotas
        <NavigationContainer>
            {
                // se o usuário está logado, mostra a navegação principal (menu Drawer)
                login 
                    ? <MainDrawerNavigation /> 
                    // caso contrário, mostra a navegação de login (stack de autenticação)
                    : <LoginStackNavigation />
            }
        </NavigationContainer>
    )
}
