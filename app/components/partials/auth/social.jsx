import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";


const Social = () => {
  return (
    <>
      <ul className="flex">
        <li className="flex-1">
          <button onClick={() => signIn('google')} className="inline-flex h-10 w-10  text-white text-2xl flex-col items-center justify-center rounded-full">
    
            <Image src={'https://img.icons8.com/?size=1x&id=13963&format=png'}
            width={55} height={55} alt="twitter" />
          </button>
        </li>
        <li className="flex-1">
          <a
            href="#"
            className="inline-flex h-10 w-10  text-white text-2xl flex-col items-center justify-center rounded-full"
          >
            <Image src={'https://img.icons8.com/?size=512&id=uQMLhu5kpbUZ&format=png'} 
            width={55} height={55} alt='facebook'/>
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#"
            className="inline-flex h-10 w-10  text-white text-2xl flex-col items-center justify-center rounded-full"
          >
            <Image src={'https://img.icons8.com/?size=1x&id=108786&format=png'}
             width={55} height={55} alt='LinkedIn'/>
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#"
            className="inline-flex h-10 w-10  text-white text-2xl flex-col items-center justify-center rounded-full"
          >
            <Image src={'https://img.icons8.com/?size=512&id=17949&format=png'} 
            width={55} height={55} alt="Google" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
