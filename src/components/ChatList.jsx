import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

function ChatList() {
  return (
    <div className="relative lg:bottom-[41.5rem] lg:right-[20rem] flex w-full h-[60px]">
      {/* left side */}
      <div className="shrink-0 relative flex-[50%]">
        <h2 className="flex relative left-5 top-0.5 text-lg font-bold items-center">
          Messages
        </h2>
        {/* search area */}
        <div
          className="flex relative w-full h-12 items-center justify-center shrink-0"
          style={{ padding: "0 15px" }}
        >
          <div className="w-full">
            <AiOutlineSearch className="absolute top-[17px] text-sm left-[18px] shrink-0 fill-[#676767]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none rounded-xl bg-white border-none text-sm p-[6px] h-[38px] pl-5 w-full"
            />
          </div>
        </div>
        {/*  search area end */}
        <div className="w-full relative flex shrink-0">
          <p className="flex items-center mt-1 left-6 text-xs text-black relative opacity-55">
            Sort by &nbsp;&nbsp;
            <a href="#" className="text-[#2d9cdb] text-xs relative right-4">
              <span>Newest</span> &nbsp;
              <MdKeyboardArrowDown className="w-3 h-3 relative ml-14 mt-[-14px]" />
            </a>
          </p>
        </div>

        {/* chat list */}
        <div className="container bg-[#ffffff] w-full relative h-[36rem] overflow-y-auto">
          {/**************** * chat 1 ***********************/}
          <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/chat1/user.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            <div className="relative flex shrink-0 w-2.5 h-2.5 right-4 bottom-3.5">
              <img src="images/chat1/pin.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-3">
                  John Doe
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-16 shrink-0">
                  How are you doing
                </p>
              </div>
            </div>
          </div>

          {/* chat 2 */}
          <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] bg-[#eee] rounded-lg"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user2.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Travis Barker
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-16 shrink-0">
                  How are you doing
                </p>
              </div>
            </div>
          </div>


            {/* chat 3 */}
            <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user3.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Kate Rose
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-12 shrink-0">
                you: See you tomorrow!
                </p>
              </div>
            </div>
          </div>


          {/* chat 4 */}
          <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user4.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Robert Parker
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-[5.6rem] shrink-0">
                Awesome!
                </p>
              </div>
            </div>
          </div>


         {/* chat 5 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user5.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Rick Owens
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-20 shrink-0">
                Good idea 🤩
                </p>
              </div>
            </div>
          </div>


           {/* chat 6 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user6.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                George Orwell
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-[3.3rem] shrink-0">
                you: Literally 1984 🤨
                </p>
              </div>
            </div>
          </div>


           {/* chat 7 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user7.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Franz Kafka
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-[3.2rem] shrink-0">
                Are you interested for..
                </p>
              </div>
            </div>
          </div>


            {/* chat 8 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user8.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Tom Hardy
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-[3.8rem] shrink-0">
                Smells like design..
                </p>
              </div>
            </div>
          </div>


            {/* chat 9 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user9.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Vivienne Westwood
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-[3.8rem] shrink-0">
                Smells like design..
                </p>
              </div>
            </div>
          </div>

            {/* chat 10 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user10.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Anthony Paul
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-[3.2rem] shrink-0">
                Check out my page 🤩
                </p>
              </div>
            </div>
          </div>


           {/* chat 11 */}
         <div
            className="flex relative w-[21rem] items-center cursor-pointer shrink-0 
          p-[15px] h-[65px] hover:bg-[#eee] hover:rounded-lg hover:transition-all"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="relative min-w-[45px] h-[45px] mr-[10px] overflow-hidden">
              <img src="images/user11.png" className="" />
            </div>

            <div className="relative flex shrink-0 right-6 top-1.5">
              <img src="images/chat1/online.png" className="" />
            </div>

            {/* chat detail */}
            <div className="relative w-full">
              <div className="flex justify-between mb-[5px]">
                <h4 className="text-base font-semibold text-[#111] relative right-1">
                Stan Smith
                </h4>
                <p className="text-xs text-[#aaa]">16:45</p>
              </div>

              <div className="flex justify-between relative items-center">
                <p className="text-[#aaa] text-[0.9em] w-full overflow-hidden text-ellipsis user-msg-txt relative right-11 shrink-0">
                Want to see this kicks rn
                </p>
              </div>
            </div>
          </div>







        </div>
      </div>
    </div>
  );
}

export default ChatList;

{/* this will appere when user typing */}
{/* <p className=''>...is typing</p> */}
{/* if new msg come this will appere */}
{/* <p className=''>Awesome!</p> */}
{/* if there is any unread msg this will appere */}
{/* <div className=''><span>3</span></div> */}
{/* <a href="#">
  <img src="images/chat1/tick.png" className="" />
</a> */}
{/* when user doesn't seen msg this will appere */}
{/* <a href="#"><img src="images/singleTick.png" className='' /></a> */}