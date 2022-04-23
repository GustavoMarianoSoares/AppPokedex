import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../services/api'

export default function Routes() {

    useEffect(() =>{
        api.get('1').then((response) => {
            console.log(response);
        })
    }, [])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>TESTE</Text>

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