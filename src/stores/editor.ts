import { v4 as uuidv4 } from 'uuid';

// 组件数据结构
export interface EditorProps{
    // 组件数组
    components: ComponenData[];
    // 当前编辑的组件的id
    currentElement: string;
}

interface ComponenData{
    props: {
        // 组件 属性
        [key: string]: any
    };
    // 组件 ID
    id: string;
    // 组件姓名
    name:string;
}

// 测试数据
export const testComponents: ComponenData[] = [
    {id: uuidv4(), name: 'p-text', props: { text: 'hello'}},
    {id: uuidv4(), name: 'p-text', props: { text: 'boyu'}},
    {id: uuidv4(), name: 'p-text', props: { text: 'wow wow'}}
]

// const editor: Module<EditorProps, GlobalDataProps> = {
//     state: {
//         components: testComponents,
//         currentElement: ''
//     }
// }