({
  startGame: function (component, event, helper) {
    //acess combobox
    let gameModeComboBox = component.find("gameMode");

    //acess the value of combobox
    let selectedValue = gameModeComboBox.get("v.value");
    console.log("Start Game is button is clicke with value " + selectedValue);

    const selectedMode = component.get("v.selectedMode");
    //update the value of selectedMode
    component.set("v.selectedMode", selectedValue);

    if (selectedMode) {
      //find board component
      const boardComp = component.find("boardComp");
      //call the aura method
      boardComp.startGame();
    }
  },
  reshuffleBorad: function (component, event, helper) {
    console.log("Reshuffle Button is Clicked");
  }
});
