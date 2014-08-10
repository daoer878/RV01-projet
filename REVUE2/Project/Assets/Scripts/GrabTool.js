#pragma strict
private var looker:GameObject;

function Start () {
	looker=new GameObject();
	looker.transform.position=GameObject.FindWithTag ("Sculpture").transform.position;
	looker.transform.LookAt(this.transform.position);
}

function Update () {
	// Hand display
	this.transform.LookAt(GameObject.FindWithTag ("Sculpture").transform.position);
	this.transform.Rotate(0,70,-30);
	
	// Sculpture rotation
	var oldlook=looker.transform.rotation;
	looker.transform.LookAt(this.transform.position);
	if(Input.GetKey(transform.parent.gameObject.GetComponent(HandToolPicker).TriggerKey)){
		// Spin Mode
		var other_hand:GameObject=this.transform.parent.gameObject.GetComponent(HandController).OtherHand;
		if(other_hand.GetComponent(HandToolPicker).ActiveTool.GetComponent(GrabTool)){
			 GameObject.FindWithTag ("Sculpture").GetComponent(MakeSculpture).CubeRotationSpeed=3;
			 GameObject.FindWithTag ("Sculpture").GetComponent(MakeSculpture).CubeRotationAxis=other_hand.transform.position-GameObject.FindWithTag ("Sculpture").transform.position;
			
		}else{
			// NormalMode
			GameObject.FindWithTag ("Sculpture").transform.rotation=GameObject.FindWithTag ("Sculpture").transform.rotation*looker.transform.rotation*Quaternion.Inverse(oldlook);
			if(GameObject.FindWithTag("ToVibrate"))
				GameObject.FindWithTag("ToVibrate").transform.position+=Vector3.one*(Random.Range(-0.01,0.01));
		}
	}
}