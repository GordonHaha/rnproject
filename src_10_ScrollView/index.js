import { Text, StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ backgroundColor: '#dfb' }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={[styles.nav]}>新闻</Text>
                    <Text style={[styles.nav]}>娱乐</Text>
                    <Text style={[styles.nav]}>体育</Text>
                    <Text style={[styles.nav]}>财经</Text>
                    <Text style={[styles.nav]}>军事</Text>
                    <Text style={[styles.nav]}>新闻</Text>
                    <Text style={[styles.nav]}>时尚</Text>
                    <Text style={[styles.nav]}>科技</Text>
                </ScrollView>
                <ScrollView
                    style={[styles.scrollView]}
                    contentContainerStyle={{ margin: 30 }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={[styles.text]}>Aliquip velit non eiusmod aliquip sit aliqua enim. Adipisicing pariatur sunt reprehenderit nisi eu mollit commodo adipisicing non sit duis dolor esse cillum. Occaecat occaecat consequat adipisicing laborum occaecat amet sit aliqua velit consectetur occaecat minim.

                        Minim consectetur elit et culpa enim eu adipisicing voluptate ad. Esse excepteur commodo non mollit. Voluptate deserunt sunt ipsum fugiat duis. Voluptate dolore proident minim ea id non nulla incididunt laborum duis.

                        Enim officia ea aute enim excepteur. Non deserunt ex qui adipisicing laborum ad consequat adipisicing et occaecat aute culpa duis sunt. Laboris dolore dolor duis non. Tempor pariatur duis velit tempor laborum anim cillum. Tempor nostrud aute esse nisi aliqua officia laborum aute esse eu ipsum officia. Et consequat sit sit deserunt ad. Ipsum esse nostrud dolor enim exercitation amet.

                        Adipisicing veniam reprehenderit in sint in veniam veniam magna est veniam id. Reprehenderit dolor ad nostrud ea. Enim velit eu nostrud veniam labore officia.

                        Adipisicing quis laborum proident ex. Ex laborum fugiat quis dolor minim. Ullamco dolore aute amet ea Lorem labore labore exercitation aliqua sint sint.

                        Cupidatat aliqua excepteur ex laboris commodo ut ad incididunt aliquip reprehenderit irure adipisicing. Ipsum sunt eiusmod adipisicing proident occaecat reprehenderit duis occaecat Lorem dolore. In id adipisicing eu quis et et.

                        Magna adipisicing amet id amet aute ullamco culpa Lorem anim labore amet. Aliquip occaecat duis aliqua consectetur quis voluptate enim minim. Non Lorem sunt ullamco labore dolore magna consequat sunt dolor aliqua.

                        Est fugiat pariatur deserunt do Lorem occaecat occaecat Lorem aliquip minim aliquip nisi. Eiusmod do aliqua exercitation enim nisi eu deserunt irure commodo. Veniam sit cillum consectetur culpa adipisicing amet in. Proident in adipisicing occaecat qui proident nostrud est.

                        Est incididunt aliquip ut minim. Nisi veniam enim consequat sit officia anim excepteur adipisicing culpa ut ea. Reprehenderit ipsum ea officia ad sunt ea nulla esse minim tempor nulla.

                        Ut nulla laborum cupidatat eu amet cillum reprehenderit cillum veniam laboris sint non veniam ut. Irure cupidatat velit amet pariatur adipisicing reprehenderit officia id. Minim culpa sunt tempor aliqua quis id consectetur.</Text>
                </ScrollView>
                <View style={{height: Platform.OS === 'ios' ? 0 : 30}}></View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    scrollView: {
        backgroundColor: '#ddd',
        marginHorizontal: 20
    },
    nav: {
        margin: 10,
        height: 50,
        fontSize: 30
    }
})