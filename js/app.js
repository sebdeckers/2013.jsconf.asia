console.log('Mabuhay! More information coming soon...');

$("#subscribeForm").ajaxForm({
	url: "http://jscamp.asia/addsubscriber.php",
	dataType: "html",
	beforeSubmit: function() {
		$("#form").removeClass("failure success").addClass("load");
	},
	success: function(r) {
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
				$("#form").removeClass("success");
			},2000);
		}
	},
	error: function(r, s) {
		$("#form").removeClass("load").addClass("failure");
		$("#form .msg").text("Something went utterly wrong...");
		setTimeout(function() {
			$("#form").removeClass("failure");
		},5000);
	}
});

$("#form .msg").click(function() {
	$("#form").removeClass("failure success")
});