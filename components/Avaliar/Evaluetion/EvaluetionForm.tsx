"use client"

import { Button } from "@/components/utils/Button"
import { Input } from "@/components/utils/Input"
import { insertAssessment } from "@/data/services/assessments"
import { AssessmentDTO } from "@/data/types/assessment"
import { IconBlockquote, IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"

interface AssessmentFormProps {
    changeStage: (stage: number) => void
    isActive: boolean
    userData: any
}

export default function EvaluetionForm({ changeStage, isActive, userData }: AssessmentFormProps) {
    const [ratingSpectrum, setSpectrum] = useState<number>(0)
    const [rate, setRate] = useState<number>(0)
    const [rateText, setRateText] = useState("")
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


    const onSubmit = async () => {
        if (rate !== 0 && rateText != "") {
            const assessmentData: AssessmentDTO = {
                rating_text: rateText,
                profile_name: userData.profile_name,
                profile_img: userData.profile_picture,
                profile_mail: userData.profile_mail,
                rating_media: rate
            }
            try {
                const response = await insertAssessment(assessmentData)
                console.log(response)
                changeStage(3)
            } catch (err: any) {
                setErrorMessage(err.message)
            }

        } else {
            setErrorMessage("Preencha todas as informações!")
        }

    }

    return (
        isActive && (
            <form action={onSubmit} className='flex flex-col gap-5 min-w-96'>
                <h1 className="_display_text">Avalie!</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 relative rounded bg-purple p-3 items-center">
                        <div className="max-w-14 max-h-14 rounded-full overflow-hidden">
                            <Image width={200} height={200} src={userData.profile_picture} alt="" />
                        </div>
                        <div className="flex flex-col  justify-center">
                            <p className=" _text">{userData.profile_name}</p>
                            <p className=" _text _small">{userData.profile_mail}</p>
                        </div>
                    </div>
                </div>
                <Input.Root>
                    <Input.Box onChange={setRateText} placehoder='Comentário' />
                </Input.Root>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center justify-around py-3 w-full cursor-pointer" onMouseLeave={() => setSpectrum(0)}>

                        <span onClick={() => setRate(1)} className={`${rate >= 1 ? "text-white" : ""} ${ratingSpectrum >= 1 ? "text-contrast_color_2" : "text-contrast_color_1"}`} onMouseOver={() => setSpectrum(1)} >{rate >= 1 ? <IconStarFilled className="text-white" /> : <IconStar className="" />}</span>


                        <span onClick={() => setRate(2)} className={`${rate >= 2 ? "text-white" : ""} ${ratingSpectrum >= 2 ? "text-contrast_color_2" : "text-contrast_color_1"}`} onMouseOver={() => setSpectrum(2)} >{rate >= 2 ? <IconStarFilled className="text-white" /> : <IconStar className="" />}</span>


                        <span onClick={() => setRate(3)} className={`${rate >= 3 ? "text-white" : ""} ${ratingSpectrum >= 3 ? "text-contrast_color_2" : "text-contrast_color_1"}`} onMouseOver={() => setSpectrum(3)} >{rate >= 3 ? <IconStarFilled className="text-white" /> : <IconStar className="" />}</span>


                        <span onClick={() => setRate(4)} className={`${rate >= 4 ? "text-white" : ""} ${ratingSpectrum >= 4 ? "text-contrast_color_2" : "text-contrast_color_1"}`} onMouseOver={() => setSpectrum(4)} >{rate >= 4 ? <IconStarFilled className="text-white" /> : <IconStar className="" />}</span>


                        <span onClick={() => setRate(5)} className={`${rate >= 5 ? "text-white" : ""} ${ratingSpectrum >= 5 ? "text-contrast_color_2" : "text-contrast_color_1"}`} onMouseOver={() => setSpectrum(5)} >{rate >= 5 ? <IconStarFilled className="text-white" /> : <IconStar className="" />}</span>

                    </div>
                </div>
                <Button.Wide variant="purple" rounded="sm" wide="lg" type="submit" >
                    <Button.Text text="Enviar" />
                </Button.Wide>
                <Button.Wide variant="disabled" rounded="sm" wide="lg" type="button" onClick={() => changeStage(1)}>
                    <Button.Text text="Voltar" />
                </Button.Wide>

                {errorMessage != "" && (
                    <div className="w-full text-center text-neon_red _text">
                        {errorMessage}
                    </div>
                )}

            </form>
        )

    )
}