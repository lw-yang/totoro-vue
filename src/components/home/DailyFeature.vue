<template>
    <div class="feature">
        <div class="feature-title">
            Totoro精选
        </div>
        <van-card
                :price="item.price"
                :desc="item.desc"
                :title="item.name"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                v-for="item in dailyFeatureList"
                :key="item.id"
        />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Card } from 'vant';

    Vue.use(Card);
    export default {
        name: "DailyFeature",
        props: {
            dailyFeatureList : Array
        }
    }
</script>

<style lang="scss">
.feature{
    margin: 0 10px 10px 10px;
    padding: 10px;
    border: 1px solid #ededed;
    border-radius: 10px;
    background-color: white;

    .van-card{
        border-radius: 10px;
    }
    &-title{
        font-weight: bold;
        font-size: 14px;
        padding-left: 20px;
        padding-right: 10px;
    }
}
</style>