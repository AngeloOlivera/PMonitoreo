import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Input, Text, Button, Icon } from '@rneui/base';

const VisDetalleUsuario = (props) => {
  return (
    <ScrollView>
      <View>
        <Button onPress={() => props.navigation.navigate("VisListaUsuario")} type="solid">
          Atras
          <Icon name="home" color="black" ></Icon>
        </Button>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Card>
          <Card.Title>Detalles del usuario</Card.Title>
          <Card.Divider></Card.Divider>

          <View>
            <Text>Id</Text>
            <Input
              placeholder='Ingresar Id'
            ></Input>
          </View>

          <View>
            <Text>Nombre's</Text>
            <Input
              placeholder='Ingresar Nombres'
            ></Input>
          </View>

          <View>
            <Text>Numero</Text>
            <Input
              placeholder='Ingresar Telefono'
            ></Input>
          </View>

          <View>
            <Text>Dirección</Text>
            <Input
              placeholder='Ingresar Dirección'
            ></Input>
          </View>

        </Card>
      </View>

    </ScrollView>
  )
}

export default VisDetalleUsuario