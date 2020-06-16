import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import api from "../services/api";

export default class Main extends Component {

    state={
        docs:[],
        page:1,
        productInfo:{}
    }


    componentDidMount(){
        this.loadproducts();
    }

    loadproducts = async(page = 1) =>{
        const response  = await api.get(`/products?page=${page}`);

        const { docs, ... productInfo } = response.data; 
        console.log(docs)
        this.setState({
            docs:[... this.state.docs, ... docs],
            productInfo:productInfo,
            page:page
        })
    }

    renderItem = ({item})=>(
        <View style={style.productContainer}>
            <Text style={style.productTitle}>{item.title}</Text>
            <Text  style={style.productDescription}>{item.description}</Text>
            <TouchableOpacity 
                onPress={()=>{
                    this.props.navigation.navigate('Product',{product:item})
                }} 
                style={style.productButton}
            >
                <Text style={style.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )


    loadMore = ()=>{
        const { page, productInfo} = this.state
        if (page === productInfo.pages) {
            return
        }else{
            const pageNumber = page + 1
            this.loadproducts(pageNumber)
        }
    }



    render() {
        
        return (
        <View  style={style.container}>
            <FlatList
                contentContainerStyle={style.list}
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1}
            />
        </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    list:{
        padding:20
    },
    productContainer:{
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#DDD',
        borderRadius:5,
        padding:20,
        marginBottom:20
    },
    productTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:'#333'
    },
    productDescription:{
        fontSize:16,
        color:'#999',
        marginTop:5,
        lineHeight:24
    },
    productButton:{
        height:42,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#DA552F',
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    productButtonText:{
        fontSize:16,
        color:'#DA552F',
        fontWeight:"bold"
    }
})