<template>
  <div>
    <header id="search-bar" class="mui-bar mui-bar-nav">
      <div class="show-collection-switch" @click='showCollection'>
        <span class="mui-icon mui-icon-bars"></span>
      </div>
      <input type="search" class="mui-input-clear mui-input-speech" v-model='keyword' @keyup.enter='setKeyword(0)'>
      <div class='search-switch' @click='setKeyword(0)'>
        <span class="mui-icon mui-icon-search"></span>
      </div>
    </header>
    <transition name="show">
      <ul class="collection-box" v-show='collectionSwitch'>
        <li class="coll-name" v-for='item in collectItems' @click='oprateItem(item)'>
          {{ item }}
          <span class="mui-badge mui-badge-danger" v-show='editSwitch'>×</span>
        </li>
        <li class="coll-name edit-switch" @click='showEdit'>编辑</li>
        <li class="clear"></li>
      </ul>
    </transition>
  </div>
 
</template>

<script>

require('../../static/js/zepto.min.js')

const data=function(){
  return {
    keyword:'',
    collectionSwitch:0,
    editSwitch:0
  }
}

const computed={
  collectItems(){
    return this.$store.getters.collectItem
  }
}

const methods={
  switchFun:function(obj,key){
    key==1?document.querySelector('.show-collection-switch').style.transform='rotate(90deg)':document.querySelector('.show-collection-switch').style.transform='rotate(0deg)'
    return obj.collectionSwitch=key
  },
  showCollection:function(){
    this.collectionSwitch==0?this.switchFun(this,1):this.switchFun(this,0)
  },
  showEdit:function(){
    this.editSwitch===0?this.editSwitch=1:this.editSwitch=0
  },
  setKeyword:function(key){
    if(key===0){
      this.$store.dispatch('searchFun',this.keyword)
    }else{
      this.$store.dispatch('searchFun',key)
    }
  },
  oprateItem:function(name){
    if(this.editSwitch===0){
      this.setKeyword(name)
      document.querySelector('.show-collection-switch').click()
    }else{
      this.$store.dispatch('deleteCollection',name)
    }
  }
}

export default {
  data,
  computed,
  methods
}
</script>

<style scoped>
  #search-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    z-index: 100;
  }
  #search-bar .show-collection-switch {
    transition: all 400ms;
    cursor: pointer;
  }
  #search-bar .search-switch {
    cursor: pointer;
  }
  #search-bar input {
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
  }
  .collection-box{
    top: 44px;
    position: fixed;
    list-style: none;
    margin: 0;
    padding: 10px 0 0 10px;
    width: 100%;
    background: #fff;
    border-bottom:1px solid #ddd;
    z-index: 100; 
  }
  .show-enter{
    top:0;
    opacity: 0;
  }
  .show-enter-active{
    transition: all 300ms;
  }
  .show-leave-active{
    top: 0;
    opacity: 0;
    transition: all 300ms;
  }
  .collection-box .coll-name {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
  }
  .collection-box .clear {
    clear: both;
  }
  .collection-box .edit-switch {
    float: left;
    background: #eee;
  }
</style>