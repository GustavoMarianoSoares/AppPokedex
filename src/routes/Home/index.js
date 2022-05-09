import { ScrollView, Text, View, SafeAreaView } from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../../services/api'

export default function Routes() {

  const [pokemons, setPokemons] = useState([])

    useEffect(() =>{
        api.get('?limit=151&offset=0')//Primeiros 151 pokemons
        .then((response) => {
          setPokemons(response.data.results)
      })
    }, [])

  return (
    <View>
      <SafeAreaView>
          <ScrollView>
            {pokemons.map(pokemons => 
            <Text key={pokemons.id}>
                {pokemons.name}{"\n"}
            </Text>)}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}