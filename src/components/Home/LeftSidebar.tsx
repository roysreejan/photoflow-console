"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Home,
  LogOutIcon,
  MessageCircle,
  Search,
  SquarePlus,
} from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_API_URL } from "../../../server";
import { setAuthUser } from "../../../store/authSlice";
import { toast } from "sonner";
import CreatePostModel from "./CreatePostModel";

const LeftSidebar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogout = async () => {
    await axios.post(
      `${BASE_API_URL}/users/logout`,
      {},
      { withCredentials: true }
    );
    dispatch(setAuthUser(null));
    toast.success("Logout Successfully");
    router.push("/auth/login");
  };

  const handleSidebar = (label: string) => {
    if (label === "Home") {
      router.push("/");
    }
    if (label === "Logout") {
      handleLogout();
    }
    if (label === "Profile") {
      router.push(`/profile/${user?._id}`);
    }
    if (label === "Create") {
      setIsDialogOpen(true);
    }
  };

  const SidebarLinks = [
    {
      icon: <Home />,
      label: "Home",
    },
    {
      icon: <Search />,
      label: "Search",
    },
    {
      icon: <MessageCircle />,
      label: "Message",
    },
    {
      icon: <Heart />,
      label: "Notification",
    },
    {
      icon: <SquarePlus />,
      label: "Create",
    },
    {
      icon: (
        <Avatar className="w-9 h-9">
          <AvatarImage src={user?.profilePicture} className="h-full w-full" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      label: "Profile",
    },
    {
      icon: <LogOutIcon />,
      label: "Logout",
    },
  ];
  return (
    <div className="h-full">
      <CreatePostModel
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <div className="lg:p-6 p-3 cursor-pointer">
        <div
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mt-[-2rem]"
          />
        </div>
        <div className="mt-6">
          {SidebarLinks.map((link) => {
            return (
              <div
                key={link.label}
                className="flex items-center mb-2 p-3 rounded-lg group cursor-pointer transition-all duration-200 hover:bg-gray-100 space-x-2"
                onClick={() => handleSidebar(link.label)}
              >
                <div className="group-hover:scale-110 transition-all duration-200">
                  {link.icon}
                </div>
                <p className="lg:text-lg text-base">{link.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
