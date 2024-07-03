"use client"


import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { motion, AnimatePresence } from "framer-motion"
import { jwtDecode } from "jwt-decode"
import { Button } from "../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled, IconDeviceMobileFilled, IconMailFilled, IconTrashFilled, IconUserFilled } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { Input } from "../utils/Input"



interface CaptationClientProps {
    isActive?: boolean
    setClient: React.Dispatch<React.SetStateAction<ClientDTO | undefined>>
    setStage: React.Dispatch<React.SetStateAction<number>>
}



export default function CaptationClient({ isActive, setClient, setStage }: CaptationClientProps) {
    const [userProfilePic, setUserProfilePic] = useState("")
    const [userProfileName, setUserProfileName] = useState("")
    const [userProfileMail, setUserProfileMail] = useState("")
    const [userProfilePhone, setUserProfilePhone] = useState("")
    const [isOAuth, setOAuth] = useState<boolean>(false)

    const oAuthSuccess = (response: any) => {
        const decodedToken: any = jwtDecode(response.credential);
        console.log(decodedToken)
        setUserProfilePic(decodedToken.picture)
        setUserProfileMail(decodedToken.email)
        setUserProfileName(decodedToken.given_name + " " + decodedToken.family_name)
        setOAuth(true)
    }

    const onSubmit = () => {
        const clientData: ClientDTO = {
            profile_mail: userProfileMail,
            profile_name: userProfileName,
            profile_picture: userProfilePic,
            profile_phone: userProfilePhone
        }
        setClient(clientData)
        setStage(4)

    }

    return (

        <AnimatePresence>
            {isActive && (

                <motion.div
                    key={`CaptationStart-anim`}
                    initial={{ x: 1500, position: "absolute" }}
                    animate={{ x: 0, position: "initial" }}
                    exit={{ x: -1500, position: "absolute" }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50
                    }} className="flex flex-col justify-between items-start gap-5 min-h-[700px] top-0">

                    <div className="flex flex-col gap-2">
                        <h1 className="_display_text">Agora sobre você!</h1>
                        <p className="_text text-palette_gray">Informe seus dados para contato!</p>
                    </div>
                    {isOAuth ? (

                        <div className="flex items-center gap-5 p-3 bg-gradient-to-tr from-neon_purple to-neon_blue rounded">
                            <div className="rounded-full overflow-hidden">
                                <Image alt="" src={`${userProfilePic}`} width={60} height={60} />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="_text">{userProfileName}</h1>
                                <p className="_text _small ">{userProfileMail}</p>
                            </div>
                            <div className="cursor-pointer" onClick={() => setOAuth(false)}>
                                <IconTrashFilled/>
                            </div>
                        </div>
                    ) : (

                        <div className="flex flex-col gap-3 w-full">
                        <Input.Root>
                            <Input.Icon icon={<IconUserFilled color="rgb(46 61 117)" />} />
                            <Input.Box disabled={isOAuth} onChange={setUserProfileName} placehoder="Nome" />
                        </Input.Root>
                        <Input.Root>
                            <Input.Icon icon={<IconMailFilled color="rgb(46 61 117)" />} />
                            <Input.Box disabled={isOAuth}  onChange={setUserProfileMail} placehoder="E-mail" />
                        </Input.Root>
                        <Input.Root>
                            <Input.Icon icon={<IconDeviceMobileFilled color="rgb(46 61 117)" />} />
                            <Input.Box  disabled={isOAuth}  onChange={setUserProfilePhone} placehoder="Whatsapp" />
                        </Input.Root>
                        <div>
                            <div className="text-purple font-jetbrains gap-3 p-2 w-full flex items-center justify-center">
                                <span className="w-full bg-purple h-[2px]"></span>
                                ou
                                <span className="w-full bg-purple h-[2px]"></span>
                            </div>
                        </div>
                        <GoogleOAuthProvider clientId="753411784831-paf4239i5bci83ss1e4ju4akl8mdokqh.apps.googleusercontent.com">
                            <GoogleLogin
                                text="continue_with"
                                theme="filled_black"
                                onSuccess={oAuthSuccess} />
                        </GoogleOAuthProvider>
                    </div>
                    )}
                    <div className="flex gap-2">

                        <Button.Wide rounded="full" variant="disabled" wide="md" onClick={() => { setStage(2) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Anterior" />
                        </Button.Wide>
                        <Button.Wide rounded="full" variant="default" wide="md" onClick={onSubmit}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}