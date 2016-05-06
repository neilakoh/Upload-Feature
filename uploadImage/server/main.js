import { Meteor } from 'meteor/meteor';
import fs from 'fs';

Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  remove: function(userId, doc) {
    return false;
  },
  download: function(userId) {
    return true;
  }
});

Meteor.startup(() => {
  Meteor.publish('uploadTest', function(){
    return Images.find();
  });
});
