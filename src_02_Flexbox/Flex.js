import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class Flex extends Component {
  render() {
      return (
          <View style={{height: '100%'}}>
              <Text style={[styles.h2]}> 项目在主轴的尺寸占比 </Text>
              <ScrollView>
                  <Text style={[styles.h3]}> flexRow 1:1:1</Text>
                  <View style={[styles.containerBase, styles.flexRow]}>
                      <Text style={[styles.itemBase, {flex: 1}]}>刘备(1)</Text>
                      <Text style={[styles.itemBase, {flex: 1}]}>关羽(1)</Text>
                      <Text style={[styles.itemBase, {flex: 1}]}>张飞(1)</Text>
                  </View>
                  <Text style={[styles.h3]}> flexRow 1:2:3</Text>
                  <View style={[styles.containerBase, styles.flexRow]}>
                      <Text style={[styles.itemBase, { flex: 1 }]}>刘备(1)</Text>
                      <Text style={[styles.itemBase, { flex: 2 }]}>关羽(2)</Text>
                      <Text style={[styles.itemBase, { flex: 3 }]}>张飞(3)</Text>
                  </View>
                  <Text style={[styles.h3]}> flexColumn 1:1:1</Text>
                  <View style={[styles.containerBase, styles.flexColumn]}>
                      <Text style={[styles.itemBase, { flex: 1 }]}>刘备(1)</Text>
                      <Text style={[styles.itemBase, { flex: 1 }]}>关羽(1)</Text>
                      <Text style={[styles.itemBase, { flex: 1 }]}>张飞(1)</Text>
                  </View>
                  <Text style={[styles.h3]}> flexColumn 1:2:3</Text>
                  <View style={[styles.containerBase, styles.flexColumn]}>
                      <Text style={[styles.itemBase, { flex: 1 }]}>刘备(1)</Text>
                      <Text style={[styles.itemBase, { flex: 2 }]}>关羽(2)</Text>
                      <Text style={[styles.itemBase, { flex: 3 }]}>张飞(3)</Text>
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
    }
})