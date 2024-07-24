
"use client"

import { useActionState, useEffect, useState } from 'react';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { Assessment } from './Assesment';
import { IconBrandHipchat, IconMessage } from '@tabler/icons-react';
import { Layout } from '../Layouts';
import { Button } from '../utils/Button';
import { Modal } from '../utils/Modal';
import { getAssessments } from '@/data/services/assessments';

export default function AssessmentComponent() {
  const [itemActive, setItemActive] = useState<number>(1);
  const [scroll, setScroll] = useState<number>(530)
  const [direction, setDirection] = useState(0); // New state for direction
  const dragControls = useDragControls();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [assessments, setAssessments] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAssessments();
        setAssessments(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      if (itemActive < assessments.length - 1) {
        setDirection(1);
        setItemActive((prev) => prev + 1);
        setScroll(scroll - 351)
      }
    } else if (info.offset.x > 50) {
      if (itemActive > 0) {
        setDirection(-1);
        setItemActive((prev) => prev - 1);
        setScroll(scroll + 351)
      }
    }
  };
  const itemChange = (id: any) => {
    if (id < itemActive) {
      setDirection(-1);
      setItemActive((prev) => prev - 1);
      setScroll(scroll + 351)
    } else if (id > itemActive) {
      setDirection(1);
      setItemActive((prev) => prev + 1);
      setScroll(scroll - 351)
    }
  }

  
  const itemsPerPage = 6;
  const totalPages = Math.ceil(assessments.length / itemsPerPage);

  return (
    <Layout.Section className="h-screen " id='assessments'>
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

        <Layout.Div className="max-lg:block hidden">
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
                  key={`rating-slider-card-` + index}
                  id={index}
                  isActive={itemActive === index}
                  direction={direction} // Pass direction to the card
                  setItem={itemChange}
                >
                  <Assessment.User profile_mail={item.profile_mail} profile_name={item.profile_name} profile_img={item.profile_img} />
                  <Assessment.Message message={item.rating_text} />
                  <Assessment.Rating rating={item.rating_media} />
                </Assessment.Root>
              ))}
            </AnimatePresence>
          </motion.div>
          <motion.div className='w-full flex gap-2 pt-10'>
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
        <Layout.Div className="max-lg:hidden block">
          <motion.div
            className={`grid grid-cols-3 gap-3 justify-center items-center h-full w-full
              `}
          >
            <AnimatePresence initial={false} custom={direction}>
              {assessments.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item: any, index: number) => (
                <Assessment.Root
                  key={`rating-card-` + index}
                  id={index}
                  isActive={false}
                  direction={direction} // Pass direction to the card
                  setItem={itemChange}
                >
                  <Assessment.User profile_mail={item.profile_mail} profile_name={item.profile_name} profile_img={item.profile_img} />
                  <Assessment.Message message={item.rating_text} />
                  <Assessment.Rating rating={item.rating_media} />
                </Assessment.Root>
              ))}
            </AnimatePresence>
            <Assessment.Controllers handleChangePage={setCurrentPage} length={totalPages} activePage={currentPage} />
            </motion.div>
        </Layout.Div>
        <Layout.Div className="w-full !justify-start">
          <Button.Wide rounded='full' variant='default' wide='lg' onClick={() => window.location.href = "/avaliar"}>
            <Button.Icon icon={<IconBrandHipchat />} />
            <Button.Text text='Comentar' />
          </Button.Wide>
        </Layout.Div>
      </Layout.Main>

 
    </Layout.Section>
  );
}
