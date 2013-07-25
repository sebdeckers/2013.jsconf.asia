console.log('Mabuhay! More information coming soon...');

$("#subscribeForm").ajaxForm({
	url: "http://jscamp.asia/addsubscriber.php",
	dataType: "html",
	beforeSubmit: function() {
		$("#form").removeClass("failure success").addClass("load");
	},
	success: function(r) {
		siteReady = false;
		clearTimeout(hideTimer);
		if(r.substr(0,6) != "Thanks") {
			$("#form").removeClass("load").addClass("failure");
			$("#form .msg").text(r.substr(0,r.indexOf('<br/>')));
			setTimeout(function() {
				$("#form").removeClass("failure");
				$("#form input[name='email']").focus();
			},5000);
		}
		else {
			$("#form").removeClass("load").addClass("success");
			$("#form .msg").text("Thanks! :)");
			setTimeout(function() {
				$("#form input[name='email']").val("");
				$("#form").removeClass("success active");
			},2000);
			setTimeout(function() {
				window.location = "http://facebook.com/jsconfasia";
			},2200);
		}
	},
	error: function(r, s) {
		siteReady = false;
		clearTimeout(hideTimer);
		$("#form").removeClass("load").addClass("failure");
		$("#form .msg").text("Something went utterly wrong...");
		setTimeout(function() {
			$("#form").removeClass("failure");
		},4000);
	}
});

$("#form input").focus(function() {
	clearTimeout(hideTimer);
	siteReady = false;
}).blur(function() {
	siteReady = true;
	setTimer();
});

$("#form .msg").click(function() {
	$("#form").removeClass("failure success");
	$("#form input[name='email']").focus();
});

$('body').mousemove(function() {
	if(!siteReady)
		return;
	$(this).addClass("withform");
	setTimer();
});

var hideTimer;
function setTimer() {
	if(hideTimer != undefined) clearTimeout(hideTimer);
	hideTimer = setTimeout(function() {
		$("body").removeClass("withform");
	}, 3000);
}

setTimeout(function() {
	siteReady = true;
	$("#form").css({display: "block"});
}, 2000);

setTimeout(function() {
	$("footer").animate({marginTop: -51}, 500);
}, 6000);

$('.logo').click(function () {
	var t = $('#transition').addClass('active out');
	setTimeout(function() {
		t.removeClass('out').addClass('in');
		setTimeout(function() {
			t.removeClass('in').addClass('out');
			$('#content, .logo').hide();
			setTimeout(function () {
				t.removeClass('active out');
			}, 1000);
		}, 1000);
	}, 10);
	return false;
})