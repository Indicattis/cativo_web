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
    const [errorMessage, setErrorMessage] = useState("")
    const [mailError, setMailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
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
        if (mailError != "") {
            setMailError(mailError)
        } else if (userProfilePhone.length < 11) {
            setPhoneError("Número para contato inválido")
        }else {
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


    useEffect(() => {
        if (userProfilePhone == "" || userProfileName == "" || userProfileMail == "") {
            setErrorMessage("Insira todas as informações")
            setOAuth(false)
        } else {
            setOAuth(true)
            setErrorMessage("")
        }
    }, [userProfilePhone, userProfileName, userProfileMail, mailError])

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

                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="_display_text">Agora sobre você!</h1>
                        <p className="_text text-palette_gray">Informe seus dados para contato!</p>
                    </div>

                    <div className="flex flex-col gap-5 w-full items-center">
                        <Input.Root>
                            <Input.Box value={userProfileName} onChange={setUserProfileName} placehoder="Nome" />
                            <Input.Icon icon={<IconUserFilled width={20} />} />
                        </Input.Root>
                        <Input.Root>
                            <Input.BoxMail value={userProfileMail} onChange={(event) => handleEmailChange(event, setUserProfileMail, setMailError)} placehoder="E-mail" />
                            <Input.Icon icon={<IconMailFilled width={20} />} />
                        </Input.Root>
                        <Input.Root>
                            <Input.BoxNumber required value={userProfilePhone} onChange={(event) => handlePhoneChange(event, setUserProfilePhone)} placehoder="Telefone" />
                            <Input.Icon icon={<IconDeviceMobileFilled width={20} />} />
                        </Input.Root>
                        <div>
                            <div className="text-neon_purple _text gap-3 p-2 w-full flex items-center justify-center">
                                <span className="w-full bg-purple h-[2px]"></span>
                                ou
                                <span className="w-full bg-purple h-[2px]"></span>
                            </div>
                        </div>
                        <GoogleOAuthProvider clientId="753411784831-paf4239i5bci83ss1e4ju4akl8mdokqh.apps.googleusercontent.com">
                            <GoogleLogin
                            width={500}
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
                        <div className="flex gap-1">
                        {phoneError && (
                            
                            <AnimatePresence>
                                <motion.div
                                    key={`error-box-1`}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    className="_text _small items-center  bg-purple rounded overflow-hidden flex gap-1">
                                        <div className="bg-contrast_color_2 p-3 text-white">
                                            <IconExclamationMark width={20} className=""/>
                                        </div>
                                        <div className="px-3">
                                            {phoneError}
                                        </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                        {mailError && (
                            <AnimatePresence>
                                <motion.div
                                    key={`error-box-2`}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    className="_text _small items-center  bg-purple rounded overflow-hidden flex gap-1">
                                        <div className="bg-contrast_color_2 p-3 text-white">
                                            <IconExclamationMark width={20} className=""/>
                                        </div>
                                        <div className="px-3">
                                            {mailError}
                                        </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                        {errorMessage && (
                        <AnimatePresence>
                            <motion.div
                                key={`error-box-3`}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                className="_text _small items-center  bg-purple rounded overflow-hidden flex gap-1">
                                
                                        <div className="bg-contrast_color_2 p-3 text-white">
                                            <IconExclamationMark width={20} className=""/>
                                        </div>
                                        <div className="px-3">
                                        {errorMessage}
                                        </div>
                            </motion.div>
                        </AnimatePresence>
                        )}
                        </div>
                        <Button.Wide type="submit" rounded="full" variant="default" wide="lg" onClick={onSubmit} disabled={!isOAuth}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}