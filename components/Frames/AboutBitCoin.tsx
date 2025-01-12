import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function AboutBitCoin() {

    return (
        <div className="bg-[white] w-full h-auto rounded-lg flex flex-col justify-around p-8">
            <h1 className="text-2xl font-semibold my-2">About Bitcoin</h1>
            <div> 
                <h1 className="text-xl font-semibold">
                    What is bitcoin?
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nobis! Natus iure dolorem ipsum in, tempora voluptates aspernatur iste. In consequuntur omnis mollitia repudiandae incidunt sequi, cupiditate neque inventore vitae.</p>
            </div>
            <hr className="h-[1px] bg-gray-400 my-2"/>
            <div className="flex flex-col gap-2">
                <h3 className="text-md font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellendus optio distinctio molestiae magni delectus hic sunt animi saepe, in culpa illo autem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit aspernatur alias pariatur eum, adipisci doloremque rerum voluptate iure harum quia, veritatis assumenda? Odit deleniti distinctio, necessitatibus molestias totam eligendi. voluptate nisi obcaecati quasi corrupti. Deserunt, nulla?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus excepturi sunt inventore sit esse architecto, quasi consequuntur quaerat deserunt laudantium natus libero molestiae minima, eaque aperiam est iure. Optio, quis? adipisicing elit. Corporis illo explicabo tempore mollitia similique labore eligendi adipisci impedit iusto, et vero nam dicta autem dignissimos nobis aut eum, culpa quam!</p>
                <br />
                <p>Lorem ipsum dolor, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, cum, maiores sed vero eveniet minima dolor et ratione qui animi sequi ducimus a, iusto perspiciatis rerum natus iure. Rerum, odit. sit amet consectetur adipisicing elit. Voluptatem, deleniti deserunt id voluptates quibusdam, earum rem, minima optio atque voluptas libero quos dignissimos? Eum ducimus atque rem harum reprehenderit ab.</p>
                <br />
            </div>
            <div className='flex flex-col gap-4 mb-2'>
                <h2 className='text-2xl font-bold'>Already Holding Crpto?</h2>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='bg-gradient-to-br from-[#76EDA4] to-[#0E5CAD] flex p-4 rounded-lg gap-3 justify-around lg:w-1/2 overflow-x-scroll'>
                            <img src="images/img1.png" alt=""  className='rounded-lg overflow-hidden'/>
                            <div className='flex flex-col gap-6 items-center mt-4 w-2/3 flex-wrap'>
                                <h1 className='text-white text-xl font-bold' >Calculate Your Profile</h1>
                                <button className='bg-white text-lg rounded-lg lg:w-2/3 font-semibold p-2 lg:p-1'>check Now <ArrowForwardIcon/></button>
                            </div>
                        </div>
                        <div className='bg-gradient-to-br from-[#FF9865] to-[#EF3031] flex p-4 rounded-lg gap-3 lg:w-1/2 justify-around'>
                            <img src="images/img2.png" alt=""  className='rounded-lg overflow-hidden'/>
                            <div className='flex flex-col gap-6 items-center mt-4 w-2/3 flex-wrap'>
                                <h1 className='text-white text-xl font-bold' >Calculate Your tax liablity</h1>
                                <button className='bg-white text-lg rounded-lg lg:w-2/3 font-semibold p-2 lg:p-1'>check Now <ArrowForwardIcon/></button>
                            </div>
                        </div>
                    </div>
            </div>
            <hr className="h-[1px] bg-gray-400 my-3"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est error, sint quisquam neque nostrum doloribus vitae natus ipsum accusamus adipisci numquam earum nobis nesciunt reprehenderit! Atque maxime exercitationem laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum labore! Voluptatibus culpa id distinctio tenetur? Dolorum molestias vel laborum, id ratione rem fuga, veniam aperiam autem officiis, veritatis aut.
            </p>

        </div>
    );
}