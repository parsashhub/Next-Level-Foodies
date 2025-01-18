"use server";

import { seveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // we can perform validations too!
  if (meal.title === "") return { message: "invalid input" };

  await seveMeal(meal);
  revalidatePath("/meals", "page") // default is page, it has a layout value too
  redirect("/meals");
}
