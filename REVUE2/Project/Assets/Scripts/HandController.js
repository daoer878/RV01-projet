#pragma strict

// Deals with moving the hand with a kb + mouse input combination

var ActivateKey:String;
var TogglePlaneKey:String;
var RefCamera:Transform;
var HandDelta:Vector3;
var OtherHand:GameObject;

function Update () {
	
	if(Input.GetKey(ActivateKey))
		HandDelta= RefCamera.right*Input.GetAxis("Mouse X") + (Input.GetKey(TogglePlaneKey)?RefCamera.forward:RefCamera.up)*Input.GetAxis("Mouse Y");	
	else
		HandDelta=Vector3.zero;
	this.transform.Translate(HandDelta);
	
}