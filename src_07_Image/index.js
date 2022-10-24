import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
            <Image
                style={[styles.ItemImage]}
                source={require('./images/2.png')}
            
            />
            <Image
                source={{
                    uri: 'https://www.reactnative.cn/img/homepage/phones.png',
                }}
                style={{ width: 100, height: 100, marginVertical: 20 }}
            />
            <Image
                style={{
                    width: 51,
                    height: 51,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                }}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ItemImage: {
        height: 200,
        width: Dimensions.get('window').width,
        marginVertical:20
        

    }
})