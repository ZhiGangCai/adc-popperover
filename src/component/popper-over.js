/**
 * 本插件依赖popper.js，用于vuejs
 */
import Vue from 'vue'
import Popper from 'popper.js'
import './popper-over.css'

let popperOverPlugin = {};

popperOverPlugin.install = function(){

	/**
	 * 给每个vue实例添加$pop方法
	 * @param  {object} options 参数对象
	 */
	Vue.prototype.$pop = function(options){

		let defaultOption = {
			msg: '确定删除吗？',
			placement: 'left',
			offset: '10px,10px'
		};
		let option = Object.assign(defaultOption, options);
		let exsitPopper = document.querySelector('.popper');
		let popper;
		let instance;
		let btn = {};
		let content;
		let btnWrap;
		let arrow;

		if(!option.ref){
			console.error('options.ref 参数是必须的！');
			return;
		}

		if(exsitPopper){
			popper = exsitPopper;
			popper.style.display = 'block';
		}else{
			content = createElement('div');
			btnWrap = createElement('div');
			popper = createElement('div');
			btn = {
				yes: createElement('button'),
				no: createElement('button')
			};
			arrow = createElement('div');

			popper.className = 'popper';
			popper.appendChild(content);
			popper.appendChild(btnWrap);
			popper.appendChild(arrow);

			content.className = 'content';
			content.innerText = option.msg;

			btnWrap.className = 'btn-wrap';

			arrow.className = 'arrow';

			for(let key in btn){
				btn[key].innerText = key;
				switch(key){
					case 'yes':
						btn[key].className = 'btn btn-xs btn-primary';
						break;
					case 'no':
						btn[key].className = 'btn btn-xs btn-default';
						break;
					default:
						btn[key].className = 'btn btn-xs btn-default';
				}
				
				btnWrap.appendChild(btn[key]);
			}

			document.body.appendChild(popper);
		}
		
		popper.children[0].innerText = option.msg;
		
		instance = new Popper(option.ref, popper, {
			placement: option.placement,
			modifiers: {
				offset: {
					offset: option.offset
				},
				arrow: {
					element: '.arrow'
				}

			}
		});
		
		if(!exsitPopper){
			for(let key in btn){
				btn[key].onclick = function(){
					if(key === 'yes'){
						option.yes();
					}
			  		popper.style.display = 'none';
				}
			}
			
		}
	}
}

function createElement(tag){
	return document.createElement(tag);
}

function createArrow(placement){
	let arrow = createElement('div');
	arrow.className = 'arrow '+placement;
	return arrow;
}

export default popperOverPlugin;