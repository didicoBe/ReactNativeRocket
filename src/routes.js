import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Main from "./pages/main";
import Product from "./pages/product";


export default createAppContainer(
    createStackNavigator(
        {
            Home :{
                screen: Main,
                navigationOptions: ()=> ({
                    title: 'JSWfDev',
                    
                })
            },
            Product:{
                screen: Product,
            },
            navigationOptions: ()=> ({
                title: 'Produtos',
            })
        },
        {
            defaultNavigationOptions:{
                headerStyle:{
                    backgroundColor:'#DA552F',
                   

                },
                headerTintColor:"#FFF"
                
            }
        }
    )
)