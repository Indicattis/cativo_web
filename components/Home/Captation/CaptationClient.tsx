"use client"


import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { motion, AnimatePresence } from "framer-motion"
import { jwtDecode } from "jwt-decode"
import { Button } from "../../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled, IconDeviceMobileFilled, IconMailFilled, IconTrashFilled, IconUserFilled } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { InputNumber } from "@/components/utils/InputNumber"
import { Input } from "@/components/utils/Input"
import { handlePhoneChange } from "@/functions/mask"



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
                    }} className="flex flex-col justify-between items-center gap-5  h-full top-0">

                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="_display_text">Agora sobre você!</h1>
                        <p className="_text text-palette_gray">Informe seus dados para contato!</p>
                    </div>

                        <div className="flex flex-col gap-3 w-[400px] items-center">
                            <Input.Root>
                                <Input.Icon icon={<IconUserFilled color="#ffffff" />} />
                                <Input.Box value={userProfileName} onChange={setUserProfileName} placehoder="Nome" />
                            </Input.Root>
                            <Input.Root>
                                <Input.Icon icon={<IconMailFilled color="#ffffff" />} />
                                <Input.Box value={userProfileMail} onChange={setUserProfileMail} placehoder="E-mail" />
                            </Input.Root>
                            <InputNumber.Root>
                                <InputNumber.Icon icon={<IconDeviceMobileFilled color="#ffffff" />} />
                                <InputNumber.Box value={userProfilePhone} onChange={(event) => handlePhoneChange(event, setUserProfilePhone)} placehoder="Whatsapp" />
                            </InputNumber.Root>
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
                    <div className="w-full flex items-center justify-between gap-2 border-t border-purple py-5">

                        <Button.Wide rounded="full" variant="disabled" wide="lg" onClick={() => { setStage(2) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Anterior" />
                        </Button.Wide>
                        <Button.Wide rounded="full" variant="default" wide="lg" onClick={onSubmit}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}