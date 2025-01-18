import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Meals not implemented.");
  return db.prepare("select * from meals").all();
};

export const getMeal = (id) => {
  return db.prepare(`select * from meals where slug = ?`).get(id);
};
