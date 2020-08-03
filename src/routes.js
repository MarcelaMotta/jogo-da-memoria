import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuInicial from './pages/MenuInicial';
import Jogo from './pages/Jogo';
import Ranking from './pages/Ranking';

const AppDrawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppDrawer.Navigator screenOptions={{ headerShown: false }} >
                <AppDrawer.Screen name="Trocar usuário" component={MenuInicial} />
                <AppDrawer.Screen name="Jogo" component={Jogo} />
                <AppDrawer.Screen name="Ranking" component={Ranking} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    );
}