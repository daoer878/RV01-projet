#pragma strict
var targetToFollow:Transform;
function Start () {
	this.transform.position=targetToFollow.position;
	this.transform.parent=targetToFollow;
}
