// main.js

var iconMap = {
  'php-icon': { rate: 7, skin: 'orange' },
  'css3-icon': { rate: 8, skin: 'normal' },
  'html5-icon': { rate: 8, skin: 'orange dark' },  
  'sass-icon': { rate: 7, skin: 'normal' },
  'js-icon': { rate: 7, skin: 'normal' },
  'ts-icon': { rate: 5, skin: 'green dark' },
  'jsx-icon': { rate: 7, skin: 'green' },
  'sql-icon': { rate: 5, skin: 'normal dark' },
  'terminal-icon': { rate: 5, skin: 'orange dark thin' },
  'drupal-icon': { rate: 8, skin: 'green' },
  'jquery-icon': { rate: 8, skin: 'green dark' },
  'knockout-icon': { rate: 6, skin: 'orange' },
  'angular-icon': { rate: 8, skin: 'normal' },
  'wordpress-icon': { rate: 5, skin: 'normal' },
  'bootstrap-icon': { rate: 8, skin: 'green dark' },
  'cordova-icon': { rate: 8, skin: 'normal' },
  'react-icon': { rate: 7, skin: 'orange dark' },
  'jekyll-icon': { rate: 6, skin: 'normal dark' },
  'sublime-icon': { rate: 5, skin: 'orange dark' },
  'atom-icon': { rate: 5, skin: 'normal dark' },
  'gulp-icon': { rate: 8, skin: 'orange' },
  'grunt-icon': { rate: 8, skin: 'orange dark' },
  'git-icon': { rate: 8, skin: 'orange' },
  'bitbucket-icon': { rate: 8, skin: 'normal' },
  'github-icon': { rate: 8, skin: 'orange dark' },
  'bower-icon': { rate: 8, skin: 'orange' },
  'npm-icon': { rate: 8, skin: 'orange' },
  'yeoman-icon': { rate: 6, skin: 'orange dark' },
  'yarn-icon': { rate: 8, skin: 'normal' },
  'jasmine-icon': { rate: 6, skin: 'orange' },
  'scala-icon': { rate: 6, skin: 'orange dark' },
  'jest-icon': { rate: 5, skin: 'green' },
  'windows-icon': { rate: 8, skin: 'green' },
  'linux-icon': { rate: 8, skin: 'orange' },
  'osx-icon': { rate: 8, skin: 'normal thinner' }
};

var iconList = Object.keys(iconMap);

function textReplace(msg) {
  document.getElementsByClassName('heart')[0].innerHTML = '&hearts; KAYRA';
  window.setTimeout(function() {
    document.getElementsByClassName('heart')[0].innerHTML = '&hearts;';
  }, 2000);
}

window.onload = function() {
  var start = new Date('8/14/2012'),
    today = new Date(),
    timeDiff = Math.abs(start.getTime() - today.getTime()),
    diffDays = timeDiff / (1000 * 3600 * 24),
    yearDiff = Math.floor(diffDays / 365);

  console.log('Experience > ' + yearDiff), (document.getElementById(
    'exp-year'
  ).innerHTML = yearDiff);

  var start = 0;
  var intervalId = setInterval(function() {
    populateSkillSection(iconList.slice(start, start + 9));
    start += 9;
    if (start > iconList.length) {
      clearInterval(intervalId);
    }
  }, 2000);
};

function populateSkillSection(list) {
  var skillSection = document.getElementsByClassName('skills')[0].innerHTML;
  skillSection += '<div class="flex-container flex-wrap">';
  list.forEach(function(element) {
    skillSection +=
      '<div class="flex-item percentify p' +
      iconMap[element].rate / 10 * 100 +
      ' cfs80 hover active ' +
      iconMap[element].skin +
      '" title="' +
      element +
      '">' +
      '<span class="' +
      element +
      ' ifs35"></span>' +
      '<div class="slice">' +
      '<div class="bar"></div>' +
      '<div class="fill"></div>' +
      '</div>' +
      '</div>';
  }, this);
  skillSection += '</div>';
  document.getElementsByClassName('skills')[0].innerHTML = skillSection;
}
