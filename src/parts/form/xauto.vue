<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <input :type="type" class="form-control xauto" :id="id" :placeholder="placeholder" v-bind="$attrs">
    <!-- <small :id="id+Help" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
</template>

<script>
  import autoComplete from 'js-autocomplete'
  import 'js-autocomplete/auto-complete.css'
  console.log(autoComplete)
  export default {
    name: 'xauto',
    // ['label', 'name', 'placeholder', 'id', 'type'],
    props: {
      value: String | Number,
      label: String,
      // text value to show in the input
      text: String,
      name: String,
      placeholder: String,
      id: {type: String, default: function (val) {
        return val || `form-${this.name}`;
      }},
      type: {type: String, default: 'text'},
      // example: [{id: 'au', text: 'Australia'}, ...]
      data: {type: Array, default: () => []}
    },
    data() {
      return {
        el: {}
      }
    },
    methods: {
      update(val) {
        this.$emit('input', val)
      }
    },
    mounted() {
      console.log(this.data)
      if (!_.isEmpty(this.text)) this.$el.querySelector('input.xauto').value = this.text
      this.el = new autoComplete({
          selector: this.$el.querySelector('input.xauto'),
          minChars: 1,
          source: (term, suggest) => {
              term = term.toLowerCase();              
              suggest(_.filter(this.data, v => v.text.indexOf(term) > -1));
          },
          renderItem: (item, search) => {
              // search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
              // var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
              return `
                <div class="autocomplete-suggestion" data-val="${item.text}" data-id="${item.id}">
                  ${item.text}
                </div>
              `;
          },
          onSelect: (e, term, item) => {
            console.log('the id is '+item.getAttribute('data-id'))
            this.update(item.getAttribute('data-id'))
          }
      });
    },
  };
</script>