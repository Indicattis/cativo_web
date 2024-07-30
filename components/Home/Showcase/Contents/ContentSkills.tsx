import { IconDeviceDesktopShare, IconLayout2, IconNavigation, IconSpeakerphone } from '@tabler/icons-react'
import React, { ReactNode } from 'react'






function ContentSkills() {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-2'>
        <Skill text="Comunicação" subText="Verbal e escrita" icon={<IconSpeakerphone stroke={1} />} />
        <Skill text="Organização" subText="Patterns e templates" icon={<IconLayout2  stroke={1}/>} />
        <Skill text="Atendimento" subText='Presencial e/ou remoto' icon={<IconDeviceDesktopShare  stroke={1}/>} />
        <Skill text="Autonomia" subText='Solução de problemas independentemente' icon={<IconNavigation  stroke={1}/>} />
      </div>
    </div>
  )
}

export default ContentSkills


interface SkillProps {
  text: string
  subText: string
  icon: ReactNode
}

function Skill({ text, subText, icon }: SkillProps) {
  return (
    <div className=' flex  items-center gap-3'>
      <div className='rounded min-w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-purple to-contrast_color_2'>
        {icon}
      </div>
      <div className='flex flex-col'>
        <div className='_text '>
          {text}
        </div>
        <div className='_text _small text-palette_gray'>
          {subText}
        </div>
      </div>
    </div>
  )
}