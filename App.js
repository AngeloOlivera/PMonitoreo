import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import MenuPrincipal from './vistas/MenuPrincipal';
import VisCrearUsuario from './vistas/VisCrearUsuario';
import VisDetalleUsuario from './vistas/VisDetalleUsuario';
import VisListaUsuario from './vistas/VisListaUsuario';


function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='VisCrearUsuario' component={VisCrearUsuario} options={{title:'App GH Angelo'}} />
            <Stack.Screen name='MenuPrincipal' component={MenuPrincipal} options={{title:'App GH Angelo'}} />
            <Stack.Screen name='VisListaUsuario' component={VisListaUsuario} options={{title:'App GH Angelo'}} />
            <Stack.Screen name='VisDetalleUsuario' component={VisDetalleUsuario} options={{title:'App GH Angelo'}} />
            
        </Stack.Navigator>
    );
}

export default function App(){
    return(
        <NavigationContainer> 
            <MyStack/> 
        </NavigationContainer>
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});

