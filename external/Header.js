var FriendCount = "?";
var MessagesCount = "?";
var RobuxCount = "?";
var Username = "?";

(async function() {
        var FriendCount = await GetCount("https://friends.roblox.com/v1/user/friend-requests/count")["count"];
        var MessagesCount = await GetCount("https://privatemessages.roblox.com/v1/messages/unread/count")["count"];
        var UserInfo = await GetCount("https://users.roblox.com/v1/users/authenticated");
        var UserID = UserInfo["id"];
        var UserName = UserInfo["displayName"];
        var RobuxCount = await GetCount("https://economy.roblox.com/v1/users/" += UserID += "/currency")["robux"];
})();

var OldHeader = `<div id="HeaderContainer">
   <div id="AdvertisingLeaderboard">
      <iframe id="ctl00_cphBannerAd_GamesBanner_AsyncUserAdIFrame" allowtransparency="true" scrolling="no" src="/user-sponsorship/1" data-ruffle-polyfilled="" width="728" height="102" frameborder="0"></iframe>
   </div>
   <div id="Header">
      <div id="Banner">
         <div id="Options">
            <div id="Authentication">
               <span id="AuthenticationBannerSpan">
               <span id="ctl00_BannerOptionsLoginView_BannerOptions_Authenticated_lnLoginName">Hi ` += Username += ` </span>
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
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_MessageAlertCaptionHyperLink" class="MessageAlertCaption tooltip-left" title="Inbox" href="My/Inbox.aspx">` += MessagesCount += `</a>
                              </div>
                              <div class="FriendsAlert">
                                 <div class="icons friends_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_FriendsAlertCaptionHyperLink" class="FriendsAlertCaption tooltip-right" title="Friend Requests" href="My/EditFriends.aspx">` += FriendCount += `</a>
                              </div>
                              <div class="RobuxAlert">
                                 <div class="icons robux_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_RobuxAlertCaptionHyperLink" class="RobuxAlertCaption tooltip-left" title="ROBUX" href="My/AccountBalance.aspx">` += RobuxCount += `</a>
                              </div>
                              <div class="TicketsAlert">
                                 <div class="icons tickets_icon">
                                 </div>
                                 <a id="ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_TicketsAlertCaptionHyperLink" class="TicketsAlertCaption tooltip-right" title="Tickets" href="My/AccountBalance.aspx">?</a>
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
</div>
<done id="donehead">`;