<template>
    <div class="tools" :clickable="true">
        <van-grid icon-size="23">
            <van-grid-item icon="like" text="我的收藏" to="" />
            <van-grid-item icon="service" text="客户服务" to=""/>
            <van-grid-item icon="gem" text="会员服务" to=""/>
            <van-grid-item icon="coupon" text="优惠券" to=""/>
            <van-grid-item icon="gold-coin" text="我的钱包" to=""/>
            <van-grid-item icon="point-gift" text="积分礼品" to=""/>
            <van-grid-item icon="umbrella-circle" text="安全服务" to=""/>
            <van-grid-item icon="manager" text="联系作者" to="/qr"/>

        </van-grid>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Grid, GridItem } from 'vant';

    Vue.use(Grid);
    Vue.use(GridItem);

    export default {
        name: "Tools"
    }
</script>

<style lang="scss" scoped>
.tools{
    margin-top: 5px;
}
</style>