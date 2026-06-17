import { TextInput, Textarea } from "@mantine/core";

interface MealInputWeekendType {
  size: string;
  label: string;
  description: string;
  placeholder: string;
  name: string;
  required: boolean;
}

function MealInputWeekend({
  size,
  label,
  description,
  placeholder,
  name,
  required,
}: MealInputWeekendType) {
  return (
    <>
      <TextInput
        size={size}
        label={label}
        description={description}
        placeholder={placeholder}
        name={name}
        required={required}
      />
      <Textarea
        size='xs'
        label='Notes about meal'
        placeholder='Anything you want to note about the meal?'
        name='saturdayLunchNotes'
      />
      <TextInput
        size='xs'
        label='Saturday Meal (Dinner)'
        // description='Enter planned meal for Dinner'
        placeholder="What's for dinner?"
        name='saturdayDinner'
        required
      />
      <Textarea
        size='xs'
        label='Notes about meal'
        placeholder='Anything you want to note about the meal?'
        name='saturdayDinnerNotes'
      />
    </>
  );
}
export default MealInputWeekend;
