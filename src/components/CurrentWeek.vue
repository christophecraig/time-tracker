<template>
  <section id="current-week" class="uk-grid">
    <div class="uk-width-1-1">
      <h2 class="uk-text-center uk-heading-line uk-heading">
        <span>Semaine en cours</span>
      </h2>
    </div>
    <div class="uk-width-1-4">
      <div class="uk-card uk-text-center uk-card-default">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Depuis lundi</h3>
        </div>
        <div class="uk-card-body">
          <span class="uk-text-bold uk-text-large hours">{{workhours.workingTime}}h</span>
        </div>
      </div>
    </div>
    <div class="uk-width-1-4">
      <div class="uk-card uk-text-center uk-card-default">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Aujourd'hui</h3>
        </div>
        <div class="uk-card-body">
          <span class="uk-text-bold uk-text-large hours">{{formattedDayTime}}h</span>
        </div>
      </div>
    </div>
    <div class="uk-width-1-2">
      <Toggle :working="working"></Toggle>
      <button class="uk-button uk-button-default" @click="printRecap">
        <span class="fas fa-lg fa-print"></span> Récap. semaine précédente
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CurrentWeek",
  props: ["working", "workhours", "timestamp", "pause"],
  methods: {
    printRecap() {
      console.log("printRecap called");
      window.print();
    }
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now() / 1000;
    }, 1000);
  },
  data() {
    return {
      now: Date.now() / 1000
    };
  },
  computed: {
    formattedDayTime() {
      var decimalTime = 0;
      if (this.working) {
        decimalTime = parseFloat(
          this.workhours.today +
            (Math.ceil(this.now - this.timestamp) - this.$parent.pause) / 3600
        );
      } else {
        decimalTime = parseFloat(
          this.workhours.today +
            (Math.ceil(Date.now() / 1000 - this.timestamp) -
              this.$parent.pause) /
              3600
        );
      }
      decimalTime = decimalTime * 60 * 60;
      var hours = Math.floor(decimalTime / (60 * 60));
      decimalTime = decimalTime - hours * 60 * 60;
      var minutes = Math.floor(decimalTime / 60);
      decimalTime = decimalTime - minutes * 60;
      var seconds = Math.round(decimalTime);
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    }
  }
};
</script>
