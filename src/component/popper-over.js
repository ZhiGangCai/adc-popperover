/**
 * 本插件依赖popper.js
 */
import Vue from 'vue'
import Popper from 'popper.js'
import './popper-over.css'

let popperOverPlugin = {};

popperOverPlugin.install = function(){

	/**
	 * @param  {object} options 参数对象
	 */
	Vue.prototype.$pop = function(options){

		let defaultOption = {
			msg: '确定删除吗？',
			placement: 'left',
			offset: '10px,10px',
			btns: [{
				name: '确定'
			}, {
				name: '取消'
			}]
		};
		let option = Object.assign({}, defaultOption, options);  //参数
		let exsitPopper = document.querySelector('.popper');
		let popper;  //popper容器
		let instance;  //popper实例
		let content;  //内容容器
		let btnWrap;  //按钮容器
		let arrow;

		if(!option.ref){
			console.error('options.ref 参数是必须的！');
			return;
		}

		removeOtherPoppers(option.id);

		content = createElement('div');
		btnWrap = createElement('div');
		arrow = createElement('div');
		popper = createElement('div');

		popper.className = 'popper';
		popper.id = option.id;
		popper.appendChild(content);
		popper.appendChild(btnWrap);
		popper.appendChild(arrow);

		content.className = 'content';
		content.innerText = option.msg;

		btnWrap.className = 'btn-wrap';

		arrow.className = 'arrow';

		option.btns.forEach(item=>{
			let btn = createElement('button');
			if(item.name === '确定'){
				btn.className = item.class || 'btn btn-primary btn-xs';
			}else{
				btn.className = item.class || 'btn btn-default btn-xs';
			}
			btn.innerText = item.name;
			btn.onclick = function(){
				if(typeof item.callback === 'function'){
					item.callback();
				}
				popper.style.display = 'none';
				instance.destroy();
				popper.remove();
			}

			btnWrap.appendChild(btn);
		})

		document.body.appendChild(popper);
		
		content.innerText = option.msg;
		
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

function removeOtherPoppers(currentId){
	let poppers = document.querySelectorAll('.popper');
	for(let i=0; i<poppers.length; i++){
		if(poppers[i].id !== currentId){
			poppers[i].remove();
		}
	}
}

export default popperOverPlugin;