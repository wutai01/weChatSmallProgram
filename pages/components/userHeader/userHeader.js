// pages/components/userHeader/userHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userType: {
      type: Number,
      value: 0
    },
    src: {
      type: String
    },
    nickName: {
      type: String,
      default: '未知'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created(){
    console.log(11, this)
  }
})
