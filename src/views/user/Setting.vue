<template>
    <transition :name="transitionName">
    <div  class="setting">
        <nav-bar title="用 户 设 置" path="/user" class="setting-title"></nav-bar>
        <van-cell-group class="setting-info">

            <van-cell title="头像" clickable  class="setting-info-avatar" @click="popupAvatar">
                <van-uploader  :after-read="uploadAvatar">
                    <div class="setting-info-avatar-upload">
                        <van-image
                            round
                            slot="right-icon"
                            width="30"
                            height="30"
                            :src="avatar"

                        />
                    </div>
                </van-uploader>
            </van-cell>

            <van-cell title="用户名" :value="username" icon=""  is-link @click="popupUsername"/>
            <van-cell title="性别" :value="sexStr" icon="" is-link @click="popupSex"/>
            <van-cell title="出生日期" :value="birthday" icon="" is-link @click="popupBirthday"/>
        </van-cell-group>

        <van-cell-group class="setting-contact">
            <van-cell title="邮箱" :value="email" icon="" is-link @click="popupEmail"/>
            <van-cell title="手机号" :value="phoneStr" icon="" is-link @click="popupPhone"/>
            <van-cell title="地址管理" :value="address" icon="" is-link to="/user/setting/address"/>
        </van-cell-group>
        <van-cell-group class="setting-service">
            <van-cell title="优惠券" icon="" to="/user/coupon" is-link/>
            <van-cell title="我的会员" icon="" is-link/>
            <van-cell title="积分礼品" icon="" is-link/>
        </van-cell-group>
        <van-cell-group class="setting-security">
            <van-cell title="我的钱包" icon="" is-link/>
            <van-cell title="账号安全" icon="" is-link/>
        </van-cell-group>
        <van-cell-group class="setting-system">
            <van-cell title="意见反馈" icon="" is-link/>
            <van-cell title="关于Totoro" icon="" is-link/>
            <van-cell title="联系作者" icon="" to="/user/qr" is-link/>
        </van-cell-group>
        <van-button v-if="this.$store.getters.userInfo.nickname != null" type="danger" size="large" round class="setting-logout" @click="logout">退 出 登 录</van-button>

        <popup-update :show="popupToggle" :origin-data="popupOriginDate" :label="popupLabel"></popup-update>
        <van-action-sheet v-model="sexActionSheetShow" :actions="sexActions" @select="sexActionSelect" />
        <van-popup v-model="birthdayCalendarShow" position="bottom">
            <van-datetime-picker
                    type="date"
                    :min-date="new Date(1950, 0, 1)"
                    :max-date="new Date()"
                    @confirm="birthdaySelect"
                    @cancel="birthdaySelectCancel"
            />
        </van-popup>
    </div>
    </transition>
</template>
<script>
    import NavBar from "../../components/NavBar";
    import Vue from 'vue';
    import {ActionSheet, Button, Cell, CellGroup, DatetimePicker, Field, Form, Icon, Image, Popup} from 'vant';
    import PopupUpdate from "../../components/user/PopupUpdate";
    import {getUserByToken} from "@/api/user";
    import {updateUser} from "../../api/user";
    import { Uploader } from 'vant';

    Vue.use(Uploader);
    Vue.use(Popup);
    Vue.use(DatetimePicker);
    Vue.use(Field);
    Vue.use(Form);
    Vue.use(Popup);
    Vue.use(ActionSheet);
    Vue.use(Button);
    Vue.use(Icon);
    Vue.use(Image);
    Vue.use(Cell);
    Vue.use(CellGroup);
    export default {
        name: "Setting",
        components: {PopupUpdate, NavBar},
        data() {
            return {
                avatar: this.$store.getters.userInfo.avatar || require('@/assets/img/user/user-unlogin.png'),
                username: this.$store.getters.userInfo.nickname || '',
                sex: this.$store.getters.userInfo.sex || '',
                birthday: this.$store.getters.userInfo.birthday || '',
                address: this.$store.getters.userInfo.address || '',
                phone: this.$store.getters.userInfo.phone || '',
                email: this.$store.getters.userInfo.email || '',

                popupToggle: false,
                popupOriginDate: '',
                popupLabel: '',
                sexActionSheetShow: false,
                sexActions: [
                    { name: '男' },
                    { name: '女' },
                    { name: '保密'}
                ],
                birthdayCalendarShow: false,
            }
        },
        computed: {
                transitionName () {
                    return this.$store.getters.transitionName
                },

            sexStr: function () {
                if (this.sex === 1){
                    return "男"
                }else if (this.sex === 2){
                    return "女"
                }else if (this.sex === 0){
                    return "保密"
                }else {
                    return ''
                }
            },
            phoneStr: function () {
                if (this.phone == null || this.phone === ''){
                    return null
                }
                let prefix = this.phone.substring(0, 3)
                let suffix = this.phone.substring(7, 11)
                return prefix.concat("****").concat(suffix)
            },

        },
        methods: {
            uploadAvatar(file){
                console.log(file)
            },
            logout(){
                window.localStorage.removeItem("token")
                this.$store.commit("setToken", String)
                this.$store.commit("setUser", Object)
                this.$router.replace("/user")
            },
            popupAvatar(){

            },
            popupUsername(){
                this.popupToggle = !this.popupToggle
                this.popupOriginDate = this.username
                this.popupLabel = "用户名"
            },
            popupSex(){
                this.sexActionSheetShow = true
            },
            popupBirthday(){
                this.birthdayCalendarShow = true
            },
            popupPhone(){
                this.popupToggle = !this.popupToggle
                this.popupOriginDate = this.phone
                this.popupLabel = "手机号"
            },
            popupEmail(){
                this.popupToggle = !this.popupToggle
                this.popupOriginDate = this.email
                this.popupLabel = "邮箱"
            },
            sexActionSelect(item){
                this.sexActionSheetShow = false;
                let data = {}
                if (item.name === "男"){
                    data["sex"] = 1
                }else if (item.name === "女"){
                    data["sex"] = 2
                }else {
                    data["sex"] = 0
                }
                let id = this.$store.getters.userInfo.id
                updateUser(data, id).then(res => {
                    console.log(res)
                    this.$router.go(0)
                }).catch(e => {
                    console.log(e)
                })
            },
            birthdaySelect(date){
                this.birthdayCalendarShow = false;
                let data = {}
                date.setDate(date.getDate() + 1);
                data["birthday"] = date
                let id = this.$store.getters.userInfo.id
                updateUser(data, id).then(res => {
                    console.log(res)
                    this.$router.go(0)
                }).catch(e => {
                    console.log(e)
                })
            },
            birthdaySelectCancel(){
                this.birthdayCalendarShow = false;
            }
        },

        mounted() {
            let token = window.localStorage.getItem("token")
            if (token !== null && this.$store.getters.userInfo.nickname == null){
                getUserByToken(token).then(res =>{
                    let data = res.data
                    console.log(data)
                    this.$store.commit("setUser", data)
                    this.$store.commit("setToken", data.token)
                    window.localStorage.setItem("token", data.token)

                    this.username = data.nickname
                    this.avatar = data.avatar
                    this.sex = data.sex
                    this.birthday = data.birthday
                    this.address = data.address
                    this.phone = data.phone
                    this.email = data.email

                    //TODO this.historyList = res.data.historyList
                }).catch(e => {
                    console.log(e)
                })
            }
        }


    }
</script>

<style lang="scss">
.setting{
    padding-bottom: 10px ;
    background-color: #e6e6e6;

    position: absolute;
    width: 100%;
    transition: all .8s ease;
    top: 0;

    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }
    .van-cell-group{
        border-radius: 500px;
    }
    &-info{
        &-avatar{
            .van-cell__title{
                display: flex;
                align-items: center;
            }
            .van-cell__value{
                .van-uploader{

                }
            }

        }
    }
    &-contact{
        margin-top: 5px;
    }
    &-service{
        margin-top: 5px;
    }
    &-security{
        margin-top: 5px;
    }
    &-system{
        margin-top: 5px;
        margin-bottom: 10px;
    }

}
</style>