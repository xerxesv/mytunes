// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    plays: 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('plays', this.get('plays') + 1);
  },

  enqueue: function() {
    console.log('queue');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
