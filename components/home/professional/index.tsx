'use client'

import DivComponent from "@/components/layout/div";
import MainComponent from "@/components/layout/main";
import SectionComponent from "@/components/layout/section";
import ParagraphComponent from "@/components/layout/texts/paragraph";
import PersonalCard from "./card";





export default function ProfessionalComponent() {
    return (
        <SectionComponent className="min-h-[600px]">
            <MainComponent className="gap-3">
                <DivComponent className="gap-3">
                    <div className="flex flex-col py-10">
                        <PersonalCard/>
                    </div>
                </DivComponent>
            </MainComponent>
        </SectionComponent>
    )
}