<template>
  <div>
    <div id="element">
      <div class="draggable">
        <img id="drag1" src="https://svgshare.com/i/7BU.svg" alt="seat" width="50px" />
      </div>
    </div>
    <div id="dropzone" class="ui-widget-header floor-map">
      <seat v-for="seat in seats" v-bind:key="seat.id" v-bind:position="seat.position" v-bind:seatId="seat.id" :onSelectSeat="onSelectSeat" :selectedSeat="selectedSeat"></seat>
    </div>
  </div>
</template>
<script>
export default {
  name: "drag-drop-floor-map",
  props: {
    seats: Array,
    onSelectSeat: Function,
    selectedSeat: Object
  },

  data: () => ({
    draggableConfig: {
      cursor: "move",
      grid: [20, 20],
      containment: "#dropzone"
    },
    rotatableConfig: {
      snap: 2
    }
  }),

  mounted() {
    this.$nextTick(function attachDraggableHandles() {
      $(".object.ui-draggable").each((idx, el) => {
        $(el)
          .draggable(this.draggableConfig)
          .rotatable(this.rotatableConfig);
      });
    });

    $(".draggable").draggable(Object.assign({}, this.draggableConfig, { helper: 'clone' }));

    $("#dropzone").droppable({
      drop: function(event, ui) {
        var canvas = $(this);
        if (!ui.draggable.hasClass("object")) {
          var canvasElement = ui.helper.clone();
          canvasElement.addClass("object");
          canvas.find("div").removeClass("activeElement");
          canvasElement.addClass("activeElement");
          canvasElement.removeClass(
            "draggable ui-draggable ui-draggable-handle ui-draggable-dragging"
          );
          canvas.append(canvasElement);

          var off = canvas.position();
          var cElOff = {
            left: ui.position.left - off.left,
            top: ui.position.top - off.top
          };

          if (ui.helper.hasClass("editable-seat")) {
            cElOff.left = ui.position.left;
            cElOff.top = ui.position.top;
          }

          canvasElement.css({
            left: cElOff.left,
            top: cElOff.top,
            position: "absolute",
            zIndex: 10
          });

          canvasElement
            .draggable(this.draggableConfig)
            .rotatable(this.rotatableConfig);
        }
      }
    });

    $(document).on("mousedown", ".ui-rotatable-handle", function(e) {
      $(".ui-rotatable-handle")
        .rotatable("instance")
        .startRotate(e);
    });
    $(document).on("click", ".ui-delete", function(e) {
      $(this)
        .parents(".ui-draggable")
        .remove();
    });
    $(document).on("mousedown", ".ui-delete", function(e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};
</script>
<style>
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

.draggable {
  float: left;
  z-index: 10;
}

#dropzone {
  padding: 0.5em;
  float: left;
  margin: 10px;
  position: relative;
}

.floor-map {
  width: 1000px;
  height: 493px;
  float: left;
  background-image: url("https://cdn.pbrd.co/images/HqV80K4.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

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
</style>
