var pattern;
function loadScenario() {
    walls = [];
    goal = [];
    
    switch (currentScenario) {
        case 0:
            goal.push(new component(40, 40, "yellow", 160, 280)); 
            walls.push(new component(120,40, pattern,0,80));
            walls.push(new component(40,240, pattern,120,80));
            walls.push(new component(40,240, pattern,200,80));
            walls.push(new component(400,40, pattern,220,80));
            break;
        case 1:
            goal.push(new component(40, 40, "yellow", 240, 120)); 
            walls.push(new component(120,40,pattern,0,80));
            walls.push(new component(40,120, pattern,120,80));
            walls.push(new component(40,120, pattern,200,80));
            walls.push(new component(180,40, pattern,220,80));
            walls.push(new component(40,40, pattern,120,280));
            walls.push(new component(40,40, pattern,200,280));
            walls.push(new component(80,200, pattern,320,120));
            walls.push(new component(80,200, pattern,0,120));
            break;
        case 2:
            goal.push( new component(40, 40, "yellow", 360, 0));
            walls.push(new component(40,40,pattern,0,40));
            walls.push(new component(40,40,pattern,0,120));
            walls.push(new component(40,40,pattern,0,240)); 
            walls.push(new component(160,240,pattern,120,0));
            walls.push(new component(40,40,pattern,80,120));
            walls.push(new component(40,40,pattern,360,160));
            walls.push(new component(320,40,pattern,0,280));
            walls.push(new component(40,40,pattern,320,0));
            walls.push(new component(40,40,pattern,280,120));
            break;
        case 3:
            goal.push(new component(40,40,"yellow", 360,0));
            goal.push(new component(40,40,"yellow", 360,40));
            walls.push(new component(40,40,pattern,0,40));
            walls.push(new component(40,40,pattern,0,40));
            walls.push(new component(40,160,pattern,320,40));
            walls.push(new component(160,160,pattern,160,40));
            walls.push(new component(80,320,pattern,0,0));
            walls.push(new component(200,40,pattern,160,240));
            break;
        case 4:
            goal.push(new component(40,40,"yellow", 200,120));
            goal.push(new component(40,40,"yellow", 240,160));
            goal.push(new component(40,40,"yellow", 280,120));
            walls.push(new component(40,40,pattern,240,120));
            walls.push(new component(40,40,pattern,200,160));
            walls.push(new component(40,40,pattern,280,160));
            walls.push(new component(40,40,pattern,280,200));
            walls.push(new component(40,40,pattern,160,120));
            walls.push(new component(40,40,pattern,200,240));
            walls.push(new component(40,320,pattern,0,0));
            walls.push(new component(40,320,pattern,360,0));
            walls.push(new component(320,40,pattern,40,0));
            walls.push(new component(320,40,pattern,40,280));
            walls.push(new component(40,40,pattern,320,40));
            walls.push(new component(40,80,pattern,40,40));
            break;
        case 5:
            
    
              
                walls.push(new component(40,40,pattern,200,160));
                walls.push(new component(40,40,pattern,280,80));
                walls.push(new component(40,40,pattern,280,160));
                walls.push(new component(80,40,pattern,40,40));
                walls.push(new component(40,40,pattern,240,120));
                walls.push(new component(40,40,pattern,80,120));
                walls.push(new component(240,40,pattern,0,0));
                walls.push(new component(80,40,pattern,40,40));
                walls.push(new component(80,40,pattern,40,40));
                walls.push(new component(40,80,pattern,360,0));
                walls.push(new component(40,40,pattern,200,200));
                walls.push(new component(280,40,pattern,0,280));
                walls.push(new component(40,320,pattern,0,0));
                walls.push(new component(80,40,pattern,40,40));
                walls.push(new component(40,40,pattern,320,240));
                walls.push(new component(40,40,pattern,320,160));
            
            goal.push(new component(40,40,"yellow", 200,120));
            goal.push(new component(40,40,"yellow", 240,160));
            goal.push(new component(40,40,"yellow", 200,120));
            goal.push(new component(40,40,"yellow", 280,120));
            goal.push(new component(40,40,"yellow", 240,80));
        case 6:
            ctx = scenario.context;
            ctx.font="40px Tahoma";
            
            ctx.lineWidth = 3;
            // stroke color
            ctx.strokeStyle = 'black';
            ctx.fillStyle = "#fff";
            ctx.strokeText("Congratulations!",10,50);
            ctx.fillText("Congratulations!", 10, 50);
            ctx.font="20px Tahoma";
            
            ctx.lineWidth = 3;
            // stroke color
            ctx.strokeStyle = 'white';
            ctx.fillStyle = "black";
            ctx.strokeText("You finished the game!",10,100);
            ctx.fillText("You finished the game!", 10, 100);
            break;
               
    }
}

var scenario = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.classList.add('canvas-game');
        this.canvas.width = 400;
        this.canvas.height = 320;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        box = [];

         switch(currentScenario) {
            case 3:
                box.push(new component(40, 40, patternBox, 120, 40));
                box.push(new component(40, 40, patternBox, 120, 120));
                you = new component(40, 40, patternMario,120,0);
                break;
             case 4:
                box.push(new component(40, 40, patternBox, 120, 120));
                box.push(new component(40, 40, patternBox, 120, 80));
                box.push(new component(40, 40, patternBox, 120, 160));
                you = new component(40, 40, patternMario,120,40);
                break;
            case 6:
                break;
            case 5:
                box.push(new component(40, 40, patternBox, 80, 80));
                box.push(new component(40, 40, patternBox, 160, 80));
                box.push(new component(40, 40, patternBox, 80, 160));
                box.push(new component(40, 40, patternBox, 160, 160));
                you = new component(40, 40, patternMario,120,120);
                break;
            default:
                box.push(new component(40, 40, patternBox, 40, 40));
                you = new component(40, 40, patternMario,0,0);
                break;
            
        }
           
            loadScenario();
            
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        loadScenario();
    },
    goNext : function() {
        currentScenario++;
        scenario.clear();
        scenario.start();
    }
    
}

