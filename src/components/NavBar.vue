<template>
    <van-nav-bar
            :title="title"
            :path="path"
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
            title: String,
            path: String
        },
        methods: {
            onClickLeft() {
                if (this.path == null){
                    this.$router.go(-1)
                }else {
                    this.$router.replace(this.path)
                }
            },
        }

    }
</script>

<style scoped>

</style>