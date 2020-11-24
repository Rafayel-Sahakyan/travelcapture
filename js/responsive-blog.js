if ($(window).width() < 768) {
    document.getElementById("first-elem").classList.remove("active");
    var blogs = Array.prototype.slice.call( document.querySelectorAll('.blog-panel'));
    var blogs_count = blogs.length;
    var $b = 0;

    function cl(){
/*          for (var i = 0; i < blogs_count; i++) {
            if(blogs[i].classList=="blog-panel active"){
                blogs[i].classList="blog-panel";
            }  
        } */
        /* this.className += " active"; */ 
    }
    var $b = 0;
    var oldId=""
    function reply_click(clicked_id){

        if(oldId==""){
            document.getElementById(clicked_id).className="blog-panel active";
            $("#para-"+clicked_id).slideDown('slow');
            oldId=clicked_id;
        }else if(oldId==clicked_id){
            $b = 1 - $b;
            if ($b == 1) {
                document.getElementById(oldId).className="blog-panel";
                $("#para-"+oldId).slideUp('slow');
                $b = 0;
                oldId="";
            }else{
                document.getElementById(clicked_id).className="blog-panel active";
                $("#para-"+clicked_id).slideDown('slow');
            }
        }else{
            document.getElementById(oldId).className="blog-panel";
            $("#para-"+oldId).slideUp('slow');

            document.getElementById(clicked_id).className="blog-panel active";
            $("#para-"+clicked_id).slideDown('slow');
            oldId=clicked_id;
        }
    }
        
/*          $b = 1 - $b;
        if ($b == 1) {

            if(oldId!=""){
                document.getElementById(oldId).className="blog-panel";
                $("#para-"+oldId).slideUp('slow')
            }
            oldId=clicked_id;

            document.getElementById(clicked_id).className="blog-panel active";
            $( "<p id='para-"+clicked_id+"' class='para' style='display:none;'>Test</p>" ).insertAfter( "#" + clicked_id );
           
        } else {
            oldId=clicked_id;

            document.getElementById(clicked_id).className="blog-panel";
            $("#para-"+clicked_id).slideUp('slow')
        } 
    } */
/*         if(oldId==""){
            document.getElementById(clicked_id).className="blog-panel active";
            $( "<p id='para-"+clicked_id+"' class='para' style='display:none;'>Test</p>" ).insertAfter( "#" + clicked_id );
            $("#para-"+clicked_id).slideDown('slow')

            oldId=clicked_id;
        }else{ 
            if(oldId==clicked_id){
                document.getElementById(oldId).className="blog-panel";
                $("#para-"+oldId).slideUp('slow')
            }else{
                document.getElementById(oldId).className="blog-panel";
                $("#para-"+oldId).slideUp('slow')

                document.getElementById(clicked_id).className="blog-panel active";
                $( "<p id='para-"+clicked_id+"' class='para' style='display:none;'>Test</p>" ).insertAfter( "#" + clicked_id );
                $("#para-"+clicked_id).slideDown('slow')
                oldId=clicked_id;
            }
        }
    } */
    

}