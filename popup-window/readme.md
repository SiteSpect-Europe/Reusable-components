# Popup window

#### Standard Variation - Regex

```html

<style>
    #destination-popup {
        cursor: pointer;
        display: flex;
        flex-direction: fow;
        position: fixed;
        right: 30px;
        bottom: 30px;
        width: 500px;
        height: 150px;
        z-index: 200;
        background: white;
        border-radius: 6px;
        -webkit-box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75);
        transition: transform 1s;
        transform: translateY(300%) translateX(50%);
    }
    #destination-popup.visible {
        transform: translateY(0px) translateX(0px);
    }
    #destination-popup .image{
        background-image: url(https://images.corendonresources.com/NL/stem-op-corendon-shopping-awards.png);
        background-position: center;
        background-size: cover;
        width: 40%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
    #destination-popup .promo {
        width: 60%;
        padding: 1em;
    }
    #destination-popup .promo p{
        font-size:12px;
        margin-bottom:10px;
    }
</style>
</head>$1
<div id="destination-popup">
    <div class="image"></div>
    <div class="promo">
        <div class="h2">Sla jouw favorieten op</div>
        <p>Maak een "MijnCorendon" account aan en heb altijd toegang tot jouw favoriete accommodaties!</p>
        <a href="https://mijn.corendon.nl/newaccount" class="cor-button cor-button--primary cor-button--small"TARGET="_blank">
            <span class="cor-button__content">
                <span class="cor-button__text">
					Registreren
				</span>
                <span class="cor-button__token">
                    <i class="cor-icon icon-triangle-right-rounded"></i>
                </span>
            </span>
        </a>
    </div>
</div>
<script>
/**/
// Initialize variables
window.idlePage = 0;
window.activePopup = 0;
window.popup = false;

// Set interval function to monitor idle time and popup activity
window.idleInterval = setInterval(function(){
    // Increment idlePage or activePopup based on visibility of popup
    if(!document.querySelector('#destination-popup').classList.contains('visible')) {
        window.idlePage++;
        console.log(window.idlePage, 'window.idlePage')
    } else {
        window.activePopup++;
        console.log(window.idlePage, 'window.activePopup')
    }
    // Check conditions for showing popup based on idle time
    if(window.idlePage > 55 && !document.querySelector('#destination-popup').classList.contains('visible')) {
        count = window.sessionStorage.getItem('alanyaPopup')*1;
        if(count < 1) {
            // Show popup and reset activePopup counter
            document.querySelector('#destination-popup').classList.add('visible');
            //window.activePopup = 0;
            window.sessionStorage.setItem('alanyaPopup',count+1);
        }
    }

    // Check conditions for hiding popup based on activePopup count
    if(window.activePopup > 65) {
        document.querySelector('#destination-popup').classList.remove('visible');
        window.idlePage=0;
    }
},100);

// Event listener for mouse movement to reset idlePage counter
document.addEventListener('mousemove',e=>{
    window.idlePage = 0;
});

// Event listener for mouse movement within popup to reset activePopup counter
document.querySelector('#destination-popup').addEventListener('mousemove',e=>{
  //  window.activePopup = 0;
});

// Event listener for click within popup to reset activePopup counter and perform action
document.querySelector('#destination-popup').addEventListener('click',e=>{
    window.activePopup = 0;
    document.querySelector('#destination-popup a').click();
    window.sessionStorage.setItem('alanyaPopup','3');
});

// Event listener for click on '.saved' element to show popup and hide it after double time interval
document.querySelector('.saved').addEventListener('click', e => {

     window.activePopup = 0;

     count = window.sessionStorage.getItem('alanyaPopup')*1;
    if(count < 3) {
    // Show popup
    document.querySelector('#destination-popup').classList.add('visible');


    // Set timeout to hide popup after double time interval
    setTimeout(() => {
        document.querySelector('#destination-popup').classList.remove('visible');
          window.sessionStorage.setItem('alanyaPopup','3');
    }, 5000 * 2);
    }
});

/**/
</script>
</body>

```
