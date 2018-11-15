import * as React from 'react'
import {List, ListItem, Text} from "react-native-elements";
import {map} from 'ramda'
import {withNavigation} from "react-navigation";
import {searchPerson} from "../Data/realmFetching";
import {ScrollView, StyleSheet, View} from "react-native";

const PersonList = (props) => {
    let array = [];
    if (array.length != 0) {
        return (
            <View style={searchScreenStyles.searchField}>
                <Text style={{textAlign:'center'}}>Clients...</Text>
                <ScrollView>
                    <List>
                        {
                            map((object) => (
                                <ListItem
                                    key={object.phone}
                                    title={object.name + ' ' + object.surname + ' ' + object.phone}
                                    onPress={() => props.navigation.navigate('Customer', {customer: object})}
                                />
                            ), array)
                        }
                    </List>
                </ScrollView>
            </View>)
    } else if (props.input === '') {
        return null
    }
    else if (array.length === 0) {
        return <Text style={{textAlign: 'center'}}> No mach </Text>
    }

};

export default PersonList;

const searchScreenStyles = StyleSheet.create({
    searchField: {
        //flex: 1,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#d3d3d3'
    }
});



