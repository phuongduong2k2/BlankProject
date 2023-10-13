import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const AppTest = (props) => {
    const {renderHeader} = props

    const value = useState(new Animated.ValueXY({x: 0,y: 0}))[0]

    function moveBall1() {
        Animated.timing(value, {
            toValue: {x: 100, y: 100},
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    function moveBall2() {
        Animated.timing(value, {
            toValue: {x: 0, y: 0},
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const renderItem = () => {
        return <Text>adasdasdf</Text>
    }

  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: 'pink'
        }}
        />
      </Animated.View>
      <TouchableOpacity onPress={moveBall1}>
        <Text>Move Ball</Text>
      </TouchableOpacity>
      <View style={{height:50, width:100, borderWidth:1}}>

      {renderHeader()}
      </View>
      <TouchableOpacity onPress={moveBall2}>
        <Text>Move Ball</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AppTest

const styles = StyleSheet.create({})