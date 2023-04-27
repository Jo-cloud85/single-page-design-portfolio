// ------------------ Nav bar text loop ----------------- //
let $btnLoop = $(".btn-loop");
let $list = $btnLoop.find(".btn-black");
let $clonedList = $list.clone();
let listWidth = 1;

$list.find(".btn-text").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
});

let endPos = $btnLoop.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "rem"
});

$clonedList.addClass("cloned").appendTo($btnLoop);

//TimelineMax
let infinite = new TimelineMax({repeat: -1, paused: true});
let time = 20;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$btnLoop.on("mouseenter", function() {
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});




// --------------- 'My work' thumbnails loop 1 -------------- //
let $tTopLoop = $(".thumbnail-loop-1");
let $listTop = $tTopLoop.find("#my-work-thumbnails-1");
let $clonedListTop = $listTop.clone();
let listTopWidth = 1;

$listTop.find(".slide1").each(function (i) {
			listTopWidth += $(this, i).outerWidth(true);
});

let endPosTop = $tTopLoop.width() - listTopWidth;

$listTop.add($clonedListTop).css({
	"width" : listTopWidth + "rem"
});

$clonedListTop.addClass("cloned").appendTo($tTopLoop);

//timelineMax
let infiniteTop = new TimelineMax({repeat: -1, paused: true});
let timeTop = 20;

infiniteTop
  .fromTo($listTop, timeTop, {rotation:0.01,x:0}, {force3D:true, x: -listTopWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedListTop, timeTop, {rotation:0.01, x:listTopWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($listTop, {force3D:true, rotation:0.01, x: listTopWidth})
  .to($clonedListTop, timeTop, {force3D:true, rotation:0.01, x: -listTopWidth, ease: Linear.easeNone}, timeTop)
  .to($listTop, timeTop, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, timeTop)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tTopLoop.on("mouseenter", function() {
	infiniteTop.pause();
}).on("mouseleave", function(){
	infiniteTop.play();
});





// --------------- 'My work' thumbnails loop 2 -------------- //
let $tBottomLoop = $(".thumbnail-loop-2");
let $listBottom = $tBottomLoop.find("#my-work-thumbnails-2");
let $clonedListBottom = $listBottom.clone();
let listBottomWidth = 1;

$listBottom.find(".slide2").each(function (i) {
			listBottomWidth += $(this, i).outerWidth(true);
});

let endPosBottom = $tBottomLoop.width() - listBottomWidth;

$listBottom.add($clonedListBottom).css({
	"width" : listBottomWidth + "rem"
});

$clonedListBottom.addClass("cloned").appendTo($tBottomLoop);

//timelineMax
let infiniteBottom = new TimelineMax({repeat: -1, paused: true});
let timeBottom = 24;

infiniteBottom
  .fromTo($listBottom, timeBottom, {rotation:0.01,x:0}, {force3D:true, x: listBottomWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedListBottom, timeBottom, {rotation:0.01, x:-listBottomWidth}, {force3D:true, x:0 , ease: Linear.easeNone}, 0)
  .set($listBottom, {force3D:true, rotation:0.01,x:listBottomWidth})
  .to($clonedListBottom, timeBottom, {force3D:true, rotation:0.01, x: -listBottomWidth, ease: Linear.easeNone}, timeBottom)
  .to($listBottom, timeBottom, {force3D:true, rotation:0.01, x:0, ease: Linear.easeNone}, timeBottom)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tBottomLoop.on("mouseenter", function() {
	infiniteBottom.pause();
}).on("mouseleave", function(){
	infiniteBottom.play();
});