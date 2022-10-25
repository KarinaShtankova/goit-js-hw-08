import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  // data is an object containing properties specific to that event

  localStorage.setItem(STORAGE_KEY, data.seconds);
  //   console.log(data.seconds);
}

const currentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
