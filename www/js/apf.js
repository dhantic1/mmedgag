function apfaddpost ( posttitle,postcontent,postcategory ) {
 
   
 
        formdata = new FormData();
   
        file =jQuery('#wp_qp_attachment').prop('files')[0];
        category = jQuery('select[name=category]').val();
        formdata.append("action", "apf_addpost");
        formdata.append("apftitle", posttitle);
        formdata.append("apfcontents", postcontent);
        formdata.append("apfcategory", category);
        formdata.append("wp_qp_attachment", file);        
    
jQuery.ajax({
    url: apfajax.ajaxurl,
    type: "POST",
    data: formdata,
    processData: false,
    contentType: false,
    beforeSend: function () {
               jQuery(".modal").show();
            },
    success: function (result) {
          jQuery(".modal").hide();
          jQuery('#ap-notify').append('<div class="ap-notify-item success" style="margin-left: 0px; display: block;"><i class="apicon-check"></i><div class="ap-notify-content">'+result+'</div></div>')
          jQuery( ".ap-notify-item" ).fadeOut( 10000 );
          resetvalues();
    }
});

    
}

function resetvalues() {
 
    var title = document.getElementById("apftitle");
    title.value = '';
 
    var content = document.getElementById("apfcontents");
    content.value = '';
 
}