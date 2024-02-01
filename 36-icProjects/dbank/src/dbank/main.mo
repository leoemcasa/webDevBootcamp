import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  Debug.print(debug_show(currentValue));

  let id = 2342465768698;
  Debug.print(debug_show(id));
}