uidobj = CS.UnityEngine.GameObject.Find("/BetaWatermarkCanvas(Clone)/Panel/TxtUID"):GetComponent("Text");
uid = uidobj.text;
uid = uid:gsub("UID:", "<color=#c119b1>YuukiPS:</color>")
uidobj.text = "<color=#00dbe5>"..uid.."</color>"