import { FormSection } from "../types/formType";
import FieldRenderer from "./FieldRenderer";

interface Props {
  section: FormSection;
}

export default function Section({ section }: Props) {
  return (
    <div>
      <h3>{section.title}</h3>
      <p>{section.description}</p>
      {section.fields.map((field) => (
        <FieldRenderer key={field.fieldId} field={field} />
      ))}
    </div>
  );
}
