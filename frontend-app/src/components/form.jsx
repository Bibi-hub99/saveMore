function Form(props){

    return (
        <form name={props.formName} autoComplete="off" encType="multipart/form-data">
            {
                props.children
            }
        </form>
    )

}

export default Form