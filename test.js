(function() {
  function run() {
    loadProducerWorks(<!--{$id|escape:"url"}-->);
  }
  document.addEventListener("DOMContentLoaded", function() {
    console.log(mw.loader);
    mw.loader.using("Alpine",run);
  });
})();