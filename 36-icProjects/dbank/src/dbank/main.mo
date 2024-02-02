import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 2342465768698;
  // Debug.print(debug_show(id));

  func topUpp() {
    currentValue += 1;
  };

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawal(amount: Nat) {
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };
}
