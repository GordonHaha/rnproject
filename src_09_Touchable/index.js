import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <TouchableHighlight onPress={() => console.log('触碰高亮显示')}>

                </TouchableHighlight>

                <Text>index</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})