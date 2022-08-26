import { FaGithub, FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();
  // console.log(session); // debug

  /* If user logged in */
  if (session) {
    return (
      <div className="max-w-[400px] pt-28 px-4 mx-auto text-white flex flex-col justify-center gap-5">
        <h2 className="text-2xl font-bold">
          Welcome, {session.user.name.split(" ")[0]}
        </h2>
        <p>Signed in as {session.user.email}</p>
        <div className="mx-auto">
          <Image
            className="rounded-full"
            src={session.user.image}
            alt="user avatar"
            width={100}
            height={100}
          />
        </div>
        <button
          className="p-3 bg-red-600 flex justify-center items-center gap-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  /* user is not authenticated */
  return (
    <div className="max-w-[400px] pt-28 px-4 mx-auto text-white flex flex-col justify-center gap-5">
      <h2 className="text-3xl font-bold">Login</h2>
      <p>Choose the account you want to sign in with.</p>
      <button
        className="p-3 bg-gray-600 flex justify-center items-center gap-2"
        onClick={() => signIn("github")}
      >
        <FaGithub />
        <span>
          Sign with <b>GitHub</b>
        </span>
      </button>
      <button
        className="p-3 bg-blue-600 flex justify-center items-center gap-2"
        onClick={() => signIn("google")}
      >
        <FaGoogle />
        <span>
          Sign with <b>Google</b>
        </span>
      </button>
    </div>
  );
};

export default Account;
