import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.hello.helpers({
  displayImage: function() {
    return Images.find();
    // return Images.find({},{fields:{"copies.thumbs":1}}).fetch();
  }
});

Template.hello.events({
  "change #myFileInput": function (event) {
    event.preventDefault();

    FS.Utility.eachFile(event, function(file){
      var fileObj = new FS.File(file);
      fileObj.userId = "jkj31n23n12jk3njkn12k3"; //HERE IS WHERE YOU CAN ADD A CUSTOM FIELD TO THE FS COLLECTION
      Images.insert(fileObj, function(err, result) {
        if(err) {
          throw new Meteor.Error(500, 'There was an error when uploading the image');
        }
      });
    });

  },

  "click .myFileInput": function () {
    //RESETS THE PROGRESS BAR WHEN UPLOADING NEW PHOTO
    var x = document.getElementsByClassName("progress-bar");
    for (var i = 0; i < x.length; i++) {
        x[i].style.width = "0%";
    }
  }
});

Meteor.subscribe('uploadTest');
