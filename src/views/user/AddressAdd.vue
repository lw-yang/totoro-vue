<template>
    <div class="add-address">
        <nav-bar title="添 加 地 址" class="add-address-title"></nav-bar>
        <van-address-edit
                :area-list="areaList"
                show-postal
                show-set-default
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                :tel-validator="telValidator"
                :postal-validator="postalValidator"
                @save="onSave"
                @delete="onDelete"
        />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { AddressEdit } from 'vant';
    import { Toast } from 'vant';
    import NavBar from "../../components/NavBar";
    import area from "../../assets/js/area";
    import {addAddress} from "../../api/address";
    Vue.use(AddressEdit);
    export default {
        name: "AddressAdd",
        components: {NavBar},
        data() {
            return {
                areaList: area,
            }
        },
        methods: {
            onSave(content) {
                console.log(content);
                let id = this.$store.getters.userInfo.id
                let data= {}
                data.province = content.province
                data.city = content.city
                data.county = content.county
                data.receiver = content.name
                data.receiverPhone = content.tel
                data.postalCode = content.postalCode
                data.detail = content.addressDetail
                data.defaultAddress = content.isDefault === true ? 1 : 0
                addAddress(id, data).then(res => {
                    console.log(res)
                    this.$router.replace("/setting/address")
                }).catch(e => {
                    console.log(e)
                })
            },
            onDelete() {
                Toast('delete');
            },
            telValidator(tel){
                return /(13|14|15|17|18|19)[0-9]{9}/.test(tel)
            },
            postalValidator(postal){
                return /^[1-9][0-9]{5}$/.test(postal)
            }

        }
    }
</script>

<style lang="scss">
.add-address{
    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }
}
</style>