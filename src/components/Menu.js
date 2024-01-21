import React from 'react'
// import MasterCard from 'public/images/mastercard-line.png'

function Menu() {
  return (
    <div className="relative right-[23.5rem] mt-2 hidden lg:block w-[3.375rem] h-[43rem] shrink-0 bg-[#fafafa] rounded-bl-lg">
    <div className="">
      <a href="#">
        <img src="images\mastercard-line.png" 
        className="flex justify-center items-center shrink-0 ml-[10px] pt-[18px] mb-3" 
        />
      </a>
      <a href="#">
        <img src="images/user.png" className="pt-2 flex ml-[10px] shrink-0" alt="" />
      </a>
      <hr className=" w-9 opacity-05 mt-[18px] ml-[9px]" />
      <a href="#">
        <img src="images/browse.png" className=" mt-6 ml-[18px]" />
      </a>
      <a href="#">
        <img src="images/chats.png" className="mt-6 ml-[1.5px]" />
      </a>
      <a href="#">
        <img src="images/video call.png" className="ml-1.5"/>
      </a>
      <a href="#">
        <img src="images/music.png" className="ml-1.5"/>
      </a>
      <a href="#">
        <img src="images/more.png" className="ml-1.5"/>
      </a>

    </div>

    <div className="mt-56 ml-1.5">
      <a href="#">
        <img src="images/setting.png" className=""/>
      </a>
      <a href="#">
        <img src="images/login.png" className=""/>
      </a>
    </div>
  </div>
  )
}

export default Menu