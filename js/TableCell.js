Vue.component('table-cell', {
    template: `<tr>
        <td v-for="cell in data">{{cell}}</td>
        </tr>
    `,
    props: ['data']
})