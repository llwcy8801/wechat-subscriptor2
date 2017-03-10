//getters
const getters={
	wordVaule:function(state,getters,rootState){
		return rootState.keyword
	},
	searchResult:function(state,getters,rootState){
		return rootState.searchResult
	}
}

const actions={
	collectIt:({commit},collect)=>{
		for(let item of collect.collectArr){
			if(item===name) return false
		}
		commit('COLLECT_IT',collect.name)
	}
}

export default {
	getters,
	actions
}