$(document).ready(function () {
    Backbone.emulateHTTP = true; // Use _method parameter rather than using DELETE and PUT methods
    Backbone.emulateJSON = true; // Send data to server via parameter rather than via request content
    var Person = Backbone.Model.extend({
        initialize: function() {
            this.on('all', function(e) { console.log(this.get('name') + " event: " + e); });
        },
        defaults: {
            name: 'undefined',
            age: 'undefined'
        },
        urlRoot: "/backbone.php",
        url: function() {
            var base = this.urlRoot || (this.collection &amp;&amp; this.collection.url) || "/";
            if (this.isNew()) return base;
            return base + "?id=" + encodeURIComponent(this.id);
        }
    });
    var person = new Person({id:1});
    person.fetch(); // fetch model from DB with id = 1
    person = new Person({name:"Joe Zim", age:23});
    person.save(); // create and save a new model on the server, also get id back and set it
    person = new Person({id:1, name:"Joe Zim", age:23});
    person.save(); // update the model on the server (it has an id set, therefore it is on the server already)
    person.destroy(); // delete the model from the server
    var People = Backbone.Collection.extend({
        initialize: function() {
            this.on('all', function(e) { console.log("People event: " + e); });
        },
        model: Person,
        url: "/backbone.php"
    });
    var people = new People();
    people.fetch(); // Get all models for this collection
    people.create({name:"Joe Zim", age:23}); // Create model, add to Collection and add to DB
    people.create({id:6, name:"Chuck Norris", age:72}); // Update model: add to Collection, update DB

});