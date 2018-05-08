import Vue from 'vue'
import popperOverPlugin from '../../../component/popper-over'

Vue.use(popperOverPlugin);

const vm = new Vue({
	el: '#app',
	data: {
		isShow: false
	},
	methods: {
		del(item, e){
			e.stopPropagation();
			this.$pop({
				ref: e.target,
				yes: () => {
					alert(1)
				}
			})
		}
	}
})