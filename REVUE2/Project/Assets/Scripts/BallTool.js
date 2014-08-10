#pragma strict

function Update () {
	if(Input.GetKey(transform.parent.gameObject.GetComponent(HandToolPicker).TriggerKey)){
		this.transform.localScale*=(
		Vector3.Distance(
		this.transform.position,
			this.transform.parent.gameObject.GetComponent(HandController).OtherHand.transform.position+
			this.transform.parent.gameObject.GetComponent(HandController).OtherHand.GetComponent(HandController).HandDelta)/
		Vector3.Distance(
		this.transform.position,
		this.transform.parent.gameObject.GetComponent(HandController).OtherHand.transform.position));
	}
}