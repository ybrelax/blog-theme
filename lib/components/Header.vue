<template>
  <header class="navbar">
    <div class = "title">
        <span>Ybrelax</span>
    </div>
    <div class="links">
      <div class="search">
          <input  placeholder="请搜索"/>
      </div>
      <nav>
        <div class="nav-item">主页</div>
        <div class="nav-item">代码</div>
        <div class="nav-item">生活</div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
@import "~@theme/styles/variables";
.navbar {
  position: fixed;
  top: 0;
  left: 0;
    right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.6rem;
  padding: 0.7rem 1.5rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2);
  .links {
    display: flex;
    .search {
        input {
            width: 10rem;
            padding: 0.5rem 0.2rem;
            border:1px solid @borderColor;
            outline-color: @accentColor;
        }
    }
    nav {
      & > .nav-item {
        display: inline-block;
        margin-left: 1.5rem;
        padding: 0.5rem 0;
        cursor: pointer;
        &:hover {
          color: @accentColor;
          border-bottom: 1px solid @accentColor;
          transform: all 0.5s ease-out;
        }
      }
    }
    @media (max-width: @RMMobile) { 
        nav {
            display: none;
        }
    }
  }
}
</style>
