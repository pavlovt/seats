<template>
  <div class="drag">
    <div style="width: 10%; float: left;">
      <div class="drag">
        <img id="drag1" src="https://svgshare.com/i/7BU.svg" alt="" width="50px">
      </div>
    </div>
    <div style="width: 90%; height: 90vh; float: left; background-image: url('https://cdn.pbrd.co/images/HqV80K4.jpg'); background-repeat: no-repeat; background-size: 100%;" class="frame">
      <!-- <img src="https://cdn.pbrd.co/images/HqV80K4.jpg" alt="" width="100%"> -->
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
            grid: [ 20, 20 ],
            //When first dragged
            /*stop:function(ev, ui) {
              var pos=$(ui.helper).offset();
              let objName = "#clonediv"+counter
              // $(objName).css({"left":pos.left,"top":pos.top});
              // $(objName).removeClass("drag");


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
            }*/
        });
        //Make element droppable
        $(".frame").droppable({
          drop: function(ev, ui) {
            // if (ui.helper.attr('id').search(/drag[0-9]/) != -1){
              counter++;
              var element=$(ui.draggable).clone();
              element.addClass("tempclass");
              // element.addClass("ui-rotatable-handle");
              element.removeClass("drag");
              element.append('<div class="ui-rotatable-handle"></div>')
              // element.append('<div class="ui-delete"></div>')
              console.log(ui.helper.attr('style'))
              element.attr('style', ui.helper.attr('style'))
              $(this).append(element);
              $(".tempclass").attr("id","clonediv"+counter);
              $("#clonediv"+counter).removeClass("tempclass");
              $(element).draggable({
                  // snap by grid of 20px
                  grid: [ 20, 20 ],
                  containment: 'parent',
                    stop:function(ev, ui) {
                      var pos=$(ui.helper).offset();
                      console.log($(this).attr("id"));
                      console.log(pos.left)
                      console.log(pos.top)
                    }
                // snap by grid of 2 degrees
                }).rotatable({snap: 2})
                ui.helper.remove()
              //Get the dynamically item id
              // draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
              // itemDragged = "dragged" + RegExp.$1
              // console.log(itemDragged)

              // $("#clonediv"+counter).addClass(itemDragged);
            // }
          }
        });

        $(document).on("mousedown", '.ui-rotatable-handle', function(e) {
          $('.ui-rotatable-handle').rotatable("instance").startRotate(e);
        });
        $(document).on("click", '.ui-delete', function(e) {
          console.log(e)
          $(this).parents('.ui-draggable').remove()
        });
        $(document).on("mousedown", '.ui-delete', function(e) {
          console.log('zzzzzz')
          e.preventDefault()
          e.stopPropagation()
        });
    } 
  }
</script>

<style>
  .ui-rotatable-handle {
    background: url("https://cdn.jsdelivr.net/jquery.ui.rotatable/1.0.1/rotate.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 15px;
    width: 15px;
    position: absolute;
    top: -15px;
    right: -13px;
  }
  .ui-delete {
    background: url("https://cdn2.iconfinder.com/data/icons/web/512/Trash_Can-512.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 15px;
    width: 15px;
    position: absolute;
    top: -15px;
    right: 2px;
  }
</style>