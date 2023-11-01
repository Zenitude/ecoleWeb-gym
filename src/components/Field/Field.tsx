import { FieldContainer, FieldInput, FieldLabel, FieldText } from "./Field.style"
import { FieldProps } from "../../utils/types/types"

export default function Field({type, id, txt, placeholder}: FieldProps) {
  return (
    <FieldContainer>
        <FieldLabel htmlFor={id}>{txt}</FieldLabel>
        {
            type === 'area'
            ? (<FieldText cols={30} rows={20} placeholder={placeholder ? placeholder : ""}></FieldText>)
            : (<FieldInput type={type} name={id} id={id} placeholder={placeholder ? placeholder : ""}/>)
      }
    </FieldContainer>
  )
}
