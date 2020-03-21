<template>
    <div class="feature">
        <div class="feature-title">
            Totoro精选
            <div class="feature-title-text"> 品质新生活</div>
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
    border: 1px solid #ededed;
    border-radius: 10px;
    background-color: white;

    .van-card {
        border-radius: 10px;
        padding: 10px 0;
        margin: 10px;
    }
    &-title{
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 12px;
        padding-left: 10px;
        height: 30px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #edd1db;

        &-text {
            color: #d81e06;
            font-style: italic;
            display: inline;
            font-size: 10px;
            margin-left: 10px;
        }
    }
}
</style>