<template>
<div class="header">
  <div class="left">
    <span>后台管理网站框架</span>
  </div>
  <ul class="right">
    <li>
      <i class="iconfont mange-warn"></i><br/>
      <span>警告</span>
    </li>
    <li>
      <i class="iconfont mange-pcenter"></i><br/>
      <span>个人中心</span>
    </li>
    <li>
      <i class="iconfont mange-logoff"></i><br/>
      <span>退出</span>
    </li>
  </ul>
</div>
</template>
<script>
export default {};
</script>
<style>
.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
}

.header .left span {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
  font-size: 20px;
}

.header .right {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.header .right li {
  cursor: pointer;
  margin-left: 40px;
  text-align: center;
}

.header .right li i {
  font-size: 30px;
  color: #fff;
}

.header .right li span {
  color: #fff;
  font-size: 16px;
}
</style>
