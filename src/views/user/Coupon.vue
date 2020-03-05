<template>
    <div class="coupon">
        <nav-bar title="优 惠 券" class="coupon-title"></nav-bar>
        <van-coupon-list
                disabled-title="已过期"
                :show-exchange-bar="false"
                :show-close-button="false"
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
        />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { CouponCell, CouponList } from 'vant';
    import NavBar from "../../components/NavBar";
    Vue.use(CouponCell);
    Vue.use(CouponList);

    const coupon = {
        condition: '无使用门槛',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    };

    const disabledCoupons = {
        condition: '无使用门槛',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    }

    export default {
        name: "Coupon",
        components: {NavBar},
        data() {
            return {
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [disabledCoupons]
            }
        },
        methods: {
            onChange(index) {
                this.chosenCoupon = index;
            }
        }
    }
</script>

<style lang="scss" >
.coupon{
    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }
}
</style>