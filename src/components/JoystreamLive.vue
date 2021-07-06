<template>
  <b-container fluid>
    <h2>JoyStream Live Stats</h2>
    <b-row>
      <b-col>
        <b-form-input
          v-model="stash"
          placeholder="Enter your stash address"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input
          v-model="startBlock"
          placeholder="Enter first block number"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input
          v-model="endBlock"
          placeholder="Enter last block number"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button
          block
          v-on:click="loadStatistics()"
          variant="outline-primary"
          >{{ isLoading ? "Stop" : "Fetch era stats" }}</b-button
        >
      </b-col>
    </b-row>
    <b-table
      sticky-header="500px"
      striped
      hover
      :items="statistics"
      :fields="fields"
    >
      <template #cell(date)="data">
        {{ new Date(data.item.date).toLocaleDateString("ru") }}
      </template>
    </b-table>
  </b-container>
</template>

<script>
import Socket from '../socket'

export default {
  name: "JoystreamLive",
  data() {
    return {
      isLoading: false,
      stash: "5EhDdcWm4TdqKp1ew1PqtSpoAELmjbZZLm5E34aFoVYkXdRW",
      startBlock: 1069639,
      endBlock: 1270177,
      fields: [
        {
          label: "Era",
          key: "era",
          sortable: true,
        },
        {
          label: "Date",
          key: "date",
          sortable: true,
        },
        {
          key: "block",
          label: "Block",
          sortable: true,
        },
        {
          key: "points",
          sortable: true,
        },
        {
          key: "hash",
          sortable: true,
        },
      ],
      statistics: [],
    };
  },
  created(){
      Socket.$on("message", this.handleMessage)
  },
  beforeDestroy(){
      Socket.$off("message", this.handleMessage)
  },
  methods: {
    handleMessage(msg){
      const status = JSON.parse(msg).status;
      if (status) {
        this.statistics.push(status);
      }
    },
    loadStatistics: function () {
      if (this.isLoading) {
        this.isLoading = false;
        Socket.send('stop')
      } else {
        this.isLoading = true;
        const msg = `${this.stash}|${this.startBlock}|${this.endBlock}`
        Socket.send(msg)
      }
    },
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
.row {
  margin: 6px 0;
}
</style>
