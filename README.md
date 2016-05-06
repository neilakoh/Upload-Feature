# Upload-Feature

DEPEND­ENCIES:

https://github.com/CollectionFS/Meteor-CollectionFS<br />
	- $ meteor add cfs:standard-packages<br />
	- $ meteor add cfs:filesystem<br /><br />

https://github.com/CollectionFS/Meteor-CollectionFS/wiki/Image-Manipulation<br />
	- meteor add cfs:graphicsmagick<br /><br />

Useful Links:<br />
http://stackoverflow.com/questions/24698968/how-to-create-a-thumbnail-that-fills-a-certain-area-in-meteor-with-collectionfs

	- gm(readStream, fileObj.name()).autoOrient().resize('100', '100', "^").gravity('Center').extent('100', '100').stream().pipe(writeStream);

Specify the collection field (store) to display on the client:<br />

https://github.com/CollectionFS/Meteor-CollectionFS#security
	`{{#each images}}
	  URL: {{this.url}}
	  <img src="{{this.url store='thumbnail'}}" alt="thumbnail">
	{{/each}}`
