import { LoaderFunction } from "@remix-run/node";
import { requireUserId,getUser } from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import SideNavContainer from "~/componets/sidenavcontainer";
import NavBar from "~/componets/navbar";
import Sidenav from "~/componets/sidenav";
import { json } from "react-router-dom";


export const loader: LoaderFunction = async({request})=>
{
  const userId = await getUser(request)
  return json({userId})
}

export default function Index() {

  const {userId} = useLoaderData()
  const name = userId.fullName.split(" ")

  return (
    <>
      <div className='relative top-20 left-[20%] h-auto w-[80%] p-8 flex flex-col'>
        <h2>Hello user with {userId.fullName} </h2>
      </div>
    </>
  );
}
