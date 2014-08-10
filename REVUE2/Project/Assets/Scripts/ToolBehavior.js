#pragma strict
var smooth = 50.0;
var tiltAngle = 75.0;
var selection =0;
var tiltAroundY=0;
var rotay=0.0;
public var tm : TextMesh;
var otherMenu : Menu;
function Start () {
otherMenu = gameObject.GetComponent("Menu");

}

function Update () {
	rotay=transform.rotation.y*120;
	tiltAroundY = Input.GetAxis("Horizontal") * tiltAngle;
	var target = Quaternion.Euler (0,tiltAroundY , 0);
	// Dampen towards the target rotation
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);;
	if(rotay>-75 && rotay<-45 ){
	selection =1;
	tm.text ="Export";
	}
	else if (rotay>-45 && rotay<-15){
	selection =2;
	tm.text ="Shape";
	}
	else if (rotay>-15 && rotay<15 && tiltAroundY!=0){
	selection =3;
	tm.text ="Color";	
	if (Input.GetKey("space")){
		otherMenu.SetWindow(1);
		print ("space key was pressed");
		}

	}
	else if (rotay>15 && rotay<45){
	selection =4;
	tm.text ="Tool";
	}
	else if (rotay>45 && rotay<75){
	selection =5;
	tm.text ="Import";
	}
	else if (tiltAroundY==0){
	selection =0;
	tm.text ="";
	}
	
/*	if( Input .GetKey ( "x" ) )
	{
		transform.Rotate(Vector3.up, Time.deltaTime*10);
	}*/

	
}