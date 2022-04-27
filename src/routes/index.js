import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../services/api'

export default function Routes() {

  const [pokemons, setPokemons] = useState([])

    useEffect(() =>{
        api.get('/')
        .then((response) => {
          setPokemons(response.data.results)
      })
    }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        {pokemons.map(pokemons => 
        <Text>
          {pokemons.name}{"\n"}
        </Text>)}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });