$(document).ready(function(){

    //本地数据
    var items = [
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:-0.133,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:-1,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:2,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:3,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:4,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:5,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:-0.133,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
	    {AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:-0.133,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},
    ];
    //保留两位小数
//  var fixed2 = function(val){
//      return val.toFixed(2);
//  }

    //加百分号
//  var fixed2percentage = function(val){
//      return fixed2(val)+'%';
//  }
    //高亮
//  var highliht = function(val){
//      if(val > 0){
//          return '<span style="color: #b00">' + fixed2(val) + '</span>';
//      }else if(val < 0){
//          return '<span style="color: #0b0">' + fixed2(val) + '</span>';
//      }
//      return fixed2(val);
//  };
    //列
    var cols = [
        {title:'<label class="checkbox"><input class="input-checkbox" value="2" type="checkbox"><span class="style-checkbox"></span></label>', name:'', width: 50, align: 'center', renderer: function(val,item,rowIndex){
            return '<div class="btnPrice"><label class="checkbox"><input class="input-checkbox" value="2" type="checkbox"><span class="style-checkbox"></span></label></div>';
        }},
        { title:'股票代码', name:'SECUCODE' ,width:100, align:'center' },
        { title:'股票名称', name:'SECUABBR' ,width:150, align:'center'},
        { title:'今收盘', name:'CLOSINGPRICE' ,width:80, align:'center'},
        { title:'涨跌幅', name:'DAYCHANGERATE' ,width:80, align:'center',type:'number', sortable: true},
        { title:'涨跌额', name:'DAYCHANGE' ,width:80, align:'center'},
        { title:'振幅', name:'AMPLITUDE' ,width:80, align:'center'},
        { title:'成交量(手)', name:'TURNOVERVOL' ,width:110, align:'center'},
        { title:'成交额(万)', name:'TURNOVERVAL' ,width:110, align:'center'},
        { title:'昨收盘', name:'PREVCLOSINGPRICE' ,width:80, align:'center'},
        { title:'今开盘', name:'OPENINGPRICE',width:80, align:'center'},
        { title:'最高价', name:'HIGHESTPRICE' ,width:80, align:'center'},
        { title:'最低价', name:'LOWESTPRICE' ,width:80, align:'center'}
    ];

    //本地示例
    $('#table2-1').mmGrid({
        cols: cols,
        items: items,
        sortName: 'DAYCHANGERATE',
        sortStatus: 'desc'
    });
    
    //AJAX示例
//  $('#table2-2').mmGrid({
//      cols: cols,
//      url: 'data/stockQuote.json',
//      method: 'get'
//  });

//  var cols3 = [
//      {title:'行情', name:'', width: 30, align: 'center', sortable: true, renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      { title:'股票代码', name:'SECUCODE' ,width:100, align:'center', sortable: true, sortName:'secu_code'},
//      { title:'股票名称', name:'SECUABBR' ,width:100, align:'center', sortable: true, sortName:'secu_abbr'},
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60, align:'right',type:'number', sortable: true,renderer: highliht},
//      { title:'涨跌额', name:'DAYCHANGE' ,width:60, align:'right',type:'number', sortable: true, renderer: highliht},
//      { title:'振幅', name:'AMPLITUDE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2percentage},
//      { title:'成交量(手)', name:'TURNOVERVOL' ,width:100, align:'right',type:'number', sortable: true, renderer: function(val){
//          return (val / 100).toFixed(2);
//      }},
//      { title:'成交额(万)', name:'TURNOVERVAL' ,width:100, align:'right',type:'number', sortable: true, renderer: function(val){
//          return (val / 10000).toFixed(2);
//      }},
//      { title:'昨收盘', name:'PREVCLOSINGPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
//      { title:'今开盘', name:'OPENINGPRICE',width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
//      { title:'最高价', name:'HIGHESTPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
//      { title:'最低价', name:'LOWESTPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2}
//  ];
//  //客户端排序示例
//  $('#table3-1').mmGrid({
//      cols: cols3,
//      items: items,
//      sortName: 'DAYCHANGERATE',
//      sortStatus: 'desc'
//  });
//  //服务器端排序示例
//  $('#table3-2').mmGrid({
//      cols: cols3,
//      url: 'data/stockQuote.json',
//      method: 'get',
//      remoteSort:true ,
//      sortName: 'SECUCODE',
//      sortStatus: 'asc'
//  });
//
//
//
//  //锁定列宽
//  var cols41 = [
//      {title:'行情', name:'', width: 30, align: 'center',lockWidth:true, renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      { title:'股票代码', name:'SECUCODE' ,width:80,lockWidth:true, align:'center' },
//      { title:'股票名称', name:'SECUABBR' ,width:80,lockWidth:true, align:'center'},
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60,lockWidth:true, align:'right', renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60,lockWidth:true, align:'right',renderer: highliht}
//  ];
//  $('#table4-1').mmGrid({
//      height: 200,
//      cols: cols41,
//      items: items
//  });
//
//  //隐藏列
//  var cols42 = [
//      {title:'行情', name:'',width: 30, align: 'center', renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      { title:'股票代码', name:'SECUCODE' ,width:80, align:'center', hidden: true },
//      { title:'股票名称', name:'SECUABBR' ,width:80, align:'center'},
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right', renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60, align:'right',renderer: highliht}
//  ];
//  $('#table4-2').mmGrid({
//      height: 200,
//      cols: cols42,
//      items: items
//  });
//
//  //锁定列显示状态
//  var cols43 = [
//      {title:'行情', name:'',width: 30, align: 'center',lockDisplay: true, renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      { title:'股票代码', name:'SECUCODE' ,width:80, align:'center' },
//      { title:'股票名称', name:'SECUABBR' ,width:80, lockDisplay: true,align:'center'},
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right',lockDisplay: true, renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE',width:60 , align:'right',renderer: highliht }
//  ];
//  $('#table4-3').mmGrid({
//      height: 200,
//      cols: cols43,
//      items: items
//  });
//
//  //内容折行
//  var cols5 = [
//      {title:'行情', name:'', width: 30, align: 'center', renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      { title:'股票名称', name:'' ,width:80, align:'center', renderer: function(val, item){
//          return  item.SECUABBR + '(' + item.SECUCODE + ')';
//      } },
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right', renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60, align:'right',renderer: highliht},
//      { title:'涨跌额', name:'DAYCHANGE' ,width:60, align:'right', renderer: highliht},
//      { title:'振幅', name:'AMPLITUDE' ,width:60, align:'right', renderer: fixed2percentage},
//      { title:'成交量(手)', name:'TURNOVERVOL' ,width:90, align:'right', renderer: function(val){
//          return (val / 100).toFixed(2);
//      }},
//      { title:'成交额(万)', name:'TURNOVERVAL' ,width:90, align:'right', renderer: function(val){
//          return (val / 10000).toFixed(2);
//      }},
//      { title:'昨收盘', name:'PREVCLOSINGPRICE' ,width:60, align:'right', renderer: fixed2},
//      { title:'今开盘', name:'OPENINGPRICE',width:60, align:'right', renderer: fixed2},
//      { title:'最高价', name:'HIGHESTPRICE' ,width:60, align:'right', renderer: fixed2},
//      { title:'最低价', name:'LOWESTPRICE' ,width:60, align:'right', renderer: fixed2}
//  ];
//
//  $('#table5-1').mmGrid({
//      cols: cols5,
//      items: items,
//      nowrap: true
//  });
//  $('#table5-2').mmGrid({
//      cols: cols5,
//      items: items
//  });
//
//  //列宽自适应表格宽度
//  var cols6 = [
//      {title:'行情', name:'', width: 30, align: 'center',lockWidth:true, renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      { title:'股票代码', name:'SECUCODE' ,width:80, align:'center' },
//      { title:'股票名称', name:'SECUABBR' ,width:80, align:'center'},
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right', renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60, align:'right',renderer: highliht}
//  ];
//  $('#table6-1').mmGrid({
//      cols: cols6,
//      items: items,
//      fullWidthRows: true
//  });
//  $('#table6-2').mmGrid({
//      cols: cols6,
//      items: items
//  });
//
//
//  //多选
//  $('#table7-1').mmGrid({
//      multiSelect: true,
//      cols: cols,
//      items: items
//  });
//  $('#table7-2').mmGrid({
//      cols: cols,
//      items: items
//  });
//
//  //选框列
//  $('#table8-1').mmGrid({
//      multiSelect: true,
//      checkCol: true,
//      cols: cols,
//      items: items
//  });
//  $('#table8-2').mmGrid({
//      checkCol: true,
//      cols: cols,
//      items: items
//  });
//
//
//  //索引列
//  $('#table9-1').mmGrid({
//      indexCol: true,
//      indexColWidth: 25,
//      cols: cols,
//      items: items
//  });
//  $('#table9-2').mmGrid({
//      checkCol: true,
//      indexCol: true,
//      indexColWidth: 25,
//      cols: cols,
//      items: items
//  });
//
//
//  //显示全部行
//  $('#table10-1').mmGrid({
//      height: 'auto',
//      cols: cols,
//      items: items
//  });
//
//  //分页
//  $('#table11-1').mmGrid({
//      indexCol: true,
//      indexColWidth: 35,
//      cols: cols,
//      url: 'data/stockQuotePage.json',
//      method: 'get',
//      root: 'items',
//      plugins : [
//          $('#paginator11-1').mmPaginator()
//      ]
//  });
//
//  //表头分组
//  var groupCols = [
//      {title:'行情', name:'', width: 30, align: 'center', renderer: function(val,item,rowIndex){
//          return '<div class="btnPrice"></div>';
//      }},
//      {title:'股票', align: 'center', cols:[
//          { title:'股票代码', name:'SECUCODE' ,width:100, align:'center' ,sortable: true},
//          { title:'股票名称', name:'SECUABBR' ,width:100, align:'center' ,sortable: true}
//      ]},
//      { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right' ,sortable: true, renderer: fixed2},
//      { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60, align:'right' ,sortable: true,renderer: highliht},
//      { title:'涨跌额', name:'DAYCHANGE' ,width:60, align:'right' ,sortable: true, renderer: highliht},
//      { title:'振幅', name:'AMPLITUDE' ,width:60, align:'right' ,sortable: true, renderer: fixed2percentage},
//      { title:'成交' ,align: 'center', cols: [
//          { title:'成交量(手)', name:'TURNOVERVOL' ,width:100, align:'right' ,sortable: true, renderer: function(val){
//              return (val / 100).toFixed(2);
//          }},
//          { title:'成交额(万)', name:'TURNOVERVAL' ,width:100, align:'right' ,sortable: true, renderer: function(val){
//              return (val / 10000).toFixed(2);
//          }}
//      ]},
//      { title:'昨收盘', name:'PREVCLOSINGPRICE' ,width:60, align:'right' ,sortable: true, renderer: fixed2},
//      { title:'今开盘', name:'OPENINGPRICE',width:60, align:'right' ,sortable: true, renderer: fixed2},
//      { title:'最高价', name:'HIGHESTPRICE' ,width:60, align:'right' ,sortable: true, renderer: fixed2},
//      { title:'最低价', name:'LOWESTPRICE' ,width:60, align:'right' ,sortable: true, renderer: fixed2}
//  ];
//  $('#table12-1').mmGrid({
//      cols: groupCols,
//      items: items
//  });
});
