import Realm from "realm";

import {
    Car_Model,
    Car_Brand,
    Model_Owner,
    Image,
    Model_Car,
    Todo_List,
    Todo_Item,
} from "../Models/ModelSchemas";

let models = [
    Car_Model,
    Car_Brand,
    Model_Owner,
    Model_Car,
    Image,
    Todo_List,
    Todo_Item,
];

const databaseOptions = {
    patch: Realm.defaultPath,
    schema: models
};

export default databaseOptions;