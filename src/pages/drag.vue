<template>
  <div class="drag">
    <div style="width: 10%; float: left;">
      <img src="https://svgshare.com/i/7BU.svg" alt="" width="50px" class="drag">
    </div>
    <div style="width: 90%; float: left;" class="frame">
      <img src="https://cdn.pbrd.co/images/HqV80K4.jpg" alt="" width="100%">
    </div>
  </div>
</template>
<script>
  // import f6 from '../assets/seats/6-floor-empty.jpg'
  // https://svgshare.com/i/7BU.svg
  export default {
    name: 'drag',
    title: 'drag',
    path: '/drag',

    data: () => ({
      // floor: f6
    }),

    mounted() {
      //Counter
        let counter = 0;
        //Make element draggable
        $(".drag").draggable({
            helper:'clone',
            containment: 'frame',

            //When first dragged
            stop:function(ev, ui) {
              var pos=$(ui.helper).offset();
              let objName = "#clonediv"+counter
              $(objName).css({"left":pos.left,"top":pos.top});
              $(objName).removeClass("drag");


                //When an existiung object is dragged
                $(objName).draggable({
                  containment: 'parent',
                    stop:function(ev, ui) {
                      var pos=$(ui.helper).offset();
                      console.log($(this).attr("id"));
                      console.log(pos.left)
                      console.log(pos.top)
                    }
                });
            }
        });
        //Make element droppable
        $(".frame").droppable({
          drop: function(ev, ui) {
            // if (ui.helper.attr('id').search(/drag[0-9]/) != -1){
              counter++;
              var element=$(ui.draggable).clone();
              element.addClass("tempclass");
              $(this).append(element);
              $(".tempclass").attr("id","clonediv"+counter);
              $("#clonediv"+counter).removeClass("tempclass");

              //Get the dynamically item id
              // draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
              // itemDragged = "dragged" + RegExp.$1
              // console.log(itemDragged)

              // $("#clonediv"+counter).addClass(itemDragged);
            // }
          }
        });
    } 
  }
</script>