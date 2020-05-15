<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="header-left">江苏党委政法委执法监督综合应用平台</div>
      <div class="header-right">
        <span class="header-rg-span">
          <a-icon type="home" :style="{color:'#fff',fontSize:'20px'}" />
        </span>
        <span class="header-rg-span">
          <a-badge
            :count="555"
            :numberStyle="{width:'35px',height:'18px',fontSize:'12px',boxShadow:'none',right:'-12px'}"
          >
            <a-icon type="history" :style="{color:'#fff',fontSize:'20px'}" />
          </a-badge>
        </span>
        <span class="header-rg-span">
          <em style="padding:0 5px 0 8px;">|</em>
          <a-icon type="user" :style="{color:'#fff',fontSize:'20px'}" />用户：谢处
        </span>
        <span class="header-rg-span">
          <a-icon type="export" :style="{color:'#fff',fontSize:'20px'}" />
        </span>
      </div>
    </a-layout-header>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <a-menu
          theme="dark"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>核查案卷</span>
            </span>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>涉案财物</span>
            </span>
            <a-menu-item key="3">option1</a-menu-item>
            <a-menu-item key="4">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>案件评查</span>
            </span>
            <a-menu-item key="5">option1</a-menu-item>
            <a-menu-item key="6">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>案件督办</span>
            </span>
            <a-menu-item key="7">option1</a-menu-item>
            <a-menu-item key="8">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub5">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>涉法诉讼</span>
            </span>
            <a-menu-item key="9">option1</a-menu-item>
            <a-menu-item key="10">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub6">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>统计分析</span>
            </span>
            <a-menu-item key="11">option1</a-menu-item>
            <a-menu-item key="12">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub7">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>质态评估</span>
            </span>
            <a-menu-item key="13">option1</a-menu-item>
            <a-menu-item key="14">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub8">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>趋势分析</span>
            </span>
            <a-menu-item key="15">option1</a-menu-item>
            <a-menu-item key="16">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub9">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>执法监督</span>
            </span>
            <a-menu-item key="17">option1</a-menu-item>
            <a-menu-item key="18">option2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub10">
            <span slot="title">
              <a-icon type="user" :style="{color:'#357BFCFF'}" />
              <span>统一授权</span>
            </span>
            <a-menu-item key="19">
              <router-link to="/authorize/unitInformation" class="router-inline">单位信息</router-link>
            </a-menu-item>
            <a-menu-item key="20">用户信息</a-menu-item>
            <a-menu-item key="21">角色信息</a-menu-item>
            <a-menu-item key="22">菜单管理</a-menu-item>
            <a-menu-item key="23">用户角色</a-menu-item>
            <a-menu-item key="24">应用系统</a-menu-item>
            <a-menu-item key="25">用户密码</a-menu-item>
            <a-menu-item key="26">栏目管理</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '10px 0', background: '#fff', minHeight: '280px' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {};
</script>
<style lang="less">
.header {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background: linear-gradient(
    51deg,
    rgba(37, 99, 218, 1) 0%,
    rgba(56, 116, 233, 1) 100%
  );
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  .header-right .header-rg-span {
    padding-left: 30px;
    font-size: 14px;
  }
}
</style>