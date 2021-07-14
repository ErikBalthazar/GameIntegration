 
function theAlert() {
	alert("theAlert!");
}
function saveSnapshot(id,image) {
     $.ajax({type: 'POST',url: 'http://gooms.co/game/core/sandbox_save_image.php',data: { 'id': id, 'image': image },cache: false});
r = "$.ajax({type: 'POST',url: 'http://gooms.co/game/core/sandbox_save_image.php',data: { 'id': '"&sandbox_id&"', 'image': '"&snapshot&"' },cache: false});"
}  

/* POPUPS */
	function shareSandbox(sandbox_id) { 
		popupwindow('https://www.facebook.com/sharer/sharer.php?u=http://gooms.co/'+sandbox_id, 'facebook', 560, 500);
	}
	function showFacebookPopup() {
		popupwindow('https://www.facebook.com/sharer/sharer.php?u=http://gooms.co', 'facebook', 560, 500);
	}
	function showDonatePopup() {
		popupwindow('http://gooms.co/popups/donate.php', 'donate', 310, 450);
	}

	function popupwindow(url, title, w, h) {
	  var left = (screen.width/2)-(w/2);
	  var top = (screen.height/2)-(h/2);
	  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	} 