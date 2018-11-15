import * as React from 'react'
import {View} from "react-native";
import {ListItem} from "react-native-elements";
import {map} from 'ramda'

interface Props {
    object: {}
    name: string
}

interface State {
    client: []
    object: {}
    name: string
}

export default class CustomerScreen extends React.Component <Props, State> {
    constructor(props: any) {
        super(props);
    }

    userInformation(object) {
        let array = [] = Object.entries(object);
        return array.map(([key, value]) => <ListItem key={key} subtitle={key.toUpperCase()} hideChevron={true}
                                                     title={value}/>)
    }


    render() {
        const {navigation} = this.props;
        const object = navigation.getParam('customer');
        return (
            <View>
                {this.userInformation(object)}
            </View>
        )
    }
}

