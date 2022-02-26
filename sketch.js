
function preload(){
  BG =loadImage("images/Bk.png");
  
  home=loadImage("images/House.png");

  Start=loadImage("images/st.jpeg");
  
  plr1F=loadImage("images/Player1F.png");
  plr1R=loadImage("images/Player1R.png");
  plr1L=loadImage("images/Player1L.png");

  Hint=loadImage("images/Book.png");

  BlackHole=loadImage("images/BlackHole.png");

  V=loadImage("images/virus.png");

  Key=loadImage("images/key.png");

  wall=loadImage("images/wall.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  

  Wall=createSprite(displayWidth-700,displayHeight-400);
  Wall.addImage(wall);
  Wall.scale=1.5

 


  house=createSprite(displayWidth-525,displayHeight-730);
  house.addImage(home);
  house.scale=0.2;


  

  line1=createSprite(displayWidth-790,displayHeight-750,370,10);
  line1.shapeColor='darkblue';

  line2=createSprite(displayWidth-255,displayHeight-750,420,10);
  line2.shapeColor='darkblue';

  line3=createSprite(displayWidth-460,displayHeight-720,10,70);
  line3.shapeColor='red';

  line4=createSprite(displayWidth-600,displayHeight-720,10,70);
  line4.shapeColor='red';

  line5=createSprite(displayWidth-590,displayHeight-680,30,10);
  line5.shapeColor='red';

  line6=createSprite(displayWidth-480,displayHeight-680,50,10);
  line6.shapeColor='red';

  line7=createSprite(displayWidth-50,displayHeight-350,10,800);
  line7.shapeColor='darkblue';

  line8=createSprite(displayWidth-970,displayHeight-350,10,800);
  line8.shapeColor='darkblue';

  line9=createSprite(displayWidth-570,displayHeight-650,10,70);
  line9.shapeColor='red';

  line10=createSprite(displayWidth-500,displayHeight-650,10,70);
  line10.shapeColor='red';
  
  line20=createSprite(displayWidth-750,displayHeight-40,10,140);
  line20.shapeColor='red';

  line21=createSprite(displayWidth-270,displayHeight-40,10,140);
  line21.shapeColor='red';

  line22=createSprite(displayWidth-170,displayHeight-40,10,140);
  line22.shapeColor='red';

  line23=createSprite(displayWidth-850,displayHeight-40,10,140);
  line23.shapeColor='red';

  line24=createSprite(displayWidth-170,displayHeight-100,10,140);
  line24.shapeColor='red';

  line25=createSprite(displayWidth-850,displayHeight-100,10,140);
  line25.shapeColor='red';

  line26=createSprite(displayWidth-270,displayHeight-100,10,140);
  line26.shapeColor='red';

  line27=createSprite(displayWidth-750,displayHeight-100,10,140);
  line27.shapeColor='red';
  line11=createSprite(displayWidth-790,displayHeight-5,370,10);
  line11.shapeColor='darkblue';

  line12=createSprite(displayWidth-235,displayHeight-5,370,10);
  line12.shapeColor='darkblue';

  line13=createSprite(displayWidth-510,displayHeight-35,10,280);
  line13.shapeColor='red';

  line14=createSprite(displayWidth-420,displayHeight-5,10,180);
  line14.shapeColor='red';

  line15=createSprite(displayWidth-600,displayHeight-5,10,180);
  line15.shapeColor='red';

  line16=createSprite(displayWidth-635,displayHeight-100,80,10);
  line16.shapeColor='red';

  line17=createSprite(displayWidth-385,displayHeight-100,80,10);
  line17.shapeColor='red';

  line18=createSprite(displayWidth-390,displayHeight-170,250,10);
  line18.shapeColor='red';

  line19=createSprite(displayWidth-630,displayHeight-170,250,10);
  line19.shapeColor='red';


 
  
  linez=createSprite(displayWidth-440,displayHeight-620,110,10);
  linez.shapeColor='red'

  linex=createSprite(displayWidth-620,displayHeight-620,110,10);
  linex.shapeColor='red'

  linec=createSprite(displayWidth-670,displayHeight-640,10,70);
  linec.shapeColor='red'

  linev=createSprite(displayWidth-390,displayHeight-640,10,70);
  linev.shapeColor='red'

  lineb=createSprite(displayWidth-740,displayHeight-680,150,10);
  lineb.shapeColor='red'

  linen=createSprite(displayWidth-320,displayHeight-680,150,10);
  linen.shapeColor='red'

//+
  linem=createSprite(displayWidth-160,displayHeight-630,100,10);
  linem.shapeColor='white'
  lineF=createSprite(displayWidth-160,displayHeight-630,10,100);
  lineF.shapeColor='white'
  lineG=createSprite(displayWidth-160,displayHeight-630,10,100);
  lineG.shapeColor='white'
  lineH=createSprite(displayWidth-160,displayHeight-630,100,10);
  lineH.shapeColor='white'
//+
  lineJ=createSprite(displayWidth-870,displayHeight-630,100,10);
  lineJ.shapeColor='white'
  lineK=createSprite(displayWidth-870,displayHeight-630,10,100);
  lineK.shapeColor='white'
  lineL=createSprite(displayWidth-870,displayHeight-630,10,100);
  lineL.shapeColor='white'
  lineD=createSprite(displayWidth-870,displayHeight-630,100,10);
  lineD.shapeColor='white'
//N
  lineS=createSprite(displayWidth-850,displayHeight-400,10,150);
  lineS.shapeColor='yellow'
  lineA=createSprite(displayWidth-815,displayHeight-480,80,10);
  lineA.shapeColor='yellow'
  lineP=createSprite(displayWidth-780,displayHeight-400,10,150);
  lineP.shapeColor='yellow'
  lineO=createSprite(displayWidth-745,displayHeight-330,80,10);
  lineO.shapeColor='yellow'
  lineI=createSprite(displayWidth-710,displayHeight-400,10,150);
  lineI.shapeColor='yellow'
  lineU=createSprite(displayWidth-695,displayHeight-480,40,10);
  lineU.shapeColor='yellow'
  lineY=createSprite(displayWidth-865,displayHeight-330,40,10);
  lineY.shapeColor='yellow'
  lineT=createSprite(displayWidth-890,displayHeight-340,10,30);
  lineT.shapeColor='yellow'
  lineR=createSprite(displayWidth-670,displayHeight-470,10,30);
  lineR.shapeColor='yellow'
//S
  lineE=createSprite(displayWidth-575,displayHeight-435,10,80);
  lineE.shapeColor='yellow'
  lineW=createSprite(displayWidth-485,displayHeight-365,10,80);
  lineW.shapeColor='yellow'
  lineQ=createSprite(displayWidth-530,displayHeight-400,100,10);
  lineQ.shapeColor='yellow'
  linel=createSprite(displayWidth-530,displayHeight-330,100,10);
  linel.shapeColor='yellow'
  linek=createSprite(displayWidth-530,displayHeight-480,100,10);
  linek.shapeColor='yellow'
  linej=createSprite(displayWidth-580,displayHeight-340,10,30);
  linej.shapeColor='yellow'
  lineh=createSprite(displayWidth-480,displayHeight-470,10,30);
  lineh.shapeColor='yellow'
//M
  lineg=createSprite(displayWidth-355,displayHeight-330,50,10);
  lineg.shapeColor='yellow'
  linef=createSprite(displayWidth-375,displayHeight-340,10,30);
  linef.shapeColor='yellow'
  lined=createSprite(displayWidth-335,displayHeight-400,10,150);
  lined.shapeColor='yellow'
  lines=createSprite(displayWidth-315,displayHeight-480,50,10);
  lines.shapeColor='yellow'
  linea=createSprite(displayWidth-295,displayHeight-460,10,50);
  linea.shapeColor='yellow'
  linep=createSprite(displayWidth-275,displayHeight-440,50,10);
  linep.shapeColor='yellow'
  lineo=createSprite(displayWidth-255,displayHeight-460,10,50);
  lineo.shapeColor='yellow'
  linei=createSprite(displayWidth-235,displayHeight-480,50,10);
  linei.shapeColor='yellow'
  lineu=createSprite(displayWidth-215,displayHeight-400,10,150);
  lineu.shapeColor='yellow'
  liney=createSprite(displayWidth-195,displayHeight-330,50,10);
  liney.shapeColor='yellow'
  linet=createSprite(displayWidth-175,displayHeight-340,10,30);
  linet.shapeColor='yellow'
//
 
  liner=createSprite(displayWidth-410,displayHeight-400,50,10);
  liner.shapeColor='orange'
  linee=createSprite(displayWidth-640,displayHeight-400,50,10);
  linee.shapeColor='orange'

//

 linew=createSprite(displayWidth-905,displayHeight-250,120,10);
 linew.shapeColor='red'
 //line=createSprite(displayWidth-850,displayHeight-235,10,40)
 //line.shapeColor='red'

 lineq=createSprite(displayWidth-115,displayHeight-250,120,10);
 lineq.shapeColor='red'
 //line=createSprite(displayWidth-170,displayHeight-235,10,40)
 //line.shapeColor='red'

//question
 q1=createSprite(displayWidth-650,displayHeight-30,30,30);
 q1.addImage(BlackHole);
 q1.scale=0.3;

 Q1=createSprite(displayWidth-910,displayHeight-30,30,30);
 Q1.addImage(BlackHole);
 Q1.scale=0.3;

 q2=createSprite(displayWidth-380,displayHeight-30,30,30);
 q2.addImage(BlackHole);
 q2.scale=0.3;

 Q2=createSprite(displayWidth-100,displayHeight-30,30,30);
 Q2.addImage(BlackHole);
 Q2.scale=0.3;

 //player

 plr2=createSprite(displayWidth-470,displayHeight-10);
  plr2.addImage(plr1F);
  plr2.scale=0.5;
  
  plr1=createSprite(displayWidth-550,displayHeight-10);
  plr1.addImage(plr1F);
  plr1.scale=0.5;

  //Key

 key1=createSprite(displayWidth-410,displayHeight-430);
 key1.addImage(Key);
 key1.scale=0.2;

 key2=createSprite(displayWidth-410,displayHeight-365);
 key2.addImage(Key);
 key2.scale=0.2;

 key3=createSprite(displayWidth-640,displayHeight-430);
 key3.addImage(Key);
 key3.scale=0.2;

 key4=createSprite(displayWidth-640,displayHeight-365);
 key4.addImage(Key);
 key4.scale=0.2;

//hint

H1=createSprite(displayWidth-610,displayHeight-650);
H1.addImage(Hint);
H1.scale=0.08

H2=createSprite(displayWidth-460,displayHeight-650);
H2.addImage(Hint);
H2.scale=0.08

//virus

v1=createSprite(displayWidth-940,displayHeight-450);
v1.addImage(V);
v1.scale=0.05;

v2=createSprite(displayWidth-140,displayHeight-450);
v2.addImage(V);
v2.scale=0.05;


BK=createSprite(displayWidth-500,displayHeight-400);
BK.addImage(BG);
BK.scale=2;

ST=createSprite(displayWidth-500,displayHeight-380);
ST.addImage(Start);
ST.scale=0.4;

Stand1=createSprite(displayWidth-980,displayHeight-730);
Stand1.shapeColor='Green';

Row1=createSprite(displayWidth-940,displayHeight-380,20,600);
Row1.shapeColor='black';

Stand2=createSprite(displayWidth-980,displayHeight-30);
Stand2.shapeColor='Green';

Stand3=createSprite(displayWidth-40,displayHeight-30);
Stand3.shapeColor='Green';

Row2=createSprite(displayWidth-80,displayHeight-380,20,600);
Row2.shapeColor="black";

Stand4=createSprite(displayWidth-40,displayHeight-730);
Stand4.shapeColor='Green';
   
}


function draw() {
  background(BG);

createEdgeSprites();

v1.bounceOff(lineS);
v1.bounceOff(line8);
v2.bounceOff(lineu);
v2.bounceOff(line7);


if(keyDown('space')){
  v1.velocityX=3;
  v1.velocityY=0;
  v2.velocityX=3;
  v2.velocityY=0;
  ST.visible=false;
  Stand1.visible=false;
  Stand2.visible=false;
  Stand3.visible=false;
  Stand4.visible=false;
  Row1.visible=false;
  BK.visible=false;
  Row2.visible=false;
}


  plr1.collide(line1);
  plr1.collide(line2);
  plr1.collide(line3);
  plr1.collide(line4);
  plr1.collide(line5);
  plr1.collide(line6);
  plr1.collide(line7);
  plr1.collide(line8);
  plr1.collide(line9);
  plr1.collide(line10);
  plr1.collide(line11);
  plr1.collide(line12);
  plr1.collide(line13);
  plr1.collide(line14);
  plr1.collide(line15);
  plr1.collide(line16);
  plr1.collide(line17);
  plr1.collide(line18);
  plr1.collide(line19);
  plr1.collide(linea);
  plr1.collide(lines);
  plr1.collide(lined);
  plr1.collide(linef);
  plr1.collide(lineg);
  plr1.collide(lineh);
  plr1.collide(linej);
  plr1.collide(linek);
  plr1.collide(linel);
  plr1.collide(linez);
  plr1.collide(linex);
  plr1.collide(linec);
  plr1.collide(linev);
  plr1.collide(lineb);
  plr1.collide(linen);
  plr1.collide(linem);
  plr1.collide(lineQ);
  plr1.collide(lineW);
  plr1.collide(lineE);
  plr1.collide(lineR);
  plr1.collide(lineT);
  plr1.collide(lineY);
  plr1.collide(lineU);
  plr1.collide(lineI);
  plr1.collide(lineO);
  plr1.collide(lineP);
  plr1.collide(lineA);
  plr1.collide(lineS);
  plr1.collide(lineD);
  plr1.collide(lineF);
  plr1.collide(lineG);
  plr1.collide(lineH);
  plr1.collide(lineJ);
  plr1.collide(lineK);
  plr1.collide(lineL);
  plr1.collide(linep);
  plr1.collide(lineo);
  plr1.collide(linei);
  plr1.collide(lineu);
  plr1.collide(liney);
  plr1.collide(linet);
  plr1.collide(liner);
  plr1.collide(linee);
  plr1.collide(linew);
  plr1.collide(line27);
  plr1.collide(line26);
  plr1.collide(line25);
  plr1.collide(line24);
  plr1.collide(line23);
  plr1.collide(line22);
  plr1.collide(line21);
  plr1.collide(line20);
 
  
if(plr1.isTouching(q1)){
  plr1.x=displayWidth-910;
  plr1.y=displayHeight-30;
  plr1.velocityX=0;
  plr1.velocityY=0;
}

if(keyDown('left')){
  plr1.velocityX=-2;
  plr1.velocityY=0;
  plr1.addImage(plr1L);
}
if(keyWentUp('right')){
  plr1.velocityX=2;
  plr1.velocityY=0;
  plr1.addImage(plr1R);
}
if(keyWentUp('down')){
  plr1.velocityY=2;
  plr1.velocityX=0;
  plr1.addImage(plr1F);
}
if(keyWentUp('up')){
  plr1.velocityY=-2;
  plr1.velocityX=0;
  plr1.addImage(plr1F);
}

if(plr1.isTouching(key1)){
  plr1.x=displayWidth-550;
  plr1.y=displayHeight-10;
}

if(plr1.isTouching(key2)){
  plr1.x=displayWidth-550;
  plr1.y=displayHeight-10;
}

if(plr1.isTouching(key4)){
  plr1.x=displayWidth-550;
  plr1.y=displayHeight-10;
}

if(plr1.isTouching(key3)){
  plr1.x=displayWidth-530;
  plr1.y=displayHeight-680;
  plr1.velocityX=0;
  plr1.velocityY=0;
}


  drawSprites();
   }
