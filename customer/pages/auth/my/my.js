var vm = new Vue({
    el: "#app",
    data: {
        name: "name",
        phone: "phone"
    },
    methods: {
        jump_location: function () {
            toPage("location");
        },
        jump_password: function () {
            toPage("password");
        }
    }
})

const { HttpError } = require("http-errors");

