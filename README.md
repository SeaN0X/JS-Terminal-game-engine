# JS-Terminal-game-engine
A simple game engine made on terminal using JS

## Usage sample ->

```js
Engine.LoadMap(20,10,"-",function(){ //Loads the map at a 20 width and 10 height, using the character "-" as background.

      Engine.StartRender("Main",function(){ // Starts rendering as main rendering method.
      
              Engine.SetPixel(10,10,"O") // Sets a pixel at the X position 10 and Y position 10 using the character "O"
      
      },100); // Delay in milliseconds to every frame
      
});
```

## Working sample of the Engine ->

```js
Engine.LoadMap(20, 10, "-", function() {

    var food_pos = []
    var generated = false;

    function gen_rpixels(quantity) {
        for (i = 0; i < quantity * 2; i++) {
            food_pos.push(Math.round(Math.random() * 19) + "," + Math.round(Math.random() * 9))
        }
        generated = true
    }
    gen_rpixels(10)

    function gen_bot() {
        var player_x = 5;
        var player_y = 5;

        setInterval(function() {
            const rnd = Math.round(Math.random() * 3) + 1

            if (player_x + 1 != 20 && rnd == 1) {
                player_x += 1;
                Engine.SetPixel(player_x - 1, player_y, "-")
            }
            if (player_x - 1 != 0 && rnd == 2) {
                player_x -= 1;
                Engine.SetPixel(player_x + 1, player_y, "-")
            }
            if (player_y + 1 != 10 && rnd == 3) {
                player_y += 1;
                Engine.SetPixel(player_x, player_y - 1, "-")
            }
            if (player_y - 1 != 0 && rnd == 4) {
                player_y -= 1;
                Engine.SetPixel(player_x, player_y + 1, "-")
            }

            Engine.SetPixel(player_x, player_y, "&")
        }, 100)
    }


    Engine.StartRender("Main", function() {
        if (generated) {
            for (i = 0; i < food_pos.length; i++) {
                const args = food_pos[i].split(',')
                Engine.SetPixel(Number(args[0]), Number(args[1]), "O")
            }
        }
    }, 100);

    gen_bot()
    gen_bot()
});
```

## Basic functionalities of the Engine ->

```
Engine.LoadMap(WIDTH, HEIGHT, CHAR, function() {}) // Loads the map and execute codes inside the function whe loaded.
Engine.StartRender("Main",function(){ }) // Starts rendering and executes code inside the function every frame update.
Engine.SetPixel(X, Y, CHAR); // Places pixel on the screen

Engine.IsRendering // Variable to control rendering.
```
