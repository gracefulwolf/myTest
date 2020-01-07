if($.isFunction("checkCommonJs")){
	checkCommonJs("common.js");		
}

$(function(){ 
    srUI.chgList('.ui-chg-list');
});

var srUI = {
    checkObj : function(obj){
		return $(obj).length == 0 ? false : true;
    },	

    chgList : function(obj){
        var $wrap = $(obj);

        // 처음 세팅
        srUI.chgListSet($wrap);

        // 행삭제
        $('.btn-remove').off('click').on('click', function(){
            var $thisWrap = $(this).parents('.ui-chg-list');

            if($thisWrap.find('input:checkbox').is(':checked')){
                $thisWrap.find('input:checked').parents('tr').remove();
                
                srUI.chgListSet($thisWrap);
            };
        });

        // 행추가
        $('.btn-add').off('click').on('click', function(){
            var $thisWrap = $(this).parents('.ui-chg-list');

            $thisWrap.find('table tbody').append('<tr><td><input type="checkbox"></td><td><input type="text"></td><td></td><td><a href="#none">링크</a></td></tr>');

            srUI.chgListSet($thisWrap);
        });


        // 행 위로
        $('.btn-up').off('click').on('click', function(){
            var $thisWrap = $(this).parents('.ui-chg-list');

            if($thisWrap.find('input:checked').parents('tr').length === 1){
                console.log($thisWrap.find('input:checked').parents('tr').length)
            }else{
                alert('1개만 선택해주세요')
                $thisWrap.find('input:checkbox').prop('checked',false)
            }
            
            
        });
    },

    chgListSet : function(obj){
        var $wrap = obj,
            wrapLen = $wrap.length;

        for(var i = 0; i < wrapLen; i++){
            var tblListLen = $wrap.eq(i).find('table tbody tr').length;

            for(var l = 0; l < tblListLen; l++){
                $wrap.eq(i).find('table tbody tr').eq(l).data('list','tblList'+l).attr('list','tblList'+l);
            };
        };
    }

    
}