define("controllers/soundboard.b3824117",function(require){"use strict";var e,n=require("marionette"),i=require("backbone.radio"),o=require("radios/sounds.8e99c404"),r=require("views/soundboard.a52b7194");return e=n.Object.extend({initialize:function(){new o},index:function(e){var n=new r({slug:e});i.channel("App").request("region:show",{view:n})}})});