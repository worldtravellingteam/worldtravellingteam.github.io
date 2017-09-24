$(document).ready(function()
{
$("#l").click(function()
{
$("#l").addClass("active");
})
});

$(document).ready(function()
{
	$('input[type="text"]').focus(function()
	{
		this.addClass("vis");
	})
});

$(document).ready(function()
{
	var flag=0;
	var check=0;
     $("#b").click(function()
	 {
	 if(flag==0)
	 {
	   $(".ps").toggle(500);
	   $("#b").removeClass("b1");
	   $("#b").addClass("b2");
	   flag=1;
	}
	else if(flag==1)
	{
	$(".ps").toggle(500);
	$("#b").removeClass("b2");
	   $("#b").addClass("b1");
	   flag=0;
	  }
		if(check==0)
		{
			this.innerHTML='Get a Quotation<p style="font-size:25;color:yellow;padding:0">*Click to hide</p>';
			check=1;
		}
		else if(check==1)
		{
			this.innerHTML='Request a Quotation';
			check=0;
		}
	})
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#myBtn').slideDown();
		} else {
			$('#myBtn').slideUp();
		}
		if (document.body.scrollTop >715 || document.documentElement.scrollTop >715) 
	{
			$("#ht").removeClass("clht")
        $("#ht").addClass("nht");
    } 
	else
	{
		$("#ht").removeClass("nht");
		$("#ht").addClass("clht");
	}
	});
	
	//Click event to scroll to top
	$('#myBtn').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});



$(document).ready(function()
{
$(".wor").show(2000);
});


