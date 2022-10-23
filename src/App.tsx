import "./App.css";

function App() {
  return (
    <div className="App w-full h-full bg-yellow-50">
      <div id="nav-bar" className="pt-2">
        <img src="bitcoin.png" className="" />
        <div className="flex flex-row justify-center gap-10 items-center flex-grow text-yellow-800 font-semibold text-xl absolute top-8 left-0 right-0 mx-auto ">
          <a href="#about" className="hover:text-yellow-600 transition-all">
            About
          </a>
          <a href="#team" className="hover:text-yellow-600 transition-all">
            Team
          </a>
          <a href="#contact" className="hover:text-yellow-600 transition-all">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-20">
        <img src="bitcoin-blue.png" className="h-18" />
        <img src="ethereum.png" className="h-18" />
        <img src="stellar.png" className="h-18" />
      </div>
      <h1 className="font-title text-6xl text-center">
        <span className="bg-gradient-to-r bg-clip-text from-fuchsia-600 to-cyan-600 text-transparent">
          Blockchain
        </span>
        @Brown
      </h1>
      <h3 className="text-xl text-neutral-600 text-center mb-4 font-normal mt-3">
        Founded in 2017, we are Brown University’s student group for everything
        blockchain, cryptocurrencies, and web3.{" "}
      </h3>

      <div className="flex flex-row justify-center items-center mb-72 gap-4 z-50">
        <img src="Twitter.png" className="w-16 z-50" />
        <img src="Instagram.png" className="w-16 z-50" />
        <img src="Discord.png" className="w-16 z-50" />
        <img src="Spotify.png" className="w-16 z-50" />
      </div>

      <img src="card.png" className="h-18 absolute md:bottom-0 -bottom-14 left-6 z-[0] hidden md:block" />
      <img src="coins.png" className="h-18 absolute bottom-6 right-6 hidden md:block" />

      <h1 className="font-bold text-6xl text-center">Goals</h1>
      <h1 className="font-normal text-xl text-center text-neutral-600">
        Our primary areas of focus and why you should join us.
      </h1>
      <div id="things" className="mt-10 flex flex-col md:flex-row gap-10 md:mx-14 w-min mx-auto md:w-auto">
        <div
          id="community"
          className="bg-opacity-5 bg-black rounded-2xl w-96 flex flex-col justify-center text-center py-10 px-4"
        >
          <img src="hug.png" className="w-32 mx-auto"></img>
          <h1 className="font-bold text-2xl">Community</h1>
          <div className="text-stone-500">
            Blockchain@Brown is the central hub for the blockchain community at
            Brown, where everyone can come together to discuss topics, share
            ideas, and meet other studetns passionate about thsi technology.
          </div>
        </div>

        <div
          id="community"
          className="bg-opacity-5 bg-black rounded-2xl w-96 flex flex-col justify-center text-center py-10 px-4"
        >
          <img src="bulb.png" className="w-32 mx-auto"></img>
          <h1 className="font-bold text-2xl">Build</h1>
          <div className="text-stone-500">
            Blockchain@Brown is where entrepeneurs come together. If you have an
            idea for a project involving blockchain technology, we will help you
            build your idea in whatever way we can.
          </div>
        </div>

        <div
          id="community"
          className="bg-opacity-5 bg-black rounded-2xl w-96 flex flex-col justify-center text-center py-10 px-4"
        >
          <img src="phone.png" className="w-32 mx-auto"></img>
          <h1 className="font-bold text-2xl">Network</h1>
          <div className="text-stone-500">
            Blockchain@Brown connects students to all of the many Brown alumni
            working in blockchain and crypto all over the world. If you want a
            job in crypto, Blockchain@Brown will help you get one.
          </div>
        </div>
      </div>

      <h1 id="team" className="font-bold text-4xl text-center mt-20 mb-8">
        Our Team
      </h1>
      <div id="container" className="flex flex-col gap-8">
        <div
          id="ben"
          className="flex flex-col md:flex-row gap-8 p-8 mx-14 bg-opacity-5 bg-black rounded-2xl"
        >
          <div className="left flex flex-col justify-start flex-grow p-4 flex-shrink-0 md:text-left text-center">
            <h3 className="font-light text-lg">President</h3>
            <h2 className="font-bold text-2xl mb-2">Ben Frigon</h2>
            <img src="ben.jpeg" className="w-32 mx-auto"></img>
          </div>
          <div className="ml-6 -mr-4 w-0.5 h-52 bg-gray-600 relative hidden md:block"></div>
          <div className="flex-shrink self-center text-lg ml-8">
            Ben Frigon is a member of the class of 2022.5 from Nashville,
            Tennessee, studying Public Policy and Entrepreneurship. Ben’s main
            passion is technology and entrepreneurship; specifically, his focus
            is on making the world a better place using decentralized
            technologies. In the Spring 2022 semester, Ben co-designed and
            co-taught the world’s first ever credit-bearing university course on
            non-fungible tokens, “GISP0003 NFTs, Blockchain, and Art.” He also
            hosts the Blockchain@Brown Podcast.
          </div>
        </div>
        <div
          id="jakobi"
          className="flex flex-col md:flex-row gap-8 p-8 mx-14 bg-opacity-5 bg-black rounded-2xl"
        >
          <div className="left flex flex-col justify-start flex-grow p-4 flex-shrink-0 md:text-left text-center">
            <h3 className="font-light text-lg">Vice President</h3>
            <h2 className="font-bold text-2xl mb-2">Jakobi Haskell</h2>
            <img src="jakobi.jpeg" className="w-32 mx-auto md:mx-0"></img>
          </div>
          <div className="-ml-1 mr-4 w-0.5 h-52 bg-gray-600 relative hidden md:block"></div>
          <div className="flex-shrink self-center text-lg">
            Jakobi Haskell is a class of 2025 computer science student from
            Washington DC. Jakobi has been involved in various crypto-related
            projects, such as building an NFT-based social platform for digital
            artists. He's passionate about solidity programming, as well as
            combining technology with business innovations. Jakobi is also a
            writer for the Brown Daily Herald, a member of Brown's Applied
            Computing club, and participant in various hackathons including
            HackHarvard and Yale Hack.
          </div>
        </div>
      </div>

      <h1 id="contact" className="font-bold text-4xl text-center mt-20 mb-8">
        Contact Us
      </h1>
      <div className="font-light text-2xl text-center text-neutral-600 max-w-2xl mx-auto">
        Interested in partnering with us? Have any questions? Email us at:
      </div>
      <div className="flex w-screen items-center justify-center">
        <div
          id="email-div"
          className="flex flex-row items-center gap-4 my-4 mx-auto w-min"
        >
          <img src="email.png" className="h-14"></img>
          <a
            href="mailto:blockchain@brown.edu"
            className="text-3xl font-bold text-yellow-900 underline hover:no-underline transition-all"
          >
            blockchain@brown.edu{" "}
          </a>
        </div>
      </div>
      <div className="font-light text-2xl text-center text-neutral-600 max-w-2xl mx-auto">
        And don’t forget to join our discord! This is where events are planned
        and jobs are posted:
      </div>
      <div className="flex w-screen items-center justify-center">
        <div
          id="email-div"
          className="flex flex-row items-center gap-4 my-4 mx-auto w-min"
        >
          <img src="Discord.png" className="h-16"></img>
          <a
            href="https://discord.gg/HX3XR8TA"
            className="text-3xl font-bold text-yellow-900 underline hover:no-underline transition-all"
          >
            discord.gg/HX3XR8TA
          </a>
        </div>
      </div>
      <div className="w-screen flex flex-col items-end -mt-4">
        <img src="mailbox.png" className="w-96"></img>
      </div>
    </div>
  );
}

export default App;
