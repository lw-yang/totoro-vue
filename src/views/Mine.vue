<template>
    <div class="mine">
        <div class="user">
            <div class="user-setting">
                <van-icon class="user-setting-icon" name="setting-o" size="20" @click="toSetting"/>
                <van-icon class="user-setting-icon" name="qr" size="20" @click="toQR"/>
            </div>
            <div class="user-avatar">
                <van-image
                        round
                        width="60"
                        height="60"
                        :src="avatar"
                        @click="toLogin"
                />
            </div>
            <div class="user-nickname" @click="toLogin">
                {{nickname}}
            </div>
            <div class="user-wallet">
                <div class="user-wallet-points">
                    <div class="user-wallet-value">{{points}}</div>
                    积分
                </div>
                <div class="user-wallet-coupon">
                    <div class="user-wallet-value">{{coupon}}</div>
                    优惠券
                </div>
                <div class="user-wallet-balance">
                    <div class="user-wallet-value">{{balance}}</div>
                    余额
                </div>
                <div class="user-wallet-recharge">
                    <van-icon name="balance-pay" class="user-wallet-recharge-icon" size="22"/>
                    充值
                </div>
            </div>
            <div class="user-vip">
                <div class="user-vip-content">
                    <van-image
                            width="20"
                            height="20"
                            :src="vipSrc"
                            class="user-vip-icon"
                    />
                    开 通 VIP 会 员
                </div>
            </div>
        </div>
        <order-info class="order"></order-info>

        <browse-history :history-list="historyList" class="history"></browse-history>

        <tools class="tools"></tools>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Image } from 'vant';
    import { Icon } from 'vant';
    import { Grid, GridItem } from 'vant';
    import OrderInfo from "../components/user/OrderInfo";
    import BrowseHistory from "../components/user/BrowseHistory";
    import Tools from "../components/user/Tools";
    import {getUserByToken} from "@/api/user";

    Vue.use(Grid);
    Vue.use(GridItem);
    Vue.use(Icon);
    Vue.use(Image);

    export default {
        name: "Mine",
        components: {Tools, BrowseHistory, OrderInfo},
        data() {
            return {
                nickname: this.$store.getters.userInfo.nickname || "登录/注册",
                avatar: this.$store.getters.userInfo.avatar || require('../assets/user/user-unlogin.png'),
                points: this.$store.getters.userInfo.points || 0,
                coupon: this.$store.getters.userInfo.couponsCount || 0,
                balance: this.$store.getters.userInfo.balance || 0.00,
                vipSrc: require("../assets/user/vip-on.svg"),
                historyList: [{
                        "src": "https://img.yzcdn.cn/vant/cat.jpeg",
                        "link": "/#",
                        "name": "product01"
                    },
                    {
                        "src": "https://img.yzcdn.cn/vant/cat.jpeg",
                        "link": "/#",
                        "name": "product02"
                    }
                ]
            }
        },
        methods: {
            toLogin(){
                this.$router.push("/login")
            },
            toSetting(){
                this.$router.push("/setting")
            },
            toQR(){
                this.$router.push('/qr')
            }
        },

        created() {
            let token = window.localStorage.getItem("token")
            if (token !== null && this.$store.getters.userInfo.nickname == null){
                getUserByToken(token).then(res =>{

                    let data = res.data
                    console.log(data)
                    this.$store.commit("setUser", data)
                    this.$store.commit("setToken", data.token)
                    window.localStorage.setItem("token", data.token)

                    this.nickname = data.nickname
                    this.avatar = data.avatar
                    this.points = data.points
                    this.coupon = data.couponsCount
                    this.balance = data.balance

                    //TODO this.historyList = res.data.historyList
                }).catch(e => {
                    console.log(e)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.mine{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e6e6e6;
    border-bottom: 5px solid #e6e6e6;
    margin-bottom: 55px;

    .user{
        height: 220px;
        padding-top: 10px;
        background-image: url("../assets/user/user-background.png");

        &-setting{
            height: 30px;
            display: flex;
            flex-direction: row-reverse;
            padding-right: 20px;
            &-icon{
                margin-left: 10px;
            }
        }
        &-avatar{
            display: flex;
            justify-content: center;
        }
        &-nickname{
            display: flex;
            justify-content: center;
            font-size: 15px;
            padding-top: 10px;
            padding-bottom: 20px;
        }
        &-wallet{
            display: flex;
            height: 30px;
            font-size: 12px;
            justify-content: center;

            &-value{
                font-weight: bold;
                font-size: 13px;
            }

            &-points{
                flex: 1;
                text-align: center;
            }
            &-balance{
                flex: 1;
                text-align: center;
            }
            &-coupon{
                flex: 1;
                text-align: center;
            }
            &-recharge{
                flex: 1.4;
                display: flex;
                align-items: center;
                justify-content: center;
                border-left: 1px solid #2c2c2c;
                &-icon{
                    margin-right: 10px;
                }
            }
        }
        &-vip{
            display: flex;
            justify-content: center;
            color: #f3ca7e;/* vip on #f9f28b*/
            font-size: 12px;

            &-content{
                display: flex;
                justify-content: center;
                align-items: center;
                font-style: italic;
                height: 40px;
                width: 80%;
                background-color: #2c2c2c;
                border-top-left-radius: 50px;
                border-top-right-radius: 50px;
                margin-top: 15px;
            }
            &-icon{
                margin-right: 20px;
            }
        }
    }
    .order{

    }
    .history{

    }

    .tools{
    }
}

</style>