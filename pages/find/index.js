Page({
  data:{
    tabArr:['热歌榜','搜索'],
    list:20
  },
  methods:{
    tabitemTap(e){
      console.log(e.detail)
    }
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 0
    })
  }
  }
})