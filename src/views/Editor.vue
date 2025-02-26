<template>
    <div class="editor-container">
        <!-- 头部 -->
        <a-layout>
            <a-layout-header class="header" style="background: #fff; border: 1px solid black">
                I am header
            </a-layout-header>
        </a-layout>

        <!-- 主体布局 -->
        <a-layout style="display: flex; height: calc(100vh - 60px);">
            <!-- 左侧面板 -->
            <a-layout-sider width="300" style="background:#fff; border: 1px solid pink;">
                left
            </a-layout-sider>

            <!-- 画布区域 -->
            <a-layout-content class="preview_container">
                <p>画布区域</p>
                <div v-for="component in counterStore.testData" :key="component.id">
                    {{ component.name, component.props}}
                </div>
            </a-layout-content>

            <!-- 右侧面板 -->
            <a-layout-sider width="300" style="background: #fff; border: 1px solid blue;">
                right
            </a-layout-sider>
        </a-layout>
    </div>
</template>


<script lang="ts" setup >
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore()
console.log(counterStore.testData)
</script>

<style scoped>
.editor-container{
    /* padding: 24px; */
    margin:0;
    display: flex;
    flex-direction: column;
    /* min-height: 85vh; */
    /* align-items: stretch; */
    position: relative;
}

</style>