import Navigator from '/Users/irion94/Mechanic/src/routes/Route'
import {Provider} from 'react-redux'
import store from '/Users/irion94/Mechanic/src/routes/store'
import React from "react";

export default App =  () => (
    <Provider store={store}>
        <Navigator/>
    </Provider>

);