import React, { useState } from 'react'

const Header = () => {
    const [Open, setOpen] = useState(false)

    const toggleNav = () =>{
        setOpen(!Open);
    }
  return (
    <div className=''>
        <div style={{backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.5) 50%,  rgba(0,0,0,0.5)50%), url(https://img.freepik.com/free-photo/man-wearing-virtual-reality-gadget-close-up_23-2148864950.jpg?t=st=1717936779~exp=1717940379~hmac=ce67d2c2ed413e35becbbb83f26342f8a5fbc3ec850a909f27c488c6112f002f&w=826)", backgroundPosition:"center"}} className='bg-no-repeat bg-cover  h-[100vh]'>
            <div className="px-[20px] lg:px-[40px] pt-4">
                <div className="flex justify-between lg:hidden">
                <i className="bi bi-symmetry-vertical text-3xl text-white"></i>

                <i className='bi bi-list text-3xl text-white' onClick={toggleNav}></i>
                </div>
                <div className={`${Open ? 'block' : 'hidden'} lg:block`}>
                    <div className="flex lg:flex-row flex-col lg:justify-between navbar absolute bg-slate-800 lg:bg-transparent lg:relative p-6 top-0 right-0 z-10 h-full w-[230px] lg:w-full">
                        <i class="bi bi-x-square text-2xl text-white ml-auto lg:hidden" onClick={toggleNav}></i>
                        <ul className='flex gap-12 text-white lg:flex-row flex-col'>
                            <li className='uppercase font-medium text-sm'><a href="">Home</a></li>
                            <li className='uppercase font-medium text-sm'><a href="">About</a></li>
                            <li className='uppercase font-medium text-sm'><a href="">Services</a></li>
                        </ul>
                        <i className="bi bi-symmetry-vertical text-3xl text-white hidden lg:block"></i>
                        <ul className='flex gap-12 text-white flex-col lg:flex-row lg:pt-0 pt-12'>
                            <li className='uppercase font-medium text-sm'><a href="">Team</a></li>
                            <li className='uppercase font-medium text-sm'><a href="">Contact</a></li>
                            <li className='uppercase font-medium text-sm'><i className="bi bi-cart-fill"></i></li>
                            <li className='uppercase font-medium text-sm'><i className="bi bi-0-circle-fill"></i></li>

                        </ul>
                    </div>
                </div>

                <div className="content lg:pt-[5%] pt-[10%]">
                    <div className="flex justify-between lg:items-center` flex-col lg:flex-row w-full">
                        <div className=''>
                            <h2 className='text-3xl font-semibold text-white lg:pr-[20%]'>Neebo is where design meets functionailty</h2>

                            <button className='rounded-full bg-white px-10 py-6 uppercase text-xs text-black mt-10 font-bold'>
                                Pre Order
                            </button>
                        </div>
                        <div className='flex lg:flex-col items-end gap-x-3 rotate-[90deg] lg:rotate-0 ml-auto'>
                            <p className='font-medium text-slate-400'>2024</p>
                            <p className='font-medium text-slate-400'>NEEBO Industries</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center flex-col lg:flex-row lg:pt-20 pt-[30%] md:pt-[20%]">
                        <h1 className='text-white md:text-[14rem] text-9xl rotate-0 md:rotate-0'>neebo</h1>

                        <div className='flex flex-col items-end ml-auto'>
                            <p className='font-medium text-slate-400'>2024</p>
                            <p className='font-medium text-slate-400'>NEEBO Industries</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <section id='blend' className='bg-zinc-900'>
            <div className='px-[20px] lg:px-[40px] py-[10%]'>
                <div className="flex flex-col md:flex-row">
                    <div className='basis-[45%]'>
                        <p className='text-white uppercase text-xs'>The Blend of simplicity and Ennovation</p>
                    </div>
                    <div className='basis-[55%]'>
                        <h4 className='text-white lg:text-[2.55rem] text-2xl leading-[3rem]'><span className='text-zinc-400 font-semibold'>Welcome to Neebo</span> – your reliable and friendly AI companion design to make your daily simpler and more enjoyable in this fast-paced world.</h4>

                        <button className='rounded-full bg-white px-10 py-6 uppercase text-xs text-black mt-10 font-bold'>
                                    Pre Order
                        </button>

                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className='basis-[25%] h-[300px]'>
                    <img src="https://img.freepik.com/premium-photo/3d-render-liquid-metal-flowing-shape_877179-1750.jpg?w=740" alt="" className='w-full h-full object-cover object-top rounded-md' />
                </div>
                <div className='basis-[45%] h-[500px]'>
                  <img src="https://img.freepik.com/free-photo/high-tech-futuristic-gaming-virtual-reality-headset_23-2151133296.jpg?t=st=1718088914~exp=1718092514~hmac=ffaa3d50d198b4c4cb202ed205836763e7165ab505d594433205387c9726760d&w=826" alt="" className='w-full h-full object-cover object-top rounded-md' />
                </div>
                <div className='basis-[25%] h-[300px]'>
                    <img src="https://img.freepik.com/premium-photo/modern-computer-mouse-generated-ai_644690-3608.jpg?w=360" alt="" className='w-full h-full object-cover object-top rounded-md' />
                </div>
            </div>

            <h1 className='uppercase text-center font-semibold text-white lg:text-9xl text-5xl py-[10%]'>Your Friendly <br /> AI Sidekick</h1>
            
            <div className='px-[20px] lg:px-[40px]'>
                <div className="flex text-white justify-between flex-col md:flex-row gap-y-3">
                    <div className='basis-[30%]'>
                        <h4 className='font-semibold text-xl pb-6'>Multitasking mastery</h4>
                        <p className='text-zinc-400 font-medium text-lg'>Welcome to Neebo - your reliable and friendly AI companion designed to make your daily life simpler and more enjoyable in this fast-paced world.</p>
                    </div>
                    <div className='basis-[30%]'>
                        <h4 className='font-semibold text-xl pb-6'>Personalized AI</h4>
                        <p className='text-zinc-400 font-medium text-lg'>Tailors its responses and tasks to your preferences and habits, offering a truly personalized assistant experience.</p>
                    </div>
                    <div className='basis-[30%]'>
                        <h4 className='font-semibold text-xl pb-6'>Smart Connectivity</h4>
                        <p className='text-zinc-400 font-medium text-lg'>Stay connected with your smart home devices, enabling you to control your environments with simple voice commands.</p>
                    </div>
                </div>

                <div className="flex pt-[10%] flex-col md:flex-row gap-y-5 lg:gap-y-0">
                    <div className='basis-[50%] flex flex-col justify-evenly'>
                        <div>
                            <div className="px-2 py-1 mb-5 bg-[rgba(255,255,255,0.05)] rounded-md w-[150px]">
                                <small className='uppercase text-white'>• Design Fetures</small>
                            </div>

                            <h3 className='text-white lg:text-7xl text-4xl font-semibold'>Your pocket- <br /> sized personal <br /> assistant</h3>
                        </div>
                        <div>
                            <p className='text-zinc-400 font-medium'> Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Vel vitae iusto mollitia. <br /> Quibusdam ea nostrum nulla.</p>

                            <button className='rounded-full bg-white px-10 py-6 uppercase text-xs text-black mt-10 font-bold'>
                                Pre Order
                           </button>
                        </div>
                    </div>
                    <div className='basis-[50%] pt-[10%] lg:pt-0
                    '>
                        <img src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524379.jpg?t=st=1718089249~exp=1718092849~hmac=1e60b46b88f053ebfb95bc8d62cbdab116f237442e8a02efeeac440d5672c632&w=740" alt="" className='w-full rounded-md lg:h-[700px] h-full object-cover object-center' />
                    </div>
                </div>
            </div>

            <div className="lg:flex hidden pt-[10%] justify-between lg:px-[100px]">
                <div>
                    <img src="https://img.freepik.com/free-photo/high-tech-futuristic-gaming-virtual-reality-headset_23-2151133167.jpg?t=st=1718089448~exp=1718093048~hmac=1e02292af4f4f9cf9e85cc63f0f37dec507f6722bf5d56597991adfafafddfbb&w=360" alt="" className='lg:w-[150px] lg:h-[130px] w-[50%] object-cover object-top rounded-md' />
                </div>
                <div className='mt-12'>
                    <img src="https://img.freepik.com/free-photo/high-tech-futuristic-gaming-virtual-reality-headset_23-2151133211.jpg?t=st=1718089526~exp=1718093126~hmac=a25decbffd7a6adacaa7608e561cbffc5d23ed502eeedde097df4760cdf69b51&w=826" alt="" className='w-[200px] h-[100px] object-cover object-top rounded-md' />
                </div>
            </div>
            <div className="flex pt-[5%] justify-between">
                <div className='basis-[20%] hidden lg:block'>
                    <img src="https://img.freepik.com/premium-photo/colored-game-scene-props-icon-virtual-item-shape-3d-rendering-modeling-wallpaper-background_911849-384891.jpg?w=360" alt="" className='w-full h-[350px] object-cover object-top rounded-md' />
                </div>
                <div className='lg:basis-[45%] basis-[100%] text-center px-[20px] lg:px-0 py-10'>
                    <h4 className='text-white md:text-5xl text-lg font-semibold'><span className='text-zinc-400'>Welcome to Neebo –</span> your reliable and friendly AI companion designed to make your daily life simpler and more enjoyable in this fast-paced world.</h4>
                    <button className='rounded-full bg-white px-10 py-6 uppercase text-xs text-black mt-10 font-bold'>
                                        Pre Order
                            </button>

                </div>
                <div className='basis-[15%] hidden lg:block'>
                    <img src="https://img.freepik.com/free-photo/high-tech-futuristic-gaming-virtual-reality-headset_23-2151133167.jpg?t=st=1718089448~exp=1718093048~hmac=1e02292af4f4f9cf9e85cc63f0f37dec507f6722bf5d56597991adfafafddfbb&w=360" alt="" className='w-full h-[300px] object-cover object-top rounded-md' />
                </div>
            </div>
            <div className="lg:flex hidden justify-between pb-[10%]">
                <img src="https://img.freepik.com/premium-photo/modern-pod-bed-illuminated-from-within_1188475-3878.jpg?w=826" alt="" className='lg:w-[230px] lg:h-[150px] rounded-md object-cover object-top' />
                <img src="https://img.freepik.com/free-photo/vr-glasses-cell-phone-wooden-desk_1387-986.jpg?t=st=1718089709~exp=1718093309~hmac=e3e5908f3f3b62f212fcb245439e12623dbbae07ae85083ff96204fbe12e7103&w=740" alt="" className='lg:w-[200px] lg:h-[150px] rounded-md object-cover object-top me-4' />
            </div>



        </section>

        <section id='design' className='px-[20px] lg:px-[40px] bg-zinc-200 py-[10%]'>
            <div className="flex justify-between flex-col md:flex-row">
                <div className='basis-[40%]'>
                    <p className='uppercase font-semibold'>The Blend of simplicity and innovation</p>
                </div>
                <div className='basis-[50%]'>
                    <h2 className='lg:text-8xl font-semibold text-3xl'>Designed to make your daily life simpler</h2>

                    <p className='text-2xl font-semibold text-zinc-700 lg:pt-14 pt-4'>Welcome to Neebo – your reliable and friendly AI companion designed to make your daily life simpler and more enjoyable in this fast-paced world.</p>

                    <button className='rounded-full bg-white px-10 py-6 uppercase text-xs text-black mt-10 font-bold'>
                                        Pre Order
                            </button>

                </div>
            </div>

            <div className="flex py-[10%] flex-wrap justify-between ">
                <div className='md:basis-[48%] basis-[100%] hidden md:block'>
                    <img src="https://img.freepik.com/free-photo/vr-glasses-gaming_23-2151138401.jpg?t=st=1718089759~exp=1718093359~hmac=a9f6a92dbdf5c8f9876517166bcf0b08f2f336c32f8dbb078e2edc7c473aa31d&w=740" alt="" className='lg:w-full w-[400px] lg:h-[300px] h-[300px] object-cover object-top rounded-md' />
                </div>
                <div className='md:basis-[48%] basis-[100%] hidden md:block'>
                    <img src="https://img.freepik.com/free-photo/high-tech-futuristic-gaming-virtual-reality-headset_23-2151133211.jpg?t=st=1718089526~exp=1718093126~hmac=a25decbffd7a6adacaa7608e561cbffc5d23ed502eeedde097df4760cdf69b51&w=826" alt="" className='lg:w-full w-[400px] lg:h-[300px] h-[300px] object-cover object-top rounded-md' />
                </div>
                <div className='basis-[100%] lg:mt-10 md:hidden lg:block'>
                    <img src="https://img.freepik.com/premium-photo/stylish-black-background-original-design-multicooker-3d-illustration-3d-rendering_158469-200.jpg?w=826" alt="" className='lg:w-full w-[400px] lg:h-[400px] h-[300px] object-cover object-top rounded-md' />
                </div>
            </div>

            <div className="flex md:flex-row md:flex-wrap justify-between flex-col gap-y-4 lg:gap-0">
                <div className='lg:basis-[24%] md:basis-[46%]'>
                    <div className='rounded-full bg-white flex items-center justify-center w-12 h-12'>
                        <i className="bi bi-person-bounding-box"></i>
                    </div>

                    <h4 className='font-medium text-lg pt-6'>Authentic Design</h4>
                    <p>Neebo's sleek and modern aesthetics are crafted for both elegance and comfort for both elegance and comfort, making it a fashionable accessory for any lifestyle.</p>
                </div>
                <div className='lg:basis-[24%] md:basis-[46%]'>
                    <div className='rounded-full bg-white flex items-center justify-center w-12 h-12'>
                    <i className="bi bi-battery"></i>
                    </div>

                    <h4 className='font-medium text-lg pt-6'>Battery life</h4>
                    <p>Designed for all-day use, Neebo keeps up with your busy schedule without needing frequent recharges.</p>
                </div>
                <div className='lg:basis-[24%] md:basis-[46%]'>
                    <div className='rounded-full bg-white flex items-center justify-center w-12 h-12'>
                    <i className="bi bi-megaphone"></i>
                    </div>

                    <h4 className='font-medium text-lg pt-6'>Voice-activated controls</h4>
                    <p>Hands-free operation for ease and convenience, allowing you to stay focused on the task at hand.</p>
                </div>
                <div className='lg:basis-[24%] md:basis-[46%]'>
                    <div className='rounded-full bg-white flex items-center justify-center w-12 h-12'>
                    <i className="bi bi-bluetooth"></i>
                    </div>

                    <h4 className='font-medium text-lg pt-6'>Smart connectivity</h4>
                    <p>Stay connected with your smart home devices, enabling you to control your environment with simple voice commands.</p>
                </div>
            </div>

            <div className="md:flex-row flex pt-[10%] justify-between gap-y-8 flex-col">
                <div className='basis-[49%] bg-white p-10 rounded-md lg:h-[550px] md:h-[350px] flex flex-col justify-between'>
                    <h2 className='lg:text-7xl text-4xl font-semibold'>Smart <br /> connectivity</h2>
                    <div>
                        <h4 className='text-2xl font-bold '>Smart connectivity</h4>
                        <p>Stay connected with your smart home devices, enabling you to control your environment with simple voice commands.</p>
                    </div>
                </div>
                <div className='basis-[48%]'>
                   <img src="https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349235.jpg?t=st=1718091960~exp=1718095560~hmac=5de986ab61f7769c933028c1ea38d748607638d35a5a7d8e58128d4cc5f76e01&w=360" alt="" className='w-full rounded-md lg:h-[550px] h-[350px]' />
                </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row pt-[7%] lg:pt-[3%]">
                <div className='basis-[49%] bg-white p-8 rounded-md lg:h-[550px] md:h-[350px] flex flex-col justify-between'>
                    <h2 className='lg:text-7xl text-4xl font-semibold'>Portable <br /> Perfection</h2>
                    <div>
                        <h4 className='text-2xl font-bold '>Lightweight and compact</h4>
                        <p>Neebo is designed for on-the-go assistance, fitting seamlessly into your lifestyle. </p>
                    </div>
                </div>
                <div className='basis-[48%] pt-6 lg:pt-0'>
                   <img src="https://img.freepik.com/premium-photo/simple-creative-material-wallpaper-background-light-art-design-texture-banner-color_1041572-57865.jpg?w=360" alt="" className='w-full rounded-md lg:h-[550px] h-[350px] object-cover object-top' />
                </div>
            </div>

        </section>

        <section id='cta' className='px-[20px] lg:px-[40px] py-[10%] bg-zinc-800'>
            <div className="flex flex-col lg:flex-row">
                <div className='basis-[40%]'>
                    <div className="px-2 py-1 bg-[rgba(255,255,255,0.05)] rounded-md w-[130px]">
                        <small className='uppercase text-white'>Get Neebo Now</small>
                    </div>
                        <h1 className='text-white mt-12 text-5xl'>NEEBO – Where AI <br /> Meets Your Daily Life</h1>

                        <button className='rounded-full bg-white px-10 py-6 uppercase text-xs text-black mt-10 font-bold'>
                            Pre Order
                        </button>
                </div>
                <div className='basis-[70%] mt-16 lg:-ml-[15%]'>
                    <img src="headset.png" alt="" className='w-full' />
                </div>
            </div>
        </section>

        <section id='footer' className='lg:px-[40px] px-[20px] py-[5%] text-center lg:text-left'>
            <div className="flex md:flex-row flex-wrap flex-col">
                <form action="" className='basis-[30%] md:basis-[40%]'>
                    <h5 className='font-semibold text-lg'>Sign up for our newsletter</h5>
                    <input type="text" className='bg-[#f1f1f1] rounded-md px-3 py-2 mt-4 w-[80%]' placeholder='Enter your email' />
                </form>
                <div className="basis-[15%]">
                    <h5 className='font-semibold text-lg'>Landings</h5>
                    <ul className='pt-4'>
                        <li>Landing one</li>
                        <li>Landing one</li>
                        <li>Landing one</li>
                        <li>Landing one</li>
                    </ul>
                </div>
                <div className="basis-[15%]">
                    <h5 className='font-semibold text-lg'>Features</h5>
                    <ul className='pt-4'>
                        <li>Features one</li>
                        <li>Features one</li>
                        <li>Features one</li>
                        <li>Features one</li>
                    </ul>
                </div>
                <div className="basis-[15%]">
                    <h5 className='font-semibold text-lg'>CMS</h5>
                    <ul className='pt-4'>
                        <li>CMS one</li>
                        <li>CMS one</li>
                    </ul>
                </div>
                <div className="basis-[15%]">
                    <h5 className='font-semibold text-lg'>Templates</h5>
                    <ul className='pt-4'>
                        <li>Templates one</li>
                        <li>Templates one</li>
                        <li>Templates one</li>
                        <li>Templates one</li>
                    </ul>
                </div>
            </div>
            <hr className='text-black opacity-100 bg-black my-8' />
            <div className="text-center">
                <i className="bi bi-symmetry-vertical text-9xl text-black"></i>
            </div>
        </section>


    </div>
  )
}

export default Header
