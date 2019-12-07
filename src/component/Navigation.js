import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
//import {createSwitchNavigator,createStackNavigator,createAppContainer} from 'react-navigation'
import Header from './Header'
import Nextpage from './Nextpage'

const AppNavigator = createStackNavigator({
    // Headerscreen:Header,
    // nextscreen:Nextpage,
    Headerscreen:{
        screen:Header,
     //to remove back button option from the header section 
        navigationOptions:{
            header:null
        }
    },
    nextscreen:{
        screen:Nextpage,
        //to remove back button option from the header section 
        navigationOptions:{
            header:null
        }
    }
    
})

export default createAppContainer(AppNavigator)