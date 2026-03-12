import {describe,test,expect,vi} from "vitest"
import { nextTick } from "vue"
import { createMessage,closeAllInstance } from "./method"


// 暂时不管这个函数的原理,只需要知道是等待动画效果完成之后再往下执行代码
export const rAF = async ()=>{
    return new Promise((res)=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(async ()=>{
                res(null)
                await nextTick();
            })
        })
    })
}

// 由于测试是使用JS模拟的，所以有的API会无效，这里使用其他的来获取当前元素的TOP
function getTopValue(element:Element){
    const styles = window.getComputedStyle(element);
    const top = styles.getPropertyValue("top");

    // 这里返回的是字符串，所以需要截取前面的数字
    return Number.parseFloat(top)
}

describe("createMessage",()=>{
    test("调用方法应该创建Message组件",async ()=>{
        const instance = createMessage({message:"hello word",duration:0});
        await rAF();
        expect(document.querySelector(".wm-message")).toBeTruthy();
        instance.destroy();
        await rAF();
        expect(document.querySelector(".wm-message")).toBeFalsy();

    }),
    test("多次调用，创建多个实例",async ()=>{
        const instance1 = createMessage({message:"hello word",duration:0});
        const instance2 = createMessage({message:"hello word",duration:0});
        await rAF();

        const elements = document.querySelectorAll(".wm-message");
        expect(elements.length).toBe(2);
        closeAllInstance();
        await rAF();

        expect(document.querySelector(".wm-message")).toBeFalsy();
    }),
    test("创建的多个实例的 offset应该是正确的",async ()=>{
        const instance1 = createMessage({message:"hello word",duration:0,offset:100});
        const instance2 = createMessage({message:"hello word",duration:0,offset:50});
        await rAF();
        const elements = document.querySelectorAll(".wm-message");
        expect(elements.length).toBe(2);

        // 在jsDOM中，height返回是0，那么计算偏移值就行
        expect(getTopValue(elements[0] as Element)).toBe(100);
        expect(getTopValue(elements[1] as Element)).toBe(150);
    })
})