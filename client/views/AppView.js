// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playListView = new PlayListView({model: this.model});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  events: {
    'click button': 'makePlaylist',
    'change select': 'showPlaylist'
  },

  makePlaylist: function() {
    var newPL = this.model.get('songQueue').clone();
    var name = $('input').val();
    $('input').val('');
    
    this.model.get('playlists')[name] = newPL;
    this.playListView.render();
    console.log(this.model.get('playlists')); 
  },

  showPlaylist: function() {
    var selected = $('option:selected').text();
    this.model.set('songQueue', this.model.get('playlists')[selected]);
    // this.queueView.collection = this.model.get('songQueue');
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    //debugger;
    this.render();
  },

  render: function() {

    return this.$el.html([
      $('<div class=playlistButton><button>Make Playlist</button></div>'),
      $('<input type="text" placeholder="name your playlist"></input>'),
      this.playListView.$el,
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});