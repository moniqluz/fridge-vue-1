<template>
    <a href="/fridge" class="gray_button">Pular</a>
</template>

<script>
export default {
    name: 'SkipButton'
}
</script>

<style lang="scss" scoped>
    .gray_button {
        padding: 10px 24px;
        box-shadow: none;
        background-color: #e1ece952;
        color: #00726ead;

        transition: all .3s ease-in;

        &:hover {
            background-color: #EAF3F1;
            color: #00726E;
        }
    }
</style>