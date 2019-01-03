Vue.component('Accounts', {
    template: `
    <section id="accounts" class="uk-grid">
        <div class="uk-width-1-1">
            <h2 class="uk-text-center uk-heading-line uk-heading"><span>Période en cours</span></h2>
        </div>
        <div v-for="account in accounts" class="uk-width-1-4">
            <Account :account="account"></Account>
        </div>
    </section>
    `,
    props: ['accounts'],
    compiled() {
        console.log(this.accounts)
    }
})