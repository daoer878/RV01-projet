#pragma strict

function Update () {
	if(Input.GetKey(transform.parent.gameObject.GetComponent(HandToolPicker).TriggerKey)){
		transform.LookAt(this.transform.parent.gameObject.GetComponent(HandController).OtherHand.transform);
		this.transform.localScale.z=Vector3.Distance(
			this.transform.position,
			this.transform.parent.gameObject.GetComponent(HandController).OtherHand.transform.position);
	}
} 