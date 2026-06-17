import { TextInput } from "@mantine/core";

interface MealInputType {
  sizeProp: string;
  labelProp: string;
  placeholderProp: string;
  nameProp: string;
  requiredProp: boolean;
  bgColor: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
}

function MealInput({
  sizeProp,
  labelProp,
  placeholderProp,
  nameProp,
  requiredProp,
  bgColor,
  handleChange,
}: MealInputType) {
  return (
    <>
      <aside className={`flex flex-col gap-2 ${bgColor} p-1 pb-2 rounded-t-sm`}>
        <TextInput
          size={sizeProp}
          label={labelProp}
          // description='Enter planned meal for Dinner'
          placeholder={placeholderProp}
          name={nameProp}
          required={requiredProp}
          onChange={handleChange}
        />
      </aside>
    </>
  );
}
export default MealInput;
