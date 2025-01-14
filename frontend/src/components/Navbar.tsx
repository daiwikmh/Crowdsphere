import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { CustomButton } from './../utils/CustomButton';
import { CiSearch } from "react-icons/ci";
import logo from './../crowdlogo.png';
import { IoMenu } from "react-icons/io5";
import { useStateContext } from '../context';
import { metamaskWallet, useConnect } from '@thirdweb-dev/react';


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive ] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { address} = useStateContext();
  const connect = useConnect();
  const metamaskConfig = metamaskWallet();




  return (
    <div className='flex md:flex-row
    flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='rounded-[100px] lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24]'>
        <input type='text' placeholder='Seach For Campaigns' className='flex w-full font-epilogue font-normal text-white
        bg-transparent outline-none placeholder:text-[#4b5264]'/>
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center
        items-center cursor-pointer'>
          <div className='w-[15px] h-[15px] object-contain'>
          <CiSearch />
          </div>

        </div>
      </div>
      <div className='sm:flex hidden flex-row 
      justify-end gap-4'>
        <CustomButton btnType="button"
        title={address ? 'Create a Campaign' : 'Connect'}
        styles={address ? 'bg-[#1dc071] rounded-lg' : 'bg-[#8c6dfd] rounded-lg'}
        handleClick = {() => {
          if (address) navigate('create-campaign')
            else connect(metamaskConfig);
        }} />

        <Link to="/Profile">
        <div className='w-12 h-12 rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
          <img src={logo} alt='user' className='w-[60%] object-contain' />
        </div>
        </Link>

        {/* Mobile Navigation */}

        {/* <div className='sm:hidden flex justify-between
        items-center relative'>
           <div className='w-10 h-10 rounded-3 bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
          <img src={logo} alt='user' className='w-[60%] h-[60%] object-contain' />
        </div>

        <div className='w-9 h-9 object-contain
        cursor-pointer'
        onClick={() => setToggleDrawer(!toggleDrawer)}>
        <IoMenu />
        </div>
        <div className={`absolute top-15 right-0 left-0 bg-slate-950 z-10 shadow-secondary py-4 ${!toggleDrawer} ? '-translate-y-[100vh]' : 'translate-y-0'
        transition-all duration-700`}>
          <ul className='mb-4'>

          </ul>

        </div>
        
        </div> */}

      </div>
      
    </div>
  );
};
 
export default Navbar;
