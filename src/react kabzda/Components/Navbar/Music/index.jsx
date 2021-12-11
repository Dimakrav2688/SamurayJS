import React from "react"

const Music = () => {
    const musicList = [
        "first music",
        "second music",
        "third music",
        "four music",
        "five music"
    ]
    

    return (
        <>
            <div>Here is our music</div>
            {musicList.map((music) => <p> {music} </p>)}
        </>
    )
}

export default Music;