import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,Alert,ScrollView,FlatList} from 'react-native';

import VisListaUsuario from './VisListaUsuario';

const data = [
    {id:1, title: "Usuario", Image:"https://Img.Icons8.com/cute-clipart/452/apple-settings.png"},
    { id:2, title: "GPS", Image: "https://Img.Icons8.com/cute-clipart/452/apple-settings.png" },
    { id:3, title: "MAPS", Image: "https://Img.Icons8.com/cute-clipart/452/apple-settings.png" },
    { id:4, title: "Geolocalizar", Image: "https://Img.Icons8.com/cute-clipart/452/apple-settings.png" },
];

const MenuPrincipal=(props)=>{
    return (
    <View style={styles.container}>
        <View style={{flex:4}}>
            <FlatList style={StyleSheet.list}
            ComponentContainerStyle={styles.listContainer}
            data={data}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item)=>{
                return item.id;
            }}
            renderItem={({item}) => {
                return(
                    <View>
                        <TouchableOpacity style = {{backgroundColor: '#123123',color:'#ffffff'}}
                            onPress={() => {
                                switch(item.id){
                                    case 1:
                                        Alert.alert("Enviando a lista usuarios");
                                        // eslint-disable-next-line react/prop-types
                                        props.navigation.navigate("VisListaUsuario");
                                        break;
                                    case 2:
                                        Alert.alert("Enviando a lista usuarios");
                                        // eslint-disable-next-line react/prop-types
                                        props.navigation.navigate("VisListaUsuario");
                                        break;
                                    case 3:
                                        Alert.alert("Enviando a lista usuarios");
                                        // eslint-disable-next-line react/prop-types
                                        props.navigation.navigate("VisListaUsuario");
                                        break;
                                    case 4:
                                        Alert.alert("Enviando a lista usuarios");
                                        // eslint-disable-next-line react/prop-types
                                        props.navigation.navigate("VisListaUsuario");
                                        break;
                                }
                            }}
                            >
                       <Image style={styles.cardImage} source={{uri:item.Image}} />
                        </TouchableOpacity>
                        <View style={styles.cardHeader}>
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                     </View>
                   </View>         
                )
            }}/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        backgroundColor: '#f6f6f6',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#F1F1F1",
    },
    listContainer: {
        alignItems: 'center'
    },
    /*** card *****/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 12,
        marginHorizontal: 40,
        backgroundColor: "#407FC6",
        //flexBasis: '42%',
        width: 80,
        height: 80,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#696969",
        fontWeight: "bold",
    },
})

export default MenuPrincipal