import { useSelector } from "react-redux"
import React, {useEffect, useState} from 'react';

const LoginChecker = () => {
    const data = useSelector((state) => state.login)
    // const data2 = JSON.parse(localStorage.getItem('user')) // jika butuh local storage
    // const isLogin2 = localStorage.getItem('isLogin')
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        if(data.isLogin){
            setIsLogin(true)
            if(data.user.email === 'admin@bukapedia.com'){
                setIsAdmin(true)
            }
        } else {
            setIsAdmin(false)
            setIsLogin(false)
        }
    }, [data])
        
    //     if(isLogin2){
    //         setIsLogin(true)
    //         if(data2.email === 'admin@bukapedia.com'){
    //             setIsAdmin(true)
    //         }
    //     }
    // }, [data2, isLogin2])
    
    return {isAdmin,isLogin}
    
}

export default LoginChecker