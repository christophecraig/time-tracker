<template>
  <div class="person" v-cloak>
    <header class="uk-clearfix">
      <div v-if="person.photo" class="photo uk-align-left">
        <img :src="person.photo.url">
      </div>
      <h1 class="name">{{person.name}}</h1>
      <h3>@{{person.login}}</h3>
      <p>Membre du pôle {{person.team}}</p>
    </header>
    <current-week
      :workhours="person.workhours"
      :timestamp="timestamp"
      :working="person.working"
      :pause="pause"
      @update:working="changeWorkingState"
    ></current-week>
    <accounts :accounts="person.accounts" @modal:open="openAddTime"></accounts>
    <movements :movements="person.movements"></movements>
    <modal @modal:close="this.modalVisible=false" v-show="modalVisible">
      <form-add-trip :account="modify"></form-add-trip>
    </modal>
  </div>
</template>

<script>
export default {
  props: ['person', 'timestamp'],
  data() {
    return {
      selfPerson: {},
      pauseStart: 0,
      pause: 0,
      modalVisible: false,
      modify: {}
    };
  },
  mounted() {
    fetch('http://localhost/~ccraig/pagekit/admin/timereporting/json')
    .then(val => val.json())
    .then(json => console.log(json))
    this.selfPerson = {}
  },
  methods: {
    openAddTime(account) {
      // TODO : Ouverture modal formulaire ajout de ?déplacement
      this.modify = account;
      this.modalVisible = true;
    },
    changeWorkingState() {
      if (!this.person.working) {
        // To have in seconds instead of ms
        this.pause += Math.round((Date.now() - this.pauseStart) / 1000);
      } else {
        this.pauseStart = Date.now();
        console.log("début de la pause : ", this.pauseStart);
      }
      this.person.working = !this.person.working;
    }
  }
};
</script>
