<template>
  <div class="result">
    <table>
      <thead>
        <tr>
          <th>물품</th>
          <th v-bind:key="index" v-for="(people, index) in game_input.people_list">{{ people }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in element_group" v-bind:key="index">
          <td>{{ element }}</td>
          <td
            v-for="(people, index) in game_input.people_list"
            v-bind:key="index"
          ></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Result",
  created() {
    console.log(this.people_list);
  },
  computed: {
    element_group() {
      let element_list = [];
      this.rule.token_list.map(token => {
        element_list.push(token.name);
      });
      this.rule.weapon_list.map(weapon => {
        element_list.push(weapon);
      });
      this.rule.room_list.map(room => {
        element_list.push(room);
      });
      return element_list;
    }
  }
};
</script>
