function do_anti_apple_popup() {
    const popup=document.createElement('div');
    popup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: #fff; box-shadow: 0px 0px 10px rgba(0,0,0,0.3); border-radius: 10px; z-index: 1000; text-align: center;">
            <h2>Hello! It appears that you are using an Apple device.</h2>
            <p>If you're using an Apple device, it's worth considering a switch to a non-Apple alternative that offers better value, ethics, and innovation.<br>
            Apple's products are notoriously overpriced, often charging premium prices for hardware that competitors provide at a fraction of the cost with better specs.<br>
            Worse yet, Apple has a long history of questionable ethical practices, from failing to pay factory workers fair wages to engaging in aggressive tactics to prevent right-to-repair movements—forcing you to rely on their expensive services.<br>
            Their stance on privacy is also not as secure as they claim, with numerous reports suggesting they prioritize profits over user data protection.<br>
            Additionally, Apple has a habit of selling years-old hardware in "new" devices, misleading consumers into believing they are getting cutting-edge technology when, in reality, they're purchasing outdated components with a fresh coat of paint.<br>
            By switching to non-Apple alternatives, you can enjoy more transparency, fair pricing, and greater control over your devices, all while supporting companies that value ethical production and user freedom.</p>
            <button id="apple-popup-dismiss-btn" style="margin-right: 10px;">OK</button>
            <button id="apple-popup-dont-show-again-btn">Don't show again</button>
        </div>
    `;
    document.body.appendChild(popup);
    document.getElementById('apple-popup-dismiss-btn').addEventListener('click',()=>{popup.remove();});

    document.getElementById('apple-popup-dont-show-again-btn').addEventListener('click',()=>{
        const date=new Date();
        date.setTime(date.getTime()+(7*24*60*60*1000));
        document.cookie=`hideApplePopup=true; expires=${date.toUTCString()}; path=/`;
        popup.remove();
    });
};

function anti_apple_popup_main() {
    if ((/Mac|iPhone|iPod|iPad/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>0)&&(!document.cookie.split("; ").find((row)=>row.startsWith("hideApplePopup"))))) {
        do_anti_apple_popup()
    };
};

document.addEventListener("DOMContentLoaded", anti_apple_popup_main);
