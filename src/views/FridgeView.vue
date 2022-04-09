<template>
  <div class="fridge">
    <HeaderComponent/>

    <section class="items">
      <button class="green_button" href="">+ Adicionar item</button>
      <div class="list_items">
        <Item v-for="(item, index) in itemsList" :key="index" :itemObject="item"/>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FridgeItems from '../fridge_items.json'
import Item from '../components/ItemComponent.vue'

export default {
  name: "FridgeView",
  components: { HeaderComponent, Item },
  data: () => {
    return {
      itemsList: FridgeItems
    }
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
  .fridge {
    display: flex;
    justify-content: center;

    .list_items {
      padding:24px 32px 0px 32px;
      overflow-y: scroll;
      margin-top: -18px;
    }
  }
</style>

