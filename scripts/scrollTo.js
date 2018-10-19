!function(){
    var view = document.querySelectorAll('nav.menu > ul > li > a')
    //console.log(view)
    var controller = {
        view : null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            var aTags = this.view
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href') //'#siteAbout'
                    let element = document.querySelector(href)
                    let top = element.offsetTop
                    console.log(`这个是top:  ${top}`)
                    window.scrollTo(0, top - 120)
                }
            }
        }
    }
    controller.init(view)
}.call()