<template>
  <div>
    <h2>JoyStream Era Stats:</h2>
    <b-form-input v-model="stash" placeholder="Enter your stash address"></b-form-input>
    <b-table
      sticky-header="800px"
      striped
      hover
      :items="stats"
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
// import { blocksFound } from "../authors";

export default {
  name: "HelloWorld",

  data() {
    return {
      stash: '',
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
      blocksFound: [],
    };
  },
  mounted() {
    this.eraStats = eraStats;
    this.eraStatsCorrectDate = eraStatsCorrectDate;
    // this.blocksFound = blocksFound;
  },
  computed: {
    // a computed getter
    stats: function () {
      // const author = this.blocksFound.filter(b => b.author === this.stash)
      // if (author.length > 0) {
      //   const activeEras = author[0].activeEras
      //   return this.eraStats.filter(s => activeEras.indexOf(s.eraNumber) > -1);
      // }      
      return this.eraStats
    }
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
