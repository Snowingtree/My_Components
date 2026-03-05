import {describe,test,expect,vi} from "vitest"
import {h} from "vue"
import {mount} from "@vue/test-utils"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  //组件名称
import Icon from "../Icon/Icon.vue"
import CollapseItem from "./CollapseItem.vue"
import Collapse from "./Collapse.vue"
import { head } from "lodash-es"


describe("Collapse.vue",()=>{
    test("basic",async ()=>{
        // 这里给事件的名称就是on+后面事件的大写，
        // 并且，在什么组件中触发事件，就在什么组件中绑定事件
        const onChange = vi.fn();

        const wrapper = mount(()=>
            <Collapse modelValue={['a']} onChange={onChange}>
                <CollapseItem name="a" title="nice title a item a">
                    <div>this is content b bbb</div>
                </CollapseItem>

                <CollapseItem name="b" title="nice title b item b">
                    <div>this is content b bbb</div>
                </CollapseItem>
                
                <CollapseItem name="c" title="nice title c item c" disabled>
                    <div>this is content c ccc</div>
                </CollapseItem>
            </Collapse>
            ,
            {
                global:{
                    stubs:['Icon']
                },
                attachTo:document.body,
            }
        );
        const headers = wrapper.findAll(".wm-collapse-item__header");
        const contents = wrapper.findAll(".wm-collapse-item__content");

        // 长度
        expect(headers.length).toBe(3);
        expect(contents.length).toBe(3);

        // 文本
        let firstHeader = headers[0];
        let secondHeader = headers[1];
        let thirdHeader = headers[2];
        expect(firstHeader?.text()).toBe("nice title a item a")

        // 内容
        let firstContent = contents[0];
        let secondContent = contents[1];
        let thirdContent = contents[2];
        expect(firstContent?.isVisible()).toBeTruthy();
        expect(secondContent?.isVisible()).toBeFalsy();
        expect(firstContent?.text()).toBe("this is content b bbb")

        // Vue的DOM更新是异步的，不是立即执行，所以需要异步等待事件执行完毕
        await firstHeader?.trigger("click");
        await secondHeader?.trigger("click");

        expect(onChange).toHaveBeenCalledWith([]);
        expect(onChange).toHaveBeenLastCalledWith(['b']);


        // 测试disabled
        await thirdHeader?.trigger("click");
        expect(thirdContent?.isVisible()).toBeFalsy();
        expect(thirdHeader?.classes()).toContain("is-disabled");
        
        
    })


})