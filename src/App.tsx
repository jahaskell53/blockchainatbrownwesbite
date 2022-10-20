import './App.css'

function App() {

  return (
    <div className="App w-full h-full bg-yellow-50">
      <div id="nav-bar" className='flex flex-row w-full py-4'>
      <img src="bitcoin.png" className='flex-grow-0' />
      <div className='flex flex-row justify-center gap-4 items-center flex-grow'>
        <a href="#about">About</a>
        <a href="#about">FAQ</a>
        <a href="#team">Team</a>
        <a href="#team">Contact Us</a>
      </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <img src="bitcoin-blue.png" className='h-18' />
        <img src="ethereum.png" className='h-18' />
        <img src="stellar.png" className='h-18' />
        </div>
        <h1 className='font-title text-6xl text-center'>Blockchain@Brown</h1>
        <h3 className='text-2xl text-neutral-600 text-center mb-4 font-normal'>Founded in 2017, we are Brown University’s student group for everything blockchain, cryptocurrencies, and web3. </h3>

        <div className='flex flex-row justify-center items-center mb-72'>
        <img src="Twitter.png" className='h-18' />
        <img src="Instagram.png" className='h-18' />
        <img src="Discord.png" className='h-18' />
        </div>

        <img src="card.png" className='h-18 absolute bottom-6 left-6' />
        <img src="coins.png" className='h-18 absolute bottom-6 right-6' />

        <h1 className='font-bold text-6xl text-center'>Goals</h1>
        <h1 className='font-normal text-2xl text-center text-neutral-600'>Our primary areas of focus and why you should join us.</h1>
    </div>
  )
}

export default App
