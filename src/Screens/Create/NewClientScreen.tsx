import * as React from 'react'
import {View} from "react-native";
// import {Button, FormInput} from "react-native-elements";
import {addNewClient} from '/Users/irion94/Mechanic/src/Data/Db/DbMethods';
import {Button, Form, Item, Text} from "native-base";
import UniversalFormInput from "../../Components/FormInputs/UniversalFormInput";
import {borderStyles} from "../../Styles/UniversalStyles";

// interface State {
//     id: number
//     name: string
//     surname: string
//     address: string
//     phone: string
//     email: string
// }
//
// interface Props {
//     id: number
//     name: string
//     surname: string
//     address: string
//     phone: string
//     email: string
//     tmp: string
// }

/**
 *  TODO: Change it to component
 */

export default class NewClientScreen extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            address: '',
            phone: '',
            email: '',
            cars:[]
        };
    }

    _onChangeText = (obj) => {
        this.setState(obj, () => console.log('NewClientScreen', this.state))
    };

    _onPress = () => {
        addNewClient(this.state)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Form style={[borderStyles.border, {margin: 5, padding: 15}]}>
                    <UniversalFormInput stateKey='name' onChangeText={this._onChangeText}/>
                    <UniversalFormInput stateKey='surname' onChangeText={this._onChangeText}/>
                    <UniversalFormInput stateKey='phone' onChangeText={this._onChangeText}/>
                    <UniversalFormInput optional stateKey='email' onChangeText={this._onChangeText}/>
                    <UniversalFormInput optional stateKey='address' onChangeText={this._onChangeText}/>
                </Form>

                <Button onPress={this._onPress}>
                    <Text>Button</Text>
                </Button>
            </View>
        )
    }

}