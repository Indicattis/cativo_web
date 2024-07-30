"use client"
import { Button } from "@/components/utils/Button";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { IconRepeat } from "@tabler/icons-react";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { useState } from "react";




interface EvaluetionSignProps {
    changeStage: (stage: number) => void
    isActive: boolean
    setUserData: (data: ClientDTO) => void
}


export default function EvaluetionSign({changeStage, isActive, setUserData}: EvaluetionSignProps) {
    const [userProfilePic, setUserProfilePic] = useState("")
    const [userProfileName, setUserProfileName] = useState("")
    const [userProfileMail, setUserProfileMail] = useState("")
    const [oAuthStatus, setOAuthStatus] = useState<boolean>(false)

    const oAuthSuccess = (response: any) => {
        const decodedToken: any = jwtDecode(response.credential);
        console.log(decodedToken)
        const userData: ClientDTO = {
            profile_mail: decodedToken.email,
            profile_name: decodedToken.given_name + " " + decodedToken.family_name,
            profile_picture: decodedToken.picture
        }
        setUserProfilePic(decodedToken.picture)
        setUserProfileMail(decodedToken.email)
        setUserProfileName(decodedToken.given_name + " " + decodedToken.family_name)
        setOAuthStatus(true)
        setUserData(userData)
        changeStage(2)
    }
    return (
        isActive && (
                <div className="flex flex-col min-w-96">
                    <div className="flex flex-col gap-1">
                        <h1 className="_display_text">E ai, o que achou?</h1>
                        <p className="_text text-palette_gray">Mande o seu feedback!</p>
                    </div>
                    <div className="flex flex-col gap-2  justify-center w-full py-5">
                        <b className="_text _small">Para continuar é necessário conectar</b>

                        <GoogleOAuthProvider clientId="138480048434-is4hhc6ml8ukdk5vao2qprojdl8p3r3o.apps.googleusercontent.com">
                            <GoogleLogin
                                width={384}
                                size="large"
                                text="continue_with"
                                theme="filled_black"
                                onSuccess={oAuthSuccess} />
                        </GoogleOAuthProvider>
                    </div>
                        <Button.Wide wide="lg" rounded="sm" variant="disabled" onClick={() => window.location.href = "/"}>
                            <Button.Text text="Cancelar"/>
                        </Button.Wide>
                </div>
        )
                
    )
}