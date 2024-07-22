
"use client"

import { useActionState, useState } from 'react';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { Assessment } from './Assesment';
import { IconBrandHipchat, IconMessage } from '@tabler/icons-react';
import { Layout } from '../Layouts';
import { Button } from '../utils/Button';
import { Modal } from '../utils/Modal';
import { getAssessments } from '@/data/services/assessments';

export default function AssessmentComponent() {
  const [itemActive, setItemActive] = useState<number>(1);
  const [scroll, setScroll] = useState<number>(410)
  const [direction, setDirection] = useState(0); // New state for direction
  const dragControls = useDragControls();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [assessments, fetchAction, isPending] = useActionState(getAssessments, null)

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) { // Changed condition to match expected behavior
      // Drag to the right
      if (itemActive < assessments.length - 1) {
        setDirection(1);
        setItemActive((prev) => prev + 1);
        setScroll(scroll - 410)
      }
    } else if (info.offset.x > 50) { // Changed condition to match expected behavior
      // Drag to the left
      if (itemActive > 0) {
        setDirection(-1);
        setItemActive((prev) => prev - 1);
        setScroll(scroll + 410)
      }
    }
  };
  const itemChange = (id: any) => {
    if (id < itemActive) {
      setDirection(-1);
      setItemActive((prev) => prev - 1);
      setScroll(scroll + 410)
    } else if (id > itemActive) {
      setDirection(1);
      setItemActive((prev) => prev + 1);
      setScroll(scroll - 410)
    }
  }


  return (
    <Layout.Section className="h-screen">
      <Layout.Main className="gap-5">
        <Layout.Div className="">
          <div className='w-full py-5 flex flex-col gap-2'>
            <h1 className='_display_text flex gap-3'>
              Avaliações dos usuários
              <IconMessage />
            </h1>
            <p className='_text text-palette_gray'>Veja o feedback de outros usuarios!</p>
          </div>
        </Layout.Div>

        <Layout.Div className="">
          <motion.div
            animate={
              { translateX: scroll }
            }
            transition={{
              translateX: { type: "spring", stiffness: 350, damping: 80 },
            }}
            className={`flex gap-3 justify-center items-center h-full
              `}
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
              {assessments.map((item: any, index: number) => (
                <Assessment.Root
                  key={`rating-card-` + index}
                  id={index}
                  isActive={itemActive === index}
                  direction={direction} // Pass direction to the card
                  setItem={itemChange}
                >
                  <Assessment.User profile_name={item.profile_name}  profile_img={item.profile_img} />
                  <Assessment.Message message={item.rating_text} />
                  <Assessment.Rating rating={item.rating_media} />
                </Assessment.Root>
              ))}
            </AnimatePresence>
          </motion.div>
        </Layout.Div>
        <Layout.Div className="w-full !justify-start">
          <Button.Wide rounded='md' variant='default' wide='md' onClick={() => setModalActive(true)}>
            <Button.Icon icon={<IconBrandHipchat/>} />
            <Button.Text text='Comentar' />
          </Button.Wide>
        </Layout.Div>
        <Layout.Div className="">
          <motion.div className='w-full flex gap-2'>
            {assessments.map((item: any, index: number) => {
              return (
                <motion.div
                  key={`bar-` + item.profile_name}
                  onClick={() => itemChange(index)}
                  animate={{ width: itemActive == index ? 56 : 32 }}
                  className={`h-2 w-12 rounded-full cursor-pointer ${itemActive === index ? "bg-neon_purple" : "bg-purple"}`}
                >
                </motion.div>
              )
            })}
          </motion.div>
        </Layout.Div>
      </Layout.Main>

      {modalActive && (
        <Modal.Root>
          <Modal.Box>
            <Modal.Content className="flex flex-col gap-3  p-3 rounded">
              <Assessment.Form onClose={() => setModalActive(false)}/>
            </Modal.Content>
          </Modal.Box>
        </Modal.Root>
      )}
    </Layout.Section>
  );
}
