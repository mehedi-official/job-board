<script>
	import { goto } from '$app/navigation';
    import BackgroundImage from '$lib/background.jpg';
	import { add_Job_Post, delete_Job_Post, get_Local_ID_By_Job_Post } from '$lib/database/index.ts';
	import posthog from 'posthog-js';
	import { onMount } from 'svelte';
	let { data } = $props();

    /**
	 * @param {string} string
	 */
    function capitalizeFirstLetter(string) {
        if(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return string
    }

    let isBookmarked = $state();
    onMount(async () => {
        let local_indexDB_id = await get_Local_ID_By_Job_Post(data.records.id);
        console.log(local_indexDB_id);

        if(local_indexDB_id === false) isBookmarked = false;
        else if(typeof local_indexDB_id === 'number') isBookmarked = true;

        console.log(isBookmarked)
    });

    const cryptoRandom = () => crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
    const cryptoRandomNumber = (min, max) => Math.floor(cryptoRandom() * (max - min + 1) + min);
    let colors = ['#8C3061', '#5865f2', '#1A3636', '#49243E', '#A76F6F']
    let colorCode = colors[cryptoRandomNumber(0, colors.length - 1)]
</script>

<div class="bg-primary text-center py-3 px-4">
    <p>🛠️ <strong>Under Construction!</strong> Filtering, Mobile responsive & Other pages will be available within a couple of weeks.</p>
</div>
<header class="bg-charcoal-200">
    <div class="xl:container mx-auto">
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
                <a href="/saved" class=" px-12 py-6 border-l border-charcoal-100">Saved Jobs</a>
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100">Contribute</a>
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100">Contact Us</a>
                <a href="/" class=" px-12 py-6 border-l border-charcoal-100 text-primary hover:text-[#438F00]">Give a Gift</a>
            </div>
        </nav>
    </div>
</header>

<div>
    <img src={BackgroundImage} alt="Pattern" class="w-full h-60">
</div>

<main class="bg-charcoal-200 text-silver-100 flex gap-24 items-start 2xl:px-80 px-48 py-10 max-[420px]:flex-col max-[420px]:px-5">
    <section>
        <article>
            {#if data.records.company_logo}
                <div class="w-14 h-14 rounded-sm">
                    <img src={data.records.company_logo} alt="Discord logo">
                </div>
            {:else}
                <section style:background={colorCode} class="w-14 h-14 rounded-sm inline-flex items-center justify-center text-2xl/6 font-semibold font-mono">
                    {data.records.company_name?.charAt(0)}
                </section>
            {/if}
            <div class="flex justify-between items-start mt-6 mb-3 max-[420px]:flex-col max-[420px]:gap-3">
                <h1 class="font-bold text-xl max-w-64 text-silver-200">{data.records.title} at {data.records.company_name}</h1>
                <p class="font-medium text-base/6 flex gap-2 items-center mb-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.0752 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.0752 14 6.6665Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> <span>{capitalizeFirstLetter(data.records.location_type)}, {data.records.location}</span>
            </p>
            </div>
            <div class="paragraph">
                {@html data.records.why_join_us}
            </div>
            <!-- <p class="text-base/5 font-normal">Join Urban Luxe as an Interior Design Project Manager, where you'll lead and orchestrate the seamless execution of our design projects, ensuring every detail reflects our commitment to excellence.</p> -->
        </article>

        {#if data.records.about_us}
        <article>
            <h2>About Us</h2>
            {@html data.records.about_us}
            <!-- <p>Mantra Technologies is a leading innovator in providing cutting-edge software solutions. We specialize in creating seamless and intuitive digital experiences for our clients across various industries. Our team is passionate about technology and design, and we are looking for a talented UI/UX Designer to join us in transforming ideas into engaging user interfaces and exceptional user experiences.</p> -->
        </article>
        {/if}

        <article>
            <h2>Your Responsibility</h2>
            {@html data.records.responsibilities}
            <!-- <ul>
                <li>Build high-quality code to create beautiful FrontEnd for games with intuitive and exciting gameplay.</li>
                <li>Collaborate with Developers, Testers, and Artists in a cross-functional agile team.</li>
                <li>Make a real impact on the final shape of products by pushing the latest mobile and browser technology to the max.</li>
                <li>Build high-quality code to create beautiful FrontEnd for games with intuitive and exciting gameplay.</li>
                <li>Collaborate with Developers, Testers, and Artists in a cross-functional agile team.</li>
                <li>Make a real impact on the final shape of products by pushing the latest mobile and browser technology to the max.</li>
            </ul> -->
        </article>

        <article>
            <h2>Skills & Qualification</h2>
            {@html data.records.skill_qualifications}
            <!-- <ul>
                <li>Proficient in JavaScript and TypeScript.</li>
                <li>Knowledgeable in OOP and Design Patterns.</li>
                <li>Able to write clean, maintainable code.</li>
                <li>Have an eye for detail and an intuition for tasteful, elegant, smooth visual effects.</li>
                <li>Fluent in English.</li>
                <li>Have an eye for detail and an intuition for tasteful, elegant, smooth visual effects.</li>
            </ul> -->
        </article>

        {#if data.records.benefits}
        <article>
            <h2>Benefits</h2>
            {@html data.records.benefits}
            <!-- <p>We're a growth stage startup with lots of exciting milestones ahead. We value health and wellness at Vestwell and in addition to a dedicated Employee Wellbeing Committee, we offer competitive health coverage and an open vacation policy. We have adopted a remote-hybrid office policy, but all employees are welcome at our bright, comfortable office with many workspace options in midtown Manhattan so everyone has a setting that is the most productive for them. We provide our team with all the equipment they need (plus a few perks!) to work effectively remotely. Oh, and naturally we have a great 401(k) plan!</p> -->
        </article>
        {/if}
    </section>
    <aside class="min-w-80 sticky top-4 max-[420px]:w-full">
        <div class=" mb-6 flex gap-4 items-center">
            <span class="px-2 py-[6px] bg-silver-100 text-charcoal-200 rounded align-middle">{data.records?.experience_range?.range?.min}-{data.records?.experience_range?.range?.max} years</span>
            <span>&bull;</span>
            <span class="px-2 py-[6px] bg-silver-100 text-charcoal-200 rounded align-middle">{capitalizeFirstLetter(data.records.job_position)}</span>
            <span>&bull;</span>
            <span class="px-2 py-[6px] bg-silver-100 text-charcoal-200 rounded align-middle">{data.records?.salary_range?.range?.min / 1000}-{data.records?.salary_range?.range?.max / 1000}k</span>
        </div>
        <button onclick={()=> {
            posthog.capture('applied_job', {
                id: data.records.id
            });
            window.location = data.records.job_source_link;
        }} class="mb-4 h-12 bg-primary hover:bg-[#65DA00] w-full py-4 uppercase text-lg/5 font-medium text-charcoal-200">Apply Now</button>
        
        {#if isBookmarked}
            <button onclick={async () => {
                let local_indexDB_id = await get_Local_ID_By_Job_Post(data.records.id);
                if(typeof local_indexDB_id === 'number') await delete_Job_Post(local_indexDB_id);
                isBookmarked = false;
            }} class="w-full h-12 py-4 uppercase text-base/4 font-normal text-primary flex items-center bg-[#080808] justify-center gap-3 hover:bg-[#0d0d0d]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 14L8.00001 10.6667L3.33334 14V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H11.3333C11.687 2 12.0261 2.14048 12.2762 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z" fill="#88F32B" stroke="#88F32B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <p>Remove from Bookmark</p>
            </button>
        {:else}
            <button onclick={async () => {
                await add_Job_Post(data.records.id);
                isBookmarked = true;
            }} class="w-full h-12 py-4 uppercase text-base/4 font-normal text-silver-200 flex items-center border border-charcoal-100 justify-center gap-3 hover:bg-[#080808]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 14L8.00001 10.6667L3.33334 14V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H11.3333C11.687 2 12.0261 2.14048 12.2762 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Save Job</p>
            </button>
        {/if}       
    </aside>
</main>

<style>
    :global(article) {
        margin-bottom: 2.5rem;
        
        h2 {
            font-size: 18px;
            font-weight: bold;
            line-height: 1.3;
            margin-bottom: 12px;
        }
        div {
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.5rem;
            color: rgba(255, 255, 255, 0.7);
        }
    }
    :global(article p) {
        font-weight: 500;
            font-size: 1rem;
            line-height: 1.5rem;
            color: rgba(255, 255, 255, 0.7);
    }
    :global(article ul) {
        list-style-type: disc;
        padding-left: 1.5rem;
        color: rgba(255, 255, 255, 0.7);
    }
    :global(article ul li) {
        padding-top: 4px;
        padding-bottom: 4px;
        color: rgba(255, 255, 255, 0.7);
    }
    :global(article a) {
        text-decoration: underline;
        color: #88F32B;
        font-weight: 600;
    }
</style>