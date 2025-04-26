import ButtonLink from "./buttonLinks"

function HomeNavbarLinks(props){

    //for navbar links in the home page, before user log in
    return (
        <div>
            <ButtonLink
            linkTitle={'Sign Up'}
            linkStyle={'mr-5 bg-black text-white p-2 rounded-2xl hover:shadow-xl/30'}
            linkURL={'sign-up'}
            />
            <ButtonLink
            linkTitle={'Log In'}
            linkStyle={'mr-5 bg-white p-2 rounded-2xl shadow'}
            btnStyleShadow={'3px 5px 9px lightgray'}
            linkURL={'log-in'}/>
        </div>
    )

}

export default HomeNavbarLinks