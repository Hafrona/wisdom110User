
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        id: 0,
        latitude: 24.4455700000,
        longitude: 118.0824000000,
        // alpha:0,
        callout: {
          content: " 厦门思明区政府 \n 12000元/㎡",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center',
          // borderRadius: 10,
          // borderColor:'#ff0000',
          // borderWidth: 2,
        }

      },
      {
        id: 1,
        latitude: 24.5131500000,
        longitude: 118.1468600000,
        callout: {
          content: " 厦门湖里区政府 \n 70000元/㎡",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 2,
        latitude: 24.7235700000,
        longitude: 118.1517300000,
        callout: {
          content: " 厦门市同安区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 3,
        latitude: 24.5759000000,
        longitude: 118.0972700000,
        callout: {
          content: " 厦门市集美区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 4,
        latitude: 24.4846000000,
        longitude: 118.0329300000,
        callout: {
          content: " 厦门市海沧区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 5,
        latitude: 24.6196000000,
        longitude: 118.2478900000,
        callout: {
          content: " 厦门市翔安区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
    ],
  }
})