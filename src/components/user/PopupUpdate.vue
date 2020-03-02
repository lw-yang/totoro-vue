<template>
    <div>
        <van-popup round v-model="popupShow" position="top" :style="{ height: '140px'}" style="padding-top: 20px;">
            <van-form colon label-width="70px" label-align="center" @submit="submit">
                <van-field
                        v-model="updateData"
                        name="updateInfo"
                        :label="label"
                        :rules="[{ validator, message: '请输入正确内容'}]"
                />
                <div style="margin: 20px;">
                    <van-button round block type="info" native-type="submit">
                        提 交
                    </van-button>
                </div>
            </van-form>
        </van-popup>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Popup } from 'vant';
    import { Form } from 'vant';
    import { Field } from 'vant';
    import {updateUser} from "../../api/user";

    Vue.use(Field);
    Vue.use(Form);
    Vue.use(Popup);

    export default {
        name: "PopupUpdate",
        props: ['originData', 'label', 'show'],
        data() {
            return {
                popupShow: this.show,
                updateData: ''
            }
        },
        watch: {
            show: function(){
                this.popupShow = true
            },
            originData: function () {
                this.updateData = this.originData
            }
        },
        methods: {
            validator(val){
                if (this.label === '用户名'){
                    return val !== ""
                }else if (this.label === '手机号'){
                    return /(13|14|15|17|18|19)[0-9]{9}/.test(val)
                }else if (this.label === '邮箱'){
                    return /\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}/.test(val)
                }
            },
            submit(){
                let updateField = '';
                if (this.label === '用户名'){
                    updateField = 'nickname'
                }else if (this.label === '手机号'){
                    updateField = 'phone'
                }else if (this.label === '邮箱'){
                    updateField = 'email'
                }
                let data = {
                    "id": this.$store.getters.userInfo.id,
                }
                data[updateField] = this.updateData
                updateUser(data).then(res => {
                    console.log(res)
                    this.$router.go(0)
                }).catch(e => {
                    console.log(e)
                })
            }
        },
    }
</script>

<style scoped>

</style>