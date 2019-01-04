<template>
  <div class="uk-card uk-text-center uk-card-default">
    <div class="uk-card-header">
      <h3 class="uk-card-title">{{account.label}}</h3>
    </div>
    <div class="uk-card-body">
      <span class="uk-text-bold uk-text-large hours">{{account.value}}h</span>
      <div v-if="account.editable">
        <hr>
        <button
          class="uk-button"
          uk-toggle="target: #modal-add-time"
          @click="$parent.$emit('modal:open', account)"
        >Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  props: ["account"],
  compiled() {
    console.log(this.account);
  }
};
</script>
