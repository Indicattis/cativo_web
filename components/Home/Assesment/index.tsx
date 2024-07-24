import AssessmentsControllers from "./AssessmentControllers";
import AssessmentForm from "../../Avaliar/Evaluetion/EvaluetionForm";
import AssessmentMessage from "./AssessmentMessage";
import AssessmentRating from "./AssessmentRating";
import AssessmentRoot from "./AssessmentRoot";
import AssessmentUser from "./AssessmentUser";


export const Assessment = {
  Root: AssessmentRoot,
  User: AssessmentUser,
  Message: AssessmentMessage,
  Rating: AssessmentRating,
  Controllers: AssessmentsControllers
}