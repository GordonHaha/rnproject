import { Text, StyleSheet, View, Alert, Button } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    creatTwoButtonAlert = () => { 
        Alert.alert(
            "警告标题",
            "警告内容",
            [
                {
                    text: "取消",
                    onPress: () => console.log('Cancel'),
                    style: 'cancel'
                },
                {
                    text: "确认",
                    onPress: () => console.log('OK'),
                    style: 'default'
                }
            ]
        )
    }

    creatThreeButtonAlert = () => {
        Alert.alert(
            "更新提示",
            "发现新版本，是否现在更新",
            [
                {
                    text: "取消",
                    onPress: () => console.log('Cancel'),
                    style: 'cancel'
                },
                {
                    text: "确认",
                    onPress: () => console.log('OK'),
                    style: 'default'
                },
                {
                    text: "稍后再试",
                    onPress: () => console.log('稍后提醒我'),
                    style: 'destructive'
                }
            ]
        )
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Button
                    title="alert"
                    onPress={() => {
                        alert('我是一个按钮')
                    }}
                    color={'blue'}
                />

                <Button
                    title="Alert.alert"
                    onPress={() => {
                        Alert.alert('我是一个按钮')
                    }}
                    color={'red'}
                />

                <Button
                    title="两个按钮"
                    onPress={this.creatTwoButtonAlert}
                    color={'green'}
                />

                <Button
                    title="三个按钮"
                    onPress={this.creatThreeButtonAlert}
                    color={'tomato'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40
    }
})