import React from 'react'

function ChatArea() {
  return (
    <div className="relative lg:absolute lg:top-2 lg:right-[15rem] lg:w-[45rem] w-full custom-hight top-[42em] bg-[#fff]">
    {/* // right side ////// */}
    <div className="w-full h-[60px] cursor-pointer flex items-center relative p-2"
    style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className='relative flex items-center'>
        <img src="images/userChat.png" className="" alt="" />
      </div>  
      <h3 
      className="font-medium items-center leading-[1.2em] ml-3">
        Travis Barker<br /><span className="text-[0.8em] text-[#555] pr-[52px]">Online</span>
      </h3>
      
      <ul className='flex items-center left-28 lg:left-[30rem] gap-1 relative'>
        <li><img src="images/video call.png" className="cursor-pointer"/></li>
       <li><img src="images/userInfo.png" className="cursor-pointer" alt="" /></li>
      </ul>
    </div>

    <div className="relative flex flex-col h-full w-full bg-[#FAFAFA] overflow-y-auto">
        <div className='relative w-full pl-4 flex bottom-24'>
        <img src="images/chat img.png" className="" />
        </div>
          {/* msgsss */}
        <div className="shrink justify-start bottom-20 text-start p-3 bg-[#F4F4F7] rounded-2xl relative w-fit left-4"
        >
          <p className='relative text-sm'>
            Hey, How Are You?
          </p>
          <span className='block mt-1 text-sm opacity-50'>11:10</span>
        </div>

        <div className="shrink justify-start mt-2 bottom-20 text-start p-3 bg-[#F4F4F7] rounded-2xl relative w-fit left-4">
          <p className='relative text-sm'>
          See you at office tomorrow!
          </p>
          <span className='block mt-1 text-sm opacity-50'>11:10</span>
        </div>


        <div className="flex relative justify-between gap-6 items-center -mt-16">
          <div className="w-full h-[1px] bg-[#eee]"></div>
          <span className="text-[#00000073] text-xs font-medium leading-normal">Today</span>
          <div className="w-full h-[1px] bg-[#eee]"></div>
        </div>


        <div className="shrink justify-start mt-32 bottom-28 text-start p-3 bg-[#F4F4F7] rounded-2xl relative w-fit left-4 mr-14"
        style={{borderRadius: '0rem 1rem 1rem 1rem'}}
        >
          <p className='relative text-sm'>
          Hello! Have you seen my backpack anywhere in office?
          </p>
          <span className='block mt-1 text-sm opacity-50'>11:10</span>
        </div>

      {/* frnd msg */}
        <div className="shrink justify-start mt-4 ml-14 lg:left-[19.4rem] right-4 bottom-28 text-start p-3 bg-[#F4F4F7] rounded-2xl relative w-fit"
        style={{borderRadius: '1rem 1rem 0rem 1rem'}}
        >
          <p className='relative text-sm'>
          Hi, yes, David have found it, ask our concierge 👀 
          </p>
          <span className='block mt-1 text-sm opacity-50'>11:10</span>
        </div>

      

      <div className="relative mt-[-3.7rem] lg:-mt-10 w-full rounded-md h-[60px] bg-[#ffffff] p-[15px] flex justify-between items-center">
        <img src="images/pin icon.png" className="cursor-pointer text-3xl text-[#51585c]" />
        <input type="text" placeholder="Type your message here.."
        className='relative bg-[#fafafa] w-full rounded-xl outline-none border-none'
        style={{margin: '0 20px', padding: '10px 20px'}}
        />
        <p className="hidden">Send message</p>
        <p className="text-[#27AE60] text-sm font-medium leading-normal cursor-pointer">Send</p>
      </div>


    </div>
  </div>
  )
}

export default ChatArea