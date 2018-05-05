const app = new Vue({
    el: '#app',
    data: {
        title : "Hello World",
        newTodo: ''
    },
    methods : {
       addTodo() {
           console.log('form submitted');
       }
    }
})