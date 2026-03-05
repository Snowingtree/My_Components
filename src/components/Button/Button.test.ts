import {describe,test,expect} from "vitest"
import Button from "./Button.vue"
import {mount} from "@vue/test-utils"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  //组件名称
import Icon from "../Icon/Icon.vue"
describe("Button.vue",()=>{
    test("basic button",()=>{
        const wrapper = mount(Button,{
            props:{
                type:"danger",
            },
            slots:{
                default:"button"
            }
        })
        console.log(wrapper.html());

        // 按钮组件没有交互功能，所以主要看样式是否写入了
        // wrapper.classes() 可以获取组件上所有的类

        expect(wrapper.classes()).toContain("wm-button--danger")

        // 以及slot的内容是否呈现了
        // get里面的内容是css选择器，然后通过test获取内容
        expect(wrapper.get('button').text()).toBe("button")
           
        // 测试事件
        // 使用trigger触发事件
        wrapper.get("button").trigger("click");
        // 通过emitted就可以看到所有被触发的事件
        console.log(wrapper.emitted());
        // toHaveProperty判断对象中是否有该属性
        expect(wrapper.emitted()).toHaveProperty("click")
    }),
    test("disable",()=>{
        const wrapper = mount(Button,{
            props:{
                type:"danger",
                disabled:true
            },
            slots:{
                default:"disabled"
            }
        })
        expect(wrapper.get("button").attributes("disabled")).toBeDefined()
        console.log(wrapper.get("button").element.disabled)

        // 既然被disabled，那么就不会发送事件
        wrapper.get("button").trigger("click");
        expect(wrapper.emitted()).not.toHaveProperty("click")
    }),

    // 开始测试icon组件图标
    test("Icon",()=>{
        // 由于我们不希望引入第三方的库，而是使用vitest自带的模拟功能
        const wrapper = mount(Button,{
            props:{
                icon:"arrow-up"
            },
            slots:{
                default:"icon"
            },
            global:{
                stubs:["FontAwesomeIcon"]
            }
        });
        // console.log(wrapper.html());
        const iconElement = wrapper.findComponent(FontAwesomeIcon);
        expect(iconElement.exists()).toBe(true); 
        expect(iconElement.attributes("icon")).toBe("arrow-up");
    })

    // 测试loading属性
    test("loading",()=>{
        // 由于我们不希望引入第三方的库，而是使用vitest自带的模拟功能
        const wrapper = mount(Button,{
            props:{
                loading:true,
            },
            slots:{
                default:"loading"
            },
            global:{
                stubs:["Icon"]
            }
        });
        // console.log(wrapper.html());
        const iconElement = wrapper.findComponent(Icon);
        expect(iconElement.exists()).toBe(true); 
        expect(iconElement.attributes("icon")).toBe("spinner");
        expect(wrapper.attributes("disabled")).toBeDefined();
    })


})