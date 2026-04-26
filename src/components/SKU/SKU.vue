<template>
    <div class="wm-sku">
        <div v-for="(goods,index_i) in specList" :key="goods.id">
            <div class="wm-title">{{ goods.title }}</div>
            <div 
                class="wm-list" 
                :class="{
                    'is-disabled':light[index_i]?.[index] === 0,
                    'is-active':light[index_i]?.[index] === 2
                }"
                @click="optionBtn(index_i,index,item)"
                v-for="(item,index) in goods.list" :key="index"
                >{{ item }}</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name:"WMSKU"
}
</script>

<script lang="ts" setup>
    import type {SKUOptions,WAY} from "./type"
    import { onMounted, ref } from "vue";
    const props = withDefaults(defineProps<SKUOptions>(),{
        specList:()=>[],
        specCombinationList:()=>[],
    })

    const m = new Map();
    const arr = null;
    let _way:WAY = {}; //存储对应的下标
    let openway:number[] = [];//存储符合条件的值
    let light = ref<number[][]>([]);
    let selected = ref<string[]>([]);
    const getPrime = function(total:number){
        const arr = [];

        /**
         *  判断是否为质数  
         * @param {Number} n
         * @returns
         */
        const isPrime = (n:number)=>{
            for(let i = 2;i <= n / 2;i ++){
                if(n % i === 0){
                    return false;
                }
            }
            return true
        }

        for(let i = 2;arr.length < total;i ++){
            if(isPrime(i)){
                arr.push(i);
            }
        }   
        return arr;
    };

    // 初始化
    function init(){
        let sum = 0;

        props.specList.forEach((item)=>{    
            sum += item.list.length;
        })

        let arr = getPrime(sum);
        let index = 0;
        props.specList.forEach((item,index_x)=>{
            let mid:number[] = [];
            item.list.forEach((ele,index_y)=>{
                m.set(ele,arr[index]);
                mid.push(1);
                _way[arr[index]!] = [index_x,index_y];
                index++;
            })
            light.value.push(mid);
        })

        // 初始化已有数据
        props.specCombinationList.forEach(item=>{
            let sum = 1;
            item.specs.forEach(it=>{
                sum *= m.get(it);
            })
            openway.push(sum);
        })
    }
    const optionBtn = (index_i:number,index_j:number,item:string)=>{
        if(light.value[index_i]?.[index_j] === 0) return;
        
        if(light.value[index_i]?.[index_j] === 1){
            selected.value[index_i] = item;
        }else{
            selected.value[index_i] = "";
        }
        checkAll();

        // console.log(light.value);
    }
    // 计算按钮的所有状态
    const checkAll = ()=>{
        props.specList.forEach((spec,specIndex:number)=>{
            spec.list.forEach((option:string,optionIndex:number)=>{
                // 这里是在遍历每一个选项,如果当前选项被选中了
                if(selected.value[specIndex] === option){
                    light.value[specIndex]![optionIndex] = 2;
                }else{
                    // 判断这个按钮是否可选,这里会遍历每一个按钮是否可选
                    const canUse = _checkItem(specIndex, option);
                    if (canUse) {
                        light.value[specIndex]![optionIndex] = 1;
                    } else {
                        light.value[specIndex]![optionIndex] = 0;
                    }
                }
            })
        })
    }
        // 获取当前已选规格的质数乘积
    const getSelectedProduct = function(excludeIndex:number) {
        let result = 1;
        selected.value.forEach((item, index) => {
            // item 是规格值，比如 "白色"
            // index 是第几组规格，比如 0、1、2

            // 这里是在排除当前点击的一组
            if (index !== excludeIndex && item) {
                result *= m.get(item);
            }
        });

        return result;
    };
    // 判断按钮是否可以选
    const _checkItem = function(specIndex:number, option:string) {
        // 当前这个按钮对应的质数
        const optionPrime = m.get(option);

        // 当前已选规格的质数乘积，但是排除当前这一行
        const selectedProduct = getSelectedProduct(specIndex);

        // 假设当前这个按钮被选中后，得到的乘积
        const val = optionPrime * selectedProduct;

        // 只要有一个有效 SKU 能被 val 整除，说明这个按钮可选
        return openway.some(item => {
            return item % val === 0;
        });
    };
    onMounted(()=>{
        init();
        // console.log(light.value)
    })
</script>

<style>

</style>