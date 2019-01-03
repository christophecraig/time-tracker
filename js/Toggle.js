Vue.component('Toggle', {
    template: `
    <div id="toggle-in-out" class="uk-button uk-button-default" :class=" working ? 'working' : 'not-working'" @click="$parent.$emit('update:working')">
        <span v-if="working"><span class="fas fa-pause"></span>Pause</span>
        <span v-else><span class="fas fa-play"></span>Reprendre</span>
    </div>
    `,
    props: ['working']
})