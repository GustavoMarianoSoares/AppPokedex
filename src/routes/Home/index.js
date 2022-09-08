import { ScrollView, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import api from '../../services/api'

export default function Routes() {

  const [pokemons, setPokemons] = useState([])

    useEffect(() =>{
        api.get('?limit=151&offset=0')//Primeiros 151 pokemons
        .then((response) => {
          setPokemons(response.data.results)
      })
    }, [])

    const showPokemon = (pokemon) =>{
      Alert.alert('Você clicou em um pokemon',`Ele é o: ${pokemon}`)
    }

  return (
    <View style={styles.container}>
      <SafeAreaView>
          <ScrollView>
            {pokemons.map(pokemons => 
            <TouchableOpacity onPress={() => showPokemon(pokemons.name)}>
            <Text
                style={styles.pokeNames}
                key={pokemons.id}>
                {pokemons.name}{"\n"}
            </Text>
            </TouchableOpacity>)}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}