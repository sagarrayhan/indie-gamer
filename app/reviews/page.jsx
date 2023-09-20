import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";

const page = async() => {

  const reviews = await getReviews();
  

  return (
    <div>
      <div>
        <Header>Reviews</Header>
      </div>
      <ul className="flex flex-col gap-5 py-2">
        {reviews.map(review=>(
        <li key={review.slug} className="w-80 rounded-t hover:text-xl shadow cursor-pointer">
          <Link href={`/reviews/${review.slug}`}>
            <img
              className="rounded-t"
              src={`/images/${review.slug}.jpg`}
              width="320"
              height="180"
            />
          </Link>
          <h2 className="text-center">{review.title}</h2>
        </li>

        ))}
      </ul>
    </div>
  );
};

export default page;
