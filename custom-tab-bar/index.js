Component({
  data:{
    selected:0,
    color: "#7A7E83",
    selectedColor: "#d43c33",
    list: [{
      pagePath: "/pages/find/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "发现"
    }, {
      pagePath: "/pages/home/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "我的"
    }]
  },
  methods:{
    switchTab(e){
      // console.log(e)
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})