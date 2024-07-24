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
    }
    return (
        isActive && (
                <div className="flex flex-col gap-5 min-w-96">
                    <div>
                        <h1 className="_display_text">E ai! O que achou?</h1>
                        <p className="_text text-palette_gray">Mande seu feedback!</p>
                    </div>
                    {oAuthStatus ? (
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3 relative rounded bg-purple p-3 items-center">
                                <div className="max-w-14 max-h-14 rounded-full overflow-hidden">
                                    <Image width={200} height={200} src={userProfilePic} alt="" />
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <p className=" _text">{userProfileName}</p>
                                    <p className=" _text _small">{userProfileMail}</p>
                                </div>
                                <div className="absolute right-5">
                                    <Button.Wide rounded="md" variant="disabled" wide="md" type="button" onClick={() => setOAuthStatus(false)}>
                                        <Button.Icon icon={<IconRepeat />} />
                                    </Button.Wide>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full py-5">

                            <GoogleOAuthProvider clientId="138480048434-is4hhc6ml8ukdk5vao2qprojdl8p3r3o.apps.googleusercontent.com">
                                <GoogleLogin
                                    width={384}
                                    size="large"
                                    text="continue_with"
                                    theme="filled_black"
                                    onSuccess={oAuthSuccess} />
                            </GoogleOAuthProvider>
                        </div>
                    )}
                    <Button.Wide variant="default" rounded="sm" wide="lg" type="button" disabled={!oAuthStatus} onClick={() => changeStage(2)}>
                        <Button.Text text="Continuar" />
                    </Button.Wide>
                </div>
        )
                
    )
}