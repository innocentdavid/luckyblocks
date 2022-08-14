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
      <div className={styles.hero}>
        <nav className="flex justify-between items-center text-white mt-5">
          <img src="/images/luckblocks.png" alt="luckyblocks_logo" width="200px" className="logo mt-[-10px]" />

          <div className="nav-items hidden md:flex items-center gap-4 lg-gap-6 font-['Tw Cen MT'] text-xs text-md-sm">
            <div className="">Home</div>
            <div className="">DEX</div>
            <div className="">Buy Crypto</div>
            <div className="">Docs</div>
            <div className="flex items-center gap-2 px-4 py-1 border border-[#2AD5FB] text-[#2AD5FB] rounded-full">
              <img src="/images/link.svg" alt="link" />
              <div>Connect Wallet</div>
            </div>
          </div>

          <div className="md:hidden">MENU</div>
        </nav>

        <div className="my-[140px]">
          <h1 className={styles.heroTitle}><span>CHANGE YOUR LIFE</span> <br /> <div className="mt-1"></div> <span>WITH FEW SIMPLE SPINS!</span></h1>
          <p className="w-full md:w-[50%] text-gray-200 mt-5 font-['Tw Cen MT'] text-xs md:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
          <button className={styles.heroBtn}>PLAY NOW!</button>
        </div>
      </div>
      {/* hero end */}

      {/* section 2 start */}
      <div className={`${styles.section2} text-white w-full px-72 pb-10 relative`}>
        <img src="/images/Zasób 6.png" alt="" className="w-[80px] absolute left-[100px] top-[180px]" />
        <img src="/images/Zasób 10.png" alt="" className="w-[50px] absolute left-[150px] bottom-[380px]" />
        <img src="/images/Zasób 3.png" alt="" className="w-[80px] absolute right-[120px] bottom-[240px]" />
        <img src="/images/Zasób 7.png" alt="" className="w-[50px] absolute -right-[20px] bottom-[450px]" />
        <img src="/images/Zasób 13.png" alt="" className="w-[60px] absolute right-[140px] top-[180px]" />
        <img src="/images/Zasób 4.png" alt="" className="w-[40px] absolute right-[230px] top-[50px]" />
        <img src="/images/Zasób 13.png" alt="" className="w-[40px] absolute right-[50px] top-[10px]" />

        <div className="tabs mt-[-80px] flex items-center gap-4 px-8 text-[.6rem] font-['Tw Cen MT'] font-bold italic">
          <div className="px-3 py-1 bg-[#000007] rounded-t-lg">BTC</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">ETH</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">KRSTM</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">MATIC</div>
          <div className="px-3 py-1 bg-[#59516D] rounded-t-lg">MY TICKETS</div>
        </div>

        {/* <div className={`${styles.section2Main} p-8 rounded-[30px] bg-[#370086] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 pb-80`}> */}
        <div className={`${styles.section2Main} p-8 rounded-[30px] pb-16`}>
          <div className="grid place-items-center">
            <h4 className="font-['Tw Cen MT']">CURRENT SELECTED CRYPTO JACKPOT ACCUMULATED CARD</h4>
            <div className="flex items-center gap-5 border border-[#13EBFD] py-3 px-12 mt-3 rounded-full text-lg font-bold">
              <div className={`${styles.gradientText}`}><span>2.35</span> BTC</div>
              <div className={`${styles.gradientText} ${styles.tilda}`}>~</div>
              <div><span>90, 000</span> USD</div>
            </div>
          </div>

          <h1 className="font-['Tw Cen MT'] font-bold text-xl mt-12 text-center">LATEST WINNERS</h1>

          <div className="relative flex mt-8 pl-16 py-5 rounded-[30px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[113%] -ml-[2.8rem]">
            <div className="flex flex-col">
              <div>
                <small style={{ fontSize: '.6rem' }}>Latest raffle winner</small>
                <div className="flex items-center gap-2"><i>S</i><h4>CLARCSON201941</h4></div>
                <div></div>
              </div>

              <div className="flex items-center gap-2 bg-gray-600 rounded-full px-3 py-1 mt-5" style={{ fontSize: '.7rem' }}>
                <small>x01sf03f1303fsaf313T#TFsadfwffaG3...</small>
                <img src="/images/copy.svg" alt="" />
              </div>
            </div>

            <div className="min-h-full border border-gray-400 ml-24 mr-10"></div>

            <div className="flex flex-col">
              <div>
                <small style={{ fontSize: '.6rem' }}>Latest raffle winner</small>
                <div className="flex items-center gap-2"><i>S</i><h4>CLARCSON201941</h4></div>
                <div className="min-h-1"></div>
              </div>

              <div className="flex items-center gap-2 bg-gray-600 rounded-full px-3 py-1 mt-5" style={{ fontSize: '.7rem' }}>
                <small>x01sf03f1303fsaf313T#TFsadfwffaG3...</small>
                <img src="/images/copy.svg" alt="" />
              </div>
            </div>

            <div className="flex items-center ml-8">
              <div className="transform rotate-90 text-[.6rem] -mr-5">WINNING&nbsp;NUMBER</div>
            </div>

            <img src="/images/Zasób 9.png" alt="" width="15%" className={`${styles.section2Ball} p-0 ml-5 rounded-full absolute -right-8 top-0`} />
          </div>

          <div className="flex flex-col gap-14 mt-20 px-10">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-5">
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

            <div className="flex items-center justify-between w-full gap-16 font-['Tw Cen MT']">
              <div className="w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div className="w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-16 font-['Tw Cen MT']">
              <div className="w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div className="w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-16 font-['Tw Cen MT']">
              <div className="w-[50%]">
                <div className="text-[#8E90FF] font-semibold">TOTAL TICKED BOUGHT:</div>
                <div>15 865</div>
                <div className="w-full mt-7"><hr className="border-1 border-[#ffffff44]" /></div>
              </div>

              <div className="w-[50%]">
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
      <div className="w-full px-60 font-['Tw Cen MT'] bg-black text-white pt-28 pb-20">
        <h1 className="text-5xl font-bold text-center mb-20"><span className={styles.bgGradient}>WINNING</span> HAS NEVER BEEN <span className={styles.bgGradient}>EASIER</span>.</h1>

        <div className="px-12">
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
            </div>
          </div>
        </div>
      </div>
      {/* section3 */}

      {/* footer */}
      <div className="w-full px-72 font-['Tw Cen MT'] bg-black text-white pt-28 pb-10">
        <h1 className="text-4xl font-bold">POWERED BY:</h1>

        <div className="flex items-center justify-between mt-8">
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
          <div className="w-[170px] h-[70px] bg-gray-300 text-gray-800 grid place-items-center">170x70</div>
        </div>

        <div className="flex flex-col items-center w-full mt-20">
          <img src="/images/luckblocks.png" alt="luckyblocks_logo" width="200px" className="" />

          <div className="flex gap-10 mt-7 text-[#C5C6FF]">
            <div><span>T</span> <span>@HASHPOTTEAM</span></div>
            <div><span>T</span> <span>@HASHPOTTEAM</span></div>
          </div>

          <div className="mt-14">COPYRIGHT HASHPOT 2022. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
      {/* footer */}
    </div>
  )
}
