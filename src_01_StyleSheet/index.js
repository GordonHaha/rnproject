import { Text, View, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>index</Text>
                <Text style={[{ color: 'red' }, { color: 'green' }]}>index</Text>
                
                <Text style={[styles.h1]}>Hello RN</Text>
                <Text style={[styles.h2]}>Hello RN</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})