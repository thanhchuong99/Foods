import dynamic from 'next/dynamic';

const Backdrop = () => null;
Backdrop.BlockUI = dynamic(() => import('./BlockUI'), { ssr: false });

export default Backdrop;
