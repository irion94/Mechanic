import * as React from 'react'
import {Header, Input, Item} from "native-base";
import {Icon} from "react-native-elements";
import {store} from '/Users/irion94/Mechanic/src/mobxStores/Store'
import {Header, Icon, Picker, Button} from "native-base";
import {map} from 'ramda'
import {insertObject, fetchObject} from '/Users/irion94/Mechanic/src/Data/Db/DbMethods'
import SearchInput from "/Users/irion94/Mechanic/src/Components/SearchInput";
import {searchPerson} from '/Users/irion94/Mechanic/src/Data/realmFetching'
import {View} from "react-native";

class PersonInformationForm extends React.Component {
    state = {
        name: '',
        surname: '',
        address: '',
        city: '',
        phone: '',
        email: '',
    };

    render(){
        return(
            <Picker>
                
            </Picker>
        )
    }
}