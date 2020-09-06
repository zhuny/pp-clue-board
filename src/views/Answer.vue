<template>
  <div class="answer">
    <table>
      <thead>
        <tr>
          <th>순번</th>
          <th>토큰</th>
          <th>흉기</th>
          <th>장소</th>
          <th>질문자</th>
          <th>답변자</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(answer, index) in game_input.answer_list"
          v-bind:key="index"
        >
          <td>{{ index }}</td>
          <td>
            <select v-model="answer.token">
              <option
                v-for="token in rule.token_list"
                v-bind:key="token.name"
                v-bind:value="token.name"
                >{{ token.name }}</option
              >
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="add_answer()">추가</button>
  </div>
</template>

<script>
export default {
  name: "Answer",
  methods: {
    add_answer() {
      this.game_input.answer_list.push({
        token: "",
        weapon: "",
        room: "",
        questioner: "",
        answerer: ""
      });
    }
  }
};
</script>
