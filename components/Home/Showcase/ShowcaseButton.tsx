import { Button } from '@/components/utils/Button'
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import React from 'react'
import { motion } from 'framer-motion'
import { Fade } from '@/static/animations'





interface ShowcaseButtonProps {
    isPaused: boolean
    onClick: () => void
}

function ShowcaseButton({isPaused, onClick}:ShowcaseButtonProps) {
  return (
    isPaused ? (
            <motion.div 
            variants={Fade.In}
            initial={"start"}
            animate={"middle"}
            exit={"end"}
            className='text-neon_purple'>
                <Button.Icon icon={<IconPlayerPauseFilled/>}/>
            </motion.div>
    ) : (
    ""
  ))
}

export default ShowcaseButton