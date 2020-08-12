    <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>


1)You have to include above link before FCM.js script Link
2)place service worker file with name (firebase-messaging-sw) on your root directory 
  for .Net you to place this file in www.root folder 
Note:background message handler must places in service worker file which is already present 
but i m writing this just for knowledge.Manifest.json is also put in root directory of folder 
said sualiheen bhai (team Lead ) reason behind it is not clear but what i understad is to support 
cross browsers this file is placed in root directory whit senderid in it .
