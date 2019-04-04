module.exports = {
    backgroundColor: '#2c343c',

    series : [
        {
            name: '访问来源',
            type: 'pie',
            /* radius : '55%',*/
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 274, name: '联盟广告'},
                {value: 235, name: '视频广告'},
                {value: 400, name: '搜索引擎'}
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            }
        }
    ]
};