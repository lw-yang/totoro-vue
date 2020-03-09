<template>
    <div class="address">
        <nav-bar title="地 址 管 理" path="/user/setting/" class="address-title"></nav-bar>
        <van-address-list
                v-model="chosenAddressId"
                :list="list"
                :switchable="true"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
        />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { AddressList } from 'vant';
    import NavBar from "../../components/NavBar";
    import {listAddresses} from "../../api/address";
    Vue.use(AddressList);
    export default {
        name: "Address",
        components: {NavBar},
        data() {
            return {
                chosenAddressId: '1',
                list: []
            }
        },
        methods: {
            onAdd() {
                this.$router.push("/user/setting/address/add")
            },
            onEdit(item) {
                this.$router.push({ path: '/user/setting/address/edit', query: { address: item}})
            }
        },
        created() {
            let id = this.$store.getters.userInfo.id
            listAddresses(id).then(res => {
                let addressList = res.data
                for( let i of addressList) {
                    let address = {}
                    address.id = i.id
                    address.address = i.address
                    address.name = i.receiver
                    address.tel = i.receiverPhone
                    address.isDefault = i.defaultAddress !== 0

                    if (address.isDefault === true){
                        this.chosenAddressId = address.id
                    }
                    this.list.push(address)
                }
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="scss">
.address{
    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }
}
</style>