#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey(transform.parent.gameObject.GetComponent(HandToolPicker).TriggerKey)){
		GameObject.FindWithTag ("Sculpture").GetComponent(MakeSculpture).CreateCubes(
		this.transform.position,
		this.transform.lossyScale.x);
	}
	this.transform.rotation=GameObject.FindWithTag ("Sculpture").transform.rotation;
	//this.transform.position=GameObject.FindWithTag ("Sculpture").GetComponent(MakeSculpture).RoundedCoords(this.position);
}