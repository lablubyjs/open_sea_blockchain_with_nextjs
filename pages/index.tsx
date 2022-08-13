import {NextPage} from 'next';
import {useWeb3} from '@3rdweb/hooks';

import {Header, Hero} from '@/components';
import {client} from '@/lib';
import {useEffect} from 'react';
import toast, {Toaster} from 'react-hot-toast';

const styles = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

const Home: NextPage = () => {
  const {address, connectWallet} = useWeb3();

  const welcomeUser = (userName: string, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);

      welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div className={styles.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={styles.walletConnectWrapper}>
          <button
            className={styles.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className={styles.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
