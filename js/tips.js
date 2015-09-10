/**
 * Created by Lucien on 9/9/2015.
 */
;
//(function (window, document) {

    var TIPS_CLASSNAME='.l-tips';

    function nextElement(ele) {
        var next =ele.nextSibling;
        while (next && next.nodeType !== 1) {
            next = ele.nextSibling;
        }
        return next;

    }

    function setStyle(ele)
    {
        
    }

    var tips = document.querySelectorAll(TIPS_CLASSNAME);



//})(window, document);