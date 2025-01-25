# anti-apple-web-popup
a script that can be added to any webpage that will show a popup if the user is on an apple device

to add this to your webpage, simply put this in the `<head>` tag of your html:
```
<!-- Anti-Apple Popup -->
<script async src="https://sleepie.dev/anti-apple-alert.js"></script>
```

the script (should) automatically check the user agent for signs that the user is on an apple device, and if they are, show a popup.

the user can choose to hide the popup on the current site for 7 days by clicking the "Don't show again" button.

if you add this to your site, make sure to test how it looks by opening dev tools and running `do_anti_apple_popup()` with the script active on the page. this will bypass any conditions and manually trigger the popup
