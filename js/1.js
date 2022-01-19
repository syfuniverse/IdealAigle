<script language="javascript">
imgPath = new Array;
SiClickGoTo = new Array;
version = navigator.appVersion.substring(0,1);
if (version >= 3)
	{
	i0 = new Image;
	i0.src = 'https://media.discordapp.net/attachments/920671168426545152/933034753999904808/FREIN.png';
	SiClickGoTo[0] = "#";
	imgPath[0] = i0.src;
	i1 = new Image;
	i1.src = 'https://media.discordapp.net/attachments/920671168426545152/933034752590643230/FREIIIIIIIIN.png';
	SiClickGoTo[1] = "#";
	imgPath[1] = i1.src;
	i2 = new Image;
	i2.src = 'https://media.discordapp.net/attachments/920671168426545152/933034753618214962/FREIIN.png';
	SiClickGoTo[2] = "#";
	imgPath[2] = i2.src;
	}
a = 0;
function StartAnim()
	{
	if (version >= 3)
		{
		document.write('<a href="#" onclick="ImgDest();return(false)"><img src="https://media.discordapp.net/attachments/920671168426545152/933034753999904808/FREIN.png" border="0" alt="Menu" name="defil" /></a>');
		defilimg()
		}
	else
		{
		document.write('<a href="#"><img src="https://media.discordapp.net/attachments/920671168426545152/933034753999904808/FREIN.png" border="0" /></a>')
		}
	}
function ImgDest()
	{
	document.location.href = SiClickGoTo[a-1];
	}
function defilimg()
	{
	if (a == 3)
		{
		a = 0;
		}
	if (version >= 3)
		{
		document.defil.src = imgPath[a];
		tempo3 = setTimeout("defilimg()",5000);
		a++;
		}
	}
</script>