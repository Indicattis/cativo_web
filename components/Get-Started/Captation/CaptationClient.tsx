"use client"


import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { motion, AnimatePresence } from "framer-motion"
import { jwtDecode } from "jwt-decode"
import { Button } from "../../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled, IconDeviceMobileFilled, IconExclamationMark, IconMailFilled, IconTrashFilled, IconUserFilled } from "@tabler/icons-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Input } from "@/components/utils/Input"
import { handleEmailChange, handlePhoneChange } from "@/functions/mask"
import { toast } from "react-toastify"



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
    const [mailError, setMailError] = useState("")

    const oAuthSuccess = (response: any) => {
        const decodedToken: any = jwtDecode(response.credential);
        console.log(decodedToken)
        setUserProfilePic(decodedToken.picture)
        setUserProfileMail(decodedToken.email)
        setUserProfileName(decodedToken.given_name + " " + decodedToken.family_name)
    }

    const onSubmit = () => {
        if (userProfilePhone == "" || userProfileName == "" || userProfileMail == "") {
            toast.error("Insira todas as informações")
        } else if (mailError != "") {
            toast.error(mailError);
        } else if (userProfilePhone.length < 11) {
            toast.error('Número para contato inválido');
        } else {
            const clientData: ClientDTO = {
                profile_mail: userProfileMail,
                profile_name: userProfileName,
                profile_picture: userProfilePic,
                profile_phone: userProfilePhone
            }
            setClient(clientData)
            setStage(3)
        }

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
                    }} className="relative flex flex-col justify-between items-center gap-5  h-full top-0">

                    <div className="flex flex-col gap-2 w-full">
                        <h1 className="_display_text">Agora sobre você!</h1>
                        <p className="_text text-palette_gray">Informe seus dados para contato!</p>
                    </div>

                    <div className="flex flex-col gap-3 w-full max-w-96">
                        <Input.Root>
                            <Input.Icon icon={<IconUserFilled />} />
                            <Input.Box value={userProfileName} onChange={setUserProfileName} placehoder="Nome" />
                        </Input.Root>
                        <Input.Root>
                            <Input.Icon icon={<IconMailFilled />} />
                            <Input.BoxMail value={userProfileMail} onChange={(event) => handleEmailChange(event, setUserProfileMail, setMailError)} placehoder="E-mail" />
                        </Input.Root>
                        <Input.Root>
                            <Input.Icon icon={<IconDeviceMobileFilled />} />
                            <Input.BoxNumber required value={userProfilePhone} onChange={(event) => handlePhoneChange(event, setUserProfilePhone)} placehoder="Telefone" />
                        </Input.Root>
                        <div className="flex">
                            <div className="text-white _text gap-3 p-2 w-full flex items-center justify-center">
                                <span className="w-full bg-purple h-1"> </span>
                                ou
                                <span className="w-full bg-purple h-1"> </span>
                            </div>
                        </div>

                        <GoogleOAuthProvider clientId="138480048434-is4hhc6ml8ukdk5vao2qprojdl8p3r3o.apps.googleusercontent.com">
                            <GoogleLogin
                                width={384}
                                size="large"
                                text="continue_with"
                                theme="filled_black"
                                onSuccess={oAuthSuccess} />
                        </GoogleOAuthProvider>
                    </div>


                    <div className="w-full flex items-center justify-between gap-2 border-t border-purple py-5">

                        <Button.Wide rounded="full" variant="disabled" wide="lg" onClick={() => { setStage(1) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Anterior" />
                        </Button.Wide>
                        <Button.Wide type="submit" rounded="full" variant="default" wide="lg" onClick={onSubmit}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}