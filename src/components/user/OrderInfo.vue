<template>
    <div class="order">
        <van-grid column-num="5" :border="false" clickable icon-size="23">
            <van-grid-item icon="credit-pay" text="待付款" to="/#"/>
            <van-grid-item icon="send-gift-o" text="待收货" to="/#"/>
            <van-grid-item icon="other-pay" text="待评价" to="/#"/>
            <van-grid-item icon="after-sale" text="退换/售后" to="/#"/>
            <van-grid-item icon="column" text="我的订单" to="/#"/>
        </van-grid>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Grid, GridItem } from 'vant';

    Vue.use(Grid);
    Vue.use(GridItem);

    export default {
        name: "OrderInfo"
    }
</script>

<style lang="scss" scoped>
</style>