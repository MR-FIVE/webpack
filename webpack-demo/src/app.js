import Layer from './components/layer/layer.js';
import Radio from './components/radio/radio.js';
import './css/common.css';

const App = function () {
    let dom1 = document.getElementById('app1');
    let layer = new Layer();
    dom1.innerHTML = layer.tpl({
        name:'john',
        arr:['apple','xiaomi','oppo']
    });

    let dom2 = document.getElementById('app2');
    let radio = new Radio();
    dom2.innerHTML = radio.tpl;

};

new App();
