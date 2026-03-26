<template>
    <!-- Button 组件展示 -->
    <!-- <div>
        <h1>no plain</h1>
        <div>
            <Button type = "success">plain</Button>
            <Button type = "warning">warning</Button>
            <Button type = "danger">danger</Button>
            <Button round type= "info">round</Button>
            <Button circle>circle</Button>
            <Button disabled>disabled</Button>
        </div>
        <h1>plain</h1>
        <div>
        <Button type = "success" plain>plain</Button>
        <Button type = "warning" plain>warning</Button>
        <Button type = "danger" plain>danger</Button>
        <Button round type= "info" plain>round</Button>
        <Button circle plain>circle</Button>
        <Button disabled>disabled</Button>
        </div>
        <div>
            <h1>size</h1>
            <Button type = "success" size = "large">plain</Button>
            <Button type = "success" >plain</Button>
            <Button type = "success" size = "small">plain</Button>
        </div>
        <div>
            <h1>icon</h1>
            <Button type = "success" loading>icon</Button>
            <Button type = "success" icon="arrow-up">icon</Button>
            <Button type = "success" icon="user-secret">icon</Button>
        </div>
    </div>
    <br><br> -->
    <!-- Collapse 组件展示 -->
    <!-- <div>
        <Collapse v-model = "modelValue">
            <CollapseItem name="a">
                <template v-slot:title>
                    <h1>nice title</h1>
                </template>
                <h1>headline title</h1>
                <div>this is content a aaa</div>
            </CollapseItem>

            <CollapseItem name="b" title="nice title b item b">
                <div>this is content b bbb</div>
            </CollapseItem>
            
            <CollapseItem name="c" title="nice title c item c" disabled>
                <div>this is content c ccc</div>
            </CollapseItem>
        </Collapse>
    </div>
    <br><br> -->
    <!-- Icon 组件展示 -->
    <!-- <div>
        <Icon icon="user-secret" size="2xl" type="primary"/>
        <Icon icon="user-secret" size="2xl" type="info"/>
        <Icon icon="user-secret" size="2xl" type="success"/>
        <Icon icon="user-secret" size="2xl" type="danger"/>
        <Icon icon="user-secret" size="2xl" type="warning"/>
        <Icon icon="user-secret" size="2xl" color="yellow"/>
    </div>
    <br><br> -->
    <!-- Alert 组件展示 -->
    <!-- <div>
        <Alert type="primary" title="Primary alert" icon="circle-check"></Alert>
        <Alert type="success" title="Success alert"></Alert>
        <Alert type="info" title="Info alert"></Alert>
        <Alert type="warning" title="Warning alert"></Alert>
        <Alert type="danger" title="Danger alert"></Alert>

        <Alert center type="primary" title="Primary alert"></Alert>
        <Alert center type="success" title="Success alert"></Alert>
        <Alert center type="info" title="Info alert"></Alert>
        <Alert center type="warning" title="Warning alert"></Alert>
        <Alert center type="danger" title="Danger alert"></Alert>

        <Alert type="primary" title="Primary alert" effect="dark"></Alert>
        <Alert type="success" title="Success alert" effect="dark"></Alert>
        <Alert type="info" title="Info alert" effect="dark"></Alert>
        <Alert type="warning" title="Warning alert" effect="dark"></Alert>
        <Alert type="danger" title="Danger alert" effect="dark" ref="alertRef">
            <h1>你好</h1>
            <div>hello word</div>
        </Alert>
    </div> -->
    <!-- Tooltip 组件展示 -->
    <!-- <div>
        <Tooltip content="hello" :popOptions="poppperOption" :trigger="trigger" ref="tooltip">
            <button>click</button>
            <template v-slot:content></template>
        </Tooltip>
    </div> -->
    <!-- Dropdown组件展示 -->
    <!-- <div>
        <Dropdown 
            content="hello" 
            :popOptions="poppperOption" 
            :trigger="trigger" 
            ref="dropdown" 
            :menu="menu"
            @visible-change="(e)=>console.log('visible-change',e)"
            @select="(e)=>console.log('select',e)"
            >
            <button>你好</button>
            <template v-slot:content></template>
        </Dropdown>
    </div> -->
    <!-- Message组件展示 -->
    <!-- <div>
        <button @click="createMessageItem">add</button>
    </div>-->
    <!-- Input 组件 -->
    <!-- <div>
        <Input v-model="test" placeholder="密码文本框，可以切换" showPassword/>
    </div> -->
    <!-- Switch 组件 -->
    <!-- <div>
        <Switch activeValue="right" inactiveValue="left"></Switch>
    </div> -->
    <!-- 打包代码测试 -->
  <div>
    <WMButton type="primary">按钮测试</WMButton>
  </div>
</template>

<script setup lang="ts">
    // import Button from './components/Button/Button.vue';
    // import Collapse from './components/Collapse/Collapse.vue';
    // import CollapseItem from './components/Collapse/CollapseItem.vue';
    // import Icon from './components/Icon/Icon.vue';
    // import Alert from './components/Alert/Alert.vue';
    // import Tooltip from './components/Tooltip/Tooltip.vue';
    // import Dropdown from './components/Dropdown/Dropdown.vue';
    // import Message from './components/Message/Message.vue';

    // import type {NameType} from "./components/Collapse/types"
    // import type {Instance} from "./components/Alert/type"
    // import type { DropdownInstance } from './components/Dropdown/type';
    // import {ref,onMounted,h, type VNode} from "vue"
    // import type { ButtonInstance } from './components/Button/types';
    // import type { TooltipInstance } from './components/Tooltip/type';

    // import type {Options} from "@popperjs/core"
    // import type {menuOptions} from "./components/Dropdown/type"


    // 为什么这里要给类型呢？
    // 如果给类型，想获取DOM节点很复杂，这里返回的是一个proxy代理
    // 如果给了类型，就能通过.ref直接获取DOM节点
    // let _ref = ref<ButtonInstance | null>(null);
    // let tooltip = ref<TooltipInstance | null>(null);

    // const modelValue = ref<NameType[]>([]);
    // let size = ref<any>("2xl")

    // let alertRef = ref<Instance>();
    // let trigger = ref<"click" | "hover">("click")
    // setTimeout(()=>{
    //     // alertRef.value?.close();
    //     trigger.value = "click"
    // },3000);

    // setTimeout(()=>{
    //     // alertRef.value?.close();
    //     trigger.value = "hover"
    // },6000);

    // let dropdown = ref<DropdownInstance>()
    // let poppperOption = ref<Partial<Options>>({
    //     placement:"bottom",
    // })
    // let menu = ref<menuOptions[]>([
    //     {label:h("b","this is a node"),key:"1"},
    //     {label:"2",key:"2"},
    //     {label:"3",key:"3",disabled:true},
    //     {label:"4",key:"4",divided:true},
    // ])
    // setTimeout(()=>{
    //     dropdown.value?.show();
    // },2000)

    // Message测试代码
    // import Message from './components/Message/Message.vue';
    // import type {MessageProps} from "./components/Message/type"
    // import {createMessage} from "./components/Message/method"
    // function createMessageItem(){
    //     createMessage({message:"你好",duration:0,type:"warning",showClose:true})
    // }
    
    // Input测试代码
    // import Input from './components/Input/Input.vue';
    // let test = ref("")

    // Switch组件测试
    // import Switch from './components/Switch/Switch.vue';

    // Select组件测试
    // import Select from './components/Select/Select.vue';

    // 打包代码测试
</script>

<style scoped>
</style> 
