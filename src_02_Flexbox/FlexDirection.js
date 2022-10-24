import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class FlexDirection extends Component {
    render() {
        return (
            <View>
                <Text style={[styles.h2]}> 主轴方向 </Text>
                <View>
                    <Text style={[styles.h3]}> FlexDirection: 'column'（默认）</Text>
                    <View style={[styles.container]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> FlexDirection: 'column-reverse'</Text>
                    <View style={[styles.container, styles.flexColumnReverse]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> FlexDirection: 'row'</Text>
                    <View style={[styles.container, styles.flexRow]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> FlexDirection: 'row-reverse'</Text>
                    <View style={[styles.container, styles.flexRowReverse]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    h3: {
        fontSize: 24,
        marginHorizontal: 10
    },
    h2: {
        fontSize: 30,
        marginHorizontal: 10,
    },
    itemBase: {
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#dfb',
        padding: 4,
        textAlign: 'center'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    }
})