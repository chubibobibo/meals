// rendered in Indexpage.tsx
import { TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

import MealInput from "./MealInput";
import MealNotes from "./MealNotes";
import { weekdayMealPlan } from "../utils/mealPlanProps";

function MealPlanForm() {
  // Obtain current date and convert to date that Mantine can parse
  const currentDate = new Date().getTime();
  const convertedDate = dayjs(currentDate).format("YYYY-MM-DD");
  // Obtain userData from localStorage
  const currentUser = localStorage.getItem("username");
  // states to control calendar data
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);

  // state that handles weekday meal data and iterated to render inputs
  // provides value on inputs depending on their name attribute
  // state names are the same as the name value of the inputs
  const [weekdayMealPlanState, setWeekdayMealPlanState] = useState({
    mondayDinner: "",
    mondayDinnerNotes: "",
    tuesdayDinner: "",
    tuesdayDinnerNotes: "",
    wednesdayDinner: "",
    wednesdayDinnerNotes: "",
    thursdayDinner: "",
    thursdayDinnerNotes: "",
    fridayDinner: "",
    fridayDinnerNotes: "",
  });

  const [mealWeekend, setMealWeekend] = useState([
    {
      labelLunch: "Saturday Lunch",
      nameLunch: "saturdayLunch",
      notesNameLunch: "saturdayLunchNotes",
      labelDinner: "Saturday Dinner",
      nameDinner: "saturdayDinner",
      notesNameDinner: "saturdayDinnerNotes",
      value: "",
    },
    {
      labelLunch: "Sunday Lunch",
      nameLunch: "sundayLunch",
      notesNameLunch: "sundayLunchNotes",
      labelDinner: "Sunday Dinner",
      nameDinner: "sundayDinner",
      notesNameDinner: "sundayDinnerNotes",
      value: "",
    },
  ]);

  const handleWeekdayInputChange = (
    e:
      | React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
      | React.ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    setWeekdayMealPlanState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <section className='border-2 rounded-sm p-1 mb-5'>
        <h1 className='font-Montserrat text-xl font-bold text-gray-700 text-center'>
          {`Hi ${currentUser} 👋👋👋,`}
        </h1>
        <h1 className='font-Montserrat text-lg font-bold text-gray-700 text-center'>
          Create your menu for the week!
        </h1>
      </section>
      {/** Meal plan form */}
      <section className='flex flex-col justify-center border-2 mt-3 p-1 px-2 rounded-sm gap-1'>
        <aside className='flex gap-1'>
          <p className='text-red-800 text-xs'>*</p>
          <p className='text-xs'>Required fields</p>
        </aside>
        <aside className='bg-gray-200 p-1 rounded-t-sm flex justify-center gap-2'>
          <DateInput
            value={value1}
            onChange={setValue1}
            label='Meal plan start date'
            placeholder='meal plan start date'
            name='startDate'
            minDate={convertedDate}
            // required
          />
          <DateInput
            value={value2}
            onChange={setValue2}
            label='Meal plan end date'
            placeholder='meal plan end date'
            name='endDate'
            minDate={convertedDate}
            // required
          />
        </aside>
        {weekdayMealPlan.map((allMealPlan, key) => (
          <section key={key}>
            <MealInput
              sizeProp='xs'
              labelProp={allMealPlan?.label}
              placeholderProp="What's for dinner"
              nameProp={allMealPlan?.name}
              requiredProp={true}
              bgColor={allMealPlan.color}
              handleChange={handleWeekdayInputChange}
            />

            <MealNotes
              TASizeProp='sm'
              TALabelProp='Notes about meal'
              TAPlaceholderProp='Anything you want to note about the meal?'
              TANameProp={allMealPlan.notesName}
              TARequiredProp={false}
              bgColor={allMealPlan.color}
              handleChange={handleWeekdayInputChange}
            />
          </section>
        ))}
        <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-red-200 p-1 pb-2'>
          <TextInput
            size='xs'
            label='Saturday Meal (Lunch)'
            description='Enter planned meal for Lunch'
            placeholder="What's up for Lunch?"
            name='saturdayLunch'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            // description='Any notes you want to share?'
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
            // description='Any notes you want to share?'
            placeholder='Anything you want to note about the meal?'
            name='saturdayDinnerNotes'
          />
        </aside>
        <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-blue-200 p-1 pb-2 rounded-b-sm'>
          <TextInput
            size='xs'
            label='Sunday Meal (Lunch)'
            description='Enter planned meal for Lunch'
            placeholder="What's up for Lunch?"
            name='sundayLunch'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            // description='Any notes you want to share?'
            placeholder='Anything you want to note about the meal?'
            name='sundayLunchNotes'
          />
          <TextInput
            size='xs'
            label='Sunday Meal (Dinner)'
            // description='Enter planned meal for Dinner'
            placeholder="What's for dinner?"
            name='sundayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            // description='Any notes you want to share?'
            placeholder='Anything you want to note about the meal?'
            name='sundayDinnerNotes'
          />
        </aside>
        {/* <TextInput
          type='text'
          name='testInput'
          id=''
          onChange={handleChangeTest}
          value={testState.testInput}
        />
        <p>{testState.testInput}</p> */}
      </section>
    </>
  );
}
export default MealPlanForm;
