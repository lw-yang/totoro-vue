<template>
    <div class="feature">
        <div class="feature-title">
            每日精选
            <div class="feature-title-text"> 品质新生活</div>
        </div>
        <van-card
                v-for="item in dailyChoiceList"
                :key="item.id"
                :price="item.productPrice"
                :desc="item.productDesc"
                :title="item.productName"
                :tag="item.choiceTag"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
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
            dailyChoiceList : Array
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