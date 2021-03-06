// CHANGE THIS VARIABLE AS YOUR PREFERENCE
var redirectURL = 'http://example.com/';

$(window).bind('load', function () {
  $('#container').removeClass('preload');
  if ($(this).width() / $(this).height() > 1.77) {
    cloneImages();
  }
  checkImage();
  animateBG();
  animateMosaic();
  // redirectTo(redirectURL);
});

function checkImage () {
  var m1 = $('#row-4');
  var m2 = $('#main');
  if (m2.height() > m1.height()) {
    m2.css('object-fit', 'auto');
  }
}

function cloneImages () {
  var mosaic = $('.mosaic').children();
  for (var i = 2; i <= mosaic.length+1; i++) {
    var origin = $('#row-' + i).html();
    for (var j = 0; j < 2; j++) {
      $('#row-' + i).append(origin);
    }
  }
}

function animateMosaic () {
  var $1 = $('.b1'),
      $2 = $('.b2'),
      $3 = $('.b3'),
      $4 = $('.b4'),
      $5 = $('.b5'),
      $6 = $('.b6'),
      $7 = $('.b7'),
      $8 = $('.b8'),
      $9 = $('.b9'),
      $10 = $('.b10'),
      $11 = $('.b11'),
      $12 = $('.b12');
  
  var duration = 350;
  var duration2 = 250;
  var $delay = $('.mosaic').css('animation-delay');
  $delay = css_time_to_milliseconds($delay);
  $increment = duration/12;
  var sequence = [
    { e: $1, p: { opacity: 1 }, o: { delay: $delay, duration: duration }},
    { e: $2, p: { opacity: 1 }, o: { delay: 1*$increment, duration: duration2, sequenceQueue: false }},
    { e: $3, p: { opacity: 1 }, o: { delay: 2*$increment, duration: duration2, sequenceQueue: false }},
    { e: $4, p: { opacity: 1 }, o: { delay: 3*$increment, duration: duration2, sequenceQueue: false }},
    { e: $5, p: { opacity: 1 }, o: { delay: 4*$increment, duration: duration2, sequenceQueue: false }},
    { e: $6, p: { opacity: 1 }, o: { delay: 5*$increment, duration: duration2, sequenceQueue: false }},
    { e: $7, p: { opacity: 1 }, o: { delay: 6*$increment, duration: duration2, sequenceQueue: false }},
    { e: $8, p: { opacity: 1 }, o: { delay: 7*$increment, duration: duration2, sequenceQueue: false }},
    { e: $9, p: { opacity: 1 }, o: { delay: 8*$increment, duration: duration2, sequenceQueue: false }},
    { e: $10, p: { opacity: 1 }, o: { delay: 9*$increment, duration: duration2, sequenceQueue: false }},
    { e: $11, p: { opacity: 1 }, o: { delay: 10*$increment, duration: duration2, sequenceQueue: false }},
    { e: $12, p: { opacity: 1 }, o: { delay: 11*$increment, duration: duration2, sequenceQueue: false }},
  ];

  $.Velocity.RunSequence(sequence);
}

function animateBG () {
  var $bg = $('.bg-image>img');
  var sequence = [
    { e: $bg, p: { scaleX: 1.3, scaleY: 1.3, blur: 5 }, o: { duration: 3500 } },
    { e: $bg, p: { scaleX: 1.3, scaleY: 1.3, blur: 1 }, o: { duration: 1000 } },
    { e: $bg, p: { scaleX: 1.15, scaleY: 1.15, blur: 1 }, o: { duration: 3500 } },
    { e: $bg, p: { scaleX: 1.3, scaleY: 1.3, blur: 2 }, o: { duration: 2500 } }
  ];

  var sequenceMobile = [
    { e: $bg, p: { scaleX: 1.6, scaleY: 1.6, blur: 5 }, o: { duration: 3500 } },
    { e: $bg, p: { scaleX: 1.6, scaleY: 1.6, blur: 1 }, o: { duration: 1000 } },
    { e: $bg, p: { scaleX: 1.3, scaleY: 1.3, blur: 1 }, o: { duration: 3500 } },
    { e: $bg, p: { scaleX: 1.7, scaleY: 1.7, blur: 2 }, o: { duration: 2500 } }
  ];
  var windowWidth = $(window).width();
  windowWidth > 768 ? $.Velocity.RunSequence(sequence) : $.Velocity.RunSequence(sequenceMobile);
}

function css_time_to_milliseconds(time_string) {
  var num = parseFloat(time_string, 10),
      unit = time_string.match(/m?s/),
      milliseconds;

  if (unit) {
      unit = unit[0];
  }

  switch (unit) {
      case "s": // seconds
          milliseconds = num * 1000;
          break;
      case "ms": // milliseconds
          milliseconds = num;
          break;
      default:
          milliseconds = 0;
          break;
  }

  return milliseconds;
}

function redirectTo(URL) {
  setTimeout(() => {
    location.href = URL;
  }, 16000);
}