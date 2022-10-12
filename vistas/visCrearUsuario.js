import firebase from '../DataBase/firebase';
import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Input, Text, Button, Icon } from '@rneui/base';

function VisCrearUsuario(props) {
  const [state, setState] = useState({
    usuDireccion: "",
    usuNombres: "",
    usuTelefono: "",
  });
  const handlerChangeText = (usuNombre, value) => {
    setState({ ...state, [usuNombre]: value });
  };
  

  const guardarNuevoUsuario = async () => {
    if (state.usuId === '' || state.usuNombres === '') {
      alert('Verificar que los recuadros no esten vacios.');
    } else {
      await firebase.conexion
        .collection("usuarios")
        .add({
          usuId: state.usuId || null,
          usuNombres: state.usuNombres || null,
          usuTelefono: state.usuTelefono || null,
          usuDireccion: state.usuDireccion || null,
        });
      alert('Usuario guardado exitosamente.');
      props.navigation.navigate('VisListaUsuario');
    }
  };

  return (
    <ScrollView>
      <View>
        <Button onPress={() => props.navigation.navigate("VisListaUsuario")} type="solid">
          <Icon name="home" color="black" />Atras
        </Button>
      </View>

      <View style={{ flex: 1, flexDirection: "column" }}>
        <Card>
          <Card.Title>Crear usuario </Card.Title>

          <View>
            <Text>Id</Text>
            <Input 
              placeholder='Ingresar Id'
              onChange={(Value) => handlerChangeText('usuId', Value)} />
          </View>

          <View>
            <Text>Nombres</Text>
            <Input
              placeholder='Ingresar nombres'
              onChange={(Value) => handlerChangeText('usuNombres', Value)} />
          </View>

          <View>
            <Text>Numero</Text>
            <Input
              placeholder='Ingresar telefono'
              onChange={(Value) => handlerChangeText('usuTelefono', Value)} />
          </View>

          <View>
            <Text>Dirección</Text>
            <Input
              placeholder='Ingresar dirección'
              onChange={(Value) => handlerChangeText('usuDireccion', Value)} />
          </View>

          <Button size={"sm"} title="Guardar Usuario" onPress={() => guardarNuevoUsuario()}></Button>

        </Card>
      </View>

    </ScrollView>
  );
}

export default VisCrearUsuario;