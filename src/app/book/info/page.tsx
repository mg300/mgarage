"use client";
import React from "react";
import Link from "next/link";
import Button from "@/app/components/Button/Button";

function Page() {
  return (
    <div className="min-h-screen pt-40 font-body mx-auto max-w-[80rem] ">
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20 flex items-center justify-center">
        <div className="text-center flex flex-col">
          <span className="font-bold text-3xl text-green-700">Twoja wizyta wkrótce zostanie potwierdzona.</span>
          <span className="text-xl text-gray-600">Czekaj na wiadomość!</span>
          <div className="w-auto mt-10">
            <Link href="/">
              <Button type="submit" color="red">
                Przejdź na stronę główną
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
