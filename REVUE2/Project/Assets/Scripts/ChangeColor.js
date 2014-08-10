#pragma strict
var cubes:GameObject;
var materials : Material[];

//var cubeMaterial:Material;
function Start () 
{
	//var allChildren = gameObject.GetComponentsInChildren(Transform);// can use to Invisible
}

function EditColor (color:Color) 
{//print(transform.childCount);
//aFinger = transform.Find("LeftShoulderArmHand/Finger");
	//cubes = GameObject.Find("Invisible");
	for (var child : Transform in cubes.transform) {
		if(child.gameObject.name =="Voxel(Clone)"){
			child.gameObject.renderer .material.color  = color ;
		}
	}		
}
function EditMaterial (index:int) 
{
	for (var child : Transform in cubes.transform) {
		if(child.gameObject.name =="Voxel(Clone)"){
			child.gameObject.renderer .material = materials[index];
		}
	}		
}























/*	
#pragma strict
// Draws a horizontal slider control that goes from 0 to 10.
	var hSliderValue : float = 0.0;
	
	function OnGUI () {
		hSliderValue = GUI.HorizontalSlider (Rect (25, 25, 100, 30), hSliderValue, 0.0, 10.0);
	}



#pragma strict
var car:GameObject;
var carMaterial:Material;
function Start () 
{
// 在场景中找到汽车模型
car = GameObject.Find("Audi01");

// 在场景中找到汽车模型需要变颜色的材质
carMaterial = GameObject.Find("Audi01").Find("HDM_02_05_hood").renderer.material;

}

function Update () 
{
// 让汽车模型自旋
car.transform.Rotate(Vector3(0.0, 0.5, 0.0));
}

function ChangeColor(color:String)
{
var materialName:String = carMaterial.name;

// 得到所有可渲染的子物体
var rds = car.transform.GetComponentsInChildren.<Renderer>();

// 逐一遍历他的子物体
  for(var r:Renderer in rds)
  {
     // 逐一遍历子物体的子材质
     for(var m:Material in r.materials)
     { 
      if(m.name.Equals(materialName))
      {
       print(m.name);
       
       switch(color)
       {
        case "red":
        
         m.color = Color.red;
        
        break;
        
        case "blue":
        
         m.color = Color.blue;
        
        break;
        
        case "black":
        
         m.color = Color.black;
        
        break;
       }
      }
     }
}
}
function OnGUI()
{
if(GUI.Button(Rect(10, 10, 100, 40), "蓝色"))
{
  ChangeColor("blue");
}

if(GUI.Button(Rect(115, 10, 100, 40), "红色"))
{
  ChangeColor("red");
}

if(GUI.Button(Rect(220, 10, 100, 40), "黑色"))
{
  ChangeColor("black");
}
} 



//----------------------------------------------------------//
	// Fade the color from red to green
	// back and forth over the defined duration
var colorStart : Color = Color.red;
	var colorEnd : Color = Color.green;
	var duration : float = 1.0;
	function Update () {
		var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
		renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);
	}
	*/