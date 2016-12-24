//getters
const getters={
}

//actions
const actions={
	deleteCollection:({commit},name)=>{
		commit('DELETE_COLLECTION',name)
	},
	searchFun:({commit},keyword)=>{
		$.get('http://localhost:8090',{query:keyword},(data)=>{
			commit('SET_RESULT',JSON.parse(data))
		})
	}
}

export default {
	getters,
	actions
}