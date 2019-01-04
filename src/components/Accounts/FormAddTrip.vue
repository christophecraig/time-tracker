<template>
  <form class="uk-form">
    <h2>Ajouter un {{account.label}}</h2>
    <div class="start input-row">
      <label class="uk-form-label" for="startDate">Date début</label>
      <div class="input-form-controls">
        <input id="startDate" type="date">
      </div>
      <label class="uk-form-label" for="startTime">Heure début</label>
      <div class="input-form-controls">
        <input id="startTime" type="time">
      </div>
    </div>
    <div class="end input-row">
      <label class="uk-form-label" for="endDate">Date fin</label>
      <div class="input-form-controls">
        <input id="endDate" type="date">
      </div>

      <label class="uk-form-label" for="endTime">Heure fin</label>
      <div class="input-form-controls">
        <input id="endTime" type="time">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormAddTrip",
  props: ["account"]
};
</script>
