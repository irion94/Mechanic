import {Body, ListItem} from "native-base";
import {StyleSheet, Text} from "react-native";
import * as React from "react";


const CarListItem = (props) => {
    return(
        <ListItem>
            <Body>
            <Text note style={style.noteStyle}>{props.name}</Text>
            <Text>{props.item}</Text>
            </Body>
        </ListItem>
    )
};

const style = StyleSheet.create({
    noteStyle: {
        fontSize: 10,
        color: 'gray'
    }
});

export default CarListItem;