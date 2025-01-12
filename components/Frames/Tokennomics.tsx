export default function Tokennomics() {

    return (
        <div className="bg-[white] w-full h-auto rounded-lg flex flex-col justify-around p-8">
            <h1 className="text-2xl font-bold">Tokenomics</h1>
           <div className="flex gap-8 flex-col">
            <h1 className="text-lg font-bold">Initial development</h1>
           <div className="flex gap-4">
           <div className="relative w-32 h-32 rounded-full bg-gray-200 mb-4">
                <div className="absolute w-32 h-32 rounded-full border-8  border-t-blue-500 border-r-blue-500 border-l-yellow-500 border-b-blue-500"></div>
                <div className="absolute inset-2 bg-white rounded-full border-blue-500"></div>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 ">
                <span className="flex items-center gap-3"><p className="h-2 w-2 rounded-full bg-blue-500"></p> Crowdsale investors: 80%</span>
                <span className="flex items-center gap-3"><p className="h-2 w-2 rounded-full bg-yellow-500"></p>Foundation: 20%</span>
            </div>
           </div>
           </div>

            <div className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas expedita, cupiditate omnis vitae perferendis nulla aliquid amet, exercitationem blanditiis aut molestiae a harum porro et natus suscipit consectetur voluptatem laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit voluptatibus, vero quas illo blanditiis labore odio eos ea ipsam at eius. Ad amet, ipsa doloremque debitis consectetur voluptate corrupti.</div>
        </div>
    );
}