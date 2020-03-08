<template>
    <div>
        <div class="edit-address">
            <nav-bar title="修 改 地 址"  class="edit-address-title"></nav-bar>
            <van-address-edit
                    :address-info="addressInfo"
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    :tel-validator="telValidator"
                    :postal-validator="postalValidator"
                    @save="onSave"
                    @delete="onDelete"
            />
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { AddressEdit } from 'vant';
    import NavBar from "../../components/NavBar";
    import area from "../../assets/js/area";
    import {deleteAddress, updateAddress} from "../../api/address";
    Vue.use(AddressEdit);
    export default {
        name: "AddressEdit",
        components: {NavBar},
        data() {
            return {
                areaList: area,
                addressInfo: {}
            }
        },
        methods: {
            onSave(content) {
                let userId = this.$store.getters.userInfo.id
                let addressId = this.addressInfo.id
                let data= {}
                data.province = content.province
                data.city = content.city
                data.county = content.county
                data.receiver = content.name
                data.receiverPhone = content.tel
                data.postalCode = content.postalCode
                data.detail = content.addressDetail
                data.defaultAddress = content.isDefault === true ? 1 : 0
                updateAddress(userId ,addressId, data).then(res => {
                    console.log(res)
                    this.$router.replace("/setting/address")
                }).catch(e => {
                    console.log(e)
                })
            },
            onDelete() {
                let userId = this.$store.getters.userInfo.id
                let addressId = this.addressInfo.id
                deleteAddress(userId, addressId).then(res => {
                    console.log(res)
                    this.$router.replace("/setting/address")
                }).catch(e => {
                    console.log(e)
                })
            },
            telValidator(tel){
                return /(13|14|15|17|18|19)[0-9]{9}/.test(tel)
            },
            postalValidator(postal){
                return /^[1-9][0-9]{5}$/.test(postal)
            }
        },
        created() {
            this.addressInfo = this.$route.query.address
        }
    }
</script>

<style lang="scss">
.edit-address{
    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }
}
</style>