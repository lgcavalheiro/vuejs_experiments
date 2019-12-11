new Vue({
    el: "#vue-app",
    data: {
        name: "Jeremy",
        job: "Coder"
    },
    methods: {
        greet: (time) => `Good ${time}!`
    }
});