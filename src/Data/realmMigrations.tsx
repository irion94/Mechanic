// import Realm from "realm";
// import * as Schema from '/Users/irion94/Mechanic/src/Data/Schema'
//
// export const migration = () => new Promise((reslove: any, reject: any) => {
//     Realm.open({
//         schema: [Schema.Update_0_1_PersonSchema, Schema.CAR_SCHEMA],
//         schemaVersion: 1,
//         migration: (oldRealm, newRealm) => {
//             if (oldRealm.schemaVersion < 1) {
//                 const oldObjects = oldRealm.objects('Person');
//                 const newObjects = newRealm.objects('Person');
//
//                 for (let i = 0; i < oldObjects.length; i++) {
//                     newObjects[i] = oldObjects[i].id + ' ' + oldObjects[i].name + ' ' + oldObjects[i].surname + ' ' + oldObjects[i].address + ' ' + oldObjects[i].phone + ' ' + oldObjects[i].email;
//                 }
//             }
//         }
//     }).then(realm => {
//         const fullName = realm.objects('Person')[0].cars;
//     })
// })