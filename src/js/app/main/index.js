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
			this.$pop({
				ref: e.target,
				btns: [{
					name: '确定',
					callback: ()=>{
						alert('操作成功！');
					}
				}, {
					name: '取消'
				}]
			})
		}
	}
})