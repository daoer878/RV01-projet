#pragma strict

var VoxelPrefab : Transform;
var CubeResolution:int;
var CubeRotationSpeed:float=0;
var CubeRotationAxis:Vector3;


function Start () {
	this.renderer.enabled=false;
	for(var x=0; x<CubeResolution; x++)
	for(var y=0; y<CubeResolution; y++)
	for(var z=0; z<CubeResolution; z++)
	
	Instantiate(
		VoxelPrefab,
		-Vector3.one*CubeResolution/2+Vector3(x,y,z),
		Quaternion.identity).transform.parent=this.transform;
	
	this.transform.localScale*=this.transform.localScale.x/CubeResolution;
}	

function RoundedCoords(Toolposition:Vector3,x:int,y:int,z:int){
var localcoord=this.transform.InverseTransformPoint(Toolposition)*CubeResolution;
return this.transform.TransformPoint(
	Vector3(
		Mathf.RoundToInt(localcoord.x)+x,
		Mathf.RoundToInt(localcoord.y)+y,
		Mathf.RoundToInt(localcoord.z)+z)/CubeResolution);
}

function CreateCubes(Toolposition:Vector3, radius:float){
for(var x=-1;x<=1;x++)
	for(var y=-1;y<=1;y++)
		for(var z=-1;z<=1;z++)
			if(Physics.OverlapSphere(RoundedCoords(Toolposition,x,y,z), 10/CubeResolution/3).Length==0)
				Instantiate(VoxelPrefab, RoundedCoords(Toolposition, x,y,z), transform.rotation).transform.parent=this.transform;
}


function Update () {
	if(CubeRotationSpeed){
	this.transform.Rotate(CubeRotationAxis,CubeRotationSpeed);
	}
}