#pragma strict
public var brick : GameObject;
var righthand: Transform;
var refcamera:Transform;
var res:int;
function Start () {
	refcamera.LookAt(transform);
	for (var z = -res/2; z < res/2; z++) {
	    for (var y = -res/2; y < res/2; y++) {
	        for (var x = -res/2; x < res/2; x++) {
	        	var temp=Instantiate(brick, Vector3 (x, y, z), Quaternion.identity);
	        	temp.transform.parent=this.transform;
	        }
	    }
	}
}

function Update () {
	if(Input.GetKey("mouse 0")){
		transform.RotateAroundLocal(refcamera.up, -0.05*Input.GetAxis("Mouse X"));
		transform.RotateAroundLocal(refcamera.right, 0.05*Input.GetAxis("Mouse Y"));
	}else if(Input.GetKey("mouse 1")){
		righthand.Translate(refcamera.right*Input.GetAxis("Mouse X"));
		righthand.Translate(Input.GetKey("space")?Vector3.zero:refcamera.up*Input.GetAxis("Mouse Y"));
		righthand.Translate(Input.GetKey("space")?refcamera.forward*Input.GetAxis("Mouse Y"):Vector3.zero);
				//(Input.GetKey("space"))?0:Input.GetAxis("Mouse Y"),
			//(Input.GetKey("mouse 1"))?Input.GetAxis("Mouse Y"):0)
	}
}

/*
function OnMouseDown () {
var screenSpace = Camera.main.WorldToScreenPoint(transform.position);
var offset = transform.position -Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x,Input.mousePosition.y, screenSpace.z));
while (Input.GetMouseButton(0))
{
var curScreenSpace = Vector3(Input.mousePosition.x, Input.mousePosition.y,screenSpace.z);
var curPosition = Camera.main.ScreenToWorldPoint(curScreenSpace) + offset;
transform.position = curPosition;
yield;
}
}*/