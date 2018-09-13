/**
 * Created by funny on 2018/9/13.
 */
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });

    $.ajax({
        type:'get',
        url: '/category/queryTopCategory',
        dataType:'json',
        success:function(res){
            //console.log(res);
          var html=template('category-first',{result:res.rows});
            //console.log(html);
            $("#links").html(html);
        }
    })

    $.ajax({
        type:'get',
        url:' /category/querySecondCategory',
        dataType:'json',
        data:{
            id:1
        },
        success:function(res){
            //console.log(res);
            var html = template('category-second',{result:res.rows});
            $(".brand-list").html(html);
        }
    })

    $('#links').on('click','a',function(){
       var id = $(this).attr('data-id');
        //console.log(id);
        $.ajax({
            type:'get',
            url:'/category/querySecondCategory',
            dataType:'json',
            data:{
                id:id
            },
            success:function(res){
                var html = template('category-second',{result:res.rows});
                $(".brand-list").html(html);
            }
        })
    })


})