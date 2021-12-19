// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    const indexOfPotion = this.potions.indexOf(oldName);
    return this.potions.splice(indexOfPotion, 1, newName);
  },
};
