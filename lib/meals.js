import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db", { readonly: false });

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Meals not implemented.");
  return db.prepare("select * from meals").all();
};

export const getMeal = (id) => {
  return db.prepare(`select * from meals where slug = ?`).get(id);
};

export async function seveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  let extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}-${new Date()}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const buffer = await meal.image.arrayBuffer();
  stream.write(Buffer.from(buffer), (error) => {
    if (error) throw new Error("saving image failed :(");
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run(meal);
}
