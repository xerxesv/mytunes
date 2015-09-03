var PlayListView = Backbone.View.extend({
  
  tagName: "select",

  initialize: function(){
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.append(
      _.map(this.model.get('playlists'), function(playlist, key) {
        return '<option>' + key + '</option>';
      })
    );
  }  

});