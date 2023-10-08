"use client"
import React, { useCallback } from "react";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineBell } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { SlPeople } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { BiFace } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from 'react-hot-toast';
import { graphqlClient } from "@/clients/api";
import { VerifyUserGoogleUserToeknDocument } from "@/gql/graphql";

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenus: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <FaMagnifyingGlass />,
  },
  {
    title: "Notifications",
    icon: <AiOutlineBell />,
  },
  {
    title: "Messages",
    icon: <FaRegEnvelope />,
  },
  {
    title: "Lists",
    icon: <LiaClipboardListSolid />,
  },
  {
    title: "Communities",
    icon: <SlPeople />,
  },
  {
    title: "Verified",
    icon: <RiTwitterXLine />,
  },
  {
    title: "Profile",
    icon: <BiFace />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error("Google Token not found");
    const { verifyGoogleToken } = await graphqlClient.request(
      VerifyUserGoogleUserToeknDocument,
      { token: googleToken })

      toast.success("Verfied success");
      console.log(verifyGoogleToken);
    
  }, [])

  return (
    <div>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 pl-24 pt-2 overflow-auto">
          <div className="w-fit mb-5 transition-all h-fit rounded-full p-2 cursor-pointer text-4xl hover:bg-gray-500">
            <BsTwitter />
          </div>
          <ul>
            {sidebarMenus.map((item) => (
              <li className="h-fit" key={1}>
                <div className="cursor-pointer transition-all inline-flex box-border rounded-full p-2 hover:bg-slate-600 justify-start items-center gap-4 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="" >{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center w-48 cursor-pointer font-bold p-[15px] hover:bg-blue-700 transition-all bg-blue-500 rounded-full h-14 justify-center flex">Post</div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-400 overflow-auto no-scrollbar h-screen">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-4">
          <div className="p-3 w-fit border rounded-lg">
            <p className="text-center">New to Twitter?</p>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}
