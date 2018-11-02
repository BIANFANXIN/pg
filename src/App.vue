<template>
  <div>
    <h1>这是APP组件</h1>
    <hr>
    <counter></counter>
      <hr>
    <amount></amount> 
  </div>
</template>

<script>
    import counter from './components/counter.vue'
    import amount from './components/amount.vue'

  export default {
    name:'',
    props:[''],
    data () {
      return {
          // msg: 'this.$store.state.count'\
      };
    },

    components: {
      counter,
      amount
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      add() {
        // this.$store.commit('increment');
      }

    },

    watch: {}

  }

</script>
<style lang='' scoped>

</style>

