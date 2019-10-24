const component1 = {
    props: [],
    template: '<p>I am the component 1 !!!</p>'
};
new Vue({
    el: '#vue-instance-1',
    components: {
        component1
    }
});
new Vue({
    el: '#vue-instance-2',
});