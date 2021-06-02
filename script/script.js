// ライトボックス指定
// new LuminousGallery(document.querySelectorAll('.grid-gallery'));

// Lightbox Luminous 名称挿入
new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

// Animation AOS挿入
AOS.init({
  duration: 1000
});