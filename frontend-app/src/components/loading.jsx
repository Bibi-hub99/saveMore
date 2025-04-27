
function Loading({loadingIcon,loadingText,loadingStyle}){


    return (
        <div>
            <div className={loadingStyle}>
                <h1 className={'text-2xl'}>{loadingIcon}</h1><br></br>
                <h2 className={'text-2xl'}>{loadingText}</h2>
            </div>
        </div>
    )

}

export default Loading