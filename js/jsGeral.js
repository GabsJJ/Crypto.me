function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mouseOverMenu(ele, txt)
{
	for(i = 0; i <= 5; i++)
	{
		var nPalavra = "";
		for(cha = 0; cha < txt.length; cha++)
		{
			var pala = Math.floor(Math.random() * 6);

			switch(pala)
			{
				case 0:
					nPalavra += "c"
					break;

				case 1:
					nPalavra += "r"
					break;

				case 2:
					nPalavra += "y"
					break;

				case 3:
					nPalavra += "p"
					break;

				case 4:
					nPalavra += "t"
					break;

				case 5:
					nPalavra += "o"
					break;
			}
		}

		ele.innerHTML = nPalavra;
		await sleep(200);
	}

	ele.innerHTML = txt;
}