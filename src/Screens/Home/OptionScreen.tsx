import * as React from 'react'
import {Image, TouchableOpacity, View} from "react-native";
import {store} from '/Users/irion94/Mechanic/src/mobxStores/Store'
import {fetchObject, insertObject} from '/Users/irion94/Mechanic/src/Data/Db/DbMethods'
import {connect} from "react-redux";


class OptionScreen extends React.Component {
    state = {};


    render() {
        //fetchObject('Car_Brand', store.setCars).catch(error => console.log(error));
        //let cars = store.cars;
        //cars.length === 0 ? cars = [{name: '', model_list: []}] : cars;

        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{width: 50, height: 50}}>
                        <Image
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8wezdDj-dV6lKgG8Dw00xe4BijUXNN7yiyKO_uR5pykNVb6T_g'}}
                            style={{height: '30%', width: '100%', flex: 1}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    let obj = {state};
    return obj
};


export default connect(mapStateToProps)(OptionScreen)