/**
 * 本插件依赖popper.js
 */
import Popper from 'popper.js';
import './popper-over.css';

let popperOverPlugin = {};
var target = '';
popperOverPlugin.install = function(Vue) {
    /**
     * @param  {object} options 参数对象
     */
    Vue.prototype.$pop = function(options) {
        removeOtherPoppers();
        init();
        target = options.ref;

        let defaultOption = {
            msg: '确定操作吗？',
            placement: 'left',
            offset: '0px, 10px',
            isButton: true,
            yes() {},
            cancel() {}
        };
        let option = Object.assign({}, defaultOption, options); //配置
        let popper; //总容器
        let content; //内容容器
        let btnWrap; //按钮容器
        let instance; //实例
        let arrow; //箭头
        let btns = [{ name: '确定' }, { name: '取消' }]; //按钮组

        if (!option.ref) {
            console.error('options.ref 参数是必须的！');
            return;
        }
        content = createElement('div');
        btnWrap = createElement('div');
        arrow = createElement('div');
        popper = createElement('div');
        popper.appendChild(content);
        popper.appendChild(btnWrap);
        popper.appendChild(arrow);
        popper.className = 'ct-popper';
        content.className = 'ct-content';
        content.innerText = option.msg;
        btnWrap.className = 'ct-btn-wrap';
        arrow.className = 'ct-arrow';

        //创建并绑定按钮的事件
        btns.forEach(item => {
            let btn = createElement('button');
            if (item.name === '确定') {
                btn.className = item.class || 'btn btn-primary btn-xs';
            } else {
                btn.className = item.class || 'btn btn-default btn-xs';
            }
            btn.innerText = item.name;
            btn.onclick = function() {
                item.name === '确定' && option.yes && option.yes();
                item.name === '取消' && option.cancel && option.cancel();
                popper.className = popper.className + ' unactive';
                setTimeout(() => {
                    popper.remove();
                }, 300);
            };

            if (option.isButton) {
                btnWrap.appendChild(btn);
            }
        });

        document.body.appendChild(popper);
        popper.onclick = e => e.stopPropagation();

        content.innerText = option.msg;

        instance = new Popper(option.ref, popper, {
            placement: option.placement,
            modifiers: {
                offset: {
                    offset: option.offset
                },
                arrow: {
                    element: '.ct-arrow'
                }
            }
        });
    };
};

function init() {
    off();
    on();
}
function destroyed() {
    target = '';
    off();
}
function on() {
    document.addEventListener('click', removeSelf, false);
}
function off() {
    document.removeEventListener('click', removeSelf, false);
}

function createElement(tag) {
    return document.createElement(tag);
}
function removeSelf(e) {
    if (e.srcElement === target || target.contains(e.target)) {
        return;
    }
    removeOtherPoppers();
    destroyed();
}
function removeOtherPoppers(event) {
    let poppers = document.querySelectorAll('.ct-popper');
    for (let i = 0; i < poppers.length; i++) {
        poppers[i].className += ' unactive';
        setTimeout(() => {
            poppers[i].remove();
        }, 300);
    }
}

export default popperOverPlugin;
