import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [color, setColor] = useState('')

  const changeColor = () => {
    setColor(
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Background Color Changer</Text>
      <TouchableOpacity onPress={changeColor} style={styles.button}>
        <Text style={styles.buttonText}>Generate Color</Text>
      </TouchableOpacity>

      <View style={[styles.colorBox, { backgroundColor: color }]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#090909',
    elevation: 3,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  colorBox: {
    height: 200,
    width: 400,
  },
})

export default index
