
$(function() {
	    //头部动画
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$(".navbar-default").css("padding","0");
			} else {
				$(".navbar-default").css("padding","10px 0");
			}
		});
		
		//时间选择
  		$('#form_datetime1').datetimepicker({ format: 'yyyy-mm-dd hh:ii' });
  		
  		//分页JS
	  	//请求数据
		$.ajax({
			type: "get",
			url: "../img/test1.json",
			dataType: "json",
			success: function(data){
				show(data)
			},
			error: function(){
				var json=
		            
{
    "persons": 
	    [
	    				{
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
			            },
			            {
				        	"name":"张三",
				            "age": "26",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"50"
				        },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"50"
			            },
			            {
				        	"name":"张三",
				            "age": "26",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"50"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
			            },
			            {
				        	"name":"张三",
				            "age": "26",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"50"
				        },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"50"
			            },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"50"
			            },
			            {
				        	"name":"张三",
				            "age": "26",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
			            },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
			            },
			            {
				        	"name":"张三",
				            "age": "26",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
		    				"name":"小李",
				            "age": "25",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
			            },
			            {
				        	"name":"张三",
				            "age": "26",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
			            {
				        	"name":"李四",
				            "age": "27",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        },
				        {
				        	"name":"test",
				            "age": "28",
				            "number": "A1122334455667788",
				            "tel":"13213220222",
				            "address":"胜众网络",
				            "progress":"30"
				        }
		]
};

				show(json);
			}
		});
		
		//展示数据
		function show(data){
			$('#pagination1').pagination({
				dataSource: data.persons,
				pageSize: 5,
				showGoInput: true,
				showGoButton: true,
				callback: function(data, pagination){
				// template method of yourself
				var dataContainer = $(".data-container1");
				dataContainer.empty();
				$.each(data,function(i,item){
					var html =  template('datatemplate', item);				        	
					dataContainer.append(html);	
				 });
				}
			})
		}
});

function showConfirmDialog(){
		    var instanceDialog = new BootstrapDialog({
		      //配置对话框标题
		      title: '删除', 
		      //配置对话框内容
		      message: '确认删除？', 
		      //配置操作按钮
		      buttons: [{ 
		        label: '确定',
		        action: function(dialog) {
		          //calback
		          instanceDialog.close();
		        }
		      }, {
		        label: '取消',
		        action: function(dialog) {
		          instanceDialog.close();
		        }
		      }]
		    });
		    //显示对话框
		    instanceDialog.open();
}


function showImportDialog(){
		    var instanceDialog = new BootstrapDialog({
		      //配置对话框标题
		      title: '导入文件', 
		      //配置对话框内容
		      message: $('<div class="uploadFile"><input type="file" multiple/><button type="button" class="btn btn-light" onclick="uploadFile(this)"><i class="qIcon shangchuan"></i>点击上传</button></div>'),
		      //配置操作按钮
		      buttons: [{ 
		        label: '确定',
		        action: function(dialog) {
		          //calback
		          instanceDialog.close();
		        }
		      }, {
		        label: '取消',
		        action: function(dialog) {
		          instanceDialog.close();
		        }
		      }]
		    });
		    //显示对话框
		    instanceDialog.open();
}
		

		