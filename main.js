var canvas = new fabric.Canvas("myCanvas");
var player_x=0;
var player_y=0;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;  
player_object.scaleToWidth(75);
player_object.scaleToHeight(75);
player_object.set({top:player_y,left:player_x });
canvas.add(player_object);
});
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img) {
block_object = Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({top:player_y,left:player_x});
canvas.add(block_object);
});
}
player_update();
window.addEventListener("keydown",my_keydown);
function my_keydown(e){//declare function and e-event
    key_press= e.keyCode; //Tells to take the ascii codde
    console.log(key_press);
    if (e.shiftKey == true && key_press=='81'){
        console.log("q and shift pressed together");
        block_width=block_width+5;
        block_height=block_height+5;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        ch();
    }
    if (e.shiftKey == true && key_press=='90'){
    console.log("z and shift pressed together");
    block_width=block_width-5;
    block_height=block_height-5;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    ch();
    }
    if(key_press=='38'){
        up();
        console.log("up");
    }
        if(key_press=='37'){
        left();
        console.log("left");
    }
        if(key_press=='39'){
        right();
        console.log("right");
    }
    if(key_press=='40'){
        down();
        console.log("down");
    }

    if(key_press=='87'){
        new_image('wall.jpg')
        console.log("w");
    }
    if(key_press=='71'){
        new_image('ground.png')
        console.log("g");
    }
    if(key_press=='65'){
        new_image('gravel.png')
        console.log("a");
    }
    if(key_press=='69'){
        new_image('gold ore.png')
        console.log("e");
    }
    if(key_press=='70'){
        new_image('hot lava.jpg')
        console.log("f");
    }
    if(key_press=='72'){ 
        new_image('diamond ore.jpg')
        console.log("h");
    }
    if(key_press=='73'){
        new_image('cold water.jpg')
        console.log("i");
    }
    if(key_press=='74'){
        new_image('redstone.jpg')
        console.log("j");
    }
    if(key_press=='66'){
        new_image("black_wall.jpg")
        console.log("b");
    }
    if(key_press=='80'){
        new_image("pink.jpg")
        console.log("p");
    }
    if(key_press=="77"){
        new_image("granite.jpg")
        console.log("m")
    }
    if(key_press=='68'){
        new_image('dark_green.png')
        console.log("d");
    }
    if(key_press=='76'){
        new_image('light_green.png')
        console.log("l");
    }
    if(key_press=='89'){
        new_image('yellow_wall.png')
        console.log("y");
    }
    if(key_press=='85'){
        new_image('unique.png')
        console.log("u");
    }
    if(key_press=='84'){
        new_image('trunk.jpg')
        console.log("t");
    }
    if(key_press=='82'){
        new_image('roof.jpg')
        console.log("r");
    }
    if(key_press=='67'){
        new_image('cloud.jpg')
        console.log("c");
    }
}
function up(){
    if(player_y>=25){
        player_y=player_y-block_height;
        console.log("block image height="+block_height);
        console.log("when up arrow is pressed x ="+player_x,"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }   
    }
function down(){
    if(player_y<=575){
        player_y=player_y+block_height;
        console.log("block image height="+block_height);
        console.log("when down arrow is pressed x ="+player_x,"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>10){
        player_x=player_x-block_width;
        console.log("block image width="+block_width);
        console.log("when left arrow is pressed x ="+player_x,"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=900){
        player_x=player_x+block_width;
        console.log("block image width="+block_width);
        console.log("when right arrow is pressed x ="+player_x,"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function reload(){
    location.reload();
}
function ch(){
    if(block_width<=0){
        block_width=5;
        block_height=5;
    }
}