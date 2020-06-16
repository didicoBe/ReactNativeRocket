import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'




const Product = ({navigation})=> {
    return(
        <ScrollView>
            <Card
                title={navigation.state.params.product.title}
                image={require('../images/dragon.jpg')}
                containerStyle={style.cartao}    
            >
                <Text style={{marginBottom: 10}}>
                    {navigation.state.params.product.description}
                </Text>
                <Button
                icon={<Icon name='truck' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title=' VIEW NOW' />
            </Card>
        </ScrollView>
        
    )
};


Product.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.product.title
})

const style = StyleSheet.create({
    cartao:{
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginBottom:20
    }
    
})



export default Product