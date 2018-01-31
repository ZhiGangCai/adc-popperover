import Vue from 'vue'
import popperOverPlugin from '../../../component/popper-over'

Vue.use(popperOverPlugin);

const vm = new Vue({
	el: '#app',
	methods: {
		del(item, e){
			let placement;

			switch(item){
				case 1:
					placement = 'left';
					break;
				case 2:
					placement = 'right';
					break;
				case 3:
					placement = 'bottom';
					break;
				case 4:
					placement = 'top';
					break;
				default: 
					placement = 'left';
			}

			this.$pop({
				ref: e.target,
				msg: '确定删除吗？',
				placement: placement,
				offset: '10px,10px',
				yes: () => {
					console.log(this)
					alert('删除了！');
				}
			})
		}
	}
})