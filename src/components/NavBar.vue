<template>
    <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';

    Vue.use(NavBar);

    export default {
        name: "NavBar",
        props: {
            title: String
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
        }

    }
</script>

<style scoped>

</style>