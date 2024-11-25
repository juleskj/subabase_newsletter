import { getSubs, postSub } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function page() {
  const subs = await getSubs();

  async function send(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await postSub(data);

    //refrecher dataen så den bliver vist med det samme på siden.
    revalidatePath("/");
  }

  return (
    <div>
      <form
        action={send}
        className=" [&>*]:capitalize flex flex-col md:w-1/5 mx-auto rounded-md border-2 border-gray-300 py-2 px-3 my-5 gap-1 "
      >
        <label htmlFor="name" className="font-bold">
          name{" "}
        </label>
        <input
          className="rounded-md border-2 border-gray-400 py-2 px-1 "
          id="name"
          type="text"
          name="name"
          placeholder="write your name"
        />
        <label htmlFor="email" className="font-bold">
          email
        </label>
        <input
          className="rounded-md border-2 border-gray-400 py-2 px-1 "
          id="email"
          type="email"
          name="email"
          placeholder="write your name"
        />
        <button
          type="subit"
          className="bg-black text-white py-2 px-4 rounded-md my-3 outline outline-2 outline-black hover:outline-offset-2 "
        >
          {" "}
          Subsribe
        </button>
      </form>

      <h1></h1>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 mx-5 ">
        {/* hver af dem skal være et Link component hvor man sender parameter med til en side. */}
        {subs.map((sub) => (
          <Link key={sub.id} href={`/`}>
            <li className="border border-black py-2 px-1">
              {sub.name} <br />
              {sub.email}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default page;
