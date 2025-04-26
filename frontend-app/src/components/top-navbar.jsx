import {useMyContext} from "../contextAPI"

function TopNavbar(props){

    const {barsIcon,responsiveWidth} = useMyContext()

    const topNavStyle = {
        boxShadow:'2px 3px 5px lightgray'
    }

    return (
        <div className={`py-3 md:py-5 ${props.topNavStyle}`} style={topNavStyle}>
            <div className={`${responsiveWidth}`}>
                <div className={`flex items-center ${props.topNavFlex}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )

}

export default TopNavbar