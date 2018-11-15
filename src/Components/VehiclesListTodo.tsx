import * as React from 'react'
import {map} from 'ramda'
import {ScrollView, StyleSheet, View} from "react-native";
import {List, ListItem, Text} from "react-native-elements";
import {fetchObject, addTmpObject} from '/Users/irion94/Mechanic/src/Data/Db/DbMethods'
import {searchPerson} from '/Users/irion94/Mechanic/src/Data/realmFetching'
import {connect} from "react-redux";

/**
 *
 * @param props
 * @constructor
 */

const VehiclesListTodo = (props) => {
    let array =  props.props.carArray;
    let title = () => {
        return (<Text style={{textAlign: 'center'}}>Todos...</Text>)
    };

    if (props.input.input != '' || props.from === 'HomeScreen') {
        return (
            <View style={searchScreenStyles.searchField}>
                {
                    props.from === 'HomeScreen' ? null : title()
                }
                <ScrollView>
                    <List>
                        {
                            map((index) => (
                                (
                                    <ListItem key={index.vin}
                                              title={index.brand_name.name + ' ' + index.model_name.name + " " + index.rej}
                                              titleStyle={{fontSize: 20}}
                                              titleNumberOfLines={0}
                                              subtitleNumberOfLines={0}
                                              containerStyle={{}}
                                              badge={{
                                                  value: map((index) => (index.inProgress ? Object.keys(index.items).length : 0), index.history)[0],
                                                  //value: index.history.length,
                                                  textStyle: {color: 'white'},
                                                  containerStyle: {margin: 2}
                                              }}
                                              onPress={() => props.navigation.navigate('Todo', {car: index})}
                                              //avatar={faker.image.avatar()} //loooooong loading while searching
                                    />
                                )
                            ), props.input.input === '' ? array : searchPerson(['brand_name.name', 'model_name.name'], props.input.input, array))
                        }
                    </List>
                </ScrollView>
            </View>
        )
    }
    else return null
};

const mapStateToProps = (state) => {
    return {
        array: state.carArray
    }
};

export default connect(mapStateToProps)(VehiclesListTodo);

const searchScreenStyles = StyleSheet.create({
    searchField: {
        //flex: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#d3d3d3'
    }
});