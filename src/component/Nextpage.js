import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'

 class Nextpage extends Component {
    render() {
        return (
            <View>
                <Text>This is next page</Text>
                <Button title="go to headerpage" onPress={()=>this.props.navigation.pop()}></Button>
            </View>
        )
    }
}

export default Nextpage
