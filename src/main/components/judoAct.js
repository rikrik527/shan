var obj = require('../getall');
var img = require('../../images/judo-face-cut.png');
var transform = require('../transform');
var transition = require('../transform');
var requestAnimationFrame = require('../requestAnimationFrame');

module.exports.judoAppear = (function() {
  var excute = false;
  return function(){
    if(!excute){
      excute = true;
      var judo = "<div class='judo-sensor-top'></div><div class='judo-sensor-left'></div><div class='judo-sensor-right'></div><div class='judo-head'><div class='judo-ear'></div><div class='judo-ear2'></div><div class='judo-hair1'></div><div class='judo-hair2'></div><div class='judo-hair3'></div><div class='judo-hair-white'><div class='judo-hair-white2'></div><div class='judo-hair-white3'></div></div><div class='judo-eyebrow'></div><div class='judo-eyebrow2'></div><div class='judo-eye'><div class='judo-eyeball'></div></div><div class='judo-eye2'><div class='judo-eyeball2'></div></div><div class='judo-nose'></div><div class='judo-lips'><div class='judo-mouth'><div class='judo-teeth'></div></div></div><div class='judo-lips2'></div></div><div class='judo-neck'></div><div class='judo-body'><div class='judo-clothes'><div class='judo-clothes-top'></div><div class='judo-clothes-chest'></div><div class='judo-clothes-bottom'></div></div><div class='judo-chest'><div class='judo-stamache'></div><div class='judo-stamache2'></div></div><div class='judo-arm'><div class='judo-bicep'><div class='judo-lowarm'><div class='judo-hand'><div class='judo-sword-tail'><div class='judo-sword-sqaure'><div class='judo-sword-effect'></div></div><div class='judo-sword-triangle'><div class='judo-sword-effect2'></div></div><div class='judo-sword-sqaure2'><div class='judo-sword-effect3'></div></div><div class='judo-sword-triangle2'><div class='judo-sword-effect4'></div></div><div class='judo-sword-handle'><div class='judo-sword-bar1'></div><div class='judo-sword-bar2'></div></div></div></div></div></div></div><div class='judo-clothes2'><div class='judo-clothes2-top'></div><div class='judo-clothes2-chest'></div><div class='judo-clothes2-bottom'></div></div><div class='judo-chest2'><div class='judo-stamache3'></div><div class='judo-stamache4'></div></div><div class='judo-arm2'><div class='judo-bicep2'><div class='judo-lowarm2'><div class='judo-hand2'></div></div></div></div></div><div class='judo-peegu'><div class='judo-belt'><div class='judo-belt1'></div><div class='judo-belt2'></div></div><div class='judo-upleg'><div class='judo-lowleg'><div class='judo-foot'><div class='judo-shoe'></div></div></div></div><div class='judo-upleg2'><div class='judo-lowleg2'><div class='judo-foot2'><div class='judo-shoe2'></div></div></div></div></div><div class='judo-effect1'></div><div class='judo-effect2'></div><div class='judo-effect3'></div><div class='judo-effect4'></div><div class='judo-effect5'></div><div class='judo-effect6'></div><div class='judo-effect7'></div><div class='judo-effect8'></div><div class='judo-effect9'></div><div class='judo-effect10'></div>";

      var judoBtn = obj.get('.judo-btn');
      judoBtn.insertAdjacentHTML('afterbegin', '<article class="judo-boxcontrol"></article>');
      var judoBC = obj.get('.judo-boxcontrol');
      judoBC.innerHTML = judo;

    }
  }
})();


module.exports.judoProfile = (function(){
  var excute = false;
  return function(){
    if(!excute){
      excute = true;
      var judoBtn = obj.get('.judo-btn');
      judoBtn.insertAdjacentHTML('afterbegin', "<div class='judo-lowbox'><div class='judo-name'>Mr.JUDO</div><div class='judo-photo'><img id='judo-image' alt='profile-photo'></div><div class='judo-profile'>Height:170cm<br>Weight:75kg<br>Country:Taiwan</div><ul class='judo-status'><li class='judo-info'></li></ul></div>");
      var judoImg = obj.getId('judo-image');
      judoImg.src = img;
      var judoStatus = obj.get('.judo-status');
      var judoInfo = obj.get('.judo-info');
      var judoBioCount = 0;
      function judoText(){
          var bio ='姓名:柔盜<br>英文:Mr.Judo<br>出生於西元一九七九....';

          if(judoBioCount <= bio.length){
              judoInfo.innerHTML = bio.substring(0,judoBioCount);
              judoBioCount ++ ;




          } else{
              window.clearInterval(judoId);

          }

      }
      // judoInfo.scrollHeight = judoStatus.scrollHeight;
      var judoId = window.setInterval(judoText,100);
      console.log('active')
      judoText();

    }
  }
})();


module.exports.judoBox = function(){
  var judobox = obj.get('.judo-box'),judobox2 = obj.get('.judo-box2'),
  judoBg = obj.get('.judo-bg'),judoBtn = obj.get('.judo-btn');
  // judoBtn.onmouseover = function(){

  //   judobox2.style.transform = 'rotatex(-180deg)';
  //   judobox.style.transform = 'rotatex(1deg)';
    judoProfile();
    judoAppear();
  //     var judoBc = obj.get('.judo-boxcontrol')
  //     judoBg.style.display = 'block';
  //     judoBc.style.display = 'block';

  // }
  // judoBtn.onmouseout = function(){
  //   judobox2.style.transform = 'rotatex(1deg)';
  //   judobox.style.transform = 'rotatex(180deg)';
  //     var judoBc = obj.get('.judo-boxcontrol')
  //     judoBg.style.display = 'none';
  //     judoBc.style.display = 'none';
  // }

  // judoBtn.ontouchstart = function(e){
  //     var touch = e.targetTouches;
  //     judobox2.style.transform = 'rotatex(-180deg)';
  //     judobox.style.transform = 'rotatex(1deg)';
  //     judoProfile();
  //     judoAppear();
  //     var judoBc = obj.get('.judo-boxcontrol')
  //     judoBg.style.display = 'none';
  //     judoBc.style.display = 'none';
  // }

  // judoBtn.ontouchend = function(e){

  //     judobox2.style.transform = 'rotatex(1deg)';
  //     judobox.style.transform = 'rotatex(180deg)';
  //     var judoBc = obj.get('.judo-boxcontrol')
  //     judoBg.style.display = 'none';
  //     judoBc.style.display = 'none';
  // }
}



    // Popup Window;
    var isfetched = false;
    var isXml = true;
    // Search DB path;
    var search_path = "search.xml";
    if (search_path.length === 0) {
      search_path = "search.xml";
    } else if (search_path.endsWith("json")) {
      isXml = false;
    }
    var path = "/" + search_path;
    // monitor main search box;

    var onPopupClose = function (e) {
      $('.popup').hide();
      $('#local-search-input').val('');
      $('.search-result-list').remove();
      $('#no-result').remove();
      $(".local-search-pop-overlay").remove();
      $('body').css('overflow', '');
    }

    function proceedsearch() {
      $("body")
        .append('<div class="search-popup-overlay local-search-pop-overlay"></div>')
        .css('overflow', 'hidden');
      $('.search-popup-overlay').click(onPopupClose);
      $('.popup').toggle();
      var $localSearchInput = $('#local-search-input');
      $localSearchInput.attr("autocapitalize", "none");
      $localSearchInput.attr("autocorrect", "off");
      $localSearchInput.focus();
    }

    // search function;
    var searchFunc = function(path, search_id, content_id) {
      'use strict';

      // start loading animation
      $("body")
        .append('<div class="search-popup-overlay local-search-pop-overlay">' +
          '<div id="search-loading-icon">' +
          '<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>' +
          '</div>' +
          '</div>')
        .css('overflow', 'hidden');
      $("#search-loading-icon").css('margin', '20% auto 0 auto').css('text-align', 'center');

      $.ajax({
        url: path,
        dataType: isXml ? "xml" : "json",
        async: true,
        success: function(res) {
          // get the contents from search data
          isfetched = true;
          $('.popup').detach().appendTo('.header-inner');
          var datas = isXml ? $("entry", res).map(function() {
            return {
              title: $("title", this).text(),
              content: $("content",this).text(),
              url: $("url" , this).text()
            };
          }).get() : res;
          var input = document.getElementById(search_id);
          var resultContent = document.getElementById(content_id);
          var inputEventFunction = function() {
            var searchText = input.value.trim().toLowerCase();
            var keywords = searchText.split(/[\s\-]+/);
            if (keywords.length > 1) {
              keywords.push(searchText);
            }
            var resultItems = [];
            if (searchText.length > 0) {
              // perform local searching
              datas.forEach(function(data) {
                var isMatch = false;
                var hitCount = 0;
                var searchTextCount = 0;
                var title = data.title.trim();
                var titleInLowerCase = title.toLowerCase();
                var content = data.content.trim().replace(/<[^>]+>/g,"");
                var contentInLowerCase = content.toLowerCase();
                var articleUrl = decodeURIComponent(data.url);
                var indexOfTitle = [];
                var indexOfContent = [];
                // only match articles with not empty titles
                if(title != '') {
                  keywords.forEach(function(keyword) {
                    function getIndexByWord(word, text, caseSensitive) {
                      var wordLen = word.length;
                      if (wordLen === 0) {
                        return [];
                      }
                      var startPosition = 0, position = [], index = [];
                      if (!caseSensitive) {
                        text = text.toLowerCase();
                        word = word.toLowerCase();
                      }
                      while ((position = text.indexOf(word, startPosition)) > -1) {
                        index.push({position: position, word: word});
                        startPosition = position + wordLen;
                      }
                      return index;
                    }

                    indexOfTitle = indexOfTitle.concat(getIndexByWord(keyword, titleInLowerCase, false));
                    indexOfContent = indexOfContent.concat(getIndexByWord(keyword, contentInLowerCase, false));
                  });
                  if (indexOfTitle.length > 0 || indexOfContent.length > 0) {
                    isMatch = true;
                    hitCount = indexOfTitle.length + indexOfContent.length;
                  }
                }

                // show search results

                if (isMatch) {
                  // sort index by position of keyword

                  [indexOfTitle, indexOfContent].forEach(function (index) {
                    index.sort(function (itemLeft, itemRight) {
                      if (itemRight.position !== itemLeft.position) {
                        return itemRight.position - itemLeft.position;
                      } else {
                        return itemLeft.word.length - itemRight.word.length;
                      }
                    });
                  });

                  // merge hits into slices

                  function mergeIntoSlice(text, start, end, index) {
                    var item = index[index.length - 1];
                    var position = item.position;
                    var word = item.word;
                    var hits = [];
                    var searchTextCountInSlice = 0;
                    while (position + word.length <= end && index.length != 0) {
                      if (word === searchText) {
                        searchTextCountInSlice++;
                      }
                      hits.push({position: position, length: word.length});
                      var wordEnd = position + word.length;

                      // move to next position of hit

                      index.pop();
                      while (index.length != 0) {
                        item = index[index.length - 1];
                        position = item.position;
                        word = item.word;
                        if (wordEnd > position) {
                          index.pop();
                        } else {
                          break;
                        }
                      }
                    }
                    searchTextCount += searchTextCountInSlice;
                    return {
                      hits: hits,
                      start: start,
                      end: end,
                      searchTextCount: searchTextCountInSlice
                    };
                  }

                  var slicesOfTitle = [];
                  if (indexOfTitle.length != 0) {
                    slicesOfTitle.push(mergeIntoSlice(title, 0, title.length, indexOfTitle));
                  }

                  var slicesOfContent = [];
                  while (indexOfContent.length != 0) {
                    var item = indexOfContent[indexOfContent.length - 1];
                    var position = item.position;
                    var word = item.word;
                    // cut out 100 characters
                    var start = position - 20;
                    var end = position + 80;
                    if(start < 0){
                      start = 0;
                    }
                    if (end < position + word.length) {
                      end = position + word.length;
                    }
                    if(end > content.length){
                      end = content.length;
                    }
                    slicesOfContent.push(mergeIntoSlice(content, start, end, indexOfContent));
                  }

                  // sort slices in content by search text's count and hits' count

                  slicesOfContent.sort(function (sliceLeft, sliceRight) {
                    if (sliceLeft.searchTextCount !== sliceRight.searchTextCount) {
                      return sliceRight.searchTextCount - sliceLeft.searchTextCount;
                    } else if (sliceLeft.hits.length !== sliceRight.hits.length) {
                      return sliceRight.hits.length - sliceLeft.hits.length;
                    } else {
                      return sliceLeft.start - sliceRight.start;
                    }
                  });

                  // select top N slices in content

                  var upperBound = parseInt('1');
                  if (upperBound >= 0) {
                    slicesOfContent = slicesOfContent.slice(0, upperBound);
                  }

                  // highlight title and content

                  function highlightKeyword(text, slice) {
                    var result = '';
                    var prevEnd = slice.start;
                    slice.hits.forEach(function (hit) {
                      result += text.substring(prevEnd, hit.position);
                      var end = hit.position + hit.length;
                      result += '<b class="search-keyword">' + text.substring(hit.position, end) + '</b>';
                      prevEnd = end;
                    });
                    result += text.substring(prevEnd, slice.end);
                    return result;
                  }

                  var resultItem = '';

                  if (slicesOfTitle.length != 0) {
                    resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + highlightKeyword(title, slicesOfTitle[0]) + "</a>";
                  } else {
                    resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + title + "</a>";
                  }

                  slicesOfContent.forEach(function (slice) {
                    resultItem += "<a href='" + articleUrl + "'>" +
                      "<p class=\"search-result\">" + highlightKeyword(content, slice) +
                      "...</p>" + "</a>";
                  });

                  resultItem += "</li>";
                  resultItems.push({
                    item: resultItem,
                    searchTextCount: searchTextCount,
                    hitCount: hitCount,
                    id: resultItems.length
                  });
                }
              })
            };
            if (keywords.length === 1 && keywords[0] === "") {
              resultContent.innerHTML = '<div id="no-result"><i class="fa fa-search fa-5x" /></div>'
            } else if (resultItems.length === 0) {
              resultContent.innerHTML = '<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>'
            } else {
              resultItems.sort(function (resultLeft, resultRight) {
                if (resultLeft.searchTextCount !== resultRight.searchTextCount) {
                  return resultRight.searchTextCount - resultLeft.searchTextCount;
                } else if (resultLeft.hitCount !== resultRight.hitCount) {
                  return resultRight.hitCount - resultLeft.hitCount;
                } else {
                  return resultRight.id - resultLeft.id;
                }
              });
              var searchResultList = '<ul class=\"search-result-list\">';
              resultItems.forEach(function (result) {
                searchResultList += result.item;
              })
              searchResultList += "</ul>";
              resultContent.innerHTML = searchResultList;
            }
          }

          if ('auto' === 'auto') {
            input.addEventListener('input', inputEventFunction);
          } else {
            $('.search-icon').click(inputEventFunction);
            input.addEventListener('keypress', function (event) {
              if (event.keyCode === 13) {
                inputEventFunction();
              }
            });
          }

          // remove loading animation
          $(".local-search-pop-overlay").remove();
          $('body').css('overflow', '');

          proceedsearch();
        }
      });
    }

    // handle and trigger popup window;
    $('.popup-trigger').click(function(e) {
      e.stopPropagation();
      if (isfetched === false) {
        searchFunc(path, 'local-search-input', 'local-search-result');
      } else {
        proceedsearch();
      };
    });

    $('.popup-btn-close').click(onPopupClose);
    $('.popup').click(function(e){
      e.stopPropagation();
    });
    $(document).on('keyup', function (event) {
      var shouldDismissSearchPopup = event.which === 27 &&
        $('.search-popup').is(':visible');
      if (shouldDismissSearchPopup) {
        onPopupClose();
      }
    });
