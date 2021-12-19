// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    const indexOfPotion = this.potions.indexOf(potionName);
    return this.potions.splice(indexOfPotion, 1);
  },
};
