#pragma strict
import System.Collections.Generic;
import System.Text;
import System.Xml;
import System.IO;

var Style : GUIStyle;
var Asset : TextAsset;
private var detailStock : String;
private var scrollPosition : Vector2;
private var show : boolean;
private var addItem : boolean;
private var itemName : String = "";
private var itemPrice : String = "";
private var itemQnty : String = "";
var filepathss : String;
function Start(){
	filepathss = Application.dataPath;

}

function OnGUI()
{
    GUI.Box(Rect(0,0,Screen.width,Screen.height),"",Style);
    if(show == false && addItem == false)
    {
        if(GUI.Button(Rect(0,0,100,30),"Show"))
        {
            ReadXml();
            show = true;
        }          
    }
    if(addItem == false && show == false)
    {
        if(GUI.Button(Rect(0,40,100,30),"Add"))
        {
            addItem = true;
        }
    }
   
   
    if(addItem == true)
    {
        GUI.Box(Rect(0,0,300,20),"Enter Iteam Name");
        itemName = GUI.TextField (Rect (0, 30, 200, 20), itemName, 25);
        GUI.Box(Rect(0,60,300,20),"Enter Price");
        itemPrice = GUI.TextField (Rect (0, 90, 200, 20), itemPrice, 25);
        GUI.Box(Rect(0,120,300,20),"Enter Qnty");
        itemQnty = GUI.TextField (Rect (0, 150, 200, 20), itemQnty, 25);
        if(GUI.Button(Rect(0,180,100,20),"Save"))
        {
            WriteToXmlFile();
            addItem = false;
        }
    }
    if(show == true)
    {
        GUILayout.BeginArea (Rect (0,100,200,500));
        scrollPosition = GUILayout.BeginScrollView (scrollPosition, GUILayout.Width (200), 
                                 GUILayout.Height (100));
     
        GUILayout.TextField (detailStock);
      
        if (GUILayout.Button ("Close"))
        {
            show = false;
            detailStock = "";
        }
     
        GUILayout.EndScrollView ();
        GUILayout.EndArea ();
    }

}
   

function ReadXml()
{
    // I have my xml file stored inside Asset/XmlDocs/Stock.xml 
    var filepath : String = Application.dataPath+"/XmlDocs/"+"Stock"+".xml";
    var xmlDoc : XmlDocument = new XmlDocument();
    // Checking if file exist or not
    if(File.Exists (filepath))
    {
           //loading file from Asset/XmlDocs/Stock.xml 
           xmlDoc.Load( filepath );
           // getting the first node in xml into a list
           var Stock_list : XmlNodeList = xmlDoc.GetElementsByTagName("Stock");
           // running a loop through all stock node present in our xml, we only have 1
           for(var i : int = 0; i < Stock_list.Count;i++)
           {
                  // getting child nodes of stock, like Rice and Wheat in a list
                  var StockItems_list : XmlNodeList = Stock_list.Item(i).ChildNodes;
                  // running a loop through all items present in the stock
                  for(var j : int = 0; j < StockItems_list.Count; j++)  
                  {
                        // taking the properties of a item into a list like Price and Quantity
                        var StockItemsProperties_list : XmlNodeList = StockItems_list.Item(i).ChildNodes;
                        // Getting Names of Items like Rice and Wheat
                        detailStock+="\n"+StockItems_list[j].Name+"\n";
                        // We know that Price is stored at Oth element of StockItemsProperties_list
                        detailStock+=StockItemsProperties_list[0].Name+"  ";
                        // Inner Text of StockItemsProperties_list[0] (Price node) Contains the money
                        detailStock+=StockItemsProperties_list[0].InnerText+" "+"Rs"+"\n";
                        // We know that Qunty is stored at 1st element of StockItemsProperties_list
                       detailStock+=StockItemsProperties_list[1].Name+"  ";
                    //Inner Text of StockItemsProperties_list[1] (Quantity node) Contains the Quantity in Kg
                       detailStock+=StockItemsProperties_list[1].InnerText+" "+"Kg"+"\n";
                       // detailStock is just a string variable to show these value in a GUI
                }
          }
     }
}


function WriteToXmlFile()
{
    // checking if we assigned xml in Inspector
    if(Asset)
    {
          // creating a new XmlDocument
          var xmlDoc : XmlDocument = new XmlDocument();
          // loading our Xml file
          xmlDoc.LoadXml ( Asset.text );
          // getting stock node ( root node or first node in the xml file)
          var elmRoot : XmlElement = xmlDoc.DocumentElement;
          // Creating a Element(Item) with the values we entered in GUI
          var iTemName : XmlElement = xmlDoc.CreateElement(itemName);
          // Creating a Element(Price) which will be the child of Item
          var iTemPrice : XmlElement = xmlDoc.CreateElement("Price");
          // Putting cost inside Price tag as a Text
          iTemPrice.InnerText = itemPrice;
          // Creating a Element(Qnty) which will be the child of Item
          var iTemQnty : XmlElement = xmlDoc.CreateElement("Qnty");
          // Putting quantity inside Qnty tag as a Text
          iTemQnty.InnerText = itemQnty;
          // Finally Closing all tags as per there parrent node
          // So they look like this
          // <Stock>
          //   <ABC>
          //     <Price>45</Price>
          //     <Qnty>54</Qnty>
          //   </ABC>
          //   <XYZ>
          //     <Price>45</Price>
          //     <Qnty>3</Qnty>
          //   </XYZ>
          // </Stock>
          iTemName.AppendChild(iTemPrice);
          iTemName.AppendChild(iTemQnty);
          elmRoot.AppendChild(iTemName);
   
          xmlDoc.Save(Application.dataPath+"/XmlDocs/"+"Stock.xml");
   
          itemName = ""; itemPrice = ""; itemQnty = "";
    }

}