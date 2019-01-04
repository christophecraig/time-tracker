$(function(){

    var vm = new Vue({

        el: '#timereporting',
        data() {return window.$data.entries},

        methods: {

            add: function(e) {
                // ...
            },

            toggle: function(entry) {
                entry.done = !entry.done;
            },

            remove: function(entry) {
                this.entries.$remove(entry);
            },

            save: function() {
                // ...
            }

        }

    });

});
