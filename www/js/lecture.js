function apfaddlecture ( posttitle,postcontent,postcategory ) {
 
   
 
        formdata = new FormData();
   
        
        category = jQuery('select[name=category]').val();
        formdata.append("action", "apf_lecture_addpost");
        formdata.append("apftitle", posttitle);
        formdata.append("apfcontents", postcontent);
        formdata.append("apfcategory", category);
        formdata.append("lecture_video_url", postcategory);        
    
jQuery.ajax({
    url: lecture_ajax.ajaxurl,
    type: "POST",
    data: formdata,
    processData: false,
    contentType: false,
     beforeSend: function () {
               jQuery(".modal").show();
            },
    success: function (result) {
          jQuery(".modal").hide();
          if (result === '') {
var result = '{"data":"Your Lecture will be published after review"}';
var unstrobj = JSON.parse(result);
} else {
          if (typeof(result) == "string") {
          var unstrobj = JSON.parse(result);
} else {
    var unstrobj =result;
}
  }        jQuery('#ap-notify').append('<div class="ap-notify-item success" style="margin-left: 0px; display: block;"><i class="apicon-check"></i><div class="ap-notify-content">'+unstrobj.data+'</div></div>')
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