// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};
