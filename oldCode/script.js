/* Author: João Lopes

*/
function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
          return true;
      }
  }
  return false;
}
var e6Table   = [10, 15, 22, 33, 47, 68];
var e12Table  = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
var e24Table  = [10, 11, 12, 13, 15, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 43, 47, 51, 56, 62, 68, 75, 82, 91];
var e48Table  = [100, 105, 110, 115, 121, 127, 133, 140, 147, 154, 162, 169, 178, 187, 196, 205, 215, 226, 237, 249, 261, 274, 287, 301, 316, 332, 348, 365, 383, 402, 422, 442, 464, 487, 511, 536, 562, 590, 619, 649, 681, 715, 750, 787, 825, 866, 909, 953];
var e96Table  = [100, 102, 105, 107, 110, 113, 115, 118, 121, 124, 127, 130, 133, 137, 140, 143, 147, 150, 154, 158, 162, 165, 169, 174, 178, 182, 187, 191, 196, 200, 205, 210, 215, 221, 226, 232, 237, 243, 249, 255, 261, 267, 274, 280, 287, 294, 301, 309, 316, 324, 332, 340, 348, 357, 365, 374, 383, 392, 402, 412, 422, 432, 442, 453, 464, 475, 487, 491, 511, 523, 536, 549, 562, 576, 590, 604, 619, 634, 649, 665, 681, 698, 715, 732, 750, 768, 787, 806, 825, 845, 866, 887, 909, 931, 959, 976];
var e192Table = [100, 101, 102, 104, 105, 106, 107, 109, 110, 111, 113, 114, 115, 117, 118, 120, 121, 123, 124, 126, 127, 129, 130, 132, 133, 135, 137, 138, 140, 142, 143, 145, 147, 149, 150, 152, 154, 156, 158, 160, 162, 164, 165, 167, 169, 172, 174, 176, 178, 180, 182, 184, 187, 189, 191, 193, 196, 198, 200, 203, 205, 208, 210, 213, 215, 218, 221, 223, 226, 229, 232, 234, 237, 240, 243, 246, 249, 252, 255, 258, 261, 264, 267, 271, 274, 277, 280, 284, 287, 291, 294, 298, 301, 305, 309, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 357, 361, 365, 370, 374, 379, 383, 388, 392, 397, 402, 407, 412, 417, 422, 427, 432, 437, 442, 448, 453, 459, 464, 470, 475, 481, 487, 493, 499, 505, 511, 517, 523, 530, 536, 542, 549, 556, 562, 569, 576, 583, 590, 597, 604, 612, 619, 626, 634, 642, 649, 657, 665, 673, 681, 690, 698, 706, 715, 723, 732, 741, 750, 759, 768, 777, 787, 796, 806, 816, 825, 835, 845, 856, 866, 876, 887, 898, 909, 920, 931, 942, 953, 965, 976, 988];
var numBands = 4;
var checkColor = function(){
if(numBands == 4){
  var a1 = ['firRing', 'secRing','multRing','tolRing'];
  var a2 = ['fring','sring','mring','tring'];
}else if(numBands == 5){
  var a1 = ['firRing', 'secRing', 'thirRing','multRing','tolRing'];
  var a2 = ['fring','sring', 'thring','mring','tring'];
}else if(numBands == 6){
  var a1 = ['firRing', 'secRing', 'thirRing', 'fourRing','multRing','tolRing'];
  var a2 = ['fring','sring', 'thring', 'foring','mring','tring'];
}
for(var i = 0; i<numBands; i++){
  var s = $("."+ a1[i]).find(".selected");
  if(s.length > 0){
    var classList= s[0].className.split(/\s+/);
    for (var j = 0; j < classList.length; j++) {
      var classname = classList[j];
      if (classname !== 'rcolor' && classname !== "selected" && classname !== "alpha" && classname !== "omega") {
        if(a2[i] == "mring"){
          if(numBands == 4){
               $("."+a2[i])[0].className = "ring " + a2[i] + " " + classname;
          }else if(numBands == 5){
               $("."+a2[i])[0].className = "ring " + a2[i] + " " + classname + " bands5";
          }else if(numBands == 6){
               $("."+a2[i])[0].className = "ring " + a2[i] + " " + classname + " bands6";
          }
        }else{
             $("."+a2[i])[0].className = "ring " + a2[i] + " " + classname;
        }

         }
    }
  }else{
    if(a2[i] == "mring"){
      if(numBands == 4){
        $("."+a2[i])[0].className = "ring " + a2[i];
      }else if(numBands == 5){
        $("."+a2[i])[0].className = "ring " + a2[i] + " bands5";
      }else if(numBands == 6){
        $("."+a2[i])[0].className = "ring " + a2[i] + " bands6";
      }
    }else{
      $("."+a2[i])[0].className = "ring " + a2[i];
    }
  }
}
}
var calcValue = function(){

if(numBands == 4){
  var a1 = ['firRing', 'secRing','multRing','tolRing'];
}else if(numBands == 5){
  var a1 = ['firRing', 'secRing', 'thirRing','multRing','tolRing'];
}else if(numBands == 6){
  var a1 = ['firRing', 'secRing', 'thirRing', 'fourRing','multRing','tolRing'];
}
var res = "";
var app = "";
var ring1 = 0;
var ring2 = 0;
var ring3 = 0;
var ring4 = 0;
var ring5 = 0;
var ring6 = 0;
for(var i = 0; i<numBands; i++){
  var val = 0;
  var s = $("."+ a1[i]).find(".selected");
  if(s.length > 0){
    val = parseFloat(s.data("res"));
  }
  switch(i){
    case 0: ring1 = val; break;
    case 1: ring2 = val; break;
    case 2: ring3 = val; break;
    case 3: ring4 = val; break;
    case 4: ring5 = val; break;
    case 5: ring6 = val; break;
  }
}
if(numBands == 4){
  if(ring3 == 0) ring3 = 1;
  if(ring4 == 0) ring4 = 20;
}else if(numBands == 5){
  if(ring4 == 0) ring4 = 1;
  if(ring5 == 0) ring5 = 20;
}else if(numBands == 6){
  if(ring5 == 0) ring5 = 1;
  if(ring6 == 0) ring6 = 20;
}

if(numBands == 4){
  var fst = ring1*10 + ring2;
  var sst = fst * ring3;
}else if(numBands == 5){
  var fst = ring1*100 + ring2* 10 + ring3;
  var sst = fst * ring4;
}else if(numBands == 6){
  var fst = ring1*1000 + ring2* 100 + ring3 * 10 + ring4;
  var sst = fst * ring5;
}
if(sst >= 1000 && sst < 1000000){
  sst = sst / 1000;
  app = "k";
}
if(sst >= 1000000){
  sst = sst / 1000000;
  app = "M";
}
sst = Math.round(sst*1000) / 1000;

var standard = false;
var series = "";
if(numBands == 4){
  if(ring4 == 20){
    standard = contains(e6Table, fst);
    series = "E6 Series";
    if(standard){
      $("#series").html('<span class="standard">Standard '+series+'</span>');
    }else{
      $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
    }
  }else if(ring4 == 10){
    standard = contains(e12Table, fst);
    series = "E12 Series";
    if(standard){
      $("#series").html('<span class="standard">Standard '+series+'</span>');
    }else{
      $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
    }
  }else if(ring4 == 5){
    standard = contains(e24Table, fst);
    series = "E24 Series";
    if(standard){
      $("#series").html('<span class="standard">Standard '+series+'</span>');
    }else{
      $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
    }
  }else if(ring4 == 2){
    series = "E48 Series";
    $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
  }else if(ring4 == 1){
    series = "E96 Series";
    $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
  }else{
    series = "E192 Series";
    $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
  }
  res = sst + app + " Ω ± " + ring4 + "%";
  $("#res").html(sst + app);
  $("#percent").html(ring4 + "%");
  var val1 = Math.round((sst - (sst * ring4/100))*1000) / 1000;
  var val2 = Math.round((sst + (sst * ring4/100))*1000) / 1000;
}else if(numBands == 5){

  if(ring5 == 20){
    series = "E6 Series";
    $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
  }else if(ring5 == 10){
    series = "E12 Series";
    $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
  }else if(ring5 == 5){
    series = "E24 Series";
    $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
  }else if(ring5 == 2){
    standard = contains(e48Table, fst);
    series = "E48 Series";
    if(standard){
      $("#series").html('<span class="standard">Standard '+series+'</span>');
    }else{
      $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
    }
  }else if(ring5 == 1){
    standard = contains(e96Table, fst);
    series = "E96 Series";
    if(standard){
      $("#series").html('<span class="standard">Standard '+series+'</span>');
    }else{
      $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
    }
  }else{
    standard = contains(e192Table, fst);
    series = "E192 Series";
    if(standard){
      $("#series").html('<span class="standard">Standard '+series+'</span>');
    }else{
      $("#series").html(' <span class="nonstandard">Non-Standard '+series+'</span>');
    }
  }
  res = sst + app + " Ω ± " + ring5 + "%";
  $("#res").html(sst + app);
  $("#percent").html(ring5 + "%");
  var val1 = Math.round((sst - (sst * ring5/100))*1000) / 1000;
  var val2 = Math.round((sst + (sst * ring5/100))*1000) / 1000;
}else if(numBands == 6){
  res = sst + app + " Ω ± " + ring6 + "%";
  $("#res").html(sst + app);
  $("#percent").html(ring6 + "%");
  var val1 = Math.round((sst - (sst * ring6/100))*1000) / 1000;
  var val2 = Math.round((sst + (sst * ring6/100))*1000) / 1000;
}
$("#helper").html(val1 + app + ' &#937;&lt;x&lt;'+ val2 + app +' &#937;');
}
$(".rcolor").click(function(){
var $t = $(this);
if($t.hasClass("selected")){
  $t.removeClass("selected");
}else{
  $t.parent().find(".selected").removeClass("selected");
  $t.addClass("selected");
}
checkColor();
calcValue();
});
if($(".no-touch").length > 0){
$('.rcolor').tipsy({gravity: 's',fade: true, html: true});
$(".rcolor").html("x");
}
var checkBands = function(){

if(numBands < 4){
  numBands = 4;
}
if(numBands > 5){
  numBands = 5;
}
if(numBands == 4){
  $("a.remove").hide();
  $("a.add").show();
  $(".thirRing").parent().hide();
  $(".fourRing").parent().hide();
  $(".thring").hide();
  $(".foring").hide();
  $(".ringWrapper").removeClass("bands5").removeClass("bands6");
  $(".mring").removeClass("bands5").removeClass("bands6");
}
if(numBands == 5){
  $("a.remove").show();
  $("a.add").hide();
  $(".thirRing").parent().show();
  $(".fourRing").parent().hide();
  $(".thring").show();
  $(".foring").hide();
  $(".ringWrapper").addClass("bands5").removeClass("bands6");
  $(".mring").addClass("bands5").removeClass("bands6");
}
if(numBands == 6){
  $("a.remove").show();
  $("a.add").hide();
  $(".thirRing").parent().show();
  $(".fourRing").parent().show();
  $(".thring").show();
  $(".foring").show();
  $(".ringWrapper").removeClass("bands5").addClass("bands6");
  $(".mring").removeClass("bands5").addClass("bands6");
}
calcValue();
}
$("a.add").click(function(){
numBands++;
checkBands();
});
$("a.remove").click(function(){
numBands--;
checkBands();
});

$("a.calcColors").click(function(){
$("div.calcColors, div.resultValue").toggle();
if($("div.calcColors").is(":visible")){
  $("a.add, a.remove").hide();
  $(".valueInput").focus();
}else{
  checkBands();
}
});
$(".valueInput").keydown(function(event) {
  // Allow: backspace, delete, tab, escape, and enter
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || event.keyCode == 190 || event.keyCode == 188 ||
       // Allow: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
});

$(".valueInput").change(function(event) {
  if(parseFloat($(this).val()) > 1000){
    $(this).val(1000);
  }
  if($.trim($(this).val()).length == 0){
    $(this).val(0);
  }
  $(this).val($(this).val().replace(",", "."));
});
function setCharAt(str,index,chr) {
if(index > str.length-1) return str;
return str.substr(0,index) + chr + str.substr(index+1);
}
$("a.calculate").click(function(){
var the_value = parseFloat($(".valueInput").val());
var multiply = parseInt($(".multiChoose").val());
var tolerance = parseFloat($(".toleranceChooser").val());

  if($.trim($('.valueInput').val()).length == 0){
    the_value = 0;
  }
if(tolerance > 2){
  numBands = 4;
}else{
  numBands = 5;
}
var string_value = parseInt(the_value.toString().replace(".", "").replace(",", "")).toString();
var value1 = parseInt(string_value[0]);
var value2 = 0;
var value3 = 0;
if(string_value[1] != undefined){
  value2 = parseInt(string_value[1]);
}
if(string_value[2] != undefined){
  value3 = parseInt(string_value[2]);
}
$(".firRing li.selected").removeClass("selected");
$(".secRing li.selected").removeClass("selected");
$(".thirRing li.selected").removeClass("selected");
$($(".firRing li")[value1 - 1]).addClass("selected");
$($(".secRing li")[value2]).addClass("selected");
if(numBands == 5){
  $($(".thirRing li")[value2]).addClass("selected");
}
var multiplied = the_value * multiply;
var string_multiplied = multiplied.toString();

var found = false;
var count = 0;
var val_truncated = string_multiplied;

$($(".firRing li")[0]).addClass("selected");
$($(".secRing li")[0]).addClass("selected");
if(numBands == 5){
  $($(".thirRing li")[0]).addClass("selected");
}
for(var i = 0; i<string_multiplied.length; i++){
  var item = string_multiplied[i];
  if(item == '.' || item == ','){
    continue;
  }
  if(item != '0' && !found){
    found = true;
  }
  if(found){
    count++;
  }
  if(numBands == 4){

    if(count > 2){
      val_truncated = setCharAt(val_truncated, i, '0');
    }
    if(count == 1){
    $(".firRing li.selected").removeClass("selected");
      $($(".firRing li")[parseInt(item) - 1]).addClass("selected");
    }
    if(count == 2){
      $(".secRing li.selected").removeClass("selected");
      $($(".secRing li")[parseInt(item)]).addClass("selected");
    }

  }else{

    if(count > 3){
      val_truncated = setCharAt(val_truncated, i, '0');
    }
    if(count == 1){
    $(".firRing li.selected").removeClass("selected");
      $($(".firRing li")[parseInt(item) - 1]).addClass("selected");
    }
    if(count == 2){
      $(".secRing li.selected").removeClass("selected");
      $($(".secRing li")[parseInt(item)]).addClass("selected");
    }

    if(count == 3){
      $(".thirRing li.selected").removeClass("selected");
      $($(".thirRing li")[parseInt(item)]).addClass("selected");
    }
  }
}
var float_truncated_multiplied = parseFloat(val_truncated);
var firVal = 1;
var secVal = 0;
var thrVal = 0;
var newVal = 0;
if(numBands == 4){
  firVal = parseInt($(".firRing li.selected").data('res'));
  secVal = parseInt($(".secRing li.selected").data('res'));
  newVal = firVal * 10 + secVal;
}else{
  firVal = parseInt($(".firRing li.selected").data('res'));
  secVal = parseInt($(".secRing li.selected").data('res'));
  thrVal = parseInt($(".thirRing li.selected").data('res'));
  newVal = firVal*100 + secVal * 10 + thrVal;
}
$(".multRing li").each(function(){
  var fake_mult = parseFloat($(this).data("res"));
  var the_value_multi = fake_mult * newVal;
  the_value_multi = Math.round(the_value_multi*1000) / 1000;
  if(the_value_multi == float_truncated_multiplied){
    $(".multRing li.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});
$(".tolRing .selected").removeClass("selected");
$(".tolRing [data-res="+'"'+tolerance+'"'+"]").addClass("selected");
$("a.calcColors").click();
checkColor();
calcValue();
return false;
});
