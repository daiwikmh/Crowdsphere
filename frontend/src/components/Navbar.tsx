import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { CustomButton } from './../utils/CustomButton';
import { CiSearch } from "react-icons/ci";
import logo from './../crowdlogo.png';



const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive ] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address=
  '0xabc';


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
        title={address ? 'create a campaign' : 'Connect'}
        styles={address ? 'bg-[#1dc071] rounded-lg' : 'bg-[#8c6dfd]'}
        handleClick = {() => {
          if (address) navigate('create-campaign')
            else 'connect()'
        }} />

        <Link to="/Profile">
        <div className='w-12 h-12 rounded-bg bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
          <img src={logo} alt='user' className='w-[60%] object-contain' />
        </div>
        </Link>

      </div>
      
    </div>
  );
};

export default Navbar;
