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
export default {
  name: "JoystreamLive",
  data() {
    return {
      isLoading: false,
      connection: null,
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
  mounted() {
    // this.connection = new WebSocket("ws://localhost:3000/")
    const wsUrl = "wss://joystream.herokuapp.com/";
    this.connection = new WebSocket(wsUrl);
    const stats = this.statistics;
    this.connection.onmessage = function (event) {
      const status = JSON.parse(event.data).status;
      console.log(status);
      if (status) stats.push(status);
    };
    this.connection.onopen = function (event) {
      console.log(event);
      console.log(`Successfully connected to ${wsUrl} websocket server.`);
    };
    this.connection.onclose = function (event) {
      console.log(event);
      console.log(`Connection to ${wsUrl} websocket server closed.`);
    };
  },
  // unmounted() {
  //   console.log(`Component unmounted.`)
  // },
  // watch: {
  //   $route(to, from) {
  //     console.log(`Route change from [${from}] to [${to}]`)
  //   }
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log(`Route change from [${from}] to [${to}]`)
  //   console.log("Close WS connection.")
  //   this.connection.send("stop");
  //   this.connection.close();
  //   next()
  // },
  methods: {
    loadStatistics: function () {
      if (this.isLoading) {
        this.isLoading = false;
        this.connection.send("stop");
      } else {
        this.isLoading = true;
        this.connection.send(
          `${this.stash}|${this.startBlock}|${this.endBlock}`
        );
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
