"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import Avvvatars from "avvvatars-react";
const LogOut = ({ data }: any) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const LogOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div>
      {data.session?.user ? (
        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <Avvvatars value={data?.session?.user?.email} style="shape" />
            <p className="text-gray-100 items-center">
              {" "}
              {data.session.user.email}
            </p>
          </div>
          <button
            onClick={LogOut}
            className=" bg-red-600 hover:bg-red-700 text-white px-6 py-1 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            log out
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth/login")}
          className=" bg-red-600 hover:bg-red-700 text-white px-6 py-1 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
        >
          login
        </button>
      )}
    </div>
  );
};

export default LogOut;
