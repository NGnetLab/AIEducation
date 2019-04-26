
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: 0,
    _num: '0'
  },
  /** 
 * 点击tab切换 
 */
  toggle(e) {
    console.log(e.currentTarget.dataset.index);
    if (this.data._num === e.currentTarget.dataset.index) {
      return false;
    } else {
      this.setData({
        _num: e.currentTarget.dataset.index
      })
    }



       if (e.currentTarget.dataset.index=="0"){
         this.setData({
           state: 0,
           _num: e.target.dataset.index
         })
      } else if (e.currentTarget.dataset.index == "1"){
         this.setData({
           state:1,
           _num: e.target.dataset.index
         })
       } else if (e.currentTarget.dataset.index == "2"){
         console.log('已进入已过期');
         this.setData({
           state: 2,
           _num: e.target.dataset.index
         })
       }
  },


  bindChange: function (e) {
    var that = this;
    console.log(e)
    that.setData({
      _num: e.detail.current
    });
    switch (e.detail.current) {
      case 0:
        that.data.state = 0
        break;
      case 1:
        that.data.state = 1
        break;
      case 2:
        that.data.state = 2
        break;
    }
    // wx.request({
    //   url: app.baseURL + 'act=member_invoice&op=mycomposegroup',
    //   data: {
    //     appid: app.appid,
    //     pagenums: "1",
    //     member_id: app.member_id,
    //     state: that.data.state
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     app.allorders = res.data.datas.goods
    //     that.setData({
    //       list: res.data.datas.goods,
    //       height: res.data.datas.goods.length * 215
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})