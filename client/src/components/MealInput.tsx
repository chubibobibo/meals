import { TextInput, Textarea } from "@mantine/core";

interface MealInputType {
  sizeProp: string;
  labelProp: string;
  placeholderProp: string;
  nameProp: string;
  requiredProp: boolean;
  TASizeProp: string;
  TALabelProp: string;
  TAPlaceholderProp: string;
  TANameProp: string;
  TARequiredProp: boolean;
  bgColor: string;
}

function MealInput({
  sizeProp,
  labelProp,
  placeholderProp,
  nameProp,
  requiredProp,
  TASizeProp,
  TALabelProp,
  TAPlaceholderProp,
  TANameProp,
  bgColor,
}: MealInputType) {
  return (
    <>
      <aside className={`flex gap-2 ${bgColor} p-1`}>
        <TextInput
          size={sizeProp}
          label={labelProp}
          // description='Enter planned meal for Dinner'
          placeholder={placeholderProp}
          name={nameProp}
          required={requiredProp}
        />
        <Textarea
          size={TASizeProp}
          label={TALabelProp}
          // description='Any notes you want to share?'
          placeholder={TAPlaceholderProp}
          name={TANameProp}
        />
      </aside>
    </>
  );
}
export default MealInput;
