function Class43() {
    return (
        <div>
            <h1>Keep Components Pure #43</h1>
            <Cup guest={1} cup={2}/>
            <Cup guest={2}/>
            <Cup guest={3}/>
        </div>
    )
}
const Cup = ({guest,cup}) => {
    // let guest = guest + 1
    return (
        <>
            <h1>We have {guest } guest and we have to make { cup} cup of tea. </h1>
        </>
    )
}

export default Class43;