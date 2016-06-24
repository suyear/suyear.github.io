$(document).ready(function(){
	var currentPage = 1;
  	requestData(currentPage);
  	//请求数据
  	function requestData(pageNumber){
	   $.ajax({
		type: "get",
		url: "img/stockQuote.json",
		data: {"pageNumber":pageNumber},
		dataType: "json",
		success: function(data){
			show(data)
		},
		error: function(){
			alert("error");
		}
	   });
	}
	//展示数据
	function show(data){
		$('#table2-1').mmGrid({
			height:'auto',
	        cols: cols,
	        items: data.items,
	        remoteSort:true ,
	        sortName: 'DAYCHANGERATE',
	        sortStatus: 'asc'
	    });
	
		//分页
		var totalPage = data.totalCount;
		$("#pagination1").paginate({
			count: totalPage,
			start: currentPage,
			onChange: function(page){
				requestData(page);
				currentPage = page;
			}
		});
	}

	//列
    var cols = [
        {title:'<label class="checkbox"><input class="input-checkbox" value="2" type="checkbox"><span class="style-checkbox"></span></label>', name:'', width: 50, align: 'center', renderer: function(val,item,rowIndex){
            return '<div class="btnPrice"><label class="checkbox"><input class="input-checkbox" value="2" type="checkbox"><span class="style-checkbox"></span></label></div>';
        }},
        { title:'股票代码', name:'SECUCODE' ,width:100, align:'center'},
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
        { title:'昨收盘', name:'PREVCLOSINGPRICE' ,width:80, align:'center'},
        { title:'今开盘', name:'OPENINGPRICE',width:80, align:'center'},
        { title:'最高价', name:'HIGHESTPRICE' ,width:80, align:'center'},
        { title:'最低价', name:'LOWESTPRICE' ,width:80, align:'center'}
    ];
});
