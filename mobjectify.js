var empid, empname, empemail;

function submitdata() {
	$("body").addClass('ui-disabled');
	empid = $("#empid").val();
	empname = $("#empname").val();
	empemail = $("#empemail").val();
	setTimeout(function(){
        $.mobile.loading("show",{
			text: "Loading...",
			textVisible: true
		});
    }, 1);
	window.setTimeout( switchwindow, 3000 );
}

function switchwindow() {
	$.mobile.changePage( "#Validation", {
		transition: "pop",
		reverse: false,
		changeHash: false
	});
	setTimeout(function(){
        $.mobile.loading("hide");
    }, 1);
	$("body").removeClass('ui-disabled');
	alert(empid+empname+empemail);
}

$( document ).ready(function() {
	$('#submit').click(function() {
		submitdata();
	});
});