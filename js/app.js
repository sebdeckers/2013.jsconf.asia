console.log('Mabuhay! More information coming soon...');

$("#subscribeForm").ajaxForm({
	url: "./addsubscriber.php",
	dataType: "html",
	beforeSubmit: function() {
		$("#subscribeForm .msg").slideUp();
		$("#subscribeForm").removeClass("failure success").addClass("load");
	},
	success: function(r) {
		if(r.substr(0,6) != "Thanks") {
			$("#subscribeForm").removeClass("load").addClass("failure");
			$("#subscribeForm .msg").text(r.substr(0,r.indexOf('<br/>'))).fadeIn(250);
		}
		else {
			$("#subscribeForm").removeClass("load").addClass("success");
			$("#subscribeForm .msg").text("Thanks! :)").fadeIn(250);
			_.delay(function() {
				$("#subscribeForm .msg").slideUp();
				$("#subscribeForm input[name='email']").val("");
			},2000);
		}
	},
	error: function(r, s) {
		$("#subscribeForm").removeClass("load").addClass("failure");
		$("#subscribeForm .msg").text("Something went utterly wrong...").fadeIn(250);
	}
});

$("#subscribeForm .msg").click(function() {
	$("#subscribeForm .msg").slideUp();
});