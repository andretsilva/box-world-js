
function component(width, height, color, x, y) {
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.start = function () {
        ctx = scenario.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.noMove = function() {
        ctx = scenario.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.move = function(x,y) {
        scenario.clear();
        if (this.hitWall( this.x + x, this.y+y)) {
            this.noMove();
            
        } else {
            if (this === you) {
                boxBlocked = false;
                for(var i=0;i<box.length;i++) {
                    boxHit = box[i];
                    if (this.hitElement(boxHit,this.x+x,this.y+y)){
                        if(!boxHit.hitWall(boxHit.x + x, boxHit.y+y)) {
                            for(j=0;j<box.length;j++) {
                                
                                boxHitBox = box[j];
                                if(boxHit.hitElement(boxHitBox,boxHit.x + x, boxHit.y + y)) {
                                    boxBlocked = true;
    
                                }      
                            }
                                      
                        } else {
                            boxBlocked = true;
                        }
                        if(!boxBlocked) {
                            
                            boxHit.move(x,y);
                        }                          
                    }     
                }
                
                
            }
            if(!boxBlocked) {
                 
                this.x = this.x + x;
                this.y = this.y + y;
            } 
            
        }
        var boxInGoal = 0;
                for(var k=0; k<box.length;k++) {
                   box[k].noMove();
                    for (var u = 0; u<goal.length; u++) {
                        
                        if (box[k].hitElement(goal[u],box[k].x,box[k].y)) { boxInGoal++ };
                    }   
                }
                
                
                if(boxInGoal == goal.length) scenario.goNext();

        
        
    }
    
    this.hitWall = function(newX, newY) { 
        var crash = false;
        
        if(newX >= scenario.canvas.width || newX < 0 || newY >= scenario.canvas.height || newY < 0) {
            crash = true;
        } else {
            for (var i = 0; i < walls.length; i += 1) {
                if((newY >= walls[i].y && newY < walls[i].y + walls[i].height) && (newX >= walls[i].x && newX < walls[i].x + walls[i].width))  {
                    crash = true;
                }
            
            }
        }
        return crash;
    }
    this.hitElement = function(element,newX, newY) { 
        var crash = false;    
        if((newY >= element.y && newY < element.y + element.height) && (newX >= element.x && newX < element.x + element.width))  {
            crash = true;
        }
        return crash;
    }

    this.canMove = function() {
        
        this.ladosMoveisX = 2;
        this.ladosMoveisY = 2;
        this.canmove = true;
        if (this.x < this.width || this.hitWall(this.x-this.width,this.y) ) { this.ladosMoveisX--};
        if (this.x == scenario.canvas.width-this.width ||  this.hitWall(this.x+this.width,this.y)) { this.ladosMoveisX--};
        if (this.y < this.height || this.hitWall(this.x,this.y-this.height) ) { this.ladosMoveisY--};
        if (this.y == scenario.canvas.height-this.height || this.hitWall(this.x,this.y+this.height)) { this.ladosMoveisY--}; 
        if (this.ladosMoveisX<2 && this.ladosMoveisY<2) {
            this.canmove = false;
        }
        return this.canmove;
    }
    this.start();
    
}  