import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'

 class Header extends Component {
    render() {
        return (
           <View style={{justifyContent:"center",alignItems:"center",color:"blue"}}>
               <Text>Albums</Text>
               <Button title="go next page" onPress={()=>this.props.navigation.push("nextscreen")} />
           </View>
        )
    }
}

export default Header
