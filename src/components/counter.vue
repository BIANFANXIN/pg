<template>
  <div>
    <input type="button" value="减少">
    <input type="button" value="增加" @click='add'>
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          // count: 0
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      add() {
          this.$store.state.count++
      }
      
    },

    watch: {}

  }

</script>
<style lang='' scoped>

</style>