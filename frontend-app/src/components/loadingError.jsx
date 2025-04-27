function LoadingError(props){

    return (
        <div className={props.loadingErrorStyle}>
            {
                props.children
            }
        </div>
    )

}

export default LoadingError