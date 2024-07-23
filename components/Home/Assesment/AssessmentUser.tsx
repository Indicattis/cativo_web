import { IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";


interface AssessmentUserProps {
    profile_img: string
    profile_name: string
    profile_mail: string
}

export default function AssessmentUser( { profile_name, profile_img, profile_mail }: AssessmentUserProps) {
    return (
        
        <div className="flex items-center justify-between rounded py-3">
          <div className="flex gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-full flex  justify-center items-center border">
              <Image alt="" src={profile_img} width={100} height={100} />
            </div>
            <div className="flex flex-col gap">
              <h1 className="_text">{profile_name}</h1>
              <p className="_text _small text-palette_gray">{profile_mail}</p>
            </div>
          </div>
        </div>
    )
}