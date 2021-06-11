import { createStore } from 'vuex'
import login from '../store/modules/login'

const store = createStore({
    modules: {
        login,
    },
})

export default store