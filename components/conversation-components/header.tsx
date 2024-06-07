"use client";

import useOtherUser from "@/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import { ChevronLeft, Menu } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import Avatar from "../sidebar/avatar";
import ProfileDrawer from "./profile-drawer";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header = ({ conversation }: HeaderProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return "Active";
  }, [conversation]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
      <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="lg:hidden block text-gray-600 hover:text-black transition cursor-pointer"
          >
            <ChevronLeft size={32} />
          </Link>
          <Avatar user={otherUser} />
          <div className="flex flex-col">
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>
        <Menu
          className="text-gray-600 hover:text-black cursor-pointer transition"
          size={32}
          onClick={() => setOpenDrawer(true)}
        />
      </div>
    </>
  );
};

export default Header;
