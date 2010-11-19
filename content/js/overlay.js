var IS_ACTIVE_NEP = false;

function toggleWindow()
{
	window.open("chrome://npiext/content/xul/key-layout.xul", "npiext_editor", "chrome,centerscreen,resizable=no");
}

function toggleNepali()
{
	if(IS_ACTIVE_NEP)
	{
		destroy();
		IS_ACTIVE_NEP = false;
		document.getElementById('status-img').src = "chrome://npiext/content/images/NepCross.png";
	}
	else
	{
		initialize();
		IS_ACTIVE_NEP = true;
		document.getElementById('status-img').src = "chrome://npiext/content/images/NepTick.png";
	}

}
