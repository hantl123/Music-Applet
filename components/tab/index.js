Component({
  properties: {
    tabArr: { // 属性名
      type: Array,
      value: []
    },
    fontColor: {
      type: String,
      value: '#d43c33'
    },
    active:{
      type: Number,
      value: 0
    }
  },
  data:{
  },
  methods: {
    onTap(e){
      const data = e.currentTarget.dataset
      this.setData({
        active: data.index
      })
      var eventDetail = {index: this.active} 
      var eventOption = {} 
      this.triggerEvent('tabitemTap', eventDetail, eventOption)
    }
  }
})