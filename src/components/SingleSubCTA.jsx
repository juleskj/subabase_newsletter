"use client";

import Link from "next/link";
import { DeleteSub } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";

const SingleSubCTA = ({ id, name, email }) => {
  console.log("Props received in SingleSubCTA:", { id, name, email });
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  return (
    <Link key={id} href={`/update/${id}`}>
      <li className="border border-black py-2 px-1">
        {name} <br />
        {email}
      </li>
    </Link>
  );
};

export default SingleSubCTA;
