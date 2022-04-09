<template>
  <div class="home">
    <header>
      <Title/>
    </header>

    <section>
      <img class="green_fridge" src="../assets/img/fridge-green.png" alt="gela">
      <IntroductionSlider/>
      <SkipButton/>
    </section>
  </div>
</template>

<script>
import Title from '../components/TitleComponent.vue'
import IntroductionSlider from '../components/IntroductionSlider.vue'
import SkipButton from '../components/SkipButton.vue'

export default {
  name: "HomeView",
  components: { Title, IntroductionSlider, SkipButton },
  methods: {}
}

</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 6vh 0px 1vh 0px;
    }

    section{
      text-align: center;
      line-break: strict;
    }

    .green_fridge {
      height: 50vh;
    }
  }
</style>

