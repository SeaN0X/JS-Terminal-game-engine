let Engine = {
	Map:[],
	DisplayMap:[],
	Tile:"",
	IsRendering:false,

	LoadMap:async function(x_length,y_length,bk_char,map_main)
	{
		Engine.Tile = "";
		for(i=0;i<x_length;i++){
			Engine.Tile = Engine.Tile+bk_char;
		}

		for (i=0; i<y_length;i+=1)
		{
			Engine.Map.push(Engine.Tile)
		}
		map_main();
	},

	StartRender:function(render_mode,on_render,ms_per_frame)
	{
		Engine.IsRendering = true;

		if(!ms_per_frame){
			ms_per_frame = 500;
		}

		if(render_mode=="Main"){

			setInterval(function(){
				if(Engine.IsRendering)
				{
					console.clear()
					Engine.DisplayMap = Engine.Map;
					console.log(Engine.DisplayMap.join("\n"))
					on_render();
				}
			},ms_per_frame)
		} else if(render_mode=="Instant"){
			while (Engine.IsRendering)
			{
					console.clear()
					Engine.DisplayMap = Engine.Map;
					console.log(Engine.DisplayMap.join("\n"))
					on_render();
			}
		}
	},
	SetPixel:function(x,y,char)
	{
		Engine.DisplayMap[y] = Engine.DisplayMap[y].substring(0, x) + char + Engine.DisplayMap[y].substring(x + char.length);
	}
}








Engine.LoadMap(20,10,"-",function(){
	Engine.StartRender("Main",function(){
      Engine.SetPixel(10,10,"O")
	},100);
});
