import { useState } from "react";
import "./App.css";
import Coin from "./Coin";


function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <div id="body" className="App w-full h-full bg-yellow-50">
      <div id="nav-bar" className="pt-2 pl-3 sticky top-0 bg-yellow-50 z-50">
        <div
          id="ham-menu"
          className="space-y-2 md:hidden absolute right-4 top-6 hover:cursor-pointer group"
          onClick={() => {
            console.log(hidden);
            const style = hidden ? "flex" : "";
            console.log(style);
            document.getElementById("nav")!.style.display = style;
            setHidden(!hidden);
            console.log(hidden);
          }}
        >
          <div
            className={`w-8 h-1 bg-yellow-600 rounded-lg transition  ${
              !hidden ? "rotate-45 top-3" : ""
            } relative`}
          ></div>
          <div
            className={`w-8 h-1 bg-yellow-600 rounded-lg transition ${
              !hidden && "opacity-0"
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-yellow-600 rounded-lg relative  transition ${
              !hidden ? "-rotate-45 -top-3" : ""
            }`}
          ></div>
        </div>
        <img
          src="bitcoin.png"
          width="60"
          onClick={() => {
            window.location.href = "#body";
          }}
          className="hover:cursor-pointer"
        ></img>
        <div
          id="nav"
          className="flex-col md:flex-row mt-2 md:w-auto w-screen text-center relative transition-all justify-center gap-10 items-center flex-grow text-yellow-800 font-semibold text-xl md:absolute top-8 md:left-12 right-0 md:-mt-1 hidden md:flex z-50 bg-yellow-50 md:bg-transparent mx-0"
        >
          <a href="#about" className="hover:text-yellow-600 transition-all">
            About
          </a>
          <a href="#team" className="hover:text-yellow-600 transition-all">
            Team
          </a>
          <a
            href="#resources-sec"
            className="hover:text-yellow-600 transition-all"
          >
            Resources
          </a>
          <a href="#contact" className="hover:text-yellow-600 transition-all">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-36 h-192">
        {/* <img src="bitcoin-blue.png" className="md:h-auto h-14" />
        <img src="ethereum.png" className="md:h-auto h-14" />
        <img src="stellar.png" className="md:h-auto h-14" /> */}
      <Coin></Coin>

      </div>
      <h1 id="" className="font-title md:text-6xl text-4xl text-center italic">
        <span className="bg-gradient-to-r bg-clip-text from-fuchsia-600 to-cyan-600 text-transparent">
          Blockchain
        </span>
        @Brown
      </h1>
      <h3 className="md:text-2xl text-xl text-neutral-600 text-center mb-4 font-light mt-3 max-w-3xl mx-auto">
        Blockchain@Brown is Brown University’s student group
        for everything blockchain, cryptocurrencies, and web3.
      </h3>
      {/* Margin 72 to EOS */}
      <div className="flex flex-row justify-center items-center gap-4 z-20">
        <a
          href="https://twitter.com/BrownUCrypto"
          className="z-20 relative hover:-top-1 transition-all"
          target="_blank"
        >
          <img src="Twitter.png" className="w-16 z-20" />
        </a>
        <a
          href="https://instagram.com/brownucrypto?igshid=YmMyMTA2M2Y=https://instagram.com/brownucrypto?igshid=YmMyMTA2M2Y="
          target="_blank"
          className="z-20 relative hover:-top-1 transition-all"
        >
          <img src="Instagram.png" className="w-16 z-20" />
        </a>
        <a
          href="https://discord.gg/FDVBEnEdWQ"
          target="_blank"
          className="z-20 relative hover:-top-1 transition-all"
        >
          <img src="Discord.png" className="w-16 z-20" />
        </a>
        <a
          href="https://open.spotify.com/show/5GSOuaL3bdjl9c8rmw0B3b?si=fd99c6ec9f914678"
          target="_blank"
          className="z-20 relative hover:-top-1 transition-all"
        >
          <img src="Spotify.png" className="w-16 z-20" />
        </a>
        <a
          href="https://www.youtube.com/@0xHopper"
          target="_blank"
          className="z-20 relative hover:-top-1 transition-all"
        >
          <img src="Youtube.png" className="w-16 z-20" />
        </a>
      </div>

      <div className="border-box p-10 w-3/4 max-w-4xl bg-black bg-opacity-5 mt-32 mb-10 mx-auto rounded-2xl">
        <h2
          id="podcast"
          className="font-bold text-3xl text-center mb-10 z-25 underline"
        >
          <a href="https://easya.io" className="group hover:cursor-pointer">
            {" "}
            EasyA
          </a>
        </h2>

        <a href="https://easya.io" className="group hover:cursor-pointer">
          <img
            src="easya.jpeg"
            className="mx-auto relative group-hover:scale-105 transition"
          ></img>
        </a>
        <p className="mt-4 text-stone-500 text-2xl text-center">
          EasyA just got a revamp! Download their app for free NFTs + coins and
          clear up your confusion about crypto. Complete challenges for
          Polkadot, Solana, Tezos, and much more!
        </p>
      </div>
      <div className="border-box p-10 w-3/4 max-w-4xl bg-black bg-opacity-5 mt-32 mb-10 mx-auto rounded-2xl">
        <h2 id="podcast" className="font-bold text-3xl text-center mb-10 z-25">
          Free Domain Giveaway
        </h2>
        <a
          href="https://unstoppabledomains.com/free-mint/blockchain-at-brown"
          className="group hover:cursor-pointer"
        >
          <img
            src="https://mms.businesswire.com/media/20191011005077/en/740189/23/unstoppabledomains.jpg"
            className="mx-auto relative group-hover:scale-105 transition"
          ></img>
        </a>
        <p className="mt-4 text-stone-500 text-2xl text-center">
          Anyone with a brown.edu email can sign up for a free domain!
        </p>
      </div>
      <h1 id="podcast" className="font-bold text-6xl text-center mt-24 mb-10">
        Podcast
      </h1>
      <div className="flex justify-center items-center mt-12 mb-24">
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/show/5GSOuaL3bdjl9c8rmw0B3b/video?utm_source=generator"
          width="624"
          height="351"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <img
        src="card.png"
        className="h-18 absolute md:bottom-0 -bottom-14 left-6 z-[0] hidden md:block"
      />
      <img
        src="coins.png"
        className="h-18 absolute bottom-6 right-6 hidden md:block"
      />

      <h1 className="font-bold text-6xl text-center mb-3">Goals</h1>
      {/* <h1 className="font-light text-2xl text-center text-neutral-600">
        Our areas of focus.
      </h1> */}
      <div
        id="things"
        className="mt-10 flex flex-col xl:flex-row gap-10 mx-auto"
      >
        <div
          id="community"
          className="bg-opacity-5 bg-black rounded-2xl flex flex-col justify-center text-center py-10 px-4 sm:w-96 mx-4 sm:mx-auto"
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
          id="build"
          className="bg-opacity-5 bg-black rounded-2xl flex flex-col justify-center text-center py-10 px-4 sm:w-96 mx-4 sm:mx-auto"
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
          id="network"
          className="bg-opacity-5 bg-black rounded-2xl flex flex-col justify-center text-center py-10 px-4 sm:w-96 mx-4 sm:mx-auto"
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
      <div id="resources-sec" className="mx-6 md:mx-48">
        <h1
          id="resources"
          className="font-bold text-6xl text-center mt-20 mb-6"
        >
          Resources
        </h1>

        <div className="text-left md:text-xl text-lg text-gray-800">
          What are smart contracts? What is a DAO? ZK-SNARKs? All these
          questions and more can be answered by reading our favorite blockchain
          learning resources, listed below.
        </div>

        <h2 className="font-medium text-3xl mt-10 mb-6 text-left text-yellow-800 ">
          Technical
        </h2>

        <ul>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://www.easya.io/"
                target="_blank"
              >
                EasyA
              </a>
            </h3>
            <p className="mt-2 font-light">
              An all-in-one app that contains resources for learning about your
              favorite blockchains, competing against friends, hearing about
              upcoming hackathons in your area and more. Complete in-app quizzes
              to earn free crypto and NFTs!
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://ethereum.org/en/learn/"
                target="_blank"
              >
                Ethereum.org
              </a>
            </h3>
            <p className="mt-2 font-light">
              Has many resources for learning about DeFi, DAOs, smart contracts
              and much more. If you're looking for a technical primer on
              everything Ethereum, then this is the best place to start.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://buildspace.so"
                target="_blank"
              >
                Buildspace
              </a>
            </h3>
            <p className="mt-2 font-light">
              A Discord community as well as a website with a series of
              interactive tutorials in web3, ranging from creating a website
              where you can mint your own NFTs to establishing a domain service
              in Polygon. Optimal for those who want to learn by doing.
            </p>
          </li>

          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://speedrunethereum.com/"
                target="_blank"
              >
                Speedrun Ethereum
              </a>
            </h3>
            <p className="mt-2 font-light">
              A series of interactive smart-contract tutorials. Like Buildspace
              but specifically focused on Ethereum.
            </p>
          </li>

          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://www.youtube.com/watch?v=ipwxYa-F1uY"
                target="_blank"
              >
                FreeCodeCamp Solidity Tutorial
              </a>
            </h3>
            <p className="mt-2 font-light">
              A 1 hour and 30-minute tutorial for learning the basics of
              smart-contract development with Solidity, the programming language
              for Ethereum.
            </p>
          </li>

          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://www.youtube.com/playlist?list=PLj80z0cJm8QErn3akRcqvxUsyXWC81OGq"
                target="_blank"
              >
                ZK-Whiteboard Sessions
              </a>
            </h3>
            <p className="mt-2 font-light">
              Youtube playlist of experts explaining facets of zero-knowledge
              proofs in detail.
            </p>
          </li>

          <li className="my-4">
            <h3 className="text-xl font-medium">
              Blockchain 101: Part{" "}
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://www.youtube.com/watch?v=_160oMzblY8"
                target="_blank"
              >
                One
              </a>{" "}
              and{" "}
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://www.youtube.com/playlist?list=PLj80z0cJm8QErn3akRcqvxUsyXWC81OGq"
                target="_blank"
              >
                Two
              </a>
            </h3>
            <p className="mt-2 font-light">
              Youtube two-part series that introduces how a blockchain works in
              a visual and intuitive way.
            </p>
          </li>
          <li className="my-4">
            <h3 className="text-xl font-medium">
              <a
                href="https://www.youtube.com/watch?v=bBC-nXj3Ng4"
                className="hover:no-underline text-xl font-medium underline"
              >
                But how does Bitcoin actually work?
              </a>
            </h3>
            <p className="mt-2 font-light">
              A visual explanation Youtube series explaining the cryptography
              and structure of the blockchain from 3Blue1Brown's Grant
              Sanderson.
            </p>
          </li>
        </ul>

        <h2 className="font-medium text-3xl mt-10 mb-6 text-left text-yellow-800">
          Non-Technical
        </h2>

        <ul>
          <li className="my-4">
            <h3 className="text-xl font-medium">
              Acquired Episodes on{" "}
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://open.spotify.com/episode/62T3yPwFYbsRT7APcNvWTs?si=DdHHmYe3QlydKPnW0G3hgA"
                target="_blank"
              >
                Bitcoin{" "}
              </a>{" "}
              and{" "}
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://open.spotify.com/episode/0a9yxPff6yYlhTc9TpPO2N?si=voegr3SGTG-En6K35Nzzew"
                target="_blank"
              >
                Ethereum{" "}
              </a>
            </h3>
            <p className="mt-2 font-light">
              Acquired is a well-researched, long-form podcast that tells the
              story of great technology companies. If you are looking for the
              complete story behind Bitcoin and Ethereum and what role they will
              play in the future of the world, then check out their episodes on
              each.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://web.archive.org/web/20221123142255/https://www.bloomberg.com/features/2022-the-crypto-story/"
                target="_blank"
              >
                The Only Crypto Story You'll Ever Need
              </a>
            </h3>

            <p className="mt-2 font-light">
              Long-form essay from Bloomberg that outlines the history of
              cryptocurrencies and the main bull case for crypto going forward.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl underline"
                href="https://vitalik.ca/"
                target="_blank"
              >
                Vitalik Buterin's Blog
              </a>
            </h3>
            <p className="mt-2 font-light">
              Buterin is the co-founder of Ethereum and one of the main
              philosophical leaders of the crypto movement. In his blog, he
              writes essays about a variety of topics that usually involve novel
              ideas for blockchain applications. He writes from both technical
              and non-technical perspectives.
            </p>
          </li>
        </ul>

        <h2 className="font-medium text-3xl mt-10 mb-1 text-left text-yellow-800">
          Related Courses at Brown
        </h2>
        <div className="text-left text-lg mb-6 text-gray-800">
          There are some great courses at Brown that will help you understand
          blockchain and its underlying components. Here are some of those
          courses along with their descriptions from CAB.{" "}
        </div>
        <ul>
          <li className="my-4">
            <h3>
              <a className="text-xl font-medium ">
                Blockchains and Cryptocurrencies
              </a>
            </h3>
            <h4 className="text-lg font-semibold my-2">CSCI 1951L</h4>
            <p className="mt-2 font-light">
              {" "}
              Introduction to modern blockchain-based systems. Topics covered
              include consensus and distributed computing, examples of
              cryptocurrencies, programming smart contracts, privacy and
              secrecy, transfer networks, atomic swaps and transactions,
              non-currency applications of blockchains, and legal and social
              implications. Students will do a programming project and a term
              project.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a className="text-xl font-medium ">
                Spring 2022 - NFTs, Blockchain, & Art
              </a>
            </h3>
            <h4 className="text-lg font-semibold my-2">GISP0003</h4>
            <p className="mt-2 font-light">
              {" "}
              In Spring 2022, the first ever credit-bearing course on NFTs in
              history was taught at Brown University. Our former President Ben
              Frigon was one of the co-designers.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a className="text-xl font-medium">Applied Cryptography</a>
            </h3>
            <h4 className="text-lg font-semibold my-2">CSCI 1515</h4>
            <p className="mt-2 font-light">
              This course teaches cryptography from a practical perspective and
              provides hands-on experience of building secure systems in C/C++.
              Students will implement secure authentication and communication
              systems using foundational cryptographic algorithms such as
              encryption schemes, authentication codes, digital signatures, key
              exchange, and hash functions. The course also covers advanced
              topics including zero-knowledge proofs, secure multi-party
              computation, fully homomorphic encryption, and post-quantum
              cryptography. Students will use these tools to develop
              applications such as secure online anonymous voting,
              privacy-preserving data analysis, and private information
              retrieval.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a className=" text-xl font-medium">
                Distributed Computer Systems
              </a>
            </h3>
            <h4 className="text-lg font-bold my-2">CSCI 1380</h4>
            <p className="mt-2 font-light">
              Explores the fundamental principles and practice underlying
              networked information systems, first we cover basic distributed
              computing mechanisms (e.g., naming, replication, security, etc.)
              and enabling middleware technologies. We then discuss how these
              mechanisms and technologies fit together to realize distributed
              databases and file systems, web-based and mobile information
              systems. Prerequisite: CSCI 0300, CSCI 0320, CSCI 0330, CSCI 1310
              or CSCI 1330.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a className="text-xl font-medium ">
                Introduction to Cryptography and Computer Security
              </a>
            </h3>
            <h4 className="text-lg font-semibold my-2">CSCI 1510</h4>
            <p className="mt-2 font-light">
              This course studies the tools for guaranteeing safe communication
              and computation in an adversarial setting. We develop notions of
              security and give provably secure constructions for such
              cryptographic objects as cryptosystems, signature schemes and
              pseudorandom generators. We also review the principles for secure
              system design. Prerequisites: CSCI 0220, and either CSCI 0510 or
              CSCI 1010.
            </p>
          </li>

          <li className="my-4">
            <h3>
              <a className="text-xl font-medium ">
                Introduction to Computer Security
              </a>
            </h3>
            <h4 className="text-lg font-semibold my-2">CSCI 1880</h4>
            <p className="mt-2 font-light">
              This course examines the basic principles of computer security for
              an organization, recognizing which system components relate to
              which principles. Additionally, the course covers methodologies
              and skills for making informed security decisions and
              understanding how to apply security principles to design security
              mechanisms while considering tradeoffs. Topics include general
              security principles, cryptography, authentication authorization,
              identity, and access management, operating systems security,
              network security, web security, and applications security.
              Throughout the course, you will develop a preliminary
              cybersecurity plan for an organization.
            </p>
          </li>
        </ul>
        <h2 className="font-medium text-3xl mt-10 mb-1 text-left text-yellow-800">
          Applications That We Like
        </h2>
        <div className="text-lg mb-6">
          Get experience on chain. These are decentralized applications, or
          "dapps", that we think you should try out.
        </div>
        <ul>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://arbitrum.io/"
                target="_blank"
              >
                Arbitrum
              </a>
            </h3>
            <p className="mt-2 font-light">
              Built using optimistic rollup technology, Arbitrum is one of the
              most well-known Ethereum L2s. It is faster and cheaper than
              Ethereum's L1 and you can still interact with all your favorite
              dapps. Bridge to Arbitrum One and play around in their diverse
              ecosystem.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://arbitrum.io/"
                target="_blank"
              >
                dYdX
              </a>
            </h3>
            <p className="mt-2 font-light">
              A decentralized exchange with low fees for perpetual futures
              trading (futures with no delivery date). Its latest version, v3,
              runs on StarkWare (an L2 on Ethereum), but v4 will run on Cosmos,
              a modular blockchain.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://arena.dfdao.xyz"
                target="_blank"
              >
                Dark Forest
              </a>
            </h3>
            <p className="mt-2 font-light">
              Online space strategy game that hosts data on-chain and takes
              advantage of ZK-SNARKs to enable the first incomplete information
              blockchain game. Inspired by the series of Three-Body Problem
              science fiction novels from Cixin Liu.
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://polymarket.com"
                target="_blank"
              >
                Polymarket
              </a>
            </h3>
            <p className="mt-2 font-light">
              Prediction market for Ethereum that allows you to bet on anything,
              from who will win the next presidential election to what the Fed's
              interest rates will be next month.{" "}
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://uniswap.org/"
                target="_blank"
              >
                Uniswap
              </a>
            </h3>
            <p className="mt-2 font-light">
              Decentralized Exchange that uses smart-contracts for trading
              Ethereum-based tokens.
            </p>{" "}
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://unstoppabledomains.com/"
                target="_blank"
              >
                Unstoppable Domains
              </a>
            </h3>
            <p className="mt-2 font-light">
              Blockchain-based domain name service that converts human-readable
              domains to wallet addresses. Operates under a buy-once,
              own-forever model.{" "}
            </p>
          </li>
          <li className="my-4">
            <h3>
              <a
                className="hover:no-underline text-xl font-medium underline"
                href="https://ens.domains/"
                target="_blank"
              >
                Ethereum Name Service
              </a>
            </h3>
            <p className="mt-2 font-light">
              Another domain name service. Like Unstoppable Domains, but
              specific to Ethereum. Requires paying for a ownership over a fixed
              period of time, rather than forever.{" "}
            </p>
          </li>
        </ul>
      </div>

      <h1 id="team" className="font-bold text-6xl text-center mt-20 mb-8">
        Our Team
      </h1>
      <div id="container" className="flex flex-col gap-8">
        <div
          id="jakobi"
          className="flex flex-col md:flex-row gap-8 p-8 md:mx-16 bg-opacity-5 bg-black rounded-2xl"
        >
          <div className="left flex flex-col justify-start flex-grow p-4 px-10 flex-shrink-0 md:text-left text-center">
            <h3 className="font-light text-md">Current President</h3>
            <h2 className="font-bold text-xl mb-2">Jakobi Haskell</h2>
            <img src="jakobi.jpeg" className="w-32 mx-auto md:mx-0"></img>
          </div>
          <div className="-ml-1 mr-4 w-0.5 h-52 bg-gray-600 relative hidden md:block"></div>
          <div className="flex-shrink self-center">
            Jakobi Haskell is a computer science student from Washington DC.
            Jakobi has been involved in various crypto-related projects, such as
            building an NFT-based social platform for digital artists. He's
            passionate about the Ethereum ecosystem as well as combining
            technology with business innovations. This semester, Jakobi is a TA
            for CS1951T, and likes to participate in hackathons and go on bike
            rides in his free time.
          </div>
        </div>
        <div
          id="nishant"
          className="flex flex-col md:flex-row gap-8 p-8 md:mx-16 bg-opacity-5 bg-black rounded-2xl"
        >
          <div className="left flex flex-col justify-start py-4 flex-shrink-0 md:text-left text-center">
            <h3 className="font-light text-md">Current Vice President</h3>
            <h2 className="font-bold text-xl mb-2">Nishant Bakhru</h2>
            <img src="nishant.jpeg" className="w-32 mx-auto"></img>
          </div>
          <div className="ml-1 -mr-4 w-0.5 h-52 bg-gray-600 relative hidden md:block"></div>
          <div className="flex-shrink self-center ml-8">
            Nishant Bakhru is a Master's student from Mumbai, India, focusing on
            Innovation, Management, and Entrepreneurship. He has extensive
            experience in trading and doing dilligence on crypto projects.
            Currently, Nishant is combining his affinity for entrepreneurship
            with his crypto expertise through his development of a
            blockchain-based loyalty point system. When he's not researching
            tokens, Nishant enjoys playing poker with friends and working out at
            the Nelson.
          </div>
        </div>
        <div
          id="ben"
          className="flex flex-col md:flex-row gap-8 p-8 px-14 md:mx-16 bg-opacity-5 bg-black rounded-2xl"
        >
          <div className="ml-6 -mr-4 w-0.5 h-52 bg-gray-600 relative hidden md:block"></div>
          <div className="flex-shrink self-center ml-8">
            Ben Frigon is a recent Brown graduate from Nashville, Tennessee, who
            studied Public Policy and Entrepreneurship. Ben’s main passion is
            technology and entrepreneurship; specifically, his focus is on
            making the world a better place using decentralized technologies. In
            the Spring 2022 semester, Ben co-designed and co-taught the world’s
            first ever credit-bearing university course on non-fungible tokens,
            “GISP0003 NFTs, Blockchain, and Art.” He also hosts the
            Blockchain@Brown Podcast.
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
        <a
          href="mailto:blockchain@brown.edu"
          target="_blank"
          id="email-div"
          className="flex flex-row items-center gap-4 my-8 mx-auto w-min"
        >
          <img src="email.png" className="h-14"></img>
          <div className="md:text-3xl text-xl font-bold text-yellow-900 underline hover:no-underline transition-all block md:w-[440px] w-[300px]">
            blockchain@brown.edu
          </div>
        </a>
      </div>
      <div className="font-light text-2xl text-center text-neutral-600 max-w-2xl mx-auto">
        And don’t forget to join our discord! This is where events are planned
        and jobs are posted:
      </div>
      <div className="flex w-screen items-center justify-center">
        <a
          id="discord-div"
          className="flex flex-row items-center gap-4 my-4 mx-auto md:w-[440px] w-[300px]"
          href="https://discord.gg/C7xhNxSv"
          target="_blank"
        >
          <img src="Discord.png" className="h-16"></img>
          <div className="text-xl md:text-3xl font-bold text-yellow-900 underline hover:no-underline transition-all inline-block">
            discord.gg/HX3XR8TA
          </div>
        </a>
      </div>
      <div className="w-screen flex flex-col items-end -mt-4">
        <img src="mailbox.png" className="w-96"></img>
      </div>
    </div>
  );
}

export default App;
