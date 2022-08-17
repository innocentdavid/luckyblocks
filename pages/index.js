import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LUCKYBLOCKS - Home</title>
        <meta name="description" content="LUCKYBLOCKS - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* hero start */}
      <div className={`${styles.hero} w-full overflow-hidden md:h-[90vh]`}>
        <nav className="flex justify-between items-center text-white mt-5">
          <img src="/images/luckblocks.png" alt="luckyblocks_logo" width="200px" className="logo mt-[-10px]" />

          <div className="nav-items hidden md:flex items-center lg:gap-7 gap-4 lg-gap-6 font-['Tw Cen MT'] text-xs text-md-sm">
            <div className="">Home</div>
            <div className="border border-gray-800 h-5"></div>
            <div className="">DEX</div>
            <div className="border border-gray-800 h-5"></div>
            <div className="">Buy Crypto</div>
            <div className="border border-gray-800 h-5"></div>
            <div className="">Docs</div>
            <div className="flex items-center gap-2 px-4 py-1 border border-[#2AD5FB] text-[#2AD5FB] rounded-full">
              <img src="/images/link.svg" alt="link" />
              <div>Connect Wallet</div>
            </div>
          </div>

          <div className="md:hidden">MENU</div>
        </nav>

        <div className="lg:my-[140px] my-[90px]">
          <h1 className={`${styles.heroTitle}`}><span>CHANGE YOUR LIFE</span> <br /> <div className="mt-1"></div> <span>WITH FEW SIMPLE SPINS!</span></h1>
          <p className="w-full md:w-[50%] text-gray-200 mt-5 font-['Tw Cen MT'] text-xs md:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
          <button className={`${styles.heroBtn} md:text-lg text-sm`}>PLAY NOW!</button>
        </div>
      </div>
      {/* hero end */}

      {/* section 2 start */}
      <div className={`${styles.section2} text-white w-full lg:px-72 md:px-70 px-4 pb-10 relative z-50`}>
        <img src="/images/Zasób 6.png" alt="" className="hidden md:block w-[80px] absolute left-[100px] top-[17%]" />
        <img src="/images/Zasób 10.png" alt="" className="hidden md:block w-[50px] absolute left-[150px] bottom-[37%]" />
        <img src="/images/Zasób 3.png" alt="" className="hidden md:block w-[80px] absolute right-[120px] bottom-[23%]" />
        <img src="/images/Zasób 7.png" alt="" className="hidden md:block w-[50px] absolute right-0 bottom-[47%]" />
        <img src="/images/Zasób 13.png" alt="" className="hidden md:block w-[60px] absolute right-[140px] top-[18%]" />
        <img src="/images/Zasób 4.png" alt="" className="hidden md:block w-[40px] absolute right-[230px] top-[5%]" />
        <img src="/images/Zasób 13.png" alt="" className="hidden md:block w-[40px] absolute right-[50px] top-[1%]" />

        <div className="lg:mt-[-80px] mt-[-25px] flex items-center gap-4 px-8 w-full overflow-auto text-[.6rem] font-['Tw Cen MT'] font-bold italic scroll-m-0 -scroll-mb-2.5">
          <div className="px-3 py-1 bg-[#000007] rounded-t-lg">BTC</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">ETH</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">KRSTM</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">MATIC</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">MY&nbsp;TICKETS</div>
        </div>

        {/* <div className={`${styles.section2Main} p-8 rounded-[30px] bg-[#370086] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 pb-80`}> */}
        <div className={`${styles.section2Main} md:p-8 p-1 rounded-[30px] pb-16 z-10`}>
          <div className="grid place-items-center">
            <h4 className="font-['Tw Cen MT'] text-sm md:text-lg text-center font-bold">CURRENT SELECTED CRYPTO JACKPOT ACCUMULATED CARD</h4>
            <div className="flex items-center gap-5 border border-[#13EBFD] py-3 px-12 mt-3 rounded-full font-bold text-xs md:text-lg">
              <div className={`${styles.gradientText}`}><span>2.35</span> BTC</div>
              <div className={`${styles.gradientText} text-[2rem]`}>~</div>
              <div><span>90,&nbsp;000</span>&nbsp;<span>USD</span></div>
            </div>
          </div>

          <h1 className="font-['Tw Cen MT'] font-bold text-xl mt-12 text-center">LATEST WINNERS</h1>

          <div className="relative flex flex-col md:flex-row mt-8 lg:pl-16 md:pl-10 text-center md:text-start py-5 rounded-[30px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:w-[113%] w-[110%] md:-ml-[2.8rem] -ml-[.9rem]">
            <div className="flex flex-col">
              <div>
                <small style={{ fontSize: '.6rem' }}>Latest raffle winner</small>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <img src="/images/star.svg" alt="" width="15px" />
                  <h4 style={{ fontFamily: 'Tw Cen MT, Condensed', letterSpacing: 0 }}>CLARCSON201941</h4>
                </div>
                <div></div>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <div className="flex items-center w-fit gap-2 bg-gray-600 rounded-full px-3 py-1 mt-5" style={{ fontSize: '.7rem' }}>
                  <small>x01sf03f1303fsaf313T#TFsadfwffaG3...</small>
                  <img src="/images/copy.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex justify-center"><div className="md:min-h-full w-[60%] md:w-0 text-center border border-gray-400 md:ml-24 md:mr-10 my-5 md:mt-0"></div></div>

            <div className="flex flex-col">
              <div>
                <small style={{ fontSize: '.6rem' }}>Latest raffle winner</small>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <img src="/images/star.svg" alt="" width="15px" />
                  <h4 style={{ fontFamily: 'Tw Cen MT, Condensed', letterSpacing: 0 }}>CLARCSON201941</h4>
                </div>
                <div className="min-h-1"></div>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <div className="flex items-center w-fit gap-2 bg-gray-600 rounded-full px-3 py-1 mt-5" style={{ fontSize: '.7rem' }}>
                  <small>x01sf03f1303fsaf313T#TFsadfwffaG3...</small>
                  <img src="/images/copy.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start mt-5 md:mt-0 md:ml-8">
              <div className="md:transform md:rotate-90 text-[.6rem] -mr-5">WINNING&nbsp;NUMBER</div>
            </div>

            <img src="/images/Zasób 9.png" alt="" width="15%" className={`${styles.section2Ball} p-0 ml-5 rounded-full absolute -right-8 top-0 hidden md:block`} />
          </div>

          <div className="flex flex-col gap-14 mt-20 px-10">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="flex items-center gap-5 mb-7 md:mb-0">
                <div className="rounded-full p-1 border"><img src="/images/bitcoin-btc-logo.png" alt="" width="55px" /></div>

                <div className="font-['Tw Cen MT']">
                  <div><span className="font-bold mr-2">BITCOIN</span><span className="font-['Poppins'] text-[#F807E7]">BTC</span></div>
                  <div><span className="text-[#A4A4A4] text-xs mr-2">PRICE</span><span>45,480.15 $</span></div>
                  <div><span className="text-[#A4A4A4] text-xs mr-2">VOLUMEN (24H):</span><span>7,918,153.71 $</span></div>
                </div>
              </div>

              <div>
                <img src="/images/chart.png" alt="chart" style={{ width: "250px" }} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-16 font-['Tw Cen MT']">
              <div className="md:w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div className="md:w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-16 font-['Tw Cen MT']">
              <div className="md:w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div className="md:w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-16 font-['Tw Cen MT']">
              <div className="md:w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div className="md:w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3"><button className={styles.heroBtn}>PLAY NOW!</button></div>
      </div>
      {/* section 2 end */}

      {/* section3 */}
      <div className="w-full lg:px-60 md:px-15 px-5 font-['Tw Cen MT'] bg-black text-white pt-28 pb-20">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center mb-20"><span className={styles.bgGradient}>WINNING</span> HAS NEVER BEEN <span className={styles.bgGradient}>EASIER</span>.</h1>

        <div className="lg:px-12 md:px-5 px-0">
          <div className="border rounded-[30px] py-5 px-2">
            <h1 className="font-bold text-3xl italic mb-6 px-8">LOTTERY LOGS</h1>

            <div className='flex flex-col gap-10 px-10 h-[400px] overflow-auto'>
              <div>
                <div className="flex justify-between items-center gap-5 text-xs">
                  <div className="text-[#8E90FF]">FEB. 20TH 2022 6:40PM</div>
                  <div className="border rounded-full py-1 px-4 text-xs">DRAW</div>
                  <div><span className="text-[#8E90FF] mr-3">WINNERS:</span><span>JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS</span></div>
                  <div className="text-[#8E90FF] underline">+2MORE</div>
                </div>

                <div className="w-full mt-4"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div>
                <div className="flex justify-between items-center gap-5 text-xs">
                  <div className="text-[#8E90FF]">FEB. 20TH 2022 6:40PM</div>
                  <div className="border rounded-full py-1 px-4 text-xs">DRAW</div>
                  <div><span className="text-[#8E90FF] mr-3">WINNERS:</span><span>JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS</span></div>
                  <div className="text-[#8E90FF] underline">+2MORE</div>
                </div>

                <div className="w-full mt-4"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div>
                <div className="flex justify-between items-center gap-5 text-xs">
                  <div className="text-[#8E90FF]">FEB. 20TH 2022 6:40PM</div>
                  <div className="border rounded-full py-1 px-4 text-xs">DRAW</div>
                  <div><span className="text-[#8E90FF] mr-3">WINNERS:</span><span>JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS</span></div>
                  <div className="text-[#8E90FF] underline">+2MORE</div>
                </div>

                <div className="w-full mt-4"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div>
                <div className="flex justify-between items-center gap-5 text-xs">
                  <div className="text-[#8E90FF]">FEB. 20TH 2022 6:40PM</div>
                  <div className="border rounded-full py-1 px-4 text-xs">DRAW</div>
                  <div><span className="text-[#8E90FF] mr-3">WINNERS:</span><span>JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS</span></div>
                  <div className="text-[#8E90FF] underline">+2MORE</div>
                </div>

                <div className="w-full mt-4"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div>
                <div className="flex justify-between items-center gap-5 text-xs">
                  <div className="text-[#8E90FF]">FEB. 20TH 2022 6:40PM</div>
                  <div className="border rounded-full py-1 px-4 text-xs">DRAW</div>
                  <div><span className="text-[#8E90FF] mr-3">WINNERS:</span><span>JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS</span></div>
                  <div className="text-[#8E90FF] underline">+2MORE</div>
                </div>

                {/* <div className="w-full mt-4"><hr className="border-1 border-[#ffffff44]" /></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section3 */}

      {/* footer */}
      <div className="w-full lg:px-72 md:px-20 px-10 font-['Tw Cen MT'] bg-black text-white md:pt-28 pt-10 pb-10">
        <h1 className="md:text-4xl text-3xl text-center md:text-start font-bold">POWERED BY:</h1>

        <div className="flex flex-col md:flex-row gap-7 items-center justify-between mt-8">
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
        </div>

        <div className="flex flex-col items-center w-full mt-20">
          <img src="/images/luckblocks.png" alt="luckyblocks_logo" width="200px" className="" />

          <div className="flex gap-10 mt-7 text-[#C5C6FF]">
            <div><span>T</span>&nbsp;<span>@HASHPOTTEAM</span></div>
            <div><span>T</span>&nbsp;<span>@HASHPOTTEAM</span></div>
          </div>

          <div className="md:mt-14 mt-9 text-center">COPYRIGHT HASHPOT 2022. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
      {/* footer */}
    </div>
  )
}
