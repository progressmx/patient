import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import SideNavContainer from "~/componets/sidenavcontainer";
import NavBar from "~/componets/navbar";

export const loader: LoaderFunction = async({request})=>
{
  const userId = await requireUserId(request)
  return userId
}

export default function Index() {

  const userId = useLoaderData()
  return (
    <>
       <NavBar />
      <div className='relative top-20 left-[20%] h-auto w-[80%] p-8 flex flex-col'>
        <h2>Hello user with id {userId} </h2>
      </div>
    </>
  );
}
