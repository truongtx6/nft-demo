import SliderList from "./sliderList";

function Home() {
  return (
    <>
      <body>
        <header className="header">
          <div className="container">
            <a href="#" className="logo">
              <img
                width="145"
                height="37"
                src="../../assets/img/logo.svg"
                alt="logo"
              />
            </a>
            <nav>
              <a href="#" className="active">
                Home
              </a>
              <a href="#">Video</a>
              <a href="#">Introdution</a>
              <a href="#">Tokennomic</a>
              <a href="#">NFT collection</a>
              <a href="#">Roadmap</a>
              <a href="#">Our Team</a>
              <a href="#">Partners</a>
            </nav>
            <a href="#" className="huum">
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <rect width="30" height="4" rx="1" fill="#FBFBFB" />{" "}
                <rect y="10" width="30" height="4" rx="1" fill="#FBFBFB" />{" "}
                <rect y="20" width="30" height="4" rx="1" fill="#FBFBFB" />{" "}
              </svg>
            </a>
          </div>
        </header>
        <div className="contents">
          <div className="hero-section">
            <div className="container">
              <div className="left-hero">
                <h1 className="white-text">METAZOM</h1>
                <div className="sub-sub-text gray-text mt-21">
                  MetaZom is an open-world exploration, NFT creature collector,
                  and auto battle game built on the Ethereum Blockchain,
                  released on PC in 2022. Play-to- earn in a graphically-rich
                  sci-fi adventure and conquer the wilderness to help your
                  crash-landed crew flourish.
                </div>
                <div className="sub-text white-text mt-12">
                  Explore 7 dazzling MetaZom landscapes and uncover the
                  cataclysmic events that shattered META.
                </div>
                <div className="d-flex mt-66">
                  <a href="#" className="btn-buy-nft">
                    BUY NFT
                  </a>
                  <a href="#" className="btn-play-now ml-16">
                    PLAY NOW
                  </a>
                </div>
              </div>
              <div className="right-hero">
                <img
                  width="544"
                  height="688"
                  src="../../assets/img/character_1-min.png"
                  alt="metazom"
                />
              </div>
            </div>
          </div>

          <div className="video-section mt--100">
            <div className="container">
              <a href="#" className="play-video">
                <img src="../../assets/img/btn-play-min.png" alt="play video" />
              </a>
            </div>
          </div>

          <div className="why-section">
            <div className="container">
              <h2 className="text-center white-text">WHY METAZOM</h2>
              <div className="sub-sub-text gray-text text-center mt-16">
                MetaZom is an open-world exploration, NFT creature collector,
                and auto battle game built on the Ethereum Blockchain, released
                on PC in 2022. Play-to- earn in a graphically-rich sci-fi
                adventure.
              </div>
              <div className="list-nft mt-113">
                <div className="item-nft">
                  <a href="#">
                    <img
                      width="509"
                      height="650"
                      src="../../assets/img/nft-1-min.png"
                      alt="nft 1"
                    />
                  </a>
                  <h3>Zombie</h3>
                  <h4>One NFT for all games</h4>
                </div>
                <div className="item-nft">
                  <a href="#">
                    <img
                      width="509"
                      height="650"
                      src="../../assets/img/nft-2-min.png"
                      alt="nft 2"
                    />
                  </a>
                  <h3>Character</h3>
                  <h4>Many ways to earn</h4>
                </div>
                <div className="item-nft">
                  <a href="#">
                    <img
                      width="509"
                      height="650"
                      src="../../assets/img/nft-3-min.png"
                      alt="nft 3"
                    />
                  </a>
                  <h3>Weapon</h3>
                  <h4>Balanced reward system</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="tokennomic-section mt-105">
            <div className="container">
              <h2 className="text-center white-text">Tokennomic</h2>
              <div className="panel-first mt-50">
                <img
                  width="626"
                  height="529"
                  src="../../assets/img/token-1-min.png"
                  alt="token"
                />
                <div className="pan-content">
                  <h3 className="white-text">TOKEN META</h3>
                  <div className="white-text sub-sub-text">
                    MetaZom is an open-world exploration, NFT creature
                    collector, and auto battle game built on the Ethereum
                    Blockchain, released on PC in 2022. Play-to- earn in a
                    graphically-rich sci-fi adventure and conquer the wilderness
                    to help your crash-landed crew flourish.
                  </div>
                  <div className="copy-contract mt-80">
                    <div>
                      <div>Contract Address</div>
                      <div>0x34dsr245w2443xhqwwj155131</div>
                    </div>
                    <a href="#">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M28.75 0.0387745C28.5951 0.0387745 13.75 0 13.75 0C11.105 0 8.75002 2.42627 8.75002 5.00003L7.30501 5.03377C4.66125 5.03377 2.5 7.42624 2.5 10V35C2.5 37.5738 4.85501 40 7.50003 40H26.25C28.895 40 31.25 37.5738 31.25 35H32.5C35.145 35 37.5 32.5738 37.5 30.0001V10.03L28.75 0.0387745ZM26.25 37.5001H7.50003C6.18753 37.5001 5.00004 36.2739 5.00004 35V10C5.00004 8.14002 6.53004 7.50001 8.75002 7.50001V30.0001C8.75002 32.5738 11.105 35 13.75 35C13.75 35 27.3025 34.9863 28.7612 34.9863C28.7612 36.5038 27.7663 37.5001 26.25 37.5001ZM28.75 26.2637H17.5C16.81 26.2637 16.25 25.705 16.25 25.015C16.25 24.325 16.81 23.7663 17.5 23.7663H28.75C29.44 23.7663 30 24.325 30 25.015C30 25.7051 29.44 26.2637 28.75 26.2637ZM28.75 20.02H17.5C16.81 20.02 16.25 19.4612 16.25 18.7713C16.25 18.0813 16.81 17.5225 17.5 17.5225H28.75C29.44 17.5225 30 18.0813 30 18.7713C30 19.46 29.44 20.02 28.75 20.02ZM31.25 10C29.9188 10 28.75 8.79879 28.75 7.50001C28.75 7.50001 28.75 4.96749 28.75 2.53876V2.53624L35.0001 10H31.25Z"
                          fill="#56CCF2"
                        />{" "}
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel-first panel-second mt-50">
                <div className="pan-content">
                  <h3 className="white-text">TOKEN META</h3>
                  <div className="white-text sub-sub-text">
                    MetaZom is an open-world exploration, NFT creature
                    collector, and auto battle game built on the Ethereum
                    Blockchain, released on PC in 2022. Play-to- earn in a
                    graphically-rich sci-fi adventure and conquer the wilderness
                    to help your crash-landed crew flourish.
                  </div>
                  <div className="copy-contract mt-80">
                    <div>
                      <div>Contract Address</div>
                      <div>0x34dsr245w2443xhqwwj155131</div>
                    </div>
                    <a href="#">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M28.75 0.0387745C28.5951 0.0387745 13.75 0 13.75 0C11.105 0 8.75002 2.42627 8.75002 5.00003L7.30501 5.03377C4.66125 5.03377 2.5 7.42624 2.5 10V35C2.5 37.5738 4.85501 40 7.50003 40H26.25C28.895 40 31.25 37.5738 31.25 35H32.5C35.145 35 37.5 32.5738 37.5 30.0001V10.03L28.75 0.0387745ZM26.25 37.5001H7.50003C6.18753 37.5001 5.00004 36.2739 5.00004 35V10C5.00004 8.14002 6.53004 7.50001 8.75002 7.50001V30.0001C8.75002 32.5738 11.105 35 13.75 35C13.75 35 27.3025 34.9863 28.7612 34.9863C28.7612 36.5038 27.7663 37.5001 26.25 37.5001ZM28.75 26.2637H17.5C16.81 26.2637 16.25 25.705 16.25 25.015C16.25 24.325 16.81 23.7663 17.5 23.7663H28.75C29.44 23.7663 30 24.325 30 25.015C30 25.7051 29.44 26.2637 28.75 26.2637ZM28.75 20.02H17.5C16.81 20.02 16.25 19.4612 16.25 18.7713C16.25 18.0813 16.81 17.5225 17.5 17.5225H28.75C29.44 17.5225 30 18.0813 30 18.7713C30 19.46 29.44 20.02 28.75 20.02ZM31.25 10C29.9188 10 28.75 8.79879 28.75 7.50001C28.75 7.50001 28.75 4.96749 28.75 2.53876V2.53624L35.0001 10H31.25Z"
                          fill="#56CCF2"
                        />{" "}
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  width="597"
                  height="506"
                  src="../../assets/img/token-2-min.png"
                  alt="token"
                />
              </div>
            </div>
          </div>

          <div className="step-section text-center">
            <div className="container">
              <img
                width="983 "
                height="746"
                src="../../assets/img/meday-min.png"
                alt="meday"
              />
              <h3 className="text-center white-text text-upcase">
                Connect your wallet and complete these steps to receive Airdrop
              </h3>
              <div className="box-upto">
                <a href="#">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_71_408)">
                      {" "}
                      <path
                        d="M24 44C35.0483 44 44 35.0483 44 24C44 12.9517 35.0483 4 24 4C12.9517 4 4 12.9517 4 24C4 35.0483 12.9517 44 24 44ZM13.1517 23.5667L32.435 16.1317C33.33 15.8083 34.1117 16.35 33.8217 17.7033L33.8233 17.7017L30.54 33.17C30.2967 34.2667 29.645 34.5333 28.7333 34.0167L23.7333 30.3317L21.3217 32.655C21.055 32.9217 20.83 33.1467 20.3133 33.1467L20.6683 28.0583L29.935 19.6867C30.3383 19.3317 29.845 19.1317 29.3133 19.485L17.8617 26.695L12.925 25.155C11.8533 24.815 11.83 24.0833 13.1517 23.5667Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_71_408"
                        x="4"
                        y="4"
                        width="40"
                        height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_71_408"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                  <h4>
                    <span>Step 1:</span> Join Telegram Channel
                  </h4>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M23.5958 13.9258H21.9007C21.5497 13.9258 21.2651 14.2104 21.2651 14.5614V22.2896C21.2651 22.6998 20.9313 23.0336 20.5211 23.0336H5.71C5.29989 23.0336 4.9663 22.6998 4.9663 22.2896V7.47883C4.9663 7.06854 5.29989 6.7347 5.71 6.7347H13.8339C14.185 6.7347 14.4696 6.45011 14.4696 6.09906V4.40401C14.4696 4.05297 14.185 3.76837 13.8339 3.76837H5.71C3.66425 3.76837 1.99997 5.43291 1.99997 7.47883V22.2897C1.99997 24.3356 3.66434 26 5.71 26H20.521C22.5669 26 24.2314 24.3356 24.2314 22.2897V14.5615C24.2314 14.2104 23.9468 13.9258 23.5958 13.9258Z"
                      fill="#56CCF2"
                    />{" "}
                    <path
                      d="M25.3642 2H18.6219C18.2708 2 17.9862 2.2846 17.9862 2.63564V4.33069C17.9862 4.68173 18.2708 4.96633 18.6219 4.96633H20.9359L12.228 13.674C11.9798 13.9223 11.9798 14.3247 12.228 14.573L13.4266 15.7717C13.5459 15.8909 13.7075 15.9579 13.8761 15.9579C14.0447 15.9579 14.2064 15.8909 14.3256 15.7717L23.0335 7.06378V9.37778C23.0335 9.72882 23.3181 10.0134 23.6691 10.0134H25.3642C25.7152 10.0134 25.9998 9.72882 25.9998 9.37778V2.63564C25.9998 2.2846 25.7152 2 25.3642 2Z"
                      fill="#56CCF2"
                    />{" "}
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_71_408)">
                      {" "}
                      <path
                        d="M24 44C35.0483 44 44 35.0483 44 24C44 12.9517 35.0483 4 24 4C12.9517 4 4 12.9517 4 24C4 35.0483 12.9517 44 24 44ZM13.1517 23.5667L32.435 16.1317C33.33 15.8083 34.1117 16.35 33.8217 17.7033L33.8233 17.7017L30.54 33.17C30.2967 34.2667 29.645 34.5333 28.7333 34.0167L23.7333 30.3317L21.3217 32.655C21.055 32.9217 20.83 33.1467 20.3133 33.1467L20.6683 28.0583L29.935 19.6867C30.3383 19.3317 29.845 19.1317 29.3133 19.485L17.8617 26.695L12.925 25.155C11.8533 24.815 11.83 24.0833 13.1517 23.5667Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_71_408"
                        x="4"
                        y="4"
                        width="40"
                        height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_71_408"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                  <h4>
                    <span>Step 2:</span> Join Telegram Group Chat
                  </h4>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M23.5958 13.9258H21.9007C21.5497 13.9258 21.2651 14.2104 21.2651 14.5614V22.2896C21.2651 22.6998 20.9313 23.0336 20.5211 23.0336H5.71C5.29989 23.0336 4.9663 22.6998 4.9663 22.2896V7.47883C4.9663 7.06854 5.29989 6.7347 5.71 6.7347H13.8339C14.185 6.7347 14.4696 6.45011 14.4696 6.09906V4.40401C14.4696 4.05297 14.185 3.76837 13.8339 3.76837H5.71C3.66425 3.76837 1.99997 5.43291 1.99997 7.47883V22.2897C1.99997 24.3356 3.66434 26 5.71 26H20.521C22.5669 26 24.2314 24.3356 24.2314 22.2897V14.5615C24.2314 14.2104 23.9468 13.9258 23.5958 13.9258Z"
                      fill="#56CCF2"
                    />{" "}
                    <path
                      d="M25.3642 2H18.6219C18.2708 2 17.9862 2.2846 17.9862 2.63564V4.33069C17.9862 4.68173 18.2708 4.96633 18.6219 4.96633H20.9359L12.228 13.674C11.9798 13.9223 11.9798 14.3247 12.228 14.573L13.4266 15.7717C13.5459 15.8909 13.7075 15.9579 13.8761 15.9579C14.0447 15.9579 14.2064 15.8909 14.3256 15.7717L23.0335 7.06378V9.37778C23.0335 9.72882 23.3181 10.0134 23.6691 10.0134H25.3642C25.7152 10.0134 25.9998 9.72882 25.9998 9.37778V2.63564C25.9998 2.2846 25.7152 2 25.3642 2Z"
                      fill="#56CCF2"
                    />{" "}
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_71_402)">
                      {" "}
                      <path
                        d="M45.8409 12.0002C44.3008 12.7002 42.6408 13.1603 40.9207 13.3803C42.6808 12.3202 44.0408 10.6401 44.6809 8.62003C43.0208 9.62008 41.1807 10.3201 39.2406 10.7201C37.6605 9.00005 35.4404 8 32.9203 8C28.22 8 24.3798 11.8402 24.3798 16.5804C24.3798 17.2605 24.4598 17.9205 24.5998 18.5405C17.4795 18.1805 11.1391 14.7603 6.91893 9.58008C6.17889 10.8401 5.75887 12.3202 5.75887 13.8803C5.75887 16.8605 7.25895 19.5006 9.57907 21.0007C8.15899 21.0007 6.83893 20.6006 5.67887 20.0006C5.67887 20.0006 5.67887 20.0006 5.67887 20.0606C5.67887 24.2208 8.63902 27.701 12.5592 28.4811C11.8392 28.6811 11.0791 28.7811 10.2991 28.7811C9.75908 28.7811 9.21905 28.7211 8.69902 28.6211C9.77908 32.0012 12.9192 34.5214 16.6994 34.5814C13.7793 36.9015 10.0791 38.2616 6.03888 38.2616C5.35885 38.2616 4.67881 38.2216 3.99878 38.1415C7.79897 40.5817 12.3192 42.0017 17.1595 42.0017C32.9203 42.0017 41.5807 28.9211 41.5807 17.5805C41.5807 17.2005 41.5807 16.8405 41.5607 16.4604C43.2408 15.2604 44.6809 13.7403 45.8409 12.0002Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_71_402"
                        x="3.99878"
                        y="8"
                        width="41.8421"
                        height="34.0018"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_71_402"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                  <h4>
                    <span>Step 3:</span> Follow MetaZom Official Twitter
                  </h4>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M23.5958 13.9258H21.9007C21.5497 13.9258 21.2651 14.2104 21.2651 14.5614V22.2896C21.2651 22.6998 20.9313 23.0336 20.5211 23.0336H5.71C5.29989 23.0336 4.9663 22.6998 4.9663 22.2896V7.47883C4.9663 7.06854 5.29989 6.7347 5.71 6.7347H13.8339C14.185 6.7347 14.4696 6.45011 14.4696 6.09906V4.40401C14.4696 4.05297 14.185 3.76837 13.8339 3.76837H5.71C3.66425 3.76837 1.99997 5.43291 1.99997 7.47883V22.2897C1.99997 24.3356 3.66434 26 5.71 26H20.521C22.5669 26 24.2314 24.3356 24.2314 22.2897V14.5615C24.2314 14.2104 23.9468 13.9258 23.5958 13.9258Z"
                      fill="#56CCF2"
                    />{" "}
                    <path
                      d="M25.3642 2H18.6219C18.2708 2 17.9862 2.2846 17.9862 2.63564V4.33069C17.9862 4.68173 18.2708 4.96633 18.6219 4.96633H20.9359L12.228 13.674C11.9798 13.9223 11.9798 14.3247 12.228 14.573L13.4266 15.7717C13.5459 15.8909 13.7075 15.9579 13.8761 15.9579C14.0447 15.9579 14.2064 15.8909 14.3256 15.7717L23.0335 7.06378V9.37778C23.0335 9.72882 23.3181 10.0134 23.6691 10.0134H25.3642C25.7152 10.0134 25.9998 9.72882 25.9998 9.37778V2.63564C25.9998 2.2846 25.7152 2 25.3642 2Z"
                      fill="#56CCF2"
                    />{" "}
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_71_417)">
                      {" "}
                      <path
                        d="M5.78665 22.7857C5.78665 16.0909 11.2341 10.6435 17.9289 10.6435H33.7138V8.21502C33.7138 7.72411 34.009 7.28063 34.4632 7.09328C34.9173 6.90356 35.4391 7.00909 35.7865 7.35652L41.8576 13.4276C42.3319 13.9019 42.3319 14.6703 41.8576 15.1446L35.7865 21.2157C35.4391 21.5632 34.9173 21.6687 34.4632 21.479C34.009 21.2916 33.7138 20.8481 33.7138 20.3572V17.9288H17.9289C15.2502 17.9288 13.072 20.107 13.072 22.7857C13.072 23.4568 12.5289 23.9999 11.8578 23.9999H7.00087C6.32973 23.9999 5.78665 23.4568 5.78665 22.7857ZM40.9991 23.9999H36.1422C35.4711 23.9999 34.928 24.543 34.928 25.2141C34.928 27.8928 32.7497 30.071 30.0711 30.071H14.2862V27.6426C14.2862 27.1517 13.991 26.7082 13.5368 26.5208C13.0838 26.3311 12.5621 26.4367 12.2135 26.7841L6.14238 32.8552C5.66808 33.3295 5.66808 34.0979 6.14238 34.5722L12.2135 40.6433C12.4459 40.8757 12.7566 40.999 13.072 40.999C13.2285 40.999 13.3862 40.9694 13.5368 40.9065C13.991 40.7192 14.2862 40.2757 14.2862 39.7848V37.3564H30.0711C36.7659 37.3564 42.2133 31.909 42.2133 25.2141C42.2133 24.543 41.6702 23.9999 40.9991 23.9999Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_71_417"
                        x="5.78665"
                        y="7"
                        width="36.4267"
                        height="33.999"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_71_417"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                  <h4>
                    <span>Step 4:</span> Retweet the pinned post
                  </h4>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M23.5958 13.9258H21.9007C21.5497 13.9258 21.2651 14.2104 21.2651 14.5614V22.2896C21.2651 22.6998 20.9313 23.0336 20.5211 23.0336H5.71C5.29989 23.0336 4.9663 22.6998 4.9663 22.2896V7.47883C4.9663 7.06854 5.29989 6.7347 5.71 6.7347H13.8339C14.185 6.7347 14.4696 6.45011 14.4696 6.09906V4.40401C14.4696 4.05297 14.185 3.76837 13.8339 3.76837H5.71C3.66425 3.76837 1.99997 5.43291 1.99997 7.47883V22.2897C1.99997 24.3356 3.66434 26 5.71 26H20.521C22.5669 26 24.2314 24.3356 24.2314 22.2897V14.5615C24.2314 14.2104 23.9468 13.9258 23.5958 13.9258Z"
                      fill="#56CCF2"
                    />{" "}
                    <path
                      d="M25.3642 2H18.6219C18.2708 2 17.9862 2.2846 17.9862 2.63564V4.33069C17.9862 4.68173 18.2708 4.96633 18.6219 4.96633H20.9359L12.228 13.674C11.9798 13.9223 11.9798 14.3247 12.228 14.573L13.4266 15.7717C13.5459 15.8909 13.7075 15.9579 13.8761 15.9579C14.0447 15.9579 14.2064 15.8909 14.3256 15.7717L23.0335 7.06378V9.37778C23.0335 9.72882 23.3181 10.0134 23.6691 10.0134H25.3642C25.7152 10.0134 25.9998 9.72882 25.9998 9.37778V2.63564C25.9998 2.2846 25.7152 2 25.3642 2Z"
                      fill="#56CCF2"
                    />{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="inviter-section">
            <div className="container">
              <div className="in-invi">
                <h3 className="white-text">Inviter’s Address</h3>
                <div className="input-btn">
                  <span>0xrsfs32facwoQVN34NFAasdwv4571fFDSdfsfwr234VJF</span>
                  <a href="#">
                    <img
                      width="202.89"
                      height="80"
                      src="../../assets/img/btn-view-more-min.png"
                      alt="view more"
                    />
                  </a>
                </div>
                <div className="des-nor">
                  Please connect to network BSC Mainnet
                </div>
                <div className="box-detail">
                  <div className="title-number">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <g filter="url(#filter0_d_86_381)">
                        {" "}
                        <circle
                          cx="20"
                          cy="16"
                          r="16"
                          fill="url(#paint0_linear_86_381)"
                        />{" "}
                        <circle
                          cx="20"
                          cy="16"
                          r="15.5"
                          stroke="url(#paint1_linear_86_381)"
                        />{" "}
                      </g>{" "}
                      <path
                        d="M15.76 23V20.14H19.126V10.68H16.31V8.964L17.784 7.82H22.294V20.14H25.308V23H15.76Z"
                        fill="white"
                      />{" "}
                      <defs>
                        {" "}
                        <filter
                          id="filter0_d_86_381"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          {" "}
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />{" "}
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />{" "}
                          <feOffset dy="4" />{" "}
                          <feGaussianBlur stdDeviation="2" />{" "}
                          <feComposite in2="hardAlpha" operator="out" />{" "}
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />{" "}
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_86_381"
                          />{" "}
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_86_381"
                            result="shape"
                          />{" "}
                        </filter>{" "}
                        <linearGradient
                          id="paint0_linear_86_381"
                          x1="20"
                          y1="-3.21865e-07"
                          x2="30.8"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#C82CFF" />{" "}
                          <stop offset="1" stop-color="#660F85" />{" "}
                        </linearGradient>{" "}
                        <linearGradient
                          id="paint1_linear_86_381"
                          x1="20"
                          y1="-5.60284e-07"
                          x2="38.8"
                          y2="28"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#D663FF" />{" "}
                          <stop offset="1" stop-color="#4E138E" />{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                    </svg>
                    <span>Press “Claim” to receive 33,333 META</span>
                  </div>
                  <div className="title-number">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <g filter="url(#filter0_d_86_382)">
                        {" "}
                        <circle
                          cx="20"
                          cy="16"
                          r="16"
                          fill="url(#paint0_linear_86_382)"
                        />{" "}
                        <circle
                          cx="20"
                          cy="16"
                          r="15.5"
                          stroke="url(#paint1_linear_86_382)"
                        />{" "}
                      </g>{" "}
                      <path
                        d="M15.144 23V18.05C15.144 16.0407 16.024 14.86 17.784 14.508L21.854 13.694C22.2207 13.6207 22.404 13.3787 22.404 12.968V11.34C22.404 10.9 22.184 10.68 21.744 10.68H15.584V8.964L17.058 7.82H21.876C24.34 7.82 25.572 9.052 25.572 11.516V12.946C25.572 14.9553 24.692 16.136 22.932 16.488L18.862 17.302C18.4953 17.3753 18.312 17.6173 18.312 18.028V20.14H25.572V23H15.144Z"
                        fill="white"
                      />{" "}
                      <defs>
                        {" "}
                        <filter
                          id="filter0_d_86_382"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          {" "}
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />{" "}
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />{" "}
                          <feOffset dy="4" />{" "}
                          <feGaussianBlur stdDeviation="2" />{" "}
                          <feComposite in2="hardAlpha" operator="out" />{" "}
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />{" "}
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_86_382"
                          />{" "}
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_86_382"
                            result="shape"
                          />{" "}
                        </filter>{" "}
                        <linearGradient
                          id="paint0_linear_86_382"
                          x1="20"
                          y1="-3.21865e-07"
                          x2="30.8"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#C82CFF" />{" "}
                          <stop offset="1" stop-color="#660F85" />{" "}
                        </linearGradient>{" "}
                        <linearGradient
                          id="paint1_linear_86_382"
                          x1="20"
                          y1="-5.60284e-07"
                          x2="38.8"
                          y2="28"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#D663FF" />{" "}
                          <stop offset="1" stop-color="#4E138E" />{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                    </svg>
                    <span>
                      Share your referral link to receive up to 50% commission!
                    </span>
                  </div>
                  <ul className="list-box-de">
                    <li>25% aidrop commission for Level 1 (direct referral)</li>
                    <li>15% aidrop commission for Level 2</li>
                    <li>10% aidrop commission for Level 3</li>
                  </ul>
                  <div className="title-number">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <g filter="url(#filter0_d_86_385)">
                        {" "}
                        <circle
                          cx="20"
                          cy="16"
                          r="16"
                          fill="url(#paint0_linear_86_385)"
                        />{" "}
                        <circle
                          cx="20"
                          cy="16"
                          r="15.5"
                          stroke="url(#paint1_linear_86_385)"
                        />{" "}
                      </g>{" "}
                      <path
                        d="M15.364 21.856V20.14H21.744C22.184 20.14 22.404 19.92 22.404 19.48V17.28C22.404 16.84 22.184 16.62 21.744 16.62H16.992V13.76H21.744C22.184 13.76 22.404 13.54 22.404 13.1V11.34C22.404 10.9 22.184 10.68 21.744 10.68H15.584V8.964L17.058 7.82H21.876C24.34 7.82 25.572 9.052 25.572 11.516V12.924C25.572 13.5107 25.3887 13.9873 25.022 14.354L24.252 15.124L25.022 15.894C25.3887 16.2607 25.572 16.7373 25.572 17.324V19.304C25.572 21.768 24.34 23 21.876 23H16.838L15.364 21.856Z"
                        fill="white"
                      />{" "}
                      <defs>
                        {" "}
                        <filter
                          id="filter0_d_86_385"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          {" "}
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />{" "}
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />{" "}
                          <feOffset dy="4" />{" "}
                          <feGaussianBlur stdDeviation="2" />{" "}
                          <feComposite in2="hardAlpha" operator="out" />{" "}
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />{" "}
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_86_385"
                          />{" "}
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_86_385"
                            result="shape"
                          />{" "}
                        </filter>{" "}
                        <linearGradient
                          id="paint0_linear_86_385"
                          x1="20"
                          y1="-3.21865e-07"
                          x2="30.8"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#C82CFF" />{" "}
                          <stop offset="1" stop-color="#660F85" />{" "}
                        </linearGradient>{" "}
                        <linearGradient
                          id="paint1_linear_86_385"
                          x1="20"
                          y1="-5.60284e-07"
                          x2="38.8"
                          y2="28"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#D663FF" />{" "}
                          <stop offset="1" stop-color="#4E138E" />{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                    </svg>
                    <span>
                      There is no limit on the number of referrals you can
                      invite
                    </span>
                  </div>
                  <div className="note-box-detail">
                    <span>Note:</span> You must claim the airdrop before using
                    your referral link. If you haven’t claimed the airdrop, your
                    referrals won’t be able to claim the airdrop using your
                    refferral link
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nftcollection-section">
            <div className="container">
              <h2 className="white-text text-center">NFT COLLECTION</h2>
              <div className="sub-text gray-text">
                MetaZom is an open-world exploration, NFT creature collector,
                and auto battle game built on the Ethereum Blockchain, released
                on PC in 2022. Play-to- earn in a graphically-rich sci-fi
                adventure.
              </div>
              <div className="slide-nftcollection">
                <img
                  width="570"
                  height="795"
                  src="../../assets/img/character_2-min.png"
                  alt="character"
                />
                <div className="right-slide">
                  <div className="title-right-slide">
                    ALL NFT: <span>45</span>
                  </div>
                  <SliderList />
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap-section mt-154">
            <div className="container">
              <h2 className="white-text text-center">ROADMAP</h2>
              <div className="text-center mt-66">
                <img src="../../assets/img/road-map-min.png" alt="road map" />
              </div>
            </div>
          </div>

          <div className="ourteam-section">
            <div className="container">
              <h2 className="white-text text-center">OUR TEAM</h2>
              <div className="list-ourteam">
                <div className="item-ourteam">
                  <img src="../../assets/img/team1-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team2-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team3-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team4-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team1-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team2-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team3-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
                <div className="item-ourteam">
                  <img src="../../assets/img/team4-min.png" alt="team" />
                  <h4>Brian NGUYEN</h4>
                  <div>ceo/founder - head of game design</div>
                  <div>
                    <div>Ceo Dragon game</div>
                    <div>Former Ceo Hasolution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="partners-section">
            <div className="container">
              <h2 className="white-text text-center">partners</h2>
              <div className="d-flex">
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part1-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part2-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part3-min.png"
                    alt="part1"
                  />
                </a>
              </div>
              <div className="d-flex">
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part3-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part4-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part1-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part4-min.png"
                    alt="part1"
                  />
                </a>
              </div>
              <div className="d-flex">
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part2-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part3-min.png"
                    alt="part1"
                  />
                </a>
                <a href="#">
                  <img
                    width="269"
                    height="121"
                    src="../../assets/img/part2-min.png"
                    alt="part1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="footer-list">
              <div className="list-footer">
                <a href="#">Home</a>
                <a href="#">Marketplace</a>
                <a href="#">Blog</a>
                <a href="#">Whitepaper</a>
              </div>
              <div className="list-footer">
                <a href="#">FAQ</a>
                <a href="#">Contact us</a>
                <a href="#">Governance</a>
                <a href="#">Pitchdeck</a>
              </div>
            </div>
            <div className="footer-center">
              <a href="#">
                <img
                  width="280"
                  height="73"
                  src="../../assets/img/logo.svg"
                  alt="logo"
                />
              </a>
              <div>JOIN OUR COMMUNITY</div>
              <div>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_46_175)">
                      {" "}
                      <path
                        d="M20 36.6668C29.2069 36.6668 36.6667 29.2071 36.6667 20.0002C36.6667 10.7932 29.2069 3.3335 20 3.3335C10.7931 3.3335 3.33334 10.7932 3.33334 20.0002C3.33334 29.2071 10.7931 36.6668 20 36.6668ZM10.9597 19.6391L27.0292 13.4432C27.775 13.1738 28.4264 13.6252 28.1847 14.7529L28.1861 14.7516L25.45 27.6418C25.2472 28.5557 24.7042 28.7779 23.9444 28.3474L19.7778 25.2766L17.7681 27.2127C17.5458 27.4349 17.3583 27.6224 16.9278 27.6224L17.2236 23.3821L24.9458 16.4057C25.2819 16.1099 24.8708 15.9432 24.4278 16.2377L14.8847 22.246L10.7708 20.9627C9.87778 20.6793 9.85834 20.0696 10.9597 19.6391Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_46_175"
                        x="3.33334"
                        y="3.3335"
                        width="33.3333"
                        height="33.3335"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_46_175"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_46_178)">
                      {" "}
                      <path
                        d="M35.9799 11.985C35.5958 10.5569 34.4699 9.43124 33.0421 9.04671C30.4336 8.33301 19.9996 8.33301 19.9996 8.33301C19.9996 8.33301 9.56608 8.33301 6.95763 9.01965C5.55728 9.40377 4.40392 10.5571 4.0198 11.985C3.33336 14.5932 3.33336 20.0023 3.33336 20.0023C3.33336 20.0023 3.33336 25.4388 4.0198 28.0197C4.40432 29.4476 5.52981 30.5732 6.95784 30.9578C9.59354 31.6717 20.0001 31.6717 20.0001 31.6717C20.0001 31.6717 30.4336 31.6717 33.0421 30.985C34.4701 30.6007 35.5958 29.475 35.9803 28.0472C36.6665 25.4388 36.6665 20.0298 36.6665 20.0298C36.6665 20.0298 36.694 14.5932 35.9799 11.985ZM16.6777 24.9995V15.0052L25.3541 20.0023L16.6777 24.9995Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_46_178"
                        x="3.33336"
                        y="8.33301"
                        width="33.3333"
                        height="23.3389"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_46_178"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_46_179)">
                      {" "}
                      <path
                        d="M10.4225 27.0517C17.8717 29.9588 24.211 30.525 31.3948 26C31.3421 26.079 29.9211 28.1842 26.1842 29.2631C26.9737 30.3421 28.0527 31.5789 28.0527 31.5789C30.4474 31.5789 32.7895 30.8947 34.8158 29.5789C36.3948 28.5263 37.2894 26.7105 37.1052 24.8158C36.7894 21.5789 36.0262 18.421 34.8421 15.3948C33.3421 11.4474 29.7369 8.71057 25.5527 8.3158C25.1842 8.28947 24.9211 8.28947 24.7632 8.28947L24.3422 8.71049C29.158 10.0789 31.5527 12.2105 31.6053 12.2895C24.2105 8.5526 15.4737 8.50002 8.02633 12.1316C8.02633 12.1316 10.3948 9.78947 15.6316 8.5526L15.3158 8.23682C14.7631 8.23682 14.2368 8.28947 13.6842 8.36838C9.81578 9.02627 6.57898 11.6842 5.18422 15.3421C3.97367 18.4999 3.18422 21.8157 2.89477 25.1842C2.73687 26.9736 3.57898 28.7368 5.05266 29.7631C7 31.0526 9.31578 31.7368 11.6579 31.7368C11.6579 31.7368 12.6052 30.4999 13.5527 29.3947C10 28.3421 8.55265 26.2368 8.52633 26.1578L9.19492 26.4992C9.59461 26.7035 10.0044 26.8885 10.4225 27.0517ZM14.5527 24.7631C12.8421 24.7105 11.5 23.2631 11.5527 21.5263C11.6053 19.8947 12.9211 18.5789 14.5527 18.5263C16.2632 18.5789 17.6053 20.0263 17.5527 21.7631C17.4737 23.3948 16.1842 24.7106 14.5527 24.7631ZM25.2894 24.7631C23.5789 24.7105 22.2368 23.2631 22.2894 21.5263C22.3421 19.8947 23.6579 18.5789 25.2894 18.5263C27 18.5789 28.3421 20.0263 28.2894 21.7631C28.2369 23.3948 26.921 24.7106 25.2894 24.7631Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_46_179"
                        x="2.87588"
                        y="8.23682"
                        width="34.2532"
                        height="23.5"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_46_179"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g filter="url(#filter0_i_46_181)">
                      {" "}
                      <path
                        d="M38.2008 10C36.9174 10.5834 35.534 10.9667 34.1006 11.1501C35.5673 10.2667 36.7007 8.86662 37.2341 7.1832C35.8506 8.01657 34.3172 8.59994 32.7005 8.93329C31.3838 7.49988 29.5337 6.6665 27.4335 6.6665C23.5167 6.6665 20.3165 9.86667 20.3165 13.8169C20.3165 14.3836 20.3832 14.9336 20.4999 15.4503C14.5662 15.1503 9.28261 12.3001 5.76576 7.98324C5.14907 9.03329 4.79905 10.2667 4.79905 11.5668C4.79905 14.0502 6.04911 16.2503 7.98255 17.5004C6.79915 17.5004 5.69909 17.167 4.73238 16.667C4.73238 16.667 4.73238 16.667 4.73238 16.717C4.73238 20.1839 7.19917 23.084 10.466 23.734C9.86598 23.9007 9.23261 23.9841 8.58258 23.9841C8.13255 23.9841 7.68253 23.9341 7.24917 23.8507C8.14922 26.6675 10.766 28.7676 13.9162 28.8176C11.4827 30.7511 8.39923 31.8845 5.03239 31.8845C4.4657 31.8845 3.899 31.8511 3.33231 31.7845C6.49914 33.8179 10.266 35.0013 14.2995 35.0013C27.4335 35.0013 34.6506 24.1007 34.6506 14.6502C34.6506 14.3336 34.6506 14.0335 34.6339 13.7169C36.034 12.7168 37.2341 11.4501 38.2008 10Z"
                        fill="#F2C94C"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <filter
                        id="filter0_i_46_181"
                        x="3.33231"
                        y="6.6665"
                        width="34.8685"
                        height="28.335"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        {" "}
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />{" "}
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />{" "}
                        <feOffset dy="2" />{" "}
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />{" "}
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.932971 0 0 0 0 0.583333 0 0 0 1 0"
                        />{" "}
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_46_181"
                        />{" "}
                      </filter>{" "}
                    </defs>{" "}
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-text">
              <h4>Partnership Inquiry</h4>
              <div>
                Community/Business Partnership: <a href="#">Email Us</a>
                <span> | </span>
                <a href="#">Sign Up</a>
              </div>
              <div>
                Gaming Guild Application: <a href="#">Email Us</a>
                <span> | </span>
                <a href="#">Sign Up</a>
              </div>
              <div>
                Creator Program: <a href="#">Email Us</a>
                <span> | </span>
                <a href="#">Sign Up</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Home;
