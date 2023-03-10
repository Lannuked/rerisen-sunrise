async function RetOldHeader() {
    var FriendCount = await GetCount("https://friends.roblox.com/v1/user/friend-requests/count");
    var MessagesCount = await GetCount("https://privatemessages.roblox.com/v1/messages/unread/count");
    var UserInfo = await GetCount("https://users.roblox.com/v1/users/authenticated");
    var UserID = UserInfo["id"];
    var Username = UserInfo["displayName"];
    var RobuxCount = await GetCount("https://economy.roblox.com/v1/users/" + UserID + "/currency");

var OldHeader = `
   <!-- MachineID: APP69 -->
   <head id="ctl00_Head1">
      <!--[if lte IE 7]>
      <style>
         .Navigation .dropdownnavcontainer
         {
         margin-left:121px;
         }
      </style>
      <![endif]-->
      <meta http-equiv="X-UA-Compatible" content="IE=7" />
      <title>
         Roblox Games - Browse our selection of free online games
      </title>
      <script type="text/javascript">
         function checkForRedirect()
         {
             // If it's a page load, and there's a hash in the URL, we've definitely loaded the wrong data
             // is because hashes dont get sent to the server in requests from the browser.
             // Thus, if we see someone trying to load a page with a hash in it on pageload (external link coming
             // to our site, or copy paste), we should immediately refresh the page with the server friendly url
             var loc = window.location.href;
             var indexOfHash = loc.indexOf('#!');
             if (indexOfHash > 0)
             {
                 var newLoc = loc.substr(indexOfHash + 2);
                 window.location.replace(newLoc);
             }
         }
         checkForRedirect();
      </script>
      <meta name="fragment" content="!">
      <!--This tag informs search engine that this is an Ajax page et that there is a dynamic content to index (see the Ajax section).-->
      <link id="ctl00_Imports" rel="stylesheet" type="text/css" href="/CSS/Base/CSS/AllCSS.ashx?v=20110516qrwef&amp;t=RBX2" />
      <link id="ctl00_Link1" rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico" />
      <link rel="Stylesheet" type="text/css" href="/css/Base/CSS/party.css" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="Content-Language" content="en-us" />
      <meta name="author" content="ROBLOX Corporation" />
      <meta id="ctl00_metadescription" name="description" content="Free Games and Building Games!  A virtual world for kids with user-created castles, cars, spaceships, swords, battles, trucks, zombies and awesome destruction.  Build, battle, chat, or just hang out online." />
      <meta id="ctl00_metakeywords" name="keywords" content="free games, online games, building games, virtual world" />
      <script type="text/javascript">
         var _gaq = _gaq || [];
         _gaq.push(['_setAccount', 'UA-11419793-1']);
         _gaq.push(['_setCampSourceKey', 'rbx_source']);
         _gaq.push(['_setCampMediumKey', 'rbx_medium']);
         _gaq.push(['_setCampContentKey', 'rbx_campaign']);
         _gaq.push(['_trackPageview']);

         (function() {
             var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
             ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
             var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
         })();

      </script>
   </head>
   <body>
      <form name="aspnetForm" method="post" action="/Games.aspx" id="aspnetForm">
         <div>
            <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
            <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTgzODIxODgyOQ9kFgJmD2QWBGYPZBYEAgQPFgIeBGhyZWYFMC9DU1MvQmFzZS9DU1MvQWxsQ1NTLmFzaHg/dj0yMDExMDUxNnFyd2VmJnQ9UkJYMmQCBQ8WBB8ABRd+L1Rlc3RpbmcvUkJYMlN0eWxlLmNzcx4HVmlzaWJsZWhkAgEQFgIeBmFjdGlvbgULL0dhbWVzLmFzcHhkFgYCAg8PFgIfAWhkZAIKD2QWAmYPZBYCAgEPZBYCAgMPDxYCHg1Mb2dvdXRQYWdlVXJsBRxEZWZhdWx0LmFzcHg/bG9nb3V0PTE0OTM3ODMzZGQCDg9kFgICAQ8WAh4LXyFJdGVtQ291bnQCDhYcZg9kFgJmDxUGDVNlbGVjdGVkR2VucmUDYWxsA2FsbAAJQWxsIEdhbWVzA0FsbGQCAQ9kFgJmDxUGAA10b3duLWFuZC1jaXR5DXRvd24tYW5kLWNpdHnhBVJvYmxveCBpcyBwcm91ZCB0byBvZmZlciB0aGUgd2ViJiMzOTtzIGJlc3QgY29sbGVjdGlvbiBvZiB0b3duIGFuZCBjaXR5IGdhbWVzLCBvdGhlciBmcmVlIG9ubGluZSBnYW1lcyBhbmQgM0QgdmlydHVhbCB3b3JsZHMuIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFraW5nIHN1cmUgdGhhdCBhbGwgb2Ygb3VyIGZyZWUgZ2FtZXMgYXJlIGZ1biBhbmQgc2FmZS4gUm9ibG94IG1lbWJlcnMgY2FuIGNyZWF0ZSB0aGVpciBvd24gdmlydHVhbCB3b3JsZCBvbmxpbmUgZ2FtZXM7IGN1c3RvbWl6ZSB0aGVpciBhdmF0YXIgY2hhcmFjdGVyIHdpdGggdGhlIGJlc3QgdmlydHVhbCBnb29kcyBsaWtlIGhhdHMsIHNoaXJ0cyBhbmQgZ2VhcjsgYW5kIHBsYXkgZnJlZSBvbmxpbmUgdG93biBhbmQgY2l0eSBnYW1lcyB3aXRoIHRoZWlyIGZyaWVuZHMgd2hpbGUgYWxzbyBtZWV0aW5nIG5ldyBmcmllbmRzLiBXaGV0aGVyIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiBUb3duIGFuZCBDaXR5IGdhbWVzLCBBY3Rpb24gZ2FtZXMsIEFkdmVudHVyZSBnYW1lcywgRnVubnkgZ2FtZXMsIENhciBnYW1lcywgb3IgZXZlbiBUeWNvb24gZ2FtZXMsIGNvdW50IG9uIFJvYmxveCB0byBkZWxpdmVyIHRoZSBiZXN0IGZyZWUgb25saW5lIGdhbWVzIGZvciB5b3UgdG8gcGxheS4gQ2hlY2sgb3V0IG91ciBCdWlsZGVycyBDbHViIG1lbWJlcnNoaXAgc2VydmljZSBmb3IgYW4gZW5oYW5jZWQgYnVpbGRpbmcgZ2FtZXMgZXhwZXJpZW5jZS4gE1Rvd24gYW5kIENpdHkgR2FtZXMNVG93biBhbmQgQ2l0eWQCAg9kFgJmDxUGAAhtZWRpZXZhbAhtZWRpZXZhbNEFUm9ibG94IGlzIHByb3VkIHRvIG9mZmVyIHRoZSB3ZWImIzM5O3MgYmVzdCBjb2xsZWN0aW9uIG9mIG1lZGlldmFsIGdhbWVzLCBvdGhlciBmcmVlIG9ubGluZSBnYW1lcyBhbmQgM0QgdmlydHVhbCB3b3JsZHMuIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFraW5nIHN1cmUgdGhhdCBhbGwgb2Ygb3VyIGZyZWUgZ2FtZXMgYXJlIGZ1biBhbmQgc2FmZS4gUm9ibG94IG1lbWJlcnMgY2FuIGNyZWF0ZSB0aGVpciBvd24gdmlydHVhbCB3b3JsZCBvbmxpbmUgZ2FtZXM7IGN1c3RvbWl6ZSB0aGVpciBhdmF0YXIgY2hhcmFjdGVyIHdpdGggdGhlIGJlc3QgdmlydHVhbCBnb29kcyBsaWtlIGhhdHMsIHNoaXJ0cyBhbmQgZ2VhcjsgYW5kIHBsYXkgZnJlZSBvbmxpbmUgbWVkaWV2YWwgZ2FtZXMgd2l0aCB0aGVpciBmcmllbmRzIHdoaWxlIGFsc28gbWVldGluZyBuZXcgZnJpZW5kcy4gV2hldGhlciB5b3UgYXJlIGludGVyZXN0ZWQgaW4gTWVkaWV2YWwgZ2FtZXMsIEFjdGlvbiBnYW1lcywgQWR2ZW50dXJlIGdhbWVzLCBGdW5ueSBnYW1lcywgQ2FyIGdhbWVzLCBvciBldmVuIFR5Y29vbiBnYW1lcywgY291bnQgb24gUm9ibG94IHRvIGRlbGl2ZXIgdGhlIGJlc3QgZnJlZSBvbmxpbmUgZ2FtZXMgZm9yIHlvdSB0byBwbGF5LiBDaGVjayBvdXQgb3VyIEJ1aWxkZXJzIENsdWIgbWVtYmVyc2hpcCBzZXJ2aWNlIGZvciBhbiBlbmhhbmNlZCBidWlsZGluZyBnYW1lcyBleHBlcmllbmNlLg1GYW50YXN5IEdhbWVzB0ZhbnRhc3lkAgMPZBYCZg8VBgAGc2NpLWZpBnNjaS1macwFUm9ibG94IGlzIHByb3VkIHRvIG9mZmVyIHRoZSB3ZWImIzM5O3MgYmVzdCBjb2xsZWN0aW9uIG9mIHNjaS1maSBnYW1lcywgb3RoZXIgZnJlZSBvbmxpbmUgZ2FtZXMgYW5kIDNEIHZpcnR1YWwgd29ybGRzLiBXZSBhcmUgY29tbWl0dGVkIHRvIG1ha2luZyBzdXJlIHRoYXQgYWxsIG9mIG91ciBmcmVlIGdhbWVzIGFyZSBmdW4gYW5kIHNhZmUuIFJvYmxveCBtZW1iZXJzIGNhbiBjcmVhdGUgdGhlaXIgb3duIHZpcnR1YWwgd29ybGQgb25saW5lIGdhbWVzOyBjdXN0b21pemUgdGhlaXIgYXZhdGFyIGNoYXJhY3RlciB3aXRoIHRoZSBiZXN0IHZpcnR1YWwgZ29vZHMgbGlrZSBoYXRzLCBzaGlydHMgYW5kIGdlYXI7IGFuZCBwbGF5IGZyZWUgb25saW5lIHNjaS1maSBnYW1lcyB3aXRoIHRoZWlyIGZyaWVuZHMgd2hpbGUgYWxzbyBtZWV0aW5nIG5ldyBmcmllbmRzLiBXaGV0aGVyIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiBTY2ktRmkgZ2FtZXMsIEFjdGlvbiBnYW1lcywgQWR2ZW50dXJlIGdhbWVzLCBGdW5ueSBnYW1lcywgQ2FyIGdhbWVzLCBvciBldmVuIFR5Y29vbiBnYW1lcywgY291bnQgb24gUm9ibG94IHRvIGRlbGl2ZXIgdGhlIGJlc3QgZnJlZSBvbmxpbmUgZ2FtZXMgZm9yIHlvdSB0byBwbGF5LiBDaGVjayBvdXQgb3VyIEJ1aWxkZXJzIENsdWIgbWVtYmVyc2hpcCBzZXJ2aWNlIGZvciBhbiBlbmhhbmNlZCBidWlsZGluZyBnYW1lcyBleHBlcmllbmNlLiAMU2NpLUZpIEdhbWVzBlNjaS1GaWQCBA9kFgJmDxUGAAVuaW5qYQVuaW5qYcQFUm9ibG94IGlzIHByb3VkIHRvIG9mZmVyIHRoZSB3ZWImIzM5O3MgYmVzdCBjb2xsZWN0aW9uIG9mIG5pbmphIGdhbWVzLCBvdGhlciBmcmVlIG9ubGluZSBnYW1lcyBhbmQgM0QgdmlydHVhbCB3b3JsZHMuIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFraW5nIHN1cmUgdGhhdCBhbGwgb2Ygb3VyIGZyZWUgZ2FtZXMgYXJlIGZ1biBhbmQgc2FmZS4gUm9ibG94IG1lbWJlcnMgY2FuIGNyZWF0ZSB0aGVpciBvd24gdmlydHVhbCB3b3JsZCBvbmxpbmUgZ2FtZXM7IGN1c3RvbWl6ZSB0aGVpciBhdmF0YXIgY2hhcmFjdGVyIHdpdGggdGhlIGJlc3QgdmlydHVhbCBnb29kcyBsaWtlIGhhdHMsIHNoaXJ0cyBhbmQgZ2VhcjsgYW5kIHBsYXkgbmluamEgZ2FtZXMgb25saW5lIHdpdGggdGhlaXIgZnJpZW5kcyB3aGlsZSBhbHNvIG1lZXRpbmcgbmV3IGZyaWVuZHMuIFdoZXRoZXIgeW91IGFyZSBpbnRlcmVzdGVkIGluIE5pbmphIGdhbWVzLCBBY3Rpb24gZ2FtZXMsIEFkdmVudHVyZSBnYW1lcywgRnVubnkgZ2FtZXMsIENhciBnYW1lcywgb3IgZXZlbiBUeWNvb24gZ2FtZXMsIGNvdW50IG9uIFJvYmxveCB0byBkZWxpdmVyIHRoZSBiZXN0IGZyZWUgb25saW5lIGdhbWVzIGZvciB5b3UgdG8gcGxheS4gQ2hlY2sgb3V0IG91ciBCdWlsZGVycyBDbHViIG1lbWJlcnNoaXAgc2VydmljZSBmb3IgYW4gZW5oYW5jZWQgYnVpbGRpbmcgZ2FtZXMgZXhwZXJpZW5jZS4gC05pbmphIEdhbWVzBU5pbmphZAIFD2QWAmYPFQYABXNjYXJ5BXNjYXJ5yQVSb2Jsb3ggaXMgcHJvdWQgdG8gb2ZmZXIgdGhlIHdlYiYjMzk7cyBiZXN0IGNvbGxlY3Rpb24gb2Ygc2NhcnkgZ2FtZXMsIG90aGVyIGZyZWUgb25saW5lIGdhbWVzIGFuZCAzRCB2aXJ0dWFsIHdvcmxkcy4gV2UgYXJlIGNvbW1pdHRlZCB0byBtYWtpbmcgc3VyZSB0aGF0IGFsbCBvZiBvdXIgZnJlZSBnYW1lcyBhcmUgZnVuIGFuZCBzYWZlLiBSb2Jsb3ggbWVtYmVycyBjYW4gY3JlYXRlIHRoZWlyIG93biB2aXJ0dWFsIHdvcmxkIG9ubGluZSBnYW1lczsgY3VzdG9taXplIHRoZWlyIGF2YXRhciBjaGFyYWN0ZXIgd2l0aCB0aGUgYmVzdCB2aXJ0dWFsIGdvb2RzIGxpa2UgaGF0cywgc2hpcnRzIGFuZCBnZWFyOyBhbmQgcGxheSBmcmVlIG9ubGluZSBzY2FyeSBnYW1lcyB3aXRoIHRoZWlyIGZyaWVuZHMgd2hpbGUgYWxzbyBtZWV0aW5nIG5ldyBmcmllbmRzLiBXaGV0aGVyIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiBzY2FyeSBnYW1lcywgQWN0aW9uIGdhbWVzLCBBZHZlbnR1cmUgZ2FtZXMsIEZ1bm55IGdhbWVzLCBDYXIgZ2FtZXMsIG9yIGV2ZW4gVHljb29uIGdhbWVzLCBjb3VudCBvbiBSb2Jsb3ggdG8gZGVsaXZlciB0aGUgYmVzdCBmcmVlIG9ubGluZSBnYW1lcyBmb3IgeW91IHRvIHBsYXkuIENoZWNrIG91dCBvdXIgQnVpbGRlcnMgQ2x1YiBtZW1iZXJzaGlwIHNlcnZpY2UgZm9yIGFuIGVuaGFuY2VkIGJ1aWxkaW5nIGdhbWVzIGV4cGVyaWVuY2UuIAtTY2FyeSBHYW1lcwVTY2FyeWQCBg9kFgJmDxUGAAZwaXJhdGUGcGlyYXRlzAVSb2Jsb3ggaXMgcHJvdWQgdG8gb2ZmZXIgdGhlIHdlYiYjMzk7cyBiZXN0IGNvbGxlY3Rpb24gb2YgcGlyYXRlIGdhbWVzLCBvdGhlciBmcmVlIG9ubGluZSBnYW1lcyBhbmQgM0QgdmlydHVhbCB3b3JsZHMuIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFraW5nIHN1cmUgdGhhdCBhbGwgb2Ygb3VyIGZyZWUgZ2FtZXMgYXJlIGZ1biBhbmQgc2FmZS4gUm9ibG94IG1lbWJlcnMgY2FuIGNyZWF0ZSB0aGVpciBvd24gdmlydHVhbCB3b3JsZCBvbmxpbmUgZ2FtZXM7IGN1c3RvbWl6ZSB0aGVpciBhdmF0YXIgY2hhcmFjdGVyIHdpdGggdGhlIGJlc3QgdmlydHVhbCBnb29kcyBsaWtlIGhhdHMsIHNoaXJ0cyBhbmQgZ2VhcjsgYW5kIHBsYXkgZnJlZSBvbmxpbmUgcGlyYXRlIGdhbWVzIHdpdGggdGhlaXIgZnJpZW5kcyB3aGlsZSBhbHNvIG1lZXRpbmcgbmV3IGZyaWVuZHMuIFdoZXRoZXIgeW91IGFyZSBpbnRlcmVzdGVkIGluIFBpcmF0ZSBnYW1lcywgQWN0aW9uIGdhbWVzLCBBZHZlbnR1cmUgZ2FtZXMsIEZ1bm55IGdhbWVzLCBDYXIgZ2FtZXMsIG9yIGV2ZW4gVHljb29uIGdhbWVzLCBjb3VudCBvbiBSb2Jsb3ggdG8gZGVsaXZlciB0aGUgYmVzdCBmcmVlIG9ubGluZSBnYW1lcyBmb3IgeW91IHRvIHBsYXkuIENoZWNrIG91dCBvdXIgQnVpbGRlcnMgQ2x1YiBtZW1iZXJzaGlwIHNlcnZpY2UgZm9yIGFuIGVuaGFuY2VkIGJ1aWxkaW5nIGdhbWVzIGV4cGVyaWVuY2UuIAxQaXJhdGUgR2FtZXMGUGlyYXRlZAIHD2QWAmYPFQYACWFkdmVudHVyZQlhZHZlbnR1cmXVBVJvYmxveCBpcyBwcm91ZCB0byBvZmZlciB0aGUgd2ViJiMzOTtzIGJlc3QgY29sbGVjdGlvbiBvZiBhZHZlbnR1cmUgZ2FtZXMsIG90aGVyIGZyZWUgb25saW5lIGdhbWVzIGFuZCAzRCB2aXJ0dWFsIHdvcmxkcy4gV2UgYXJlIGNvbW1pdHRlZCB0byBtYWtpbmcgc3VyZSB0aGF0IGFsbCBvZiBvdXIgZnJlZSBnYW1lcyBhcmUgZnVuIGFuZCBzYWZlLiBSb2Jsb3ggbWVtYmVycyBjYW4gY3JlYXRlIHRoZWlyIG93biB2aXJ0dWFsIHdvcmxkIG9ubGluZSBnYW1lczsgY3VzdG9taXplIHRoZWlyIGF2YXRhciBjaGFyYWN0ZXIgd2l0aCB0aGUgYmVzdCB2aXJ0dWFsIGdvb2RzIGxpa2UgaGF0cywgc2hpcnRzIGFuZCBnZWFyOyBhbmQgcGxheSBmcmVlIG9ubGluZSBhZHZlbnR1cmUgZ2FtZXMgd2l0aCB0aGVpciBmcmllbmRzIHdoaWxlIGFsc28gbWVldGluZyBuZXcgZnJpZW5kcy4gV2hldGhlciB5b3UgYXJlIGludGVyZXN0ZWQgaW4gQWR2ZW50dXJlIGdhbWVzLCBBY3Rpb24gZ2FtZXMsIEFkdmVudHVyZSBnYW1lcywgRnVubnkgZ2FtZXMsIENhciBnYW1lcywgb3IgZXZlbiBUeWNvb24gZ2FtZXMsIGNvdW50IG9uIFJvYmxveCB0byBkZWxpdmVyIHRoZSBiZXN0IGZyZWUgb25saW5lIGdhbWVzIGZvciB5b3UgdG8gcGxheS4gQ2hlY2sgb3V0IG91ciBCdWlsZGVycyBDbHViIG1lbWJlcnNoaXAgc2VydmljZSBmb3IgYW4gZW5oYW5jZWQgYnVpbGRpbmcgZ2FtZXMgZXhwZXJpZW5jZS4gD0FkdmVudHVyZSBHYW1lcwlBZHZlbnR1cmVkAggPZBYCZg8VBgAGc3BvcnRzBnNwb3J0c8wFUm9ibG94IGlzIHByb3VkIHRvIG9mZmVyIHRoZSB3ZWImIzM5O3MgYmVzdCBjb2xsZWN0aW9uIG9mIHNwb3J0cyBnYW1lcywgb3RoZXIgZnJlZSBvbmxpbmUgZ2FtZXMgYW5kIDNEIHZpcnR1YWwgd29ybGRzLiBXZSBhcmUgY29tbWl0dGVkIHRvIG1ha2luZyBzdXJlIHRoYXQgYWxsIG9mIG91ciBmcmVlIGdhbWVzIGFyZSBmdW4gYW5kIHNhZmUuIFJvYmxveCBtZW1iZXJzIGNhbiBjcmVhdGUgdGhlaXIgb3duIHZpcnR1YWwgd29ybGQgb25saW5lIGdhbWVzOyBjdXN0b21pemUgdGhlaXIgYXZhdGFyIGNoYXJhY3RlciB3aXRoIHRoZSBiZXN0IHZpcnR1YWwgZ29vZHMgbGlrZSBoYXRzLCBzaGlydHMgYW5kIGdlYXI7IGFuZCBwbGF5IGZyZWUgb25saW5lIHNwb3J0cyBnYW1lcyB3aXRoIHRoZWlyIGZyaWVuZHMgd2hpbGUgYWxzbyBtZWV0aW5nIG5ldyBmcmllbmRzLiBXaGV0aGVyIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiBTcG9ydHMgZ2FtZXMsIEFjdGlvbiBnYW1lcywgQWR2ZW50dXJlIGdhbWVzLCBGdW5ueSBnYW1lcywgQ2FyIGdhbWVzLCBvciBldmVuIFR5Y29vbiBnYW1lcywgY291bnQgb24gUm9ibG94IHRvIGRlbGl2ZXIgdGhlIGJlc3QgZnJlZSBvbmxpbmUgZ2FtZXMgZm9yIHlvdSB0byBwbGF5LiBDaGVjayBvdXQgb3VyIEJ1aWxkZXJzIENsdWIgbWVtYmVyc2hpcCBzZXJ2aWNlIGZvciBhbiBlbmhhbmNlZCBidWlsZGluZyBnYW1lcyBleHBlcmllbmNlLiAMU3BvcnRzIEdhbWVzBlNwb3J0c2QCCQ9kFgJmDxUGAAVmdW5ueQVmdW5ueckFUm9ibG94IGlzIHByb3VkIHRvIG9mZmVyIHRoZSB3ZWImIzM5O3MgYmVzdCBjb2xsZWN0aW9uIG9mIGZ1bm55IGdhbWVzLCBvdGhlciBmcmVlIG9ubGluZSBnYW1lcyBhbmQgM0QgdmlydHVhbCB3b3JsZHMuIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFraW5nIHN1cmUgdGhhdCBhbGwgb2Ygb3VyIGZyZWUgZ2FtZXMgYXJlIGZ1biBhbmQgc2FmZS4gUm9ibG94IG1lbWJlcnMgY2FuIGNyZWF0ZSB0aGVpciBvd24gdmlydHVhbCB3b3JsZCBvbmxpbmUgZ2FtZXM7IGN1c3RvbWl6ZSB0aGVpciBhdmF0YXIgY2hhcmFjdGVyIHdpdGggdGhlIGJlc3QgdmlydHVhbCBnb29kcyBsaWtlIGhhdHMsIHNoaXJ0cyBhbmQgZ2VhcjsgYW5kIHBsYXkgZnJlZSBvbmxpbmUgZnVubnkgZ2FtZXMgd2l0aCB0aGVpciBmcmllbmRzIHdoaWxlIGFsc28gbWVldGluZyBuZXcgZnJpZW5kcy4gV2hldGhlciB5b3UgYXJlIGludGVyZXN0ZWQgaW4gRnVubnkgZ2FtZXMsIEFjdGlvbiBnYW1lcywgQWR2ZW50dXJlIGdhbWVzLCBGdW5ueSBnYW1lcywgQ2FyIGdhbWVzLCBvciBldmVuIFR5Y29vbiBnYW1lcywgY291bnQgb24gUm9ibG94IHRvIGRlbGl2ZXIgdGhlIGJlc3QgZnJlZSBvbmxpbmUgZ2FtZXMgZm9yIHlvdSB0byBwbGF5LiBDaGVjayBvdXQgb3VyIEJ1aWxkZXJzIENsdWIgbWVtYmVyc2hpcCBzZXJ2aWNlIGZvciBhbiBlbmhhbmNlZCBidWlsZGluZyBnYW1lcyBleHBlcmllbmNlLiALRnVubnkgR2FtZXMFRnVubnlkAgoPZBYCZg8VBgAQd2lsZC13ZXN0LWNvd2JveRB3aWxkLXdlc3QtY293Ym956gVSb2Jsb3ggaXMgcHJvdWQgdG8gb2ZmZXIgdGhlIHdlYiYjMzk7cyBiZXN0IGNvbGxlY3Rpb24gb2Ygd2lsZCB3ZXN0IGNvd2JveSBnYW1lcywgb3RoZXIgZnJlZSBvbmxpbmUgZ2FtZXMgYW5kIDNEIHZpcnR1YWwgd29ybGRzLiBXZSBhcmUgY29tbWl0dGVkIHRvIG1ha2luZyBzdXJlIHRoYXQgYWxsIG9mIG91ciBmcmVlIGdhbWVzIGFyZSBmdW4gYW5kIHNhZmUuIFJvYmxveCBtZW1iZXJzIGNhbiBjcmVhdGUgdGhlaXIgb3duIHZpcnR1YWwgd29ybGQgb25saW5lIGdhbWVzOyBjdXN0b21pemUgdGhlaXIgYXZhdGFyIGNoYXJhY3RlciB3aXRoIHRoZSBiZXN0IHZpcnR1YWwgZ29vZHMgbGlrZSBoYXRzLCBzaGlydHMgYW5kIGdlYXI7IGFuZCBwbGF5IGZyZWUgb25saW5lIHdpbGQgd2VzdCBjb3dib3kgZ2FtZXMgd2l0aCB0aGVpciBmcmllbmRzIHdoaWxlIGFsc28gbWVldGluZyBuZXcgZnJpZW5kcy4gV2hldGhlciB5b3UgYXJlIGludGVyZXN0ZWQgaW4gV2lsZCBXZXN0IENvd2JveSBnYW1lcywgQWN0aW9uIGdhbWVzLCBBZHZlbnR1cmUgZ2FtZXMsIEZ1bm55IGdhbWVzLCBDYXIgZ2FtZXMsIG9yIGV2ZW4gVHljb29uIGdhbWVzLCBjb3VudCBvbiBSb2Jsb3ggdG8gZGVsaXZlciB0aGUgYmVzdCBmcmVlIG9ubGluZSBnYW1lcyBmb3IgeW91IHRvIHBsYXkuIENoZWNrIG91dCBvdXIgQnVpbGRlcnMgQ2x1YiBtZW1iZXJzaGlwIHNlcnZpY2UgZm9yIGFuIGVuaGFuY2VkIGJ1aWxkaW5nIGdhbWVzIGV4cGVyaWVuY2UuIA9XaWxkIFdlc3QgR2FtZXMJV2lsZCBXZXN0ZAILD2QWAmYPFQYAA3dhcgN3YXLDBVJvYmxveCBpcyBwcm91ZCB0byBvZmZlciB0aGUgd2ViJiMzOTtzIGJlc3QgY29sbGVjdGlvbiBvZiB3YXIgZ2FtZXMsIG90aGVyIGZyZWUgb25saW5lIGdhbWVzIGFuZCAzRCB2aXJ0dWFsIHdvcmxkcy4gV2UgYXJlIGNvbW1pdHRlZCB0byBtYWtpbmcgc3VyZSB0aGF0IGFsbCBvZiBvdXIgZnJlZSBnYW1lcyBhcmUgZnVuIGFuZCBzYWZlLiBSb2Jsb3ggbWVtYmVycyBjYW4gY3JlYXRlIHRoZWlyIG93biB2aXJ0dWFsIHdvcmxkIG9ubGluZSBnYW1lczsgY3VzdG9taXplIHRoZWlyIGF2YXRhciBjaGFyYWN0ZXIgd2l0aCB0aGUgYmVzdCB2aXJ0dWFsIGdvb2RzIGxpa2UgaGF0cywgc2hpcnRzIGFuZCBnZWFyOyBhbmQgcGxheSBmcmVlIG9ubGluZSB3YXIgZ2FtZXMgd2l0aCB0aGVpciBmcmllbmRzIHdoaWxlIGFsc28gbWVldGluZyBuZXcgZnJpZW5kcy4gV2hldGhlciB5b3UgYXJlIGludGVyZXN0ZWQgaW4gV2FyIGdhbWVzLCBBY3Rpb24gZ2FtZXMsIEFkdmVudHVyZSBnYW1lcywgRnVubnkgZ2FtZXMsIENhciBnYW1lcywgb3IgZXZlbiBUeWNvb24gZ2FtZXMsIGNvdW50IG9uIFJvYmxveCB0byBkZWxpdmVyIHRoZSBiZXN0IGZyZWUgb25saW5lIGdhbWVzIGZvciB5b3UgdG8gcGxheS4gQ2hlY2sgb3V0IG91ciBCdWlsZGVycyBDbHViIG1lbWJlcnNoaXAgc2VydmljZSBmb3IgYW4gZW5oYW5jZWQgYnVpbGRpbmcgZ2FtZXMgZXhwZXJpZW5jZS4gCVdhciBHYW1lcwNXYXJkAgwPZBYCZg8VBgAJc2thdGVwYXJrCXNrYXRlcGFyawAQU2thdGUgUGFyayBHYW1lcwpTa2F0ZSBQYXJrZAIND2QWAmYPFQYADWdhbWV0dXRvcmlhbHMNZ2FtZXR1dG9yaWFsc7oCR2FtZSBUdXRvcmlhbHMgLSBMZWFybiBtb3JlIGFib3V0IFJPQkxPWCB2aXJ0dWFsIHdvcmxkIGFuZCBvbmxpbmUgZ2FtZXMgdGhyb3VnaCB1c2VmdWwgZ2FtZXMgd2l0aCBnYW1lIHR1dG9yaWFscy4gUk9CTE9YIGFsc28gcHJvdmlkZXMgZ2FtZSBkZXNpZ24gc29mdHdhcmUgdG8gbGV0IHVzZXJzIGRlc2lnbiBhbmQgbWFrZSBhIDNEIGdhbWUuIFBsYXkgUk9CTE9YIGFuZCB0aGUgbWlsbGlvbnMgb2YgZnJlZSB2aXJ0dWFsIHdvcmxkIGFuZCBvbmxpbmUgZ2FtZXMgbm93LiBJdCYjMzk7cyBhbHdheXMgZnJlZSB0byBwbGF5IGdhbWVzIGF0IFJPQkxPWCEOVHV0b3JpYWwgR2FtZXMIVHV0b3JpYWxkGAwFImN0bDAwJENsaWVudEluc3RhbGxlciRNdWx0aVZpZXdSdW4PD2QCAWQFGGN0bDAwJEFkbWluUGFuZUxvZ2luVmlldw8PZAIBZAVFY3RsMDAkQmFubmVyQWxlcnRzTG9naW5WaWV3JEJhbm5lckFsZXJ0c19BdXRoZW50aWNhdGVkJHJieEJhbm5lckFsZXJ0Dw9kAgFkBRtjdGwwMCRCYW5uZXJBbGVydHNMb2dpblZpZXcPD2QCAWQFI2N0bDAwJHJieEdvb2dsZUFuYWx5dGljcyRNdWx0aVZpZXcxDw9kZmQFLGN0bDAwJGNwaFJvYmxveCRHYW1lc1BhZ2VBZCRBc3luY0FkTXVsdGlWaWV3Dw9kAgFkBRljdGwwMCRNZW51JGhsTXlSb2Jsb3hMaW5rDw9kAgFkBS5jdGwwMCRjcGhCYW5uZXJBZCRHYW1lc0Jhbm5lciRBc3luY0FkTXVsdGlWaWV3Dw9kAgFkBSNjdGwwMCRMZWZ0R3V0dGVyQWQkQXN5bmNBZE11bHRpVmlldw8PZAIBZAUcY3RsMDAkQmFubmVyT3B0aW9uc0xvZ2luVmlldw8PZAIBZAUkY3RsMDAkUmlnaHRHdXR0ZXJBZCRBc3luY0FkTXVsdGlWaWV3Dw9kAgFkBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAgVMY3RsMDAkQmFubmVyT3B0aW9uc0xvZ2luVmlldyRCYW5uZXJPcHRpb25zX0F1dGhlbnRpY2F0ZWQkbHNMb2dpblN0YXR1cyRjdGwwMQVMY3RsMDAkQmFubmVyT3B0aW9uc0xvZ2luVmlldyRCYW5uZXJPcHRpb25zX0F1dGhlbnRpY2F0ZWQkbHNMb2dpblN0YXR1cyRjdGwwMzGAKxo+2wZYXYTSO/TOa//+Sn6E" />
         </div>
         <script type="text/javascript">
            //<![CDATA[
            var theForm = document.forms['aspnetForm'];
            if (!theForm) {
                theForm = document.aspnetForm;
            }
            function __doPostBack(eventTarget, eventArgument) {
                if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                    theForm.__EVENTTARGET.value = eventTarget;
                    theForm.__EVENTARGUMENT.value = eventArgument;
                    theForm.submit();
                }
            }
            //]]>
         </script>
         <script src="/WebResource.axd?d=h6JGmI6BQZ1O6dIyg8tR4IHvRle_W93uf4lq1t4EqaDE50xn2BLl08HF7RaibNd42F35_b4LDdnfmA2j9Hxw5dSCfJ81&amp;t=634357780026800663" type="text/javascript"></script>
         <script type="text/javascript">
            //<![CDATA[
            function initClientProps() { Roblox.Client._CLSID = "76D50904-6780-4c8b-8986-1A7EE0B1716D";Roblox.Client._installHost = "setup.roblox.com";Roblox.Client.ImplementsProxy = true;Roblox.Client._silentModeEnabled = true;}function checkRobloxInstall(){return RobloxLaunch.CheckRobloxInstall("/Install/Download.aspx");}//]]>
         </script>
         <script src="/ScriptResource.axd?d=NcSGe7ZKm3UiVPKd1cgtXM4_TqGTDLKHPRFtnlaNoQ3GzLC8MWOYe-DhRBtLj1kCIGQgYy-9gH0b3YklgIKtlSWc4gGLy8JMYtGWBxV8BRgGXOul0L-eZDpJQ2lLX0gFP7GtVeNrANpmMlQO45yD7wX6GS1fiDb8pXf3lS4gFRGKrsqDiamEKyT2S5nP5xa3us4Sv4bXrEIXuScslk_pzC-4L2AL4h2sgLJ3NY8EJj0P0Qlg_WO4dverXU4VqBJeIh5aHV7EelXrJcARpACvMoSoTbick5DKxL71ucmzM2JA9mhPriYp213HhWTOXQFAHCRLw2KG4f8YvCf8nIkfqJowoXo-m4BlJhd5AzEkojIDdYyvXtm32rAjWuZLRL5rs-t0L4wz_qg7BuSfvwfomRGH2JrVTusZnmdUyS6SK5Zm0pSPQwt04gk0I7-IxXmjBWvGTfNIhh-ue12JBx7d7BlUol5mhGbUyIw-CyoI-TEyr2I9RjVs2JQv5P9Lce53261GgexCLA-udDxDce-4q44Gq9JtVbPpSM5-NCSayF-wmFw2y7nT29OH6Lq3KQMbVoZyv1yuoHdfXp86CxWVLTUxq--nX9DbXD6lGFEkupJQOgxmGFQv0GrNJmoZD7xJWi-ema3Agdk1z4kAEtAKkkDJS45hYMZ0Ea0zwz3hxTL1KSQZRFPVkNmJ7306Ed7WvB3M-w2" type="text/javascript"></script>
         <script src="/ScriptResource.axd?d=-4ghjJR2QuHz7guQI62VU3hl-7XIVlEBgtDJGXAqk0WJezQrL6UxJHggGkTViUmIGKau1VxGDAzPzY7Nexs0Ej7nF_Nlk6LZ47Gexl6iekGM5n-t51eH0fzEdl3K7Qv026OJ4b4sCgz11JNF9SUmGP4jRJ3LovBQAklt9cDd5zhdCo0r0" type="text/javascript"></script>
         <script src="/ScriptResource.axd?d=ASNnDdrDwm8Hd8vsy4odrOUZo-Bh2Wa6i8-h6dcfO7JiQaIfT7VXHNdOHnBY3pH6TbjF8m_17KNspUUK8uodCvHTTzU0VwhR53RDTrlWZvENH6-cYwHl8qqmr-seENajNHQQI_Qe-NopT6fLoV3by4j2Ng01" type="text/javascript"></script>
         <script src="/ScriptResource.axd?d=w_8VGAXCc8iFoUDr9qB09LgGAHgj9-lQth_Za3zrlIF1zMixUYtp_RA4wscIozDmMZyUAzesU23EmdItBQ_UrRoKCtbQBE8T0rQRetgP0swSiJeTyoXOJg-L3ql3h2bk3IP_JmbuOkGMun3E8t-ZzJ_vGeY1" type="text/javascript"></script>
         <script src="js/jquery.jsoncookie.js" type="text/javascript"></script>
         <script src="js/jquery-extensions.js" type="text/javascript"></script>
         <script src="js/jquery.cookie.js" type="text/javascript"></script>
         <div>
            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWAgKW4dKKCAKGz9OlCwdCqObg0vWj2ndhuTPtNpoRg17q" />
         </div>
         <div id="fb-root"></div>
         <script type="text/javascript">
            //<![CDATA[
            Sys.WebForms.PageRequestManager._initialize('ctl00$ScriptManager', 'aspnetForm', [], [], [], 90, 'ctl00');
            //]]>
         </script>
         <!-- Used for execution that must happen before page load -->
         <script type="text/javascript">
            $(function() {
                $('.tooltip').tipsy();
                $('.tooltip-top').tipsy({ gravity: 's' });
                $('.tooltip-right').tipsy({ gravity: 'w' });
                $('.tooltip-left').tipsy({ gravity: 'e' });
            });
         </script>
         <div id="MasterContainer">
            <script type="text/javascript">
               $(function(){

                   KontagentListener.restUrl = window.location.protocol + "//" + "api.geo.kontagent.net/api/v1/";
                   KontagentListener.apiKey = "24d4ec2631e044f0b0050125ee2f8046";
                   KontagentListener.init();

                   RobloxEventManager.initialize(true);
                   RobloxEventManager.triggerEvent('rbx_evt_pv');

               });
            </script>
            <div id="InstallationInstructions"  class="modalPopup blueAndWhite" style="display: none;overflow:hidden;width:380px;" >
               <div style="padding: 0px 0px 10px 0px; text-align:center;">
                  <div class="titleBar">
                     Installation Instructions
                  </div>
                  <div style="text-align: left; width: 350px; margin: 0px auto; font-size: 15px; margin-top: 10px">
                     1) A window will open. Click <b>Run</b>.<br />&nbsp;&nbsp;&nbsp;&nbsp;(If there is no "Run" button, click Open).<br />
                     2) Click <b>Run</b> and start playing ROBLOX!<br />
                     <br />
                  </div>
                  <img id="ie7_install_img" src="" alt="Installation Instructions"/><br /><br />
                  <div id="CancelButton" onclick="return Roblox.Client._onCancel();" class="Button" style="width: 80px; margin: 0px auto;">Close Window</div>
               </div>
            </div>
            <iframe id="downloadInstallerIFrame" src="" style="visibility:hidden; height: 0px; width:1px;">
            </iframe>
            <div id="pluginObjDiv" style="height: 0px; width:1px;visibility:hidden;"></div>
            <div ID="PlaceLauncherStatusPanel" style="display: none; width: 300px;">
               <div class="modalPopup blueAndWhite PlaceLauncherModal" style="min-height: 160px;">
                  <div id="Spinner" style="margin:0 1em 1em 0; padding:20px 0px;">
                     <img src="/images/ProgressIndicator3.gif" alt="Progress" />
                  </div>
                  <div id="status" style="min-height:40px; text-align:center; margin: 5px 20px;">
                     <div id="Starting" class="PlaceLauncherStatus" style="display:block">
                        Starting Roblox...
                     </div>
                     <div id="Waiting" class="PlaceLauncherStatus">Connecting to Players...</div>
                     <div id="StatusBackBuffer" class="PlaceLauncherStatus PlaceLauncherStatusBackBuffer"></div>
                  </div>
                  <div style="text-align: center; margin-top: 1em;">
                     <input type="button" class="Button CancelPlaceLauncherButton" value="Cancel" />
                  </div>
               </div>
            </div>
            <!-- Begin chat bar -->
            <div style="width: 100%">
               <!-- Friends dock / chat bar -->
               <div id="friend_dock_chattemplate" style="display:none;">
                  <div id="CHATUSERID_friend_dock_chatbox" userid="CHATUSERID" class="friend_dock_chatbox">
                     <div class="friend_dock_chatbox_titlebar blinkoffheader" userid="CHATUSERID">
                        <div class="friend_dock_chatbox_username">
                           <a style="color:White;" class="friend_dock_chatbox_username_display" href="/user.aspx?id=CHATUSERID">CHATUSERNAME</a>
                           <a class="friend_dock_chatbox_username_abuse" style="color:White;font-size: 9px;  line-height: 14px; cursor: pointer" alt="Report Abuse" href="#" onclick="ReportAbuse(CHATUSERID); return false;">(Report)</a>
                        </div>
                        <div class="friend_dock_chatbox_closebutton">
                           <a href="#" style="color:White;" onclick="ChatBar.CloseChat($(this).parents('.friend_dock_chatbox').filter(':first'));return false;">-</a>
                        </div>
                     </div>
                     <div class="friend_dock_chatbox_currentlocation" style="margin: 10px; font-size: 12px; height: 18px">
                     </div>
                     <div id="CHATUSERID_friend_dock_chatbox_chat" class="friend_dock_chatbox_chat">
                     </div>
                     <textarea class="friend_dock_chatbox_entry" maxlength="255"></textarea>
                  </div>
               </div>
               <div id="friend_dock_friendtemplate" style="display:none;">
                  <div id="UID_CURRTAB_friend" userid="UID" username="USERNAME" class="friend_dock_friend">
                     <div id="UID_CURRTAB_onlinestatus" class="friend_dock_onlinestatus"></div>
                     <div id="UID_CURRTAB_offlinestatus" class="friend_dock_offlinestatus"></div>
                     <div id="UID_CURRTAB_dropdown" class="friendBarDropDown" userid="UID" username="USERNAME" style="display: none">
                        <div id="UID_CURRTAB_dropdownbutton" class="friend_dropdownbutton20"></div>
                        <div id="UID_CURRTAB_dropdownlist" class="friendBarDropDownList">
                           <ul>
                              <li onclick="ChatBar.ToggleChat('UID', 'USERNAME');" startchattingdisplay>
                                 <div>Start chatting</div>
                              </li>
                              <li onclick="window.location.href = '/user.aspx?id=UID';">
                                 <div>View Profile</div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/cross.png" alt="" class="RemoveActiveChat" onclick="ChatBar.RemoveActiveChat(this);return false;"/>
                     <div class="friend_dock_newmessage" style="display:none;"></div>
                     <img thumbnail_holder alt="" onclick="ChatBar.ToggleChat('UID', 'USERNAME'); return false;" width="48" height="48" class="ActiveChatThumb" />
                     <div class="friend_dock_username"><span class="friend_dock_username_href">USERNAME</span></div>
                  </div>
               </div>
               <div id="friend_dock_chatholder">
               </div>
               <div id='friend_dock_minimized_container' style= >
                  <div style="float:right">
                     <a href="#" class="tab_white19h">
                     <span style="color: #03F" onclick="ChatBar.ShowFriends();return false;">
                     Chat
                     <img class="new_messages_master_indicator" style="display:none; border: none; margin-right: 5px" src="/images/newmessage.png" />
                     <img src="/images/FriendsBar/openChatBar.png" style="border: none" />
                     </span>
                     </a>
                  </div>
               </div>
               <div id="friend_dock_container" style=display:none; >
                  <div id="friend_dock_titlebar">
                     <div style="float:left;">
                        <a id="bestFriendsTab" style="text-decoration: none" class="tab_white19h" href="#" onclick="ChatBar.TogglePanel('bestFriendsTab_dock_thumbnails');return false;"><span>Best Friends</span></a>
                        <a id="friendsTab" style="text-decoration: none" class="tab_white19h" href="#" onclick="ChatBar.TogglePanel('friendsTab_dock_thumbnails');return false;"><span>Online Friends</span></a>
                        <a id="recentsTab" style="text-decoration: none" class="tab_white19h" href="#" onclick="ChatBar.TogglePanel('recentsTab_dock_thumbnails');return false;"><span>Recent</span></a>
                        <a id="chatsTab" style="text-decoration: none" class="tab_white19h" href="#" onclick="ChatBar.TogglePanel('chatsTab_dock_thumbnails_chat');return false;"><span>Chats</span></a>
                        <img class="new_messages_master_indicator" style="display:none; vertical-align: middle" src="/images/newmessage.png" alt="" />
                     </div>
                     <div id="partycontainer" style="display:none;margin-left:10px;float:right;">
                     </div>
                     <div style="float:right;">
                        <div class="friend_dock_chatsettings" style="display:none">
                           <div style="padding:10px 10px 10px 10px">
                              <div class="chat_settings_group_header">Who can chat with me:</div>
                              <input type="radio" id="chat_settings_all" name="rdoOnline" checked = checked /> <b>All Users</b><br />
                              <input type="radio" id="chat_settings_friends" name="rdoOnline"  /> <b>Friends</b><br />
                              <input type="radio" id="chat_settings_bestfriends" name="rdoOnline"  /> <b>Best Friends</b><br />
                              <input type="radio" id="chat_settings_noone" name="rdoOnline"  /> <b>No One</b><br /><br />
                              <hr />
                              <div class="chat_settings_group_header">Chat Notifications:</div>
                              <input type="radio" id="chat_settings_soundon" name="rdoNotifications" checked = checked /> <b>All</b><br />
                              <input type="radio" id="chat_settings_soundoff" name="rdoNotifications"  /> <b>None</b><br />
                              <div style="text-align:center; margin-top: 5px;">
                                 <input type="button" onclick="ChatBar.ApplySettings();$('.friend_dock_chatsettings').hide();" value="Save">
                              </div>
                           </div>
                        </div>
                        <div class="tab_white19h">
                           <span>
                           <b><a onclick="$('.friend_dock_chatsettings').toggle(); return false" href="#">Settings</a></b>&nbsp;&nbsp;&nbsp;
                           <img src="/images/friendsbar/closeChatBar.png" onclick="ChatBar.HideFriends();return false;" style="border: none; cursor: pointer" />
                           </span>
                        </div>
                     </div>
                  </div>
                  <div id="friend_dock_thumb_container">
                     <!-- Container for the dynamically generated thumbs for friends -->
                     <div id="friendsTab_dock_thumbnails" style="display: none">
                        <div id="friendsTab_dock_thumbnails_empty" style="display:none; font-size:12px; margin-top:40px;">No results found.  Find some friends <a href="/Browse.aspx">here</a>.</div>
                     </div>
                     <!-- Container for the dynamically generated thumbs for best friends -->
                     <div id="bestFriendsTab_dock_thumbnails" style="float:left; display: none">
                        <div id="bestFriendsTab_dock_thumbnails_empty" style="display:none; font-size:12px; margin-top:40px;">No results? Start off by <a href="/my/editfriends.aspx">adding some Best Friends.</a></div>
                     </div>
                     <!-- Container for the dynamically generated thumbs for recents -->
                     <div id="recentsTab_dock_thumbnails" style="float:left; display: none">
                        <div id="recentsTab_dock_thumbnails_empty" style="display:none; font-size:12px; margin-top:40px;">You have not had any recent interactions.</div>
                     </div>
                     <!-- Container for the dynamically generated thumbs for chats -->
                     <div id="chatsTab_dock_thumbnails_chat" style="float:left; display: none">
                        <div id="chatsTab_dock_thumbnails_chat_empty" style="display:none; font-size:12px; margin-top:40px;">You are not currently chatting with anyone.</div>
                     </div>
                  </div>
               </div>
               <div id="chatfix"></div>
               <div id="jPlayerDiv"></div>
               <style>
                  .
                  {
                  background-color: #FF8A00;
                  }
               </style>
               <script type="text/javascript" language="javascript">
                  ChatBar.FriendsEnabled = 'True';
                  ChatBar.BestFriendsEnabled = 'True';
                  ChatBar.PartyEnabled = 'False';
                  ChatBar.MyUserName = "Cubut";
                  ChatBar.MaxChatWindows = 4;
                  ChatBar.ChatPollInterval = 2000;
                  ChatBar.IdleChatPollInterval = ChatBar.ChatPollInterval * ChatBar.PollIntervalFactorForIdle;
                  ChatBar.FriendsPollInterval = 40000;
                  ChatBar.BestFriendsPollInterval = 30000;
                  ChatBar.RecentsPollInterval = 32000;
                  ChatBar.ChatReceivedSoundFile = "/chat/sound/chatsound.mp3";
                  ChatBar.Cookie = new RobloxJSONCookie("ChatCookie");
                  ChatBar.ChatNotificationsSetting = 'All';

                  $(function()
                  {
                      try
                      {
                          ChatBar.OnPageLoad();
                      }
                      catch (x) { }
                  });
               </script>
               <script type="text/javascript" src="/js/jPlayer/1.2.0/jquery.jplayer.min.js"></script>
            </div>
            <!-- End chat bar -->
            <div id="Container">
<div id="HeaderContainer">
   <div id="AdvertisingLeaderboard">
      <iframe id="ctl00_cphBannerAd_GamesBanner_AsyncUserAdIFrame" allowtransparency="true" scrolling="no" src="/user-sponsorship/1" data-ruffle-polyfilled="" width="728" height="102" frameborder="0"></iframe>
   </div>
   <div id="Header">
      <div id="Banner">
         <div id="Options">
            <div id="Authentication">
               <span id="AuthenticationBannerSpan">
               <span id="ctl00_BannerOptionsLoginView_BannerOptions_Authenticated_lnLoginName">Hi ` + Username + `</span>
               <span class="rbx2hide">| </span>
               <a id="ctl00_BannerOptionsLoginView_BannerOptions_Authenticated_lsLoginStatus" href="javascript:__doPostBack('ctl00$BannerOptionsLoginView$BannerOptions_Authenticated$lsLoginStatus$ctl00','')">Logout</a>
               </span>
            </div>
         </div>
         <a id="Logo" href="/Default.aspx" style="cursor: pointer; border: none;"></a>
         <div id="Alerts">
            <table style="width:100%;height:100%">
               <tbody>
                  <tr>
                     <td valign="middle">
                        <div id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_AlertSpacePanel">
                           <div class="AlertSpace">
                              <div class="MessageAlert">
                                 <div class="icons message_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_MessageAlertCaptionHyperLink" class="MessageAlertCaption tooltip-left" title="Inbox" href="My/Inbox.aspx">` + MessagesCount["count"] + `</a>
                              </div>
                              <div class="FriendsAlert">
                                 <div class="icons friends_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_FriendsAlertCaptionHyperLink" class="FriendsAlertCaption tooltip-right" title="Friend Requests" href="My/EditFriends.aspx">` + FriendCount["count"] + `</a>
                              </div>
                              <div class="RobuxAlert">
                                 <div class="icons robux_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_RobuxAlertCaptionHyperLink" class="RobuxAlertCaption tooltip-left" title="ROBUX" href="My/AccountBalance.aspx">` + RobuxCount["robux"] + `</a>
                              </div>
                              <div class="TicketsAlert">
                                 <div class="icons tickets_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_TicketsAlertCaptionHyperLink" class="TicketsAlertCaption tooltip-right" title="Tickets" href="My/AccountBalance.aspx">0</a>
                              </div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <script type="text/javascript" language="javascript">
         function toggleDropDownNav()
         {
             if ($(".dropdownnavcontainer:visible").size() > 0)
             {
                 $(".dropdownnavcontainer").hide();
                 $("#gamesMenuToggle").css("background-position", "0 0");
             }
             else
             {
                 $(".dropdownnavcontainer").show();
                 $("#gamesMenuToggle").css("background-position", "0 -6px");
             }
         }
      </script>
      <div class="Navigation">
         <div class="dropdownnavcontainer">
            <div class="dropdownmainnav" style="z-index:1023;">
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/all-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Classic.png">
                  <a href="/all-games" title="All" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">All</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/town-and-city-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/City.png">
                  <a href="/town-and-city-games" title="Town and City" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Town and City</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/medieval-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Castle.png">
                  <a href="/medieval-games" title="Fantasy" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Fantasy</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/sci-fi-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/SciFi.png">
                  <a href="/sci-fi-games" title="Sci-Fi" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Sci-Fi</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/ninja-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Ninja.png">
                  <a href="/ninja-games" title="Ninja" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Ninja</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/scary-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Cthulu.png">
                  <a href="/scary-games" title="Scary" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Scary</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/pirate-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Pirate.png">
                  <a href="/pirate-games" title="Pirate" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Pirate</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/adventure-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Adventure.png">
                  <a href="/adventure-games" title="Adventure" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Adventure</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/sports-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Sports.png">
                  <a href="/sports-games" title="Sports" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Sports</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/funny-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/LOL.png">
                  <a href="/funny-games" title="Funny" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Funny</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/wild-west-cowboy-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/WildWest.png">
                  <a href="/wild-west-cowboy-games" title="Wild West" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Wild West</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/war-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/ModernMilitary.png">
                  <a href="/war-games" title="War" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">War</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/skatepark-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Skatepark.png">
                  <a href="/skatepark-games" title="Skate Park" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Skate Park</a>
               </div>
               <div style="float: left; width: 50%; text-align: left;" onclick="window.location = '/gametutorials-games'">
                  <img src="https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/images/GenreIconsInverted/Tutorial.gif">
                  <a href="/gametutorials-games" title="Tutorial" style="padding: 0; margin: 0 2px 0 0; border: none; font-size: 15px;">Tutorial</a>
               </div>
            </div>
            <div class="dropdownmainnav" style="width:145px;border-left:0px;z-index:1023">
               <div onclick="window.location = '/games.aspx'"><a href="/games.aspx" style="font-size:15px;"><b>Most Popular</b></a><br></div>
               <div onclick="window.location = '/games.aspx?m=TopFavorites'"><a href="/games.aspx?t=PastWeek&amp;m=TopFavorites" style="font-size:15px;">Top Favorites</a><br></div>
               <div onclick="window.location = '/games.aspx?m=Featured'"><a href="/games.aspx?m=Featured" style="font-size:15px;">Featured Games</a><br></div>
               <div onclick="window.location = '/Catalog.aspx?m=TopFavorites&amp;c=9&amp;t=AllTime&amp;d=All&amp;q='"><a href="/Catalog.aspx?m=TopFavorites&amp;c=9&amp;t=AllTime&amp;d=All&amp;q=" style="font-size:15px;">Search Games</a></div>
            </div>
         </div>
         <ul id="ctl00_Menu_MenuUL">
            <li><a id="ctl00_Menu_hlMyRobloxLink_hlMyRoblox" href="My/Home.aspx" style="">My ROBLOX</a></li>
            <li class="gamesLink">
               <a id="hlGames" href="/Games.aspx" style="font-weight: bold" title="Games">
                  <h1>Games</h1>
               </a>
               <a id="gamesMenuToggle" onclick="toggleDropDownNav();" style="padding:0 2px;cursor:pointer;border:none;background:url(/images/topNav_arrow_white.png) no-repeat;height:6px;width:10px;display:inline-block;*margin-bottom:5px;"></a>
            </li>
            <li><a id="hlCatalog" href="/Catalog.aspx" style="" title="Catalog">Catalog</a></li>
            <li><a id="hlBrowse" href="/Browse.aspx" style="" title="People">People</a></li>
            <li><a id="hlBuildersClub" href="/Upgrades/BuildersClub.aspx" style="" title="Builders Club">Builders Club</a></li>
            <li id="ctl00_Menu_ContestsMenuTab"><a id="hlContests" href="/Contests/" style="" title="Contests">Contests</a></li>
            <li><a id="hlForum" onclick="" href="/Forum/Default.aspx" style="" title="Forum">Forum</a></li>
            <li><a id="hlNews" href="http://blog.roblox.com/" target="_blank" title="News">News</a><a id="hlNewsFeed" href="http://blog.roblox.com/?feed=rss" title="RSS" class="icons rss_icon" style="padding: 0; margin: 0 4px 0 0; border: none;"></a> <a style="display:none;" id="h1Twitter" href="http://www.twitter.com/roblox" target="_blank" title="The ROBLOX Twitter Feed" class="icons twitter_icon"></a></li>
            <li><a id="hlParents" href="/Parents.aspx" style="" title="Parents">Parents</a></li>
            <li><a id="hlHelp" href="/Help/Builderman.aspx" style="" title="Help">Help</a></li>
         </ul>
      </div>
   </div>
</div>`;
return OldHeader;
}