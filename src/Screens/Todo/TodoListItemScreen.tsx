import * as React from 'react'
import {Alert, Text, View} from "react-native";
import CarListItem from "../../Components/CarListItem";
import {Button} from "react-native-elements";

class TodoListItemScreen extends React.Component {

    render(){
        const {navigation} = this.props;
        const obj = navigation.getParam('todo');
        return(
            <View>
                <Text style={{textAlign:'center'}}>Todo Details Screen</Text>
                <CarListItem item={obj.title} name={'Title'}/>
                <CarListItem item={obj.description} name={'Description'}/>
                <CarListItem item={obj.photo} name={'Photos'}/>
                <Button title={'DONE!'} onPress={() => {
                    Alert.alert(
                        'Alert',
                        'Are You sure?',
                        [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false }
                    )
                } }/>
            </View>
        )
    }
}

export default TodoListItemScreen