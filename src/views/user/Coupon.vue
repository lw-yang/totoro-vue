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
    import {listCoupons} from "../../api/coupon";
    Vue.use(CouponCell);
    Vue.use(CouponList);

    export default {
        name: "Coupon",
        components: {NavBar},
        data() {
            return {
                chosenCoupon: -1,
                coupons: [],
                disabledCoupons: []
            }
        },
        methods: {
            onChange(index) {
                this.chosenCoupon = index;
            }
        },
        created() {
            let id = this.$store.getters.userInfo.id
            listCoupons(id).then(res => {
                let availableCoupons = res.data.availableCoupons
                let disabledCoupons = res.data.expiredCoupons

                console.log(availableCoupons)
                console.log(disabledCoupons)

                for( let i of availableCoupons){
                    let coupon = {}
                    coupon.condition = i.useCondition === 0 ? "无门槛使用" : "满" + i.useCondition + "可用"
                    coupon.value = i.value * 100
                    coupon.name = i.name
                    coupon.startAt = i.effectiveTime
                    coupon.endAt = i.expireTime
                    coupon.valueDesc = '' + i.value
                    coupon.unitDesc = '元'

                    this.coupons.push(coupon)
                }
                for( let i of disabledCoupons){
                    let disabledCoupons = {}
                    disabledCoupons.condition = i.useCondition === 0 ? "无门槛使用" : "满" + i.useCondition + "可用"
                    disabledCoupons.value = i.value * 100
                    disabledCoupons.name = i.name
                    disabledCoupons.startAt = i.effectiveTime
                    disabledCoupons.endAt = i.expireTime
                    disabledCoupons.valueDesc = '' + i.value
                    disabledCoupons.unitDesc = '元'

                    this.disabledCoupons.push(disabledCoupons)
                }
            }).catch(e => {
                console.log(e)
            })
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