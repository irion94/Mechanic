import * as React from 'react'
import {Image, ScrollView, StyleSheet, View} from "react-native";
import faker from 'faker'
import {map} from 'ramda'

import CarListItem from '/Users/irion94/Mechanic/src/Components/CarListItem'
import TodoList from '/Users/irion94/Mechanic/src/Components/TodoList'
import {Button} from "react-native-elements";

class TodoScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        const obj = navigation.getParam('car');

        return <View style={{backgroundColor: 'white', flex: 1}}>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <CarListItem item={obj.brand_name.name} name={'Name'}/>
                        <CarListItem item={obj.model_name.name} name={'Model'}/>
                        <CarListItem item={obj.ver} name={'Ver'}/>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <CarListItem item={obj.year} name={'Year'}/>
                        <CarListItem item={obj.body} name={'Body'}/>
                        <CarListItem item={obj.vin} name={'Vin'}/>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={{uri: faker.image.avatar()}} style={{width: 120, height: 120}}/>
                    <Image source={{uri: faker.image.avatar()}} style={{width: 120, height: 120}}/>
                    <Image source={{uri: faker.image.avatar()}} style={{width: 120, height: 120}}/>
                </View>
                <View>
                    <Button title={'Owner'} onPress={() => {
                        navigation.navigate('Customer', {customer: {...obj.owner}})
                    }}/>
                </View>
                <View>
                    <TodoList
                        todo={map( (item) => {
                            if(item.inProgress){
                                return item
                            }
                        }, obj.history)}
                    />
                </View>
            </ScrollView>
        </View>
    }
}

const style = StyleSheet.create({
    noteStyle: {
        fontSize: 10,
        color: 'gray'
    }
});

export default TodoScreen