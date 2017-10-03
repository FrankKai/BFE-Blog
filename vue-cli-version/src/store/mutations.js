import {SET_DATA} from './mutation-types'
export default {
	[SET_DATA](state, data) {
		// state._cache = common.deepCopy(data);
		state.data = data;
	}

}