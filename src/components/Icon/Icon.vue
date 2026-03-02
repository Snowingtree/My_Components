<template>
    <i class="wm-icon"
        :class="{
            [`wm-icon--${type}`]:type,
            [`wm-icon--${color}`]:color,
        }"
        :style="ourColor"
        >
        <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
    </i>
</template>

<script lang="ts">
export default {
    name:"WMIcon",
}
</script>

<script setup lang="ts">
    // 这是fontawesomeIcon自带的类型的接口
    import type{ IconProps } from './type';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  //组件名称

    import {omit} from "lodash-es"

    import {computed} from "vue"

    // 现在的问题是，我在IconProps中添加了两个新的属性，是给外层的，而不是给内层的
    const props = defineProps<IconProps>();
    // 和Collapse一样的问题，外部传入的props只会在初始化的时候赋值，所以需要监视,这里也可以使用计算属性
    let filterProps = computed(()=>omit(props,["type","color"]));


    // 除了预设的颜色，如果需要其他颜色，则是使用行内样式来顶掉外部样式
    const ourColor = computed(()=>{
        return props.color ? {color:props.color}:{};
    })
</script>
<style>

</style>