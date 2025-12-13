const Props=(props)=>{

    return(
        <div>
            <h1>This is a Props Component</h1>
            <ol>
                <li>Props are:</li>
                <ul>
                    <li>{props.hi}</li>
                </ul>
            </ol>
        </div>
    )
}
export default Props;