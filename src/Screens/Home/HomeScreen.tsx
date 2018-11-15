import * as React from 'react'
import {Icon} from 'react-native-elements'
import {ScrollView, StyleSheet, View} from "react-native";
import FloatButton from '/Users/irion94/Mechanic/src/Components/FloatButton'
import {Header} from 'native-base';
import SearchInput from '/Users/irion94/Mechanic/src/Components/SearchInput'
import {addTmpObject, fetchObject, fetchAll} from '/Users/irion94/Mechanic/src/Data/Db/DbMethods'
import {connect} from 'react-redux'
import databaseOptions from '/Users/irion94/Mechanic/src/Data/Db/DbHelper'

import axios from 'axios'

import {
    fetch,
    fetchingBrandDone,
    fetchingDone,
    fetchingOwnerDone
} from '/Users/irion94/Mechanic/src/actions/db_util_action'
import {applicationColor} from "../../Styles/UniversalStyles";
import VehiclesListTodo from "../../Components/VehiclesListTodo";

interface State {
    dispatch: any
    navigation: any
}

interface Props {

}

class HomeScreen extends React.Component <State, Props> {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            token: null
        };
    }

    changeText = (input) => {
        this.setState({input: input});
    };

    static navigationOptions = ({navigation}) => ({
        header: () => {
            const {params = {}} = navigation.state;
            return (
                <Header searchBar rounded style={{backgroundColor: applicationColor.header}}>
                    <SearchInput onChangeText={params.changeText} placeholder={'Search in TODO'}/>
                    <Icon
                        name="settings"
                        size={40}
                        onPress={() => {
                            navigation.navigate('Option')
                        }}
                    />
                </Header>
            )
        }

    });


    componentWillMount() {
        this.props.dispatch(fetch(fetchObject('Car_Brand', undefined), fetchingBrandDone));
        //this.props.dispatch(fetch(fetchObject('Model_Owner', undefined), fetchingOwnerDone));
        this.props.dispatch(fetch(fetchObject('Model_Car', undefined, 'history.inProgress != $0', false), fetchingDone));
        fetchAll(this.props.dispatch,fetchingOwnerDone);
        this.props.navigation.setParams({
            changeText: this.changeText
        })
    }

    render() {
        console.log(databaseOptions.patch)
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView>
                    <VehiclesListTodo navigation={this.props.navigation} props={this.props} from={'HomeScreen'}
                                      input={this.state}/>
                </ScrollView>
                <FloatButton active={false}/>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => {
    let obj = {carArray: state.model_owner.carArray};
    console.log('State', obj);
    return obj
};

export default connect(mapStateToProps)(HomeScreen)

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
    }
});


