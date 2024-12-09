import Image from "next/image";
import { getSingleSub, DeleteSub, PatchSub } from "@/lib/supabase";
import { redirect } from "next/navigation";

const page = async ({ params }) => {
  const { id } = params;

  // async function DeleteSub(id) {
  //   "use server";

  //   await DeleteSub(id);

  //   //refrecher dataen så den bliver vist med det samme på siden.
  //   revalidatePath("/");
  // }

  async function PatchSub(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await PatchSub(data, id);

    //refrecher dataen så den bliver vist med det samme på siden.
    redirect("/apitest/");
  }

  const sub = await getSingleSub(id);
  console.log(params);

  return (
    <form className=" [&>*]:capitalize flex flex-col md:w-1/5 mx-auto rounded-md border-2 border-gray-300 py-2 px-3 my-5 gap-1 ">
      <label htmlFor="name" className="font-bold">
        name
      </label>
      <input
        className="rounded-md border-2 border-gray-400 py-2 px-1 "
        id="name"
        type="text"
        name="name"
        defaultValue={sub.name}
      />
      <label htmlFor="email" className="font-bold">
        email
      </label>
      <input
        className="rounded-md border-2 border-gray-400 py-2 px-1 "
        id="email"
        type="email"
        name="email"
        defaultValue={sub.email}
      />
      <button
        formAction={PatchSub.bind(null, { id })}
        className="bg-green-600 text-white py-2 px-4 rounded-md my-3 outline outline-2 outline-black hover:outline-offset-2 "
      >
        update
      </button>

      {/* <button
        formAction={DeleteSub.bind(null, { id })}
        className="z-10 bg-red-500 text-white py-2 px-4 rounded-md my-3 outline outline-2 outline-black hover:outline-offset-2 "
      >
        DELETE
      </button> */}
    </form>
  );
};

export default page;
