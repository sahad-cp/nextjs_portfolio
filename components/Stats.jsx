"use client"

import CountUp from "react-countup"

const stats = [
    {
        num:12,
        text:"Years of experience"
    },
    {
        num:26,
        text:"Projects completed"
    },
    {
        num:8,
        text:"Technologies mastered"
    },
    {
        num:500,
        text:"Code commits"
    },
]

function Stats() {
  return (
    <section>
        <div className="container max-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none ">
                {stats.map((item, index)=>{
                    return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp end={item.num} duration={5} deley={2} className="text-4xl xl:text-6xl font-extrabold" />
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats