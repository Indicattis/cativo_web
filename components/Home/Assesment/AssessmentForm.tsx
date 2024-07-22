"use client"

import { Button } from "@/components/utils/Button"
import { Input } from "@/components/utils/Input"
import { SERVER_URL } from "@/data/config"
import { insertAssessment } from "@/data/services/assessments"
import { AssessmentDTO } from "@/data/types/assessment"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { IconBlockquote, IconPoint, IconRepeat, IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import Image from "next/image"
import { useState } from "react"

interface AssessmentFormProps {
    onClose?: () => void
}



export default function AssessmentForm({onClose}: AssessmentFormProps) {
    const [ratingSpectrum, setSpectrum] = useState<number>(0)
    const [rate, setRate] = useState<number>(0)
    const [userProfilePic, setUserProfilePic] = useState("")
    const [userProfileName, setUserProfileName] = useState("")
    const [userProfileMail, setUserProfileMail] = useState("")
    const [rateText, setRateText] = useState("")
    const [stage, setStage] = useState<number>(1)
    const [oAuthStatus, setOAuthStatus] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState("")


    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<IconStarFilled key={i} className="text-white" />);
            } else if (i - rating < 1) {
                stars.push(<IconStarHalfFilled key={i} className="text-white" />);
            } else {
                stars.push(<IconStar key={i} className="text-purple" />);
            }
        }
        return stars;
    };

    const oAuthSuccess = (response: any) => {
        const decodedToken: any = jwtDecode(response.credential);
        console.log(decodedToken)
        setUserProfilePic(decodedToken.picture)
        setUserProfileMail(decodedToken.email)
        setUserProfileName(decodedToken.given_name + " " + decodedToken.family_name)
        setOAuthStatus(true)
    }

    const onSubmit = async () => {
        if (rate !== 0 && rateText != "") {
            const assessmentData: AssessmentDTO = {
                rating_text: rateText,
                profile_name: userProfileName,
                profile_img: userProfilePic,
                profile_mail: userProfileMail,
                rating_media: rate
            }
            try {
                const response = await insertAssessment(assessmentData)
                console.log(response)
                // setStage(3)
            } catch (err: any) {
                setErrorMessage(err.message)
            }
            
        } else {
            setErrorMessage("Preencha todas as informações!")
        }

    }

    return (
        <form action={onSubmit} className='flex flex-col gap-5'>

            {stage == 1 && (

                <>
                    <h1 className="_display_text">Faça login para continuar</h1>
                    {oAuthStatus ? (
                        <div className="flex flex-col gap-3">
                            <p className="_text">Seja muito bem vindo(a)! {userProfileName}</p>
                            <div className="flex gap-3 relative rounded bg-purple p-3 items-center shadow-lg shadow-contrast_color_2">
                                <div className="max-w-14 max-h-14 rounded-full overflow-hidden">
                                    <Image width={200} height={200} src={userProfilePic} alt=""/>
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <p className=" _text">{userProfileName}</p>
                                    <p className=" _text _small">{userProfileMail}</p>
                                </div>
                                <div className="absolute right-5">
                                    <Button.Wide rounded="md" variant="disabled" wide="md" type="button" onClick={() => setOAuthStatus(false)}>
                                        <Button.Icon icon={<IconRepeat/>}/>
                                    </Button.Wide>
                                </div>
                            </div>
                        </div>
                    ) : (
                        
                        <GoogleOAuthProvider clientId="138480048434-is4hhc6ml8ukdk5vao2qprojdl8p3r3o.apps.googleusercontent.com">
                            <GoogleLogin
                                width={1000}
                                text="continue_with"
                                theme="filled_black"
                                onSuccess={oAuthSuccess} />
                        </GoogleOAuthProvider>
                    )}
                    <Button.Wide variant="default" rounded="md" wide="lg" type="button" disabled={!oAuthStatus} onClick={() => setStage(2)}>
                        <Button.Text text="Continuar" />
                    </Button.Wide>
                </>
            )}
            {stage == 2 && (
                <>
                    <h1 className="_display_text">Avalie!</h1>
                    
                    <div className="flex flex-col gap-3">
                            <div className="flex gap-3 relative rounded bg-purple p-3 items-center shadow-lg shadow-contrast_color_2">
                                <div className="max-w-14 max-h-14 rounded-full overflow-hidden">
                                    <Image width={200} height={200} src={userProfilePic} alt=""/>
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <p className=" _text">{userProfileName}</p>
                                    <p className=" _text _small">{userProfileMail}</p>
                                </div>
                            </div>
                        </div>
                    <Input.Root>
                        <Input.Icon icon={<IconBlockquote />} />
                        <Input.Box onChange={setRateText} placehoder='Comentário'/>
                    </Input.Root>
                    <div className="flex flex-col gap-3">
                        <div className="flex w-full gap-3">
                            {renderStars(rate)}
                        </div>
                        <div className="flex gap-1 items-center justify-between py-3 cursor-pointer" onMouseLeave={() => setSpectrum(0)}>
                            <span onClick={() => setRate(0.5)} className={`${rate >= 0.5 ? "bg-white" : ""} ${ratingSpectrum >= 0.5 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(0.5)} ></span>

                            <span onClick={() => setRate(1)} className={`${rate >= 1 ? "bg-white" : ""} ${ratingSpectrum >= 1 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(1)} ></span>

                            <span onClick={() => setRate(1.5)} className={`${rate >= 1.5 ? "bg-white" : ""} ${ratingSpectrum >= 1.5 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(1.5)} ></span>

                            <span onClick={() => setRate(2)} className={`${rate >= 2 ? "bg-white" : ""} ${ratingSpectrum >= 2 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(2)} ></span>

                            <span onClick={() => setRate(2.5)} className={`${rate >= 2.5 ? "bg-white" : ""} ${ratingSpectrum >= 2.5 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(2.5)} ></span>

                            <span onClick={() => setRate(3)} className={`${rate >= 3 ? "bg-white" : ""} ${ratingSpectrum >= 3 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(3)} ></span>

                            <span onClick={() => setRate(3.5)} className={`${rate >= 3.5 ? "bg-white" : ""} ${ratingSpectrum >= 3.5 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(3.5)} ></span>

                            <span onClick={() => setRate(4)} className={`${rate >= 4 ? "bg-white" : ""} ${ratingSpectrum >= 4 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(4)} ></span>

                            <span onClick={() => setRate(4.5)} className={`${rate >= 4.5 ? "bg-white" : ""} ${ratingSpectrum >= 4.5 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(4.5)} ></span>

                            <span onClick={() => setRate(5)} className={`${rate >= 5 ? "bg-white" : ""} ${ratingSpectrum >= 5 ? "bg-contrast_color_2" : "bg-contrast_color_1"}  h-5 w-10 `} onMouseOver={() => setSpectrum(5)} ></span>

                        </div>
                    </div>
                    <Button.Wide variant="purple" rounded="md" wide="lg" type="submit" disabled={!oAuthStatus}>
                        <Button.Text text="Enviar" />
                    </Button.Wide>
                        
                    {errorMessage != "" && (
                        <div className="w-full text-center text-neon_red _text">
                            {errorMessage}
                        </div>
                    )}
                </>

            )}
            {stage == 3 && (
                <div className="flex flex-col gap-3">
                    <h1 className="_display_text">Obrigado!</h1>
                    <p className="_text">Agradecemos sua avaliação.</p>
                    <Button.Wide variant="purple" rounded="md" wide="lg" type="button" disabled={!oAuthStatus} onClick={onClose}>
                        <Button.Text text="Fechar" />
                    </Button.Wide>
                </div>
            )}
        </form>
    )
}