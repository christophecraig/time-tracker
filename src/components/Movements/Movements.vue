<template>
  <section id="movements">
    <h2 class="uk-text-center uk-heading-line uk-heading">
      <span>Mouvements</span>
    </h2>
    <table class="uk-table uk-table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Entrée</th>
          <th>Sortie</th>
          <th>Type</th>
          <th>Durée</th>
          <th>Durée non travaillée</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(movement, i) in movements" :key="i" is="movement" :movement="movement"></tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Movements",
  props: ["movements"]
};
</script>


