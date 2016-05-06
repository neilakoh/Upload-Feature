Images = new FS.Collection("images", {
  /*SPECIFY THE PATH WHERE THE FILE WILL BE UPLOADED*/
  stores: [
    new FS.Store.FileSystem("images", {path: "/home/rometic/content"}),
    new FS.Store.FileSystem("thumbs", {
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream, fileObj.name()).autoOrient().resize('100', '100', "^").gravity('Center').extent('100', '100').stream().pipe(writeStream);
      }
    })
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});
