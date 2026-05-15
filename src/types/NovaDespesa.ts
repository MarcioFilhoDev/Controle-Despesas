import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { DespesaFormData } from "../hooks/useNovaDespesa";

export interface NovaDespesaProps {
  control: Control<DespesaFormData>;
  errors: FieldErrors<DespesaFormData>;
  handleSubmit: UseFormHandleSubmit<DespesaFormData>;
  isSubmitting: boolean;
  onSubmit: (data: DespesaFormData) => Promise<void>;
  reset: () => void;
}
