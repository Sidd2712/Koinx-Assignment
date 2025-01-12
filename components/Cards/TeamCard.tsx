export default function TeamCard(props:any) {

    return (
        <div className="flex flex-col lg:flex-row w-full h-auto bg-[#e7f4fd] gap-4 p-4 rounded-lg">    
            <div className=" flex flex-col items-center justify-center gap-1 w-auto">
                <img src={props.path} alt="" />
                <p className="text-lg font-bold">Sandeep</p>
                <p className="text-gray-500 text-sm">Designation Here</p>
            </div>
            <div className="text-md lg:w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod necessitatibus quibusdam quis ipsum quas, eum dolorum neque deserunt odio hic blanditiis saepe at repellat voluptas esse quam labore dignissimos!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ea maxime. Consectetur repudiandae vel deleniti in veniam aliquid ratione ad nam debitis! Incidunt aspernatur ut cum. Adipisci accusantium asperiores quisquam.
            </div>
        </div>
    );
}