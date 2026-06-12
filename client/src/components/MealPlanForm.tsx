// rendered in Indexpage.tsx
import { TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

import MealInput from "./MealInput";

function MealPlanForm() {
  // Obtain current date and convert to date that Mantine can parse
  const currentDate = new Date().getTime();
  const convertedDate = dayjs(currentDate).format("YYYY-MM-DD");
  // Obtain userData from localStorage
  const currentUser = localStorage.getItem("username");
  // states to control calendar data
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);
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
      <section className='flex flex-col justify-center border-2 mt-3 p-1 rounded-sm gap-1'>
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
            required
          />
          <DateInput
            value={value2}
            onChange={setValue2}
            label='Meal plan end date'
            placeholder='meal plan end date'
            name='endDate'
            minDate={convertedDate}
            required
          />
        </aside>

        <MealInput
          sizeProp='xs'
          labelProp='Monday Meal'
          placeholderProp="What's up for dinner"
          nameProp='mondayDinner'
          requiredProp={true}
          TASizeProp='sm'
          TALabelProp='Notes about meal'
          TAPlaceholderProp='Anything you want to note about the meal?'
          TANameProp='mondayDinnerNotes'
          TARequiredProp={false}
          bgColor='bg-blue-200'
        />
        <MealInput
          sizeProp='xs'
          labelProp='Tuesday Meal'
          placeholderProp="What's up for dinner"
          nameProp='tuesdayDinner'
          requiredProp={true}
          TASizeProp='sm'
          TALabelProp='Notes about meal'
          TAPlaceholderProp='Anything you want to note about the meal?'
          TANameProp='tuesdayDinnerNotes'
          TARequiredProp={false}
          bgColor='bg-red-200'
        />
        <MealInput
          sizeProp='xs'
          labelProp='Wednesday Meal'
          placeholderProp="What's up for dinner"
          nameProp='wednesdayDinner'
          requiredProp={true}
          TASizeProp='sm'
          TALabelProp='Notes about meal'
          TAPlaceholderProp='Anything you want to note about the meal?'
          TANameProp='wednesdayDinnerNotes'
          TARequiredProp={false}
          bgColor='bg-blue-200'
        />
        <MealInput
          sizeProp='xs'
          labelProp='Thursday Meal'
          placeholderProp="What's up for dinner"
          nameProp='thursdayDinner'
          requiredProp={true}
          TASizeProp='sm'
          TALabelProp='Notes about meal'
          TAPlaceholderProp='Anything you want to note about the meal?'
          TANameProp='thursdayDinnerNotes'
          TARequiredProp={false}
          bgColor='bg-red-200'
        />
        <MealInput
          sizeProp='xs'
          labelProp='Friday Meal'
          placeholderProp="What's up for dinner"
          nameProp='fridayDinner'
          requiredProp={true}
          TASizeProp='sm'
          TALabelProp='Notes about meal'
          TAPlaceholderProp='Anything you want to note about the meal?'
          TANameProp='fridayDinnerNotes'
          TARequiredProp={false}
          bgColor='bg-blue-200'
        />

        <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-red-200 p-1'>
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
            placeholder="What's up for Dinner?"
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
        <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-blue-200 p-1 rounded-b-sm'>
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
            placeholder="What's up for Dinner?"
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
        {/* <aside className='text-center my-4'>
          <Button variant='filled' type='submit' className=''>
            Create the meal plan
          </Button>
        </aside> */}
      </section>
    </>
  );
}
export default MealPlanForm;
