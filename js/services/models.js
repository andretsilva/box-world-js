
var box=[], goal=[], walls = [], currentScenario=5, score, patternBox, patternMario ;

function startGame() {
        scenario.start();
            var img = new Image();
            img.src = 'sprites/rbricks_large_shop_thumb.png'; 
            ctx = scenario.context;
            img.onload = function () {
            pattern = ctx.createPattern(img, 'repeat');
                var imgBox = new Image();
                imgBox.src = 'sprites/box.png';
                imgBox.onload = function () {
                    patternBox = ctx.createPattern(imgBox, 'repeat');
                    var imgMario = new Image();
                    imgMario.src = 'sprites/mario.png';
                    imgMario.onload = function () {
                    patternMario = ctx.createPattern(imgMario, 'repeat');
                        scenario.start();
                        loadScenario();  
                    }
                }
            }
            
}

