import matter from "gray-matter";
import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import { log } from "node:console";

export async function readData(slug) {
  const file = await readFile(`./content/${slug}.md`);
  const {
    content,
    data: { title, date, image },
  } = matter(file);
  const body = marked(content);

  return { title, date, image, body , slug};
}

export async function getReviews() {
  
  const slugs= await getSlugs();
 
  const reviews = [];

  for (const slug of slugs){
    const review = await readData(slug);
    reviews.push(review)
  }

  return reviews;
}

export async function getSlugs (){
  const files = await readdir("./content");
  const slugs = files.map((file) => file.slice(0, -".md".length));
  return slugs
}