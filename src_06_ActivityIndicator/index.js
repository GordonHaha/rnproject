import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

export default function index() {
    if (Platform.OS === 'android') {
        alert('当前是安卓应用')
    } else if (Platform.OS === 'ios') {
        alert('当前是iOS应用')
    }
    return (
        <View style={[styles.container]}>
            <ActivityIndicator color="blue" size={'large'} />
            <ActivityIndicator color="green" size={'small'} />
            {/* 数字指定大小只在安卓有效 */}
            <ActivityIndicator color="#00d0ff" size={70} />
            <ActivityIndicator color="red" size={100} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    }
})