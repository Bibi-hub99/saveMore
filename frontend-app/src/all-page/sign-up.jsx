import TopNavbar from "../components/top-navbar"
import HeroText from "../components/hero-text"
import ButtonLink from "../components/buttonLinks"
import {useMyContext} from "../contextAPI"
import Form from "../components/form"
import Input from "../components/Input"
import ParameterBtn from "../components/parameterBtn"
import SimpleBtn from "../components/simpleButton"
import {useState} from "react"

function SignUp(){

    //sign up page the user navigates to when clicking sign up link

    const {backIcon,responsiveWidth,themeColor} = useMyContext()
    const [part1,setPart1] = useState(true)
    const [part2,setPart2] = useState(false)
    const [userData,setUserData] = useState({
        fullNames:"",
        email:"",
        cellphone:"",
        username:"",
        password:"",
        userType:""
    })

    const commonInput = `border-2 w-full py-2 outline-none pl-2 border-box rounded-md`
    const commonBtnStyle = `px-5 py-2 rounded-md cursor-pointer`
    /*nextBtnLogic = ()=>{
        const {fullNames,email}
    }*/

    const handleChange = (evt)=>{
        const {name,value} = evt.target;
        setUserData((oldValue)=>{
            return {
                ...oldValue,
                [name]:value
            }
        })
        
    }


    const nextPart = (part1State,part2State)=>{
        //function for moving to the next step of multi part form
        setPart1(part1State)
        setPart2(part2State)
    }

    const prevPart = (part1State,part2State)=>{
        setPart2(part2State)
        setPart1(part1State)
    }

    return (
        <div>
            <TopNavbar topNavStyle={'bg-black'}>
                <div className={''}>
                    <HeroText heroStyle={'text-white'}/>
                </div>
                <div className={'ml-auto'}>
                    <ButtonLink
                    linkTitle={backIcon}
                    linkStyle={'text-white mr-5 px-5 text-[1.7rem]'}
                    linkURL={'..'}
                    />
                </div>
            </TopNavbar>
            <div className={`h-[100vh] ${responsiveWidth} flex flex-col justify-center`}>
                <div className={'-mt-26 md:w-[50%] md:mx-auto'}>
                    <Form formName={'sign-up-form'}>
                        {part1 && <div>
                            <h3 className={'font-bold'}>Fill Personal Information:</h3><br></br>
                            <Input
                            inputType={'text'}
                            inputName={'fullNames'}
                            inputPlaceholder={'Full Names'}
                            inputValue={userData.fullNames}
                            inputStyle={`${commonInput}`}
                            inputChange={handleChange}
                            />
                            <br></br>
                            <br></br>
                            <Input
                            inputType={'email'}
                            inputName={'email'}
                            inputPlaceholder={'example123@gmail.com'}
                            inputValue={userData.email}
                            inputStyle={`${commonInput}`}
                            inputChange={handleChange}
                            />
                            <br></br>
                            <br></br>
                            <Input inputType={'tel'} inputName={'cellphone'} inputValue={userData.cellphone} inputStyle={`${commonInput} `} inputPlaceholder={'034-345-4689'} inputChange={handleChange}/><br></br><br></br>
                            <ParameterBtn btnClass={`bg-green-500 ${commonBtnStyle}`} btnName={'next-part-btn'} btnId={'next-part-btn'} innerText={'Next'} par1={false} par2={true} handleClick={nextPart}/>
                        </div>}
                        {part2 && <div>
                            <h3 className={'font-bold'}>Enter Credentials:</h3><br></br>
                            <Input
                            inputType={`text`}
                            inputName={`username`}
                            inputStyle={`${commonInput}`}
                            inputPlaceholder={`Username`}
                            inputValue={userData.username}
                            inputChange={handleChange}
                            />
                            <br></br>
                            <br></br>
                            <Input
                            inputType={'password'}
                            inputName={'password'}
                            inputStyle={`${commonInput}`}
                            inputPlaceholder={'Password'}
                            inputValue={userData.password}
                            inputChange={handleChange}/>
                            <br></br>
                            <br></br>
                            <Input inputType={'radio'} inputName={'userType'} inputId={'Seller'} inputValue={'seller'} inputChange={handleChange}/>
                            <label htmlFor={'Seller'}> Seller </label>
                            <Input inputType={'radio'} inputName={'userType'} inputId={'Buyer'} inputValue={'buyer'} inputChange={handleChange}/>
                            <label htmlFor={'Buyer'}> Buyer</label>
                            <br></br>
                            <br></br>
                            <ParameterBtn btnClass={`bg-red-500 ${commonBtnStyle}`} innerText={'Back'}
                            btnName={'back-btn'}
                            btnId={'back-btn'} 
                            par1={true}
                            par2={false}
                            handleClick={prevPart} 
                            />
                            <SimpleBtn btnType={'submit'}
                            btnName={'sign-up-btn'}
                            btnId={'sign-up-btn'} 
                            innerText={'Sign up'} 
                            btnStyle={`${commonBtnStyle} ml-2`}
                            themeColor={themeColor}/>
                        </div>}
                    </Form>
                </div>
            </div>
        </div>
    )

}

export default SignUp