<template>
  <div>
    <div id="element">
      <div class="draggable">
        <svg version="1.1" width="50px" height="50px" id="drag1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
        <title>normal/100</title>
        <desc>Created with Sketch.</desc>
        <g id="normal_x2F_100">
          <g>
            <path id="Line-5_1_" class="st0" d="M66.6,7c0-3,2.5-5.5,5.5-5.5l40.9,0c3,0,5.5,2.5,5.5,5.5v106c0,3-2.5,5.5-5.5,5.5H7
              c-3,0-5.5-2.5-5.5-5.5V71.5C1.5,68.4,4,66,7,66h25.9c18.6,0,33.7-15.1,33.7-33.7V7z"/>
            <path class="st1" d="M113,120H7c-3.9,0-7-3.1-7-7V71.5c0-3.9,3.1-7,7-7h25.9c17.8,0,32.2-14.5,32.2-32.2V7c0-3.9,3.1-7,7-7H113
              c3.9,0,7,3.1,7,7v106C120,116.9,116.9,120,113,120z M7,67.5c-2.2,0-4,1.8-4,4V113c0,2.2,1.8,4,4,4h106c2.2,0,4-1.8,4-4V7
              c0-2.2-1.8-4-4-4H72.1c-2.2,0-4,1.8-4,4v25.2c0,19.4-15.8,35.2-35.2,35.2H7z"/>
          </g>
          <circle id="Oval" class="st0" cx="24" cy="24" r="24"/>
        </g>
        </svg>
      </div>
    </div>
    <div id="dropzone" class="ui-widget-header floor-map">
      <floor-2-zoom-map></floor-2-zoom-map>

      <seat
        v-for="seat in seats"
        :key="seat.id"
        :position="seat.position"
        :seatId="seat.id"
        :onSelectSeat="onSelectSeat"
        :selectedSeat="selectedSeat"
        :data-seatId="seat.id"
        :seatIconUrl="seatIconUrl"
        ></seat>
    </div>
  </div>
</template>
<script>
export default {
  name: "drag-drop-floor-map",
  props: {
    seats: Array,
    onSelectSeat: Function,
    selectedSeat: Object,
    onSeatSave: Function
  },

  data: () => ({
    draggableConfig: {
      cursor: "move",
      grid: [20, 20],
      containment: "#dropzone"
    },
    seatIconUrl: 'img/seats/bash-design/desks/normal/50.svg'
  }),

  methods: {
    updateSeatPosition(el) {
      if (!_.isNil(el.attr) && _.isFunction(el.attr)) {
        const seatId = el.attr("data-seatid");
        const style = el.attr("style");
        let afterSeatSaveHandler = null;

        if (_.isNil(seatId)) {
          afterSeatSaveHandler = seatIdentifier => {
            el.attr("data-seatid", seatIdentifier);
          };
        }

        this.onSeatSave({ id: seatId, position: style }, afterSeatSaveHandler);
      }
    },

    handleRotateStop(e, ui) {
      this.updateSeatPosition(ui.element);
    },

    makeDragAndRotatable(el) {
      $(el)
        .draggable(this.draggableConfig)
        .rotatable({
          snap: 2,
          stop: this.handleRotateStop
        });
    },

    decorateDroppedSvgForInsertion($svg, left, top) {
      $svg.attr('x', left);
      $svg.attr('y', top);
    }
  },

  mounted() {
    const self = this;

    // window.svgPanZoom('#dropzone')

    $(".draggable").draggable(
      Object.assign({}, this.draggableConfig, { helper: "clone" })
    );

    $("#dropzone").droppable({
      drop: function(event, ui) {
        var canvas = $(this);
        if (!ui.draggable.hasClass("object")) {
          var canvasElement = ui.helper;
          canvasElement.addClass("object");
          canvas.find("div").removeClass("activeElement");
          canvasElement.addClass("activeElement");
          canvasElement.removeClass(
            "draggable ui-draggable ui-draggable-handle ui-draggable-dragging"
          );

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

          // Add the svg to the map.svg
          const svgElement = $(canvasElement).find('svg');
          self.decorateDroppedSvgForInsertion(svgElement, cElOff.left, cElOff.top);
          $('#floor-2-map').append(svgElement);

          self.makeDragAndRotatable(canvasElement);
          // self.updateSeatPosition(canvasElement);
        } else {
          // self.updateSeatPosition(ui.helper);
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
.st0{fill:#FFFFFF;}
.st1{fill:#48DBFF;}
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
  margin: 10px;
  position: relative;
}

.floor-map {
  width: 1206px;
  height: 831px;
  float: left;
  /* background-image: url("/img/floor_6.svg"); */
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
