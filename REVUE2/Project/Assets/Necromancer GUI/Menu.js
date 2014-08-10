#pragma strict

var doWindow0 = false;
var doWindow1 = false;
var doWindow2 = false;
var doWindow3 = true;
var doWindow4 = true;
var doWindow5 = true;

public var btnTexture : Texture;

private var leafOffset;
private var frameOffset;
private var skullOffset;

private var RibbonOffsetX: int;
private var FrameOffsetX: int;
private var SkullOffsetX: int;
private var RibbonOffsetY: int;
private var FrameOffsetY: int;
private var SkullOffsetY: int;

private var WSwaxOffsetX: int;
private var WSwaxOffsetY: int;
private var WSribbonOffsetX: int;
private var WSribbonOffsetY: int;

private var spikeCount : int;
public var x1=100;
public var y1=100;
public var x2=200;
public var y2=400;

// This script will only work with the Necromancer skin
var mySkin : GUISkin;

//if you're using the spikes you'll need to find sizes that work well with them these are a few...
private var windowRect3 = Rect (x1, y1, x2, y2);

private var scrollPosition : Vector2;
private var HroizSliderValue = 0.5;
private var VertSliderValue = 0.5;
private var ToggleBTN = false;
 var other : ChangeColor;

function Start () {


}

function Update () {

}

public function SetWindow(windowID : int){
switch(windowID)  
	    {  
	     case 0:
		     break;
	     case 1:	     	
	    	doWindow1 = !doWindow1 ;
	     	break;
	     case 2:
	     	doWindow2 = !doWindow2 ;
	     	break;
	     case 3:
	     	doWindow3 = !doWindow3 ;
	     	break;
	     case 4:
	     	doWindow4 = !doWindow4 ;
	     	break;
	     case 5:
	     	doWindow5 = !doWindow5 ;
	     	break;
	     default: Debug.Log("TOOLBAR BROKE");break;
	    }

}

function DoMyWindow3 (windowID : int) 
{
	// use the spike function to add the spikes
	// note: were passing the width of the window to the function
		AddSpikes(windowRect3.width);

		GUILayout.BeginVertical();
		GUILayout.Space(6);
		GUILayout.Label("", "Divider");//-------------------------------- custom
        GUILayout.Label("Colors");
		//GUILayout.Label("Short Label", "ShortLabel");//-------------------------------- custom
		GUILayout.Label("", "Divider");//-------------------------------- custom

		if (GUILayout.Button("Blue")){
	 		other.EditColor(Color.blue );
	 		print ("color.blue");
		}
		if (GUILayout.Button("Yellow")){
	 		other.EditColor(Color.yellow );
	 		print ("color.Y");
		}
		if (GUILayout.Button("Red")){
	 		other.EditColor(Color.red );
	 		print ("color.r");
		}
		if (GUILayout.Button("Leather")){
	 		other.EditMaterial(0 );
	 		print ("Leather");
		}
		if (GUILayout.Button("Cell")){
	 		other.EditMaterial(1);
	 		print ("Cell");
		}
		if (GUILayout.Button("Wood")){
	 		other.EditMaterial(2);
	 		print ("Wood");
		}
		//GUILayout.Button("Blue");//-------------------------"Standard Button"------- custom

		GUILayout.Label("", "Divider");//-------------------------------- custom
		//ToggleBTN = GUILayout.Toggle(ToggleBTN, "This is a Toggle Button");
		//GUILayout.Label("", "Divider");//-------------------------------- custom
		//GUILayout.Box("This is a textbox\n this can be expanded by using \\n");
		//GUILayout.TextField("This is a textfield\n You cant see this text!!");
        //GUILayout.TextArea("This is a textArea\n this can be expanded by using \\n");
		GUILayout.EndVertical();
		
		// Make the windows be draggable.
		GUI.DragWindow (Rect (0,0,10000,10000));
}

function AddSpikes(winX :int)
{
	spikeCount = Mathf.Floor(winX - 152)/22;
	GUILayout.BeginHorizontal();
	GUILayout.Label ("", "SpikeLeft");//-------------------------------- custom
	for (var i = 0; i < spikeCount; i++)
        {
			GUILayout.Label ("", "SpikeMid");//-------------------------------- custom
        }
	GUILayout.Label ("", "SpikeRight");//-------------------------------- custom
	GUILayout.EndHorizontal();
}

function WaxSeal(x : int,y :int )
{
	WSwaxOffsetX = x - 120;
	WSwaxOffsetY = y - 115;
	WSribbonOffsetX = x - 114;
	WSribbonOffsetY = y - 83;
	
	GUI.Label(new Rect(WSribbonOffsetX, WSribbonOffsetY, 0, 0), "", "RibbonBlue");//-------------------------------- custom	
	GUI.Label(new Rect(WSwaxOffsetX, WSwaxOffsetY, 0, 0), "", "WaxSeal");//-------------------------------- custom	
}

function DeathBadge(x:int,y:int)
{
	RibbonOffsetX = x;
	FrameOffsetX = x+3;
	SkullOffsetX = x+10;
	RibbonOffsetY = y+22;
	FrameOffsetY = y;
	SkullOffsetY = y+9;
	
	GUI.Label(new Rect(RibbonOffsetX, RibbonOffsetY, 0, 0), "", "RibbonRed");//-------------------------------- custom	
	GUI.Label(new Rect(FrameOffsetX, FrameOffsetY, 0, 0), "", "IconFrame");//-------------------------------- custom	
	GUI.Label(new Rect(SkullOffsetX, SkullOffsetY, 0, 0), "", "Skull");//-------------------------------- custom	
}



function OnGUI ()
{
other = gameObject.GetComponent("ChangeColor");
GUI.skin = mySkin;

if (doWindow1)
	windowRect3 = GUI.Window (3, windowRect3, DoMyWindow3, "");
	//now adjust to the group. (0,0) is the topleft corner of the group.
	GUI.BeginGroup (Rect (0,0,100,100));
	// End the group we started above. This is very important to remember!
	GUI.EndGroup ();
	

}
