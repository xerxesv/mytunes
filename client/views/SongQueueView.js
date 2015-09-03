// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
//    this.render();

    console.log(this.collection);

    this.collection.on("add", function(){
      console.log("queue update event handler firing");
      this.render();
    }, this);

    this.collection.on("remove", function(){
      this.render();
    }, this)
  },



  render: function() {



    this.$el.children().detach();

    this.$el.html('<th>Queue</th').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  
  }

});
