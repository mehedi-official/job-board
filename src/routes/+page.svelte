<script lang="ts">
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime'
    let { data } = $props();

    dayjs.extend(relativeTime);
    let job_content:HTMLElement | undefined = $state();


    function handleExplore(e: MouseEvent) {
        e.preventDefault();
        job_content?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
    
    function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<div class="bg-primary text-center py-3 px-4">
    <p>🛠️ <strong>Under Construction!</strong> Filtering, Mobile responsive & Other pages will be available within a couple of weeks.</p>
</div>
<header class="bg-charcoal-200 text-silver-200 h-screen">
    <section class="xl:container mx-auto h-full flex flex-col justify-between max-[420px]:justify-start">
        <nav class=" flex items-center justify-between border-b border-charcoal-100 max-[420px]:justify-center">
            <a href="/">
                <div class="py-6">
                    <svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9605 12.0244L22.8524 8.21181C23.7505 7.33198 23.7505 5.96334 22.8524 5.08351L17.3139 10.5092L16.316 9.53157L20.2578 5.67006C21.1559 4.79023 21.1559 3.42159 20.2578 2.54176L14.6694 8.0163L13.6715 7.0387L17.6632 3.12831C18.5613 2.24848 18.5613 0.879837 17.6632 0L12.0249 5.42566L8.43243 1.85744C7.5343 0.977598 6.13721 0.977598 5.23908 1.85744L10.4283 6.94094L9.38045 7.96741L5.78794 4.44807C4.88982 3.56823 3.49271 3.56823 2.59459 4.44807L7.78379 9.53157L6.78586 10.5092L3.19334 6.98982C2.29521 6.10998 0.898129 6.10998 0 6.98982L5.08939 11.9756L1.1975 15.7882C0.299373 16.668 0.299373 18.0367 1.1975 18.9165L6.73597 13.4908L7.73389 14.4684L3.7921 18.3299C2.89397 19.2098 2.89397 20.5784 3.7921 21.4583L9.38045 15.9837L10.3784 16.9613L6.38669 20.8717C5.48856 21.7515 5.48856 23.1202 6.38669 24L11.975 18.5255L15.5676 22.0937C16.4657 22.9735 17.8628 22.9735 18.7609 22.0937L13.5717 17.0102L14.6195 15.9837L18.2121 19.5031C19.1102 20.3829 20.5073 20.3829 21.4054 19.5031L16.2162 14.4196L17.2141 13.442L20.8066 16.9613C21.7048 17.8411 23.1019 17.8411 24 16.9613L18.9605 12.0244ZM12.0249 8.5051L13.0229 9.48269L11.975 10.5092L10.9771 9.53157L12.0249 8.5051ZM9.38045 12.9043L8.48233 12.0244L9.38045 11.1446L10.2786 12.0733L9.38045 12.9043ZM12.0249 15.446L11.027 14.4684L12.0748 13.442L13.0728 14.4196L12.0249 15.446ZM13.7713 11.9756L14.6694 11.0957L15.5676 11.9756L14.6694 12.8554L13.7713 11.9756Z" fill="white"/>
                    <path d="M41.392 4.2V15.192C41.392 17.112 40.88 18.616 39.856 19.704C38.848 20.792 37.344 21.336 35.344 21.336C33.344 21.336 31.832 20.792 30.808 19.704C29.8 18.616 29.296 17.112 29.296 15.192V4.2H32.464V15.192C32.464 16.184 32.696 16.96 33.16 17.52C33.624 18.08 34.352 18.36 35.344 18.36C36.336 18.36 37.064 18.08 37.528 17.52C37.992 16.96 38.224 16.184 38.224 15.192V4.2H41.392ZM43.2713 9.096H48.3113V10.824H48.7433C48.9673 10.168 49.3433 9.664 49.8713 9.312C50.4153 8.944 51.0633 8.76 51.8153 8.76C52.9993 8.76 53.9513 9.136 54.6713 9.888C55.3913 10.624 55.7513 11.752 55.7513 13.272V13.8L52.6313 14.088V13.752C52.6313 13.096 52.4633 12.576 52.1273 12.192C51.7913 11.792 51.2873 11.592 50.6153 11.592C49.9433 11.592 49.4153 11.824 49.0313 12.288C48.6473 12.752 48.4553 13.416 48.4553 14.28V18.12H51.1913V21H42.9833V18.12H45.4313V11.976H43.2713V9.096ZM60.3426 21H57.3186V4.2H60.3426V10.824H60.7746C61.0946 10.168 61.5586 9.664 62.1666 9.312C62.7746 8.944 63.5506 8.76 64.4946 8.76C65.1986 8.76 65.8626 8.896 66.4866 9.168C67.1266 9.44 67.6786 9.84 68.1426 10.368C68.6226 10.88 68.9986 11.512 69.2706 12.264C69.5586 13.016 69.7026 13.872 69.7026 14.832V15.264C69.7026 16.24 69.5666 17.104 69.2946 17.856C69.0226 18.608 68.6546 19.248 68.1906 19.776C67.7266 20.288 67.1746 20.68 66.5346 20.952C65.9106 21.208 65.2306 21.336 64.4946 21.336C63.9506 21.336 63.4786 21.28 63.0786 21.168C62.6786 21.056 62.3266 20.904 62.0226 20.712C61.7346 20.52 61.4866 20.304 61.2786 20.064C61.0866 19.808 60.9186 19.544 60.7746 19.272H60.3426V21ZM63.5106 18.456C64.4546 18.456 65.2146 18.168 65.7906 17.592C66.3826 17 66.6786 16.2 66.6786 15.192V14.904C66.6786 13.896 66.3826 13.104 65.7906 12.528C65.2146 11.936 64.4546 11.64 63.5106 11.64C62.5666 11.64 61.7986 11.944 61.2066 12.552C60.6306 13.144 60.3426 13.928 60.3426 14.904V15.192C60.3426 16.168 60.6306 16.96 61.2066 17.568C61.7986 18.16 62.5666 18.456 63.5106 18.456ZM79.5019 19.272C79.1819 20.024 78.7339 20.56 78.1579 20.88C77.5819 21.184 76.9099 21.336 76.1419 21.336C75.4219 21.336 74.7419 21.2 74.1019 20.928C73.4779 20.656 72.9259 20.256 72.4459 19.728C71.9659 19.2 71.5819 18.56 71.2939 17.808C71.0219 17.056 70.8859 16.2 70.8859 15.24V14.856C70.8859 13.912 71.0219 13.064 71.2939 12.312C71.5659 11.56 71.9339 10.92 72.3979 10.392C72.8619 9.864 73.3979 9.464 74.0059 9.192C74.6299 8.904 75.2939 8.76 75.9979 8.76C76.8459 8.76 77.5259 8.904 78.0379 9.192C78.5659 9.48 78.9819 9.928 79.2859 10.536H79.7179V9.096H82.7419V17.4C82.7419 17.88 82.9579 18.12 83.3899 18.12H83.8459V21H81.7819C81.2379 21 80.7899 20.84 80.4379 20.52C80.1019 20.2 79.9339 19.784 79.9339 19.272H79.5019ZM76.8139 18.456C77.6939 18.456 78.3979 18.168 78.9259 17.592C79.4539 17 79.7179 16.2 79.7179 15.192V14.904C79.7179 13.896 79.4539 13.104 78.9259 12.528C78.3979 11.936 77.6939 11.64 76.8139 11.64C75.9339 11.64 75.2299 11.936 74.7019 12.528C74.1739 13.104 73.9099 13.896 73.9099 14.904V15.192C73.9099 16.2 74.1739 17 74.7019 17.592C75.2299 18.168 75.9339 18.456 76.8139 18.456ZM88.7972 21H85.7732V9.096H88.7972V10.872H89.2292C89.5012 10.2 89.9412 9.68 90.5492 9.312C91.1572 8.944 91.8692 8.76 92.6852 8.76C93.2612 8.76 93.7972 8.856 94.2932 9.048C94.8052 9.224 95.2532 9.504 95.6372 9.888C96.0212 10.272 96.3172 10.76 96.5252 11.352C96.7492 11.944 96.8612 12.648 96.8612 13.464V21H93.8372V14.232C93.8372 13.384 93.6292 12.72 93.2132 12.24C92.8132 11.744 92.2292 11.496 91.4612 11.496C90.5652 11.496 89.8932 11.8 89.4452 12.408C89.0132 13 88.7972 13.8 88.7972 14.808V21Z" fill="white"/>
                    </svg>
                </div>
            </a>
            <div class=" text-base/4 font-normal text-silver-100 uppercase max-[420px]:hidden">
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100">Contribute</a>
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100">About Us</a>
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100">Contact Us</a>
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100 text-primary">Give a Gift</a>
            </div>
        </nav>

        <div class="flex flex-col items-center gap-6 max-[420px]:pt-28">
            <h1 class=" text-6xl/snug text-silver-100 max-w-xl text-center mx-auto max-[420px]:text-4xl">Land Your Dream Tech
                Job. Start
                Searching Now.</h1>
            <a onclick={handleExplore} href="/" class=" text-silver-100 border border-charcoal-100 py-4 px-12 w-fit">EXPLORE</a>
        </div>

        <section class=" w-full border-y border-charcoal-100 flex justify-between max-[420px]:hidden">
            <div class=" flex gap-6 items-center py-9 px-12 border-r border-charcoal-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_227)">
                    <path d="M10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10C20 4.4772 15.5228 0 10 0Z" fill="#4D4D4D"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6_227">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_230)">
                    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#4D4D4D"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6_230">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_229)">
                    <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="#4D4D4D"/>
                    <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="#4D4D4D"/>
                    <path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="#4D4D4D"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6_229">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2719 1.58643H18.0831L11.9414 8.606L19.1667 18.1581H13.5094L9.07836 12.3648L4.00829 18.1581H1.19536L7.76453 10.6498L0.833336 1.58643H6.63426L10.6395 6.8817L15.2719 1.58643ZM14.2853 16.4754H15.843L5.78783 3.1807H4.11622L14.2853 16.4754Z" fill="#4D4D4D"/>
                </svg>
            </div>

            <div class=" flex items-center border-l border-charcoal-100 text-charcoal-50">
                <h2 class=" px-8 py-9 uppercase">Mehedi Hasan</h2>
                <h2 class=" px-12 py-9 border-l border-charcoal-100">34.07062188658319, <br>-84.27424250862218</h2>
            </div>
        </section>
    </section>
</header>

<main bind:this={job_content} class=" bg-charcoal-200 text-silver-200 relative">
    <div class="xl:container mx-auto flex max-[420px]:flex-col items-start">
        <aside class="pt-12 border-r border-charcoal-100 min-w-96 sticky top-0 h-dvh max-[420px]:hidden">
            <div class=" pb-4 px-10 border-b border-charcoal-100">
                <h3 class=" text-xl/5 font-medium">Filters</h3>
            </div>
            <div class=" py-6 px-10 border-b border-charcoal-100">
                <h3 class=" text-xl/5 font-medium ">Date Posted</h3>
                <select name="" id="" class=" bg-charcoal-200 p-4 border border-charcoal-100 mt-4 w-full"><option value="">ANYTIME</option></select>
            </div>

            <div class=" py-6 px-10 border-b border-charcoal-100">
                <h3 class=" text-xl/5 font-medium ">Job Type</h3>
                <select name="" id="" class=" bg-charcoal-200 p-4 border border-charcoal-100 mt-4 w-full"><option value="">ANYTIME</option></select>
            </div>

            <div class=" py-6 px-10 border-b border-charcoal-100">
                <h3 class=" text-xl/5 font-medium ">Location</h3>
                <select name="" id="" class=" bg-charcoal-200 p-4 border border-charcoal-100 mt-4 w-full"><option value="">ANYTIME</option></select>
            </div>
        </aside>
        <section class="regular max-[420px]:w-full">
            {#each data.records as record}
            <a href={`/job/${record.id}`}>
                <article class="flex flex-col gap-6 py-12 px-14 border-b text-silver-100 border-charcoal-100 hover:bg-[#080808] cursor-pointer max-[420px]:px-4">
                    <header class="flex justify-between items-center max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-4">
                        <div class="flex items-center gap-4 max-[420px]:flex-col max-[420px]:items-start">
                            <div>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="55" height="55" rx="3.5" fill="#5865F2"/>
                                <rect x="0.5" y="0.5" width="55" height="55" rx="3.5" stroke="#323232"/>
                                <path d="M36.317 20.1556C34.7873 19.4537 33.147 18.9366 31.4319 18.6404C31.4007 18.6347 31.3695 18.649 31.3534 18.6775C31.1424 19.0528 30.9087 19.5423 30.7451 19.927C28.9004 19.6508 27.0652 19.6508 25.2583 19.927C25.0946 19.5337 24.8525 19.0528 24.6406 18.6775C24.6245 18.6499 24.5933 18.6356 24.562 18.6404C22.8479 18.9356 21.2076 19.4527 19.6769 20.1556C19.6637 20.1613 19.6523 20.1708 19.6448 20.1832C16.5334 24.8316 15.681 29.3657 16.0992 33.8436C16.1011 33.8655 16.1134 33.8864 16.1304 33.8997C18.1832 35.4073 20.1717 36.3225 22.1233 36.9291C22.1545 36.9386 22.1876 36.9272 22.2075 36.9015C22.6691 36.2711 23.0806 35.6063 23.4335 34.9073C23.4543 34.8664 23.4344 34.8178 23.3919 34.8016C22.7391 34.554 22.1176 34.2521 21.5197 33.9093C21.4724 33.8816 21.4687 33.814 21.5122 33.7816C21.638 33.6873 21.7638 33.5893 21.884 33.4902C21.9057 33.4721 21.936 33.4683 21.9615 33.4797C25.8893 35.273 30.1415 35.273 34.023 33.4797C34.0485 33.4674 34.0788 33.4712 34.1015 33.4893C34.2216 33.5883 34.3475 33.6873 34.4742 33.7816C34.5177 33.814 34.5149 33.8816 34.4676 33.9093C33.8697 34.2588 33.2482 34.554 32.5945 34.8006C32.552 34.8168 32.533 34.8664 32.5538 34.9073C32.9143 35.6054 33.3258 36.2701 33.7789 36.9005C33.7978 36.9272 33.8319 36.9386 33.8631 36.9291C35.8241 36.3225 37.8126 35.4073 39.8654 33.8997C39.8834 33.8864 39.8948 33.8664 39.8967 33.8445C40.3971 28.6676 39.0585 24.1706 36.3482 20.1841C36.3416 20.1708 36.3303 20.1613 36.317 20.1556ZM24.02 31.117C22.8375 31.117 21.8631 30.0313 21.8631 28.6981C21.8631 27.3648 22.8186 26.2791 24.02 26.2791C25.2309 26.2791 26.1958 27.3743 26.1769 28.6981C26.1769 30.0313 25.2214 31.117 24.02 31.117ZM31.9947 31.117C30.8123 31.117 29.8379 30.0313 29.8379 28.6981C29.8379 27.3648 30.7933 26.2791 31.9947 26.2791C33.2056 26.2791 34.1705 27.3743 34.1516 28.6981C34.1516 30.0313 33.2056 31.117 31.9947 31.117Z" fill="white"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-[18px]/6 mb-1">{record.title}</h3>
                                <p class="font-medium text-xs flex gap-3">{record.company_name} <span>&bull;</span> {capitalizeFirstLetter(record.job_position)} <span>&bull;</span> BDT {record.salary_range.range.min/1000}-{record.salary_range.range.max/1000}k</p>
                            </div>
                        </div>
                        <div class=" text-right max-[420px]:text-left">
                            <p class="font-medium text-base/6 flex gap-2 items-center mb-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.0752 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.0752 14 6.6665Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> <span>{capitalizeFirstLetter(record.location_type)}, {record.location}</span></p>
                            <p class="text-charcoal-50 font-normal text-sm/4">Posted {dayjs(record.created).fromNow()}</p>
                        </div>
                    </header>
                    {@html record.why_join_us}
                    <!-- <p class=" font-normal text-sm max-[420px]:hidden">Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search ... <span class=" text-primary">Read More</span></p> -->
                </article>
            </a>
            {/each}
            
        </section>
    </div>
    
</main>

<svelte:head>
    <title>Urban Tech Jobs - Land Your Dream Tech Job in Bangladesh.</title>
    <meta name="description" content="Launch your tech career at Urban Tech Jobs Bangladesh. We connect top tech talent with exciting opportunities in coding, UX/UI, AI & cyber. Easy apply. Free for candidates & hiring managers.">
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Urban Tech Jobs - Land Your Dream Tech Job in Bangladesh."/>
    <meta property="og:description" content="Launch your tech career at Urban Tech Jobs Bangladesh. We connect top tech talent with exciting opportunities in coding, UX/UI, AI & cyber. Easy apply. Free for candidates & hiring managers."/>
    <meta property="og:url" content="https://techjob-bd.netlify.app/"/>
    <meta property="og:site_name" content="Urban Jobs"/>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="Urban Jobs" />
</svelte:head>

<style>
    :global(article > p) {
        font-size: 14px;
        line-height: 20px;
        font-weight: normal;
    }
</style>
