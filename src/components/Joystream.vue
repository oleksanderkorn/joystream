<template>
  <div>
    <h2>JoyStream Era Stats (valid up to block 2440000 and era 4196):</h2>
    <b-form-input v-model="stash" placeholder="Enter your stash address"></b-form-input>
    <b-table
      sticky-header="800px"
      striped
      hover
      :items="stats"
      :fields="fields"
    >
      <template #cell(timestampEnded)="data">
        {{ new Date(data.item.timestampEnded).toLocaleDateString("ru") }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { eraStats, blocksFound } from "../validators";

export default {
  name: "Joystream",

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
          key: "endHeight",
          label: "Block",
          sortable: true,
        },
        {
          key: "totalPoints",
          sortable: true,
        },
      ],
      eraStats: [],
      blocksFound: [],
    };
  },
  mounted() {
    this.eraStats = eraStats;
    this.blocksFound = blocksFound;
  },
  computed: {
    stats: function () {
      const author = this.blocksFound.filter(b => b.author === this.stash)
      if (author.length > 0) {
        const activeEras = author[0].activeEras
        return this.eraStats.filter(s => activeEras.indexOf(s.eraNumber) > -1);
      }      
      return this.eraStats
    }
  },
};
</script>

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
