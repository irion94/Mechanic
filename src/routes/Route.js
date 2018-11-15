/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements';
import SearchScreen from "../Screens/Search/SearchScreen";
import NewClientScreen from "../Screens/Create/NewClientScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import OptionScreen from "../Screens/Home/OptionScreen";
import TodoScreen from "../Screens/Todo/TodoScreen";
import CustomerScreen from "../Screens/Customer/CustomerScreen";
import TodoListItemScreen from "../Screens/Todo/TodoListItemScreen";
import New_repair from '../Screens/Create/New_repair'
import {applicationColor} from "../Styles/UniversalStyles";


const HomeStack = createStackNavigator({
        Home: {screen: HomeScreen},
        Option: {screen: OptionScreen},
        Todo: {screen: TodoScreen},
        Customer: {screen: CustomerScreen},
        TodoDetails: {screen: TodoListItemScreen},
        NewRepair: {screen: New_repair},
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: applicationColor.header
            }
        }

    }
);

const SearchStack = createStackNavigator({
        Search: {screen: SearchScreen},
        Customer: {screen: CustomerScreen},
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: applicationColor.header
            }
        }
    }
);

// const CreateStack = createStackNavigator({
//         Create: {screen: NewClientScreen},
//     },
//     {
//         navigationOptions: {
//             headerStyle: {
//                 backgroundColor: 'orange'
//             }
//         }
//     }
// );

export default createBottomTabNavigator({
        Home: {
            screen: HomeStack,
        },
        Search: {
            screen: SearchStack,
        },
        Create: {
            screen: NewClientScreen,
        },
    },
    {
        navigationOptions: ({navigation}) => ({
            navigationOptions: {
                headerStyle: {backgroundColor: applicationColor.header},
            },
            tabBarIcon: ({tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`;
                } else if (routeName === 'Search') {
                    iconName = `search`;
                } else if (routeName === 'Create') {
                    iconName = 'dock'
                }
                return <Icon name={iconName} size={25} color={tintColor}/>;
            },
            header: {
                color: applicationColor.header
            }
        }),
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: applicationColor.activeTintColor,
            inactiveTintColor: 'gray',
            showLabel: true,
            style: {
                height: 50
            },
        },
    },
);