import TopNavbar from "../components/top-navbar"
import HeroText from "../components/hero-text"
import ButtonLink from "../components/buttonLinks"
import {useMyContext} from "../contextAPI"
import Form from "../components/form"
import Input from "../components/Input"
import SimpleBtn from "../components/simpleButton"
import {useState} from "react"

function LogIn(){

    const {backIcon,responsiveWidth} = useMyContext()
    const [userData,setUserData] = useState({
        username:'',
        password:"",
        userType:"",
        showPass:false
    })
    //const [showPass,setShowPass] = useState(false)

    const commonInput = `border-2 w-full py-2 outline-none pl-2 border-box rounded-md`

    console.log(userData)

    const handleChange = (evt)=>{
        const {name,value,type,checked} = evt.target;
        setUserData((oldValue)=>{
            return{
                ...oldValue,
                [name]:type === 'checkbox' ? checked:value
            }
        })
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
                <div className={`-mt-26 md:w-[50%] md:mx-auto`}>
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
                        <SimpleBtn btnType={'submit'} btnId={'log-in-btn'} innerText={'Log In'} btnStyle={`bg-black text-white py-2 px-5 rounded-lg cursor-pointer mt-2`}/>
                    </Form>
                </div>
            </div>

        </div>
    )

}

export default LogIn