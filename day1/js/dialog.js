class Dialog {
    //构造函数
    constructor(title = '我只是一个标题哦', content = '今天你笑了么？') {
        this.title = title;
        this.content = content;
        this.init();
    }
    //实例方法
    init() {
        this.createMark();
        this.createWrap();
    }
    // createOpen() {
    //     let button = document.createElement('button');
    //      button.innerHTML = '点击打开';
        
    //      document.body.append(button);
    // }
    createMark() {
        let newMark = document.createElement('div');
        let newDiv = this.createWrap();

        newMark.append(newDiv);
        newMark.className = 'mark';
        document.body.append(newMark);

        this.addEvent();
    }
    createWrap() {
        let newDiv = document.createElement('div');
        let newTit = this.createTittle();
        let newCon = this.createContent();

        newDiv.append(newTit);
        newDiv.append(newCon);
        newDiv.className = 'dialog';

        this.addEvent();
    }
    createTittle() {
        let ol = document.createElement('ol');
        let span = document.createElement('span');

        ol.className = 'dialog-title';
        ol.innerHTML = this.title;
        span.className = 'close';
        span.innerHTML = 'X';
        ol.append(span);
        return ol;
    }
    createContent() {
        let ul = document.createElement('ul');
        let btn = document.createElement('button');

        btn.innerHTML = '^v^';
        btn.className = 'btn';
        ul.className = 'dialog-content';
        ul.innerHTML = this.content;
        ul.append(btn);

        return ul;
    }

    hide() {
        let newDiv = document.querySelectorAll('.dialog')[0];
        newDiv.style.display = 'none';
    }
    show() {

    }

    addEvent() {
        let span = document.querySelectorAll('.close')[0];
        let btn = document.querySelectorAll('.btn')[0];

        span.addEventListener('click', (event) => {
            this.hide();
        });
        btn.addEventListener('click', (event) => {
            this.hide();
        });
    }
}

let dialog = new Dialog();
