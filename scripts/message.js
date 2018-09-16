! function () {
    var view = View('section.message')
    var controller = {
        view: null,
        messageList: null,
        init: function (view) {
            this.view = view
            this.form = view.querySelector('form')
            this.initAV()
            this.messageList = view.querySelector('#messageList')
            this.loadMessages()
            this.bindEvents()
        },
        initAV: function () {
            var APP_ID = 'H9szz2NOUb7T9WHvWLx2eUfg-gzGzoHsz';
            var APP_KEY = 'IvWNsN5ptzuA5An7LiQAFlHV';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        loadMessages: function () {
            // 获取对象
            var query = new AV.Query('Message');
            query.find()
                .then(function (messages) {
                    let array = messages.map(function (item) {
                        return item.attributes
                    })
                    array.forEach((item)=> {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        let messageList = document.querySelector('#messageList')
                        messageList.appendChild(li)
                        // myForm.querySelector('input[name=content]').value = ''
                    });
                });
        },
        bindEvents: function () {
            
            this.form.addEventListener('submit', (e) =>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            var Message = AV.Object.extend('Message')
            var message = new Message()
            message.save({
                'name': name,
                'content': content
            }).then(function (object) {

                console.log('存入成功' + object)
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view)
}.call()