#pragma strict

var TriggerKey:String;
var ToolPickKeys:String[];

var Tools:GameObject[];
var ToolInUse:int=0;
var ActiveTool:GameObject;

function Start () {
	ActiveTool=Instantiate(Tools[ToolInUse],this.transform.position, Quaternion.identity);
	ActiveTool.transform.parent=this.gameObject.transform;
}

function Update () {
	var oldPickedTool=ToolInUse;
	for(var i=0; i<ToolPickKeys.length; i++)
		if(Input.GetKey(ToolPickKeys[i]))
			ToolInUse=i;
	if(oldPickedTool!=ToolInUse){
		Destroy(ActiveTool.gameObject);
		ActiveTool=Instantiate(Tools[ToolInUse],this.transform.position, Quaternion.identity);
		ActiveTool.transform.parent=this.gameObject.transform;
	}
}