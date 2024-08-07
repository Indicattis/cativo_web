



import React, { ReactNode, useEffect, useState } from 'react'
import { ContentProps } from './types'
import ProgrammingLevel from './ProgrammingLevel/ProgrammingLevel'
import { IconBrandJavascript, IconBrandPhp, IconBrandPython, IconBrandReact, IconBrandTypescript, IconPlus, IconSql } from '@tabler/icons-react'

function ContentProgrammingLanguages() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [isMobile, setIsMobile] = useState(false);

  const languages: ReactNode[] = [
    <ProgrammingLevel key={`language-item-4`} icon={<IconBrandReact width={30} height={30} stroke={1}/>} legend='Reactjs | NextJs Frameworks' level={8} time='2 anos de utilização.'/>,
    <ProgrammingLevel key={`language-item-5`} icon={<IconBrandTypescript width={30} height={30} stroke={1}/>} legend='Typescript | Javascript' level={8} time='4 anos de utilização.'/>,
    <ProgrammingLevel key={`language-item-5`} icon={<IconSql width={30} height={30} stroke={1}/>} legend='MySQL | Postgress | SQL Server' level={7} time='3 anos de utilização.'/>,
    <ProgrammingLevel key={`language-item-1`} icon={<IconBrandPhp width={30} height={30} stroke={1}/>} legend='PHP' level={7} time='1 ano de utilização.'/>,
    <ProgrammingLevel key={`language-item-3`} icon={<IconBrandPython width={30} height={30} stroke={1}/>} legend='Python' level={5} time='6 meses de utilização.'/>,
  ];

  const handleResize = () => {
      if (window.innerWidth <= 768) { // ou qualquer valor de largura que você considere como limite para mobile/tablet
          setIsMobile(true);
          setItemsPerPage(3)
      } else {
          setIsMobile(false);
          setItemsPerPage(6)
      }
  };

  useEffect(() => {
      handleResize(); // Verifique o tamanho da tela na primeira renderização
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
      <div className='z-50 relative rounded-lg overflow-hidden flex flex-col justify-around w-full h-96'>
        <div className='flex w-full h-full justify-center items-center gap-10'>
          <div className={`grid h-full w-full gap-10  ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
            {languages.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (item))}
          </div>
        </div>
      </div>
  );
}


export default ContentProgrammingLanguages