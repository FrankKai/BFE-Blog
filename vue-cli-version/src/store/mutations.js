import {SET_DATA,FILTE_ARTICLE} from './mutation-types'
export default {
	[SET_DATA](state, data) {
		// state._cache = common.deepCopy(data);
		state.data = data;
	},
	[FILTE_ARTICLE](state, index) {
		// state._cache = common.deepCopy(data);
		state.currentArticle = state.data[index];
	},
}