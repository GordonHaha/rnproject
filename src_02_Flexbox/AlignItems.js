import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class AlignItems extends Component {
  render() {
      return (
          <View style={{height: '100%'}}>
              <Text style={[styles.h2]}> 项目在交叉轴上的对齐方式 </Text>
              <ScrollView>
                  <Text style={[styles.h3]}> alignItems: 'flex-start'（默认）</Text>
                  <View style={[styles.containerBase, styles.flexRow, styles.alignItemsStart]}>
                      <Text style={[styles.itemBase]}>刘备</Text>
                      <Text style={[styles.itemBase]}>关羽</Text>
                      <Text style={[styles.itemBase]}>张飞</Text>
                  </View>
                  <Text style={[styles.h3]}> alignItems: 'center'</Text>
                  <View style={[styles.containerBase, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.itemBase]}>刘备</Text>
                      <Text style={[styles.itemBase]}>关羽</Text>
                      <Text style={[styles.itemBase]}>张飞</Text>
                  </View>
                  <Text style={[styles.h3]}> alignItems: 'flex-end'</Text>
                  <View style={[styles.containerBase, styles.flexRow, styles.alignItemsEnd]}>
                      <Text style={[styles.itemBase]}>刘备</Text>
                      <Text style={[styles.itemBase]}>关羽</Text>
                      <Text style={[styles.itemBase]}>张飞</Text>
                  </View>
                  <Text style={[styles.h3]}> alignItems: 'stretch'</Text>
                  <View style={[styles.containerBase, styles.flexRow, styles.alignItemsStretch]}>
                      <Text style={[styles.itemBase]}>刘备</Text>
                      <Text style={[styles.itemBase]}>关羽</Text>
                      <Text style={[styles.itemBase]}>张飞</Text>
                  </View>
                  <Text style={[styles.h3]}> alignItems: 'baseline'</Text>
                  <View style={[styles.containerBase, styles.flexRow, styles.alignItemsBaseline]}>
                      <Text style={[styles.itemBase]}>刘备</Text>
                      <Text style={[styles.itemBase, {fontSize: 60}]}>关羽</Text>
                      <Text style={[styles.itemBase, {fontSize: 40}]}>张飞</Text>
                  </View>
              </ScrollView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    containerBase: {
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
    },
    alignItemsStart: {
        alignItems: 'flex-start'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    alignItemsEnd: {
        alignItems: 'flex-end'
    },
    alignItemsStretch: {
        alignItems: 'stretch'
    },
    alignItemsBaseline: {
        alignItems: 'baseline'
    }
})