#pragma strict

	//var Selection


	// Draws 2 buttons, one with an image, and other with a text
	// And print a message when they got clicked.
	var voxelMaterial:Material;
	
	var btnTexture : Texture;
	var toolbarStrings : String[] = ["BLUE", "RED", "YELLOW","Export","Import"];	
	var toolbarInt : int = -1;
	var lastbarInt : int=-1;
	//static function Toolbar(position: Rect, selected: int, images: Texture[]): int;
	//static function Toolbar(position: Rect, selected: int, content: GUIContent[]): int;  //An array of text, image and tooltips for the toolbar buttons.
function OnGUI() {
	var other : ChangeColor = gameObject.GetComponent("ChangeColor");
	if (!btnTexture) {
		Debug.LogError("Please assign a texture on the inspector");
		return;
	}
	if (GUI.Button(Rect(10,10,50,50),btnTexture)){
		
		other.EditMaterial(2);
		Debug.Log("Clicked the button with an image");
		}
		
/*	toolbarInt = GUI.Toolbar (Rect (65, 25, 200, 30), toolbarInt, toolbarStrings);
	if (lastbarInt!=toolbarInt){
		switch(toolbarInt)  
	    {  
	     case 0:
		     other.EditColor(Color.blue );
		     break;
	     case 1:
	     	
	    	other.EditColor(Color.red );
	     	break;
	     case 2:
	     	other.EditColor(Color.yellow);
	     	break;
	     default: Debug.Log("TOOLBAR BROKE");break;
	    }
	    lastbarInt=toolbarInt;
	    Debug.Log(toolbarInt);
    } */
	/*if(GUI.changed){
	
      //  if(lastbarInt == toolbarInt){
          //  toolbarInt = -1;
        //} 
           // lastbarInt = toolbarInt;
        Debug.Log(toolbarInt);
    }*/
}
//Carosel toolbar

