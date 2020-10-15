
<template>
    <div class="ddd">
        <div @click='goDemo1' class="cell" v-for="item in 20" :key="item">demo000-{{item}}</div>
    </div>
</template>
<script>
export default {
    methods: {
        goDemo1() {
            this.$router.push('/demo1')
        }
    },
    mounted() {
        console.log(this.$store,11)
    }
}
</script>
<style lang="scss" scoped>
    .cell {
        width: 100%;
        height: 100px;
        background: lightcyan;
        margin-bottom: 20px;
        color: lightpink;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bold;
    }
</style>