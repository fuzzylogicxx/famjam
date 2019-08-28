/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = function (fn) {

  // Sanity check
  if (typeof fn !== 'function') return;

  // If document is already loaded, run method
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    return fn();
  }

  // Otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', fn, false);

};



/*!
 * Use ResizeObserver to apply the class .aboveMin to a given grid container (.grid) when its width is greater than it’s "data-min" value.
 *
 */
function observeGrid(gridNode) {
  // Feature detect ResizeObserver
  if ('ResizeObserver' in window && !CSS.supports('width', `min(20rem, 100%)`)) {
    // Get the min value from data-min="[min]"
    const min = gridNode.dataset.min;
    // Create a proxy element to measure and convert
    // the `min` value (which might be em, rem, etc) to `px`
    const test = document.createElement('div');
    test.style.width = min;
    gridNode.appendChild(test);
    const minToPixels = test.offsetWidth;
    gridNode.removeChild(test);

    const ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        // Get the element's current dimensions
        const cr = entry.contentRect;
        // `true` if the container is wider than the minimum
        const isWide = cr.width > minToPixels;
        // toggle the class conditionally
        gridNode.classList.toggle('aboveMin', isWide);
      }
    });

    ro.observe(gridNode);
  }
}



ready(function () {

  // patch support for CSS’s min() so that our CSS Grid ".grid" components are intrinsically responsive.
  var grids = document.querySelectorAll('.grid');
  for (var i = 0; i < grids.length; i++) {
    observeGrid(grids[i]);
  }

});
