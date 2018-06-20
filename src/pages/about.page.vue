<template>
  <div class="about">
    <h1>Drag test</h1>

  <ul>
    <li id="draggable" class="ui-state-highlight">Drag me down</li>
  </ul>
   
  <ul id="sortable">
    <li class="ui-state-default">Item 1</li>
    <li class="ui-state-default">Item 2</li>
    <li class="ui-state-default">Item 3</li>
    <li class="ui-state-default">Item 4</li>
    <li class="ui-state-default">Item 5</li>
  </ul>
  </div>
</template>
<script>
  export default {
    name: 'about',
    title: 'About',
    path: '/about',

    mounted() {
      $( "#sortable" ).sortable({
        revert: true
      });
      $( "#draggable" ).draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
      });
      $( "ul, li" ).disableSelection();
    }
  }
</script>