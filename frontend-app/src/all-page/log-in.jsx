import TopNavbar from "../components/top-navbar"
import HeroText from "../components/hero-text"
import ButtonLink from "../components/buttonLinks"
import {useMyContext} from "../contextAPI"
import Form from "../components/form"
import Input from "../components/Input"
import SimpleBtn from "../components/simpleButton"
import ValidateBanner from "../components/validateBanner"
import {useState} from "react"
import {logIn} from "../CRUD/account"
import Loading from "../components/loading"
import LoadingError from "../components/loadingError"
import {Navigate} from "react-router-dom"

function LogIn(){

    const {backIcon,responsiveWidth,spinnerIcon} = useMyContext()
    const [userData,setUserData] = useState({
        username:'',
        password:"",
        userType:"",
        showPass:false
    })
    const [errorBanner,setErrorBanner] = useState({

        error:false,
        message:""
    })
    const [requestState,setRequestState] = useState({
        isLoading:false,
        isError:false,
    })
    const [isLogged,setIsLogged] = useState({
        success:false,
        path:""
    });

    const commonInput = `border-2 w-full py-2 outline-none pl-2 border-box rounded-md`

    const handleChange = (evt)=>{
        const {name,value,type,checked} = evt.target;
        setUserData((oldValue)=>{
            return{
                ...oldValue,
                [name]:type === 'checkbox' ? checked:value
            }
        })
    }

    const handleLogIn = async(evt)=>{
        evt.preventDefault()
        try{
            const {username,password,userType} = userData
            if(username.trim()==""){
                throw "enter username"
            }else if(password.trim()==""){
                throw "enter password"
            }else if(userType.trim()==""){
                throw "enter user type"
            }else{
                setRequestState((oldValue)=>{
                    return {
                        ...oldValue,
                        isLoading:true
                    }
                })

                const response = await logIn({
                    userType,
                    username,
                    password
                }).then(({data})=>{
                    setRequestState((oldValue)=>{
                        return {
                            isLoading:false,
                            isError:false
                        }
                    })
                    return data

                }).catch((err)=>{
                    setRequestState({
                        isLoading:false,
                        isError:true
                    })
                })

                if(response.success === true){
                    setIsLogged({
                        success:response.success,
                        path:response.userPath
                    })                
                }else{
                    setErrorBanner({
                        error:true,
                        message:"Incorrect login credentials"
                    })
                }
            
            }
        }catch(err){
            setErrorBanner({
                error:true,
                message:err
            })
            return false
        }
    }

    const closeErrorBanner = ()=>{
        setErrorBanner({
            error:false,
            message:"" 
        })
    }

    if(isLogged.success){
        return <Navigate to={isLogged.path}/>
    }

    return (
        <div>

            <TopNavbar topNavStyle={'bg-black'}>
                <div>
                    <HeroText heroStyle={'text-white'}/>
                </div>
                <div className={'ml-auto'}>
                    <ButtonLink linkTitle={backIcon} linkStyle={'text-white mr-5 px-5 text-[1.7rem]'} linkURL={'..'}/>
                </div>
            </TopNavbar>

            <div className={`h-[100vh] ${responsiveWidth} flex flex-col justify-center`}>
                {requestState.isLoading && <Loading loadingIcon={spinnerIcon} loadingText={'Waiting for response...'} loadingStyle={`text-center font-bold -mt-30`}/>}
                {requestState.isLoading === false && requestState.isError === false && <div className={`-mt-26 md:w-[50%] md:mx-auto`}>

                    <Form formName={'log-in-form'}>
                        <Input
                        inputType={'text'}
                        inputName={'username'}
                        inputPlaceholder={'Username'}
                        inputValue={userData.username}
                        inputChange={handleChange}
                        inputStyle={`${commonInput}`}/>
                        <br></br>
                        <br></br>
                        <Input inputType={userData.showPass ? 'text':'password'} 
                        inputName={'password'} inputPlaceholder={'password'} 
                        inputValue={userData.password} inputChange={handleChange}
                        inputStyle={`${commonInput}`}/>
                        <br></br>
                        <br></br>
                        <Input inputType={'checkbox'} inputName={'showPass'}
                         inputId={'passcheck'}  inputStyle={'mb-2'}
                         inputChange={handleChange}
                         /><label htmlFor={'passcheck'}> Show Password</label>
                        <br></br>
                        <Input inputType={"radio"} inputName={"userType"} inputId={"seller"} inputValue={"seller"} inputChange={handleChange}/><label htmlFor={"seller"}> Seller </label>
                        <Input inputType={"radio"} inputName={"userType"} inputId={"buyer"} inputValue={"buyer"} inputChange={handleChange}/><label htmlFor={"buyer"}> Buyer</label>
                        <br></br>
                        <SimpleBtn btnType={'submit'} btnId={'log-in-btn'} innerText={'Log In'} handleClick={handleLogIn} btnStyle={`bg-black text-white py-2 px-5 rounded-lg cursor-pointer mt-2`}/>
                    </Form>
                </div>}
                {requestState.isError && <LoadingError loadingErrorStyle={'-mt-30 text-center font-bold text-[2rem]'}>
                    <p>Ooops! an error occured,your request could not be processed!</p>
                    <SimpleBtn btnType={'button'} innerText={'Try again'} btnStyle={'text-[1.5rem] bg-red-500 px-3 py-2 rounded-md cursor-pointer mt-5'}/>
                </LoadingError>}
            </div>
            <ValidateBanner isError={errorBanner.error} errorMessage={errorBanner.message} handleClick={closeErrorBanner}/>

        </div>
    )

}

export default LogIn