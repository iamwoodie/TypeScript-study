<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'App',
    created() {
      (function(doc, win) {
  			var docEl = doc.documentElement,
  			resizeEvt: string = 'orientationchange' in window ? 'orientationchange' : 'resize',
  			recalc = function(): void {
  				let clientWidth: number = docEl.clientWidth;
  				let clientHeight: number = docEl.clientHeight;
  				if (!clientWidth) return;
  				if (clientWidth >= 750) {
  					clientWidth = 750
  					doc.body.style.width = 750 + 'px'
  				} else {
  					doc.body.style.width = clientWidth + 'px'
  				}
  				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
  				docEl.dataset.percent = 100 * (clientWidth / 750) + ''
  			};
  			recalc()
  			doc.documentElement.classList.add('iosx' + win.devicePixelRatio)
  			if (!doc.addEventListener) {
          return;
        }
  			win.addEventListener(resizeEvt, recalc, false);
  		})(document, window);
    }
  }
</script>
