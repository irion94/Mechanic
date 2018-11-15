import Realm from 'realm'
import databaseOptions from '/Users/irion94/Mechanic/src/Data/Db/DbHelper'
import {map} from 'ramda'
import axios from 'axios'

// import {store} from '/Users/irion94/Mechanic/src/mobxStores/Store'

export class DB_utils {

    fetchObject = async (model: string, callback, query?: string, queryArgs?: any, props) => {
        //const realm = await Realm.open(databaseOptions);
        let result;
        if ((query && queryArgs) === undefined) {
            result = Array.from(await realm.objects(model))
        }
        else {
            result = Array.from(await realm.objects(model).filtered(query, queryArgs));
        }
        //callback(result) // store.set...
        return result;
    };
}

// export const insertObject = async (model: string, object: []) => {
//     let actual_model = model;
//     let actual_object = object.pop();
//     const realm = await Realm.open(databaseOptions);
//     realm.write(() => {
//             let exist = realm.objectForPrimaryKey(actual_model, actual_object.name);
//             if (exist === undefined) { //if exist
//                 let obj = realm.create(actual_model, {model_list: [], ...actual_object}, true);
//                 obj.model_list.push(object.pop())
//             }
//             else {
//                 let obj = realm.create(actual_model, exist, true);
//                 obj.model_list.push(object.pop())
//             }
//         }
//     );
//     //fetchObject(model, store.setCars)
// };
//
export const fetchObject = async (model: string, callback, query?: string, queryArgs?: any) => {
    const realm = await Realm.open(databaseOptions);
    let result;
    if ((query && queryArgs) === undefined) {
        result = Array.from(await realm.objects(model))
    }
    else {
        result = Array.from(await realm.objects(model).filtered(query, queryArgs));
    }
    //callback(result) // store.set...
    return result;
};

//
// export const addTmpObject = async (object) => {
//     const realm = Realm.open(databaseOptions);
//     let res  = realm.write( () => realm.create('Model_Owner',object));
//     res.then(resolve => console.log('resolve: ',resolve))
//     res.catch( err => console.log('err: ', err))
// };

export const addNewClient = async (object: object, object2?: object) => {
    const realm = await Realm.open(databaseOptions);
    realm.write(() => {
        realm.create('Model_Owner', object, true)
        // let obj = realm.objectForPrimaryKey('Model_Owner',object.phone);
        // obj.cars.push(object2)
    });

    // console.log('realm:',obj);
    //fetchObject('Model_Owner', store.setResults)
};

export const fetchAll = (dispatch,callback) => {
    axios.get('http://localhost:3000/api/v1/owners')
        .then(response => {
            console.log('fetchAll:', response.data)
            dispatch(callback(response.data))
        })
        .catch(error => {
            console.log('fetchAll - error')
            throw(error);
        });
};

export const createNewTodoList = async (object) => {
    const realm = await Realm.open(databaseOptions);
    let vehicle = await realm.objectForPrimaryKey('Model_Car', object.vehicle);

    let flag = true;
    map((item) => {
        if (item.inProgress) {
            console.log("item in progress FOUND");
            flag = false;
        }
    }, vehicle.history);

    if (flag) {
        let newTodo = {
            created_at: new Date(),
            completed_at: null,
            inProgress: true,
            items: []
        };
        //vehicle.history.push(newTodo)
        realm.write(() => {
            vehicle.history.push(newTodo);
        })
    }
    else {
        console.log(vehicle.history)
    }
};


