import TeamCard from "../Cards/TeamCard";

export default function Team() {

    return (
        <div className="bg-[white] w-full h-auto rounded-lg flex flex-col items-start p-6 gap-4">
            <h1 className="text-2xl font-bold">Team</h1>
            <p className="text-md ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi enim saepe dolores assumenda earum odit tempore in, officiis eligendi, aperiam nihil minus inventore nobis et magni ipsum mollitia voluptate ipsa.</p>
            <TeamCard path={'images/sandeep.png'}/>
            <TeamCard path={'images/muskan.png'}/>
            <TeamCard path={'images/ravi.png'}/>
        </div>
    )
}