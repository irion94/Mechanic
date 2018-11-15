import * as React from 'react'
import {ScrollView, View, StyleSheet} from "react-native";
import {map} from 'ramda'
import {Header, Text} from "native-base";
import {styles} from "../Home/HomeScreen";
import TodoComponent from "../../Components/VehiclesListTodo";
import SearchInput from "../../Components/SearchInput";
import PersonList from "../../Components/PersonList";
import {connect} from "react-redux";
import {applicationColor} from "../../Styles/UniversalStyles";

interface Props {
    values: []
    input: string
    searchStore: any
}

interface State {
    input: string
}

class SearchScreen extends React.Component <Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            input: ''
        };
    }

    static navigationOptions = ({navigation}) => ({
        header: () => {
            const {params = {}} = navigation.state;
            return (
                <Header searchBar rounded style={{backgroundColor: applicationColor.header}}>
                    <SearchInput onChangeText={params.changeText} placeholder={'Search in database'}/>
                </Header>
            )
        }
    });

    handleOnChangeText = (input) => {
        this.setState({input: input})
    };

    componentDidMount() {
        this.props.navigation.setParams({
            changeText: this.handleOnChangeText
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <PersonList input={this.state.input}/>
                <TodoComponent props={this.props} input={this.state}/>
            </View>
        )
    }

}

const mapStateToProps = (state: any) => {
    let obj = {carArray: state.model_owner.carArray};
    return obj
};

export default connect(mapStateToProps)(SearchScreen)


