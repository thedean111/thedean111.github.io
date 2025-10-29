import TextManager from './TextManager';

export default class IntroSequence {
    constructor() {
        this.text = document.getElementById('introText');
        this.wrapper = document.getElementById('introTextTypedWrapper');
        this.tvFlash = document.getElementById('tvFlash');
        this.textMgr = new TextManager();
    }

    async begin(onComplete) { 
        const dateTime = new Date();
        const time = dateTime.getHours().toString() + ':' + dateTime.getMinutes().toString() + ':' + dateTime.getSeconds().toString();
        const date = dateTime.toLocaleString('default', {month: 'long'}) + ' ' + dateTime.toLocaleString('default', {day: 'numeric'}) + ', ' + dateTime.toLocaleString('default', {year: 'numeric'});

        // play the tv flash after the flicker
        this.wrapper.addEventListener('animationend', () => {
                this.tvFlash.classList.add('tv-flash-on');
        });

        // Play the on complete after the tv flash
        this.tvFlash.addEventListener('animationend', () => {
            this.tvFlash.style.transitionDuration = "1000ms";
            this.tvFlash.style.opacity = 0;
            if (onComplete) {
                onComplete();
            }
        })

        this.textMgr.setText('#introText', [
            '> Running arrival sequence^750.^750.^750.^750<br>>^250<br>'
            //  + 
            // '> Activity-B4DR 1900.65.69<br>>> ' + date + '<br>>> ' + time + '^750<br>>^100<br>>^100<br>' + 
            // '> Approaching Subsystem:^250<br>>> name-<br>>> D34N-B4DR<br>>^250<br>>> type- <br>>> P0R7F0L10<br>>^250<br>>> GCS- <br>>> <i>l</i> = 08°<br>>> <i>b</i> = 13°<br>>^250<br>' +
            // '> Displaying VCam™ 3 video stream^750.^750.^750.^500'
        ], true, true, 10, () => {
            // Play the text flicker animation when done
            this.wrapper.classList.add('text-off');
        });
    }
}