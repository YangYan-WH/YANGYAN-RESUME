! function () {
    var view = document.querySelectorAll('[data-x]')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var specialTags = this.view
            for (let i = 0; i < specialTags.length; i++) {
                specialTags[i].classList.add('offset');
            }
            this.animation()

            window.onscroll = () => {

                if (window.scrollY > 0) {
                    topNavBar.classList.add('sticky')
                } else {
                    topNavBar.classList.remove('sticky')
                }
                this.animation()
            }
        },

        animation: function () {
            var specialTags = this.view
            let minIndex = 0
            for (let i = 1; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                        window.scrollY)) {
                    minIndex = i;
                }
            }
            specialTags[minIndex].classList.remove('offset')
            let id = specialTags[minIndex].id
            let a = document.querySelector('a[href="#' + id + '"]')
            let li = a.parentNode;
            let brothers = li.parentNode.children
            for (let i = 0; i < brothers.length; i++) {
                brothers[i].classList.remove('highlight')
            }
            li.classList.add('highlight')
        }
    }
    controller.init(view)
}.call()
//         let specialTags = document.querySelectorAll('[data-x]')
//         for (let i = 0; i < specialTags.length; i++) {
//             specialTags[i].classList.add('offset');
//         }

//         animation()

//         window.onscroll = function (x) {
//             if (window.scrollY > 0) {
//                 topNavBar.classList.add('sticky')
//             } else {
//                 topNavBar.classList.remove('sticky')
//             }

//             animation();
//         }

//         function animation() {
//             let specialTags = document.querySelectorAll('[data-x]')
//             let minIndex = 0
//             for (let i = 1; i < specialTags.length; i++) {
//                 if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
//                         window.scrollY)) {
//                     minIndex = i;
//                 }
//             }
//             specialTags[minIndex].classList.remove('offset')
//             let id = specialTags[minIndex].id
//             let a = document.querySelector('a[href="#' + id + '"]')
//             let li = a.parentNode;
//             let brothers = li.parentNode.children
//             for (let i = 0; i < brothers.length; i++) {
//                 brothers[i].classList.remove('highlight')
//             }
//             li.classList.add('highlight')
//         }