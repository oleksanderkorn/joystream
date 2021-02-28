<template>
  <div>
    <h2>JoyStream Era Stats:</h2>
    <b-table
      sticky-header="800px"
      striped
      hover
      :items="eraStats"
      :fields="fields"
    >
      <template #cell(timestampEnded)="data">
        {{ getCorrectDate(data.item) }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { eraStats, eraStatsCorrectDate } from "../const";

export default {
  name: "HelloWorld",

  data() {
    return {
      fields: [
        {
          label: "Era",
          key: "eraNumber",
          sortable: true,
        },
        {
          label: "Date",
          key: "timestampEnded",
          sortable: true,
        },
        {
          key: "startHeight",
          label: "Block",
          sortable: true,
        },
        {
          key: "totalPoints",
          sortable: true,
        },
      ],
      eraStats: [],
      eraStatsCorrectDate: [],
    };
  },
  mounted() {
    this.eraStats = eraStats;
    this.eraStatsCorrectDate = eraStatsCorrectDate;
  },
  methods: {
    getCorrectDate: function (item) {
      const era = eraStatsCorrectDate.filter(
        (e) => e.eraNumber === item.eraNumber
      )[0];
      if (era) {
        return new Date(era.timestampEnded).toLocaleDateString("ru");
      } else {
        return new Date(item.timestampEnded).toLocaleDateString("ru");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
