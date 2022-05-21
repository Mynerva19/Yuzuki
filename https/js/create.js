var timeScreen;
var selectorGroup;
export function create() {
    var SpriteSelector2;
    var SpriteSelector3;

    var bg = this.add.image(300, 250, 'bg1')
    bg.setScale(1,1.5)
    timeScreen = this.add.group()
    selectorGroup = this.add.group()

    //TIME SCREEn
    var g1 = this.add.circle(0,0,100,0x6696e3)
    var g2 = this.add.circle(0,0,80,0xffffff)

    var selector1 = this.add.circle(350,300,15,0xffffff).setInteractive();
    var selector2 = this.add.circle(30,350,25,0xffffff).setInteractive();
    var selector3 = this.add.circle(580,350,25,0xffffff).setInteractive();

    var SpriteSelector1 = this.add.rectangle(450,400,70,155,0xcc2f46).setInteractive();
    
    this.cameras.main.setBounds(0, 0, 1024, 1024);
    this.cameras.main.setZoom(1);
    this.cameras.main.centerOn(0, 0);

    let i=0;
    selector1.on('pointerup', function (pointer) {
        if(i==0) {
            var cam = this.cameras.main;
            cam.pan(350, 300, 1000, 'Power2');
            cam.zoomTo(4, 1000);
            SpriteSelector2 = this.add.rectangle(400,320,20,45,0xcc2f46).setInteractive();
            i++
        }
        else if(i==1) {
            
            this.cameras.main.setZoom(1);
            this.cameras.main.centerOn(0, 0);
            SpriteSelector2.destroy();
            i=0
        }
    },this);

    selector2.on('pointerup', function (pointer) {
        if(i==0) {
            var cam = this.cameras.main;
            cam.pan(30, 350, 1000, 'Power2');
            cam.zoomTo(3, 1000);
            SpriteSelector3 = this.add.rectangle(55,320,20,20,0xd4f542).setInteractive();
            SpriteSelector3.on('pointerup', function (pointer) {
                alert("Save point")
            })
            i++
        }
        else if(i==1) {
            this.cameras.main.setZoom(1);
            this.cameras.main.centerOn(0, 0);
            SpriteSelector3.destroy();
            i=0
        }
    },this);
    
    selector3.on('pointerup', function (pointer) {

        alert("Area 3")

    });
    //SELECT PART 
    //// Change "Codey's Adventures\n  in Code World" to the name of your game
    //this.add.text(250, 100, "SHIN MEGAMI TENSEI : HUNTERS GAME", { font: "40px Times New Roman", fill: "#1c1f24"});
    //// Change "by Codecademy" to your name!
    //this.add.text(250*2, 300, "by Codecademy", { font: "20px Times New Roman", fill: "#1c1f24"});
    //this.add.text(250*2, 350, "AYaki HAMAYA", { font: "20px Times New Roman", fill: "#1c1f24"});
//
    //
    //let circle6 = this.add.circle(200,500,100,0x1c1f24)
    //circle5 = this.add.circle(100,500,100,0x6696e3)
//
    //sprite = this.add.sprite(100, 100, 'Dragonite');
    //sprite.setScale(0.2,0.2)
    
    timeScreen.add(g1)
    timeScreen.add(g2)
    g1.x = 570
    g1.y = 5
    g2.x = 570
    g2.y = 5

}