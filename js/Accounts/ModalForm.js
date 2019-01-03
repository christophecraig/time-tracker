Vue.component('Modal', {
    template: `
    <div id="modal-add-time">
        <div class="modal-overlay" @click="$emit('modal:close')"></div>
        <div class="modal-container">
            <span class="uk-align-right fas fa-times btn close" @click="$emit('modal:close')"></span>
            <slot></slot>
        </div>
    </div>
`,
props: ['account']
})