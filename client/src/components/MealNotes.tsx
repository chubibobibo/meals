import { Textarea } from "@mantine/core";

interface MealNotesTypes {
  TASizeProp: string;
  TALabelProp: string;
  TAPlaceholderProp: string;
  TANameProp: string;
  TARequiredProp: boolean;
  bgColor: string;
  handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement,
    HTMLTextAreaElement
  >;
}
function MealNotes({
  TASizeProp,
  TALabelProp,
  TAPlaceholderProp,
  TANameProp,
  TARequiredProp,
  bgColor,
  handleChange,
}: MealNotesTypes) {
  return (
    <section className={`${bgColor} rounded-b-sm p-1 pb-2`}>
      <Textarea
        size={TASizeProp}
        label={TALabelProp}
        placeholder={TAPlaceholderProp}
        name={TANameProp}
        required={TARequiredProp}
        onChange={handleChange}
      />
    </section>
  );
}
export default MealNotes;
