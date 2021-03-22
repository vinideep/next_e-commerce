import { signIn, signOut, useSession } from "next-auth/client";
import {useState,useEffect} from "react";
    export default function Page() {
    const [session, loading] = useSession();

  return (
    <>
      <>
        <div className="bg-white mt-20 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </>
      {!session && (
        <div className="m-auto w-8 ">
          <p className="text-center">or</p>
          <img
            className="cursor-pointer"
            src="./svg/gmail.png"
            onClick={() => {
              signIn();
            }}
            alt="gmail login"
          />
        </div>
      )}
      {session && (
        <>
          <div className="mt-20">
            
            Signed in as {session.user.name} <br />
            <button onClick={() => {signOut();localStorage.removeItem("userName");}}>Sign out</button>

          </div>
        </>
      )}
    </>
  );
}
