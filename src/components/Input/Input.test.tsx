import { describe,vi,test, expect,it} from "vitest";
import Input from "./Input.vue";
import { mount } from "@vue/test-utils";
import { walk } from "vue/compiler-sfc";

describe("Input",()=>{
    test("基本展示",()=>{
        const wrapper = mount(Input,{
            props:{
                type:"text",
                size:"large",
                modelValue:"hello world"
            },
            slots:{
                prepend:"外前缀",
                prefix:"内前缀"
            }
        });

        // 所以判断是否存在，关键就是提供find去找节点或者对应的类是否存在
        // console.log(wrapper.html())
        // class是否正确
        expect(wrapper.classes()).toContain("wm-input--large");
        expect(wrapper.classes()).toContain("is-prepend");

        // 是否渲染标签和节点
        expect(wrapper.find("input").exists()).toBeTruthy();
        expect(wrapper.get("input").attributes("type")).toBe("text");

        // slots
        expect( wrapper.find(".wm-input__prepend").exists()).toBeTruthy();
        expect(wrapper.get(".wm-input__prepend").text()).toBe("外前缀");

        expect(wrapper.find(".wm-input__prefix").exists()).toBeTruthy();
        expect(wrapper.get(".wm-input__prefix").text()).toBe("内前缀");

    })

    it("modelValue should be updated",async ()=>{
        const wrapper = mount(Input,{
            props:{
                modelValue:"test",
                "onUpdate:modelValue":(e:string)=> wrapper.setProps({modelValue:e}),
            }
        })

        // 初始值
        const input = wrapper.get("input");
        expect(input.element.value).toBe("test"); 

        // 更新值反向更新props
        await input.setValue("hello world");
        expect(input.element.value).toBe("hello world");
        expect(wrapper.props("modelValue")).toBe("hello world");

        // 更新props，查看是否更新值
        await wrapper.setProps({modelValue:"async update"});
        expect(input.element.value).toBe("async update");

    })
    it("测试清空图标的属性",async ()=>{
        const wrapper = mount(Input,{
            props:{
                modelValue:"test",
                clearable:true,
            },
            global:{
                stubs:["Icon"],
            }
        })
        // console.log(wrapper.html())
        // 当没有focus，不会出现Icon
        expect(wrapper.find(".wm-input__clear").exists()).toBeFalsy();
        const input = wrapper.find("input");

        await input.trigger("focus");
        expect(wrapper.emitted()).toHaveProperty("focus")
        // 出现icon
        expect(wrapper.find(".wm-input__clear").exists()).toBeTruthy();
        await wrapper.get(".wm-input__clear").trigger("click");
        expect(input.element.value).toBe("");

        // 由于清空了值，所以clear change和input都会被触发
        expect(wrapper.emitted()).toHaveProperty("change")
        expect(wrapper.emitted()).toHaveProperty("input")
        expect(wrapper.emitted()).toHaveProperty("clear")
        const inputProps = wrapper.emitted("input");
        const changeProps = wrapper.emitted("change");
        const clearProps = wrapper.emitted("clear");
        expect(inputProps![0]).toEqual([""])
        expect(changeProps![0]).toEqual([""])

        await input.trigger("blur");
        expect(wrapper.emitted()).toHaveProperty("blur")
    })
    it("测试密码显示和不显示的切换",async ()=>{
        const wrapper = mount(Input,{
            props:{
                modelValue:"",
                showPassword:true,
                type:"text"
            },
            global:{
                stubs:["Icon"],
            }
        })

        // 不出现icon，因为当前值为空
        expect(wrapper.find(".wm-input__password").exists()).toBeFalsy();
        const input = wrapper.find("input");
        expect(input.element.type).toBe("password")

         // 写值,变为password
        await input.setValue("123");
        const eyeIcon = wrapper.find(".wm-input__password");
        expect(eyeIcon.attributes("icon")).toBe("eye-slash");
        expect(eyeIcon.exists()).toBeTruthy();
 
        // 点击icon切换
        await eyeIcon.trigger("click");
        // // 这里的图标切换了，所以需要重新写
        const eyeIcon_new = wrapper.find(".wm-input__password");
        expect(eyeIcon_new.attributes("icon")).toBe("eye");
        expect(input.attributes("type")).toBe("text");  
    })
    it("测试事件",async ()=>{
        const wrapper = mount(Input,{
            props:{
                modelValue:"test",
                "onUpdate:modelValue":(e:string)=> wrapper.setProps({modelValue:e}),
            }
        })
        const input = wrapper.get("input");
        await input.setValue("hello world");
        // 初始自身有两个事件
        console.log(wrapper.emitted())
        expect(wrapper.emitted()).toHaveProperty("change")
        expect(wrapper.emitted()).toHaveProperty("input")
        const inputProps = wrapper.emitted("input");
        const changeProps = wrapper.emitted("change");
        expect(inputProps![0]).toEqual(["hello world"])
        expect(changeProps![0]).toEqual(["hello world"])
    })
}) 