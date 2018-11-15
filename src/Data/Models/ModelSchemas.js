export const Model_Owner = {
    name: 'Model_Owner',
    primaryKey: 'phone',
    properties: {
        name: 'string',
        surname: 'string',
        address: 'string',
        phone: {type: 'string', optional: false},
        email: 'string',
        cars: 'Model_Car[]'
    }
};

export const Model_Car = {
    name: 'Model_Car',
    primaryKey: 'vin', //??????????
    properties: {
        brand_name: 'Car_Brand',
        model_name: 'Car_Model',
        // ver: 'Car_Version', ???
        year: 'string',
        body: 'string',
        vin: 'string',
        rej: 'string',
        history: 'Todo_List[]',
        img: 'Image[]',
    }
};

export const Car_Brand = {
    name: 'Car_Brand',
    primaryKey: 'name',
    properties: {
        name: 'string',
        model_list: 'Car_Model[]'
    }
};

export const Car_Model = {
    name: 'Car_Model',
    primaryKey: 'name',
    properties: {
        name: 'string',
    }
};

export const Image = {
    name: 'Image',
    properties: {
        name: 'string',
        img: 'data'
    }
};

export const Todo_List = {
    name: 'Todo_List',
    //primary key needed
    properties: {
        created_at: 'date',
        completed_at: {type: 'date', optional: true},
        inProgress: 'bool',
        items: 'Todo_Item[]'
    }
};

export const Todo_Item = {
    name: 'Todo_Item',
    properties: {
        title: 'string',
        description: 'string',
        inProgress: 'bool',
        img: 'Image[]'
    }
};