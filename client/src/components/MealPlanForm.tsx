// rendered in Indexpage.tsx
import { TextInput, Textarea, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import { weekdayMealPlan } from "../utils/mealPlanProps";
// import {
//   handleWeekdayInputChange,
//   handleWeekendInputChange,
// } from "../utils/HandleChangeInputs";

function MealPlanForm() {
  // Obtain current date and convert to date that Mantine can parse
  const currentDate = new Date().getTime();
  const convertedDate = dayjs(currentDate).format("YYYY-MM-DD");
  // Obtain userData from localStorage
  const currentUser = localStorage.getItem("username");
  // states to control calendar data
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

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

  const [weekendMealPlanState, setWeekendMealPlanState] = useState({
    saturdayLunch: "",
    saturdayLunchNotes: "",
    saturdayDinner: "",
    saturdayDinnerNotes: "",
    sundayLunch: "",
    sundayLunchNotes: "",
    sundayDinner: "",
    sundayDinnerNotes: "",
  });

  const [mealPlanDate, setMealPlanDate] = useState({
    startDate: "",
    endDate: "",
  });

  //templateParams used to send data from forms to email service
  const templateParams = {
    mondayDinner: weekdayMealPlanState.mondayDinner,
    mondayDinnerNotes: weekdayMealPlanState.mondayDinnerNotes,
    tuesdayDinner: weekdayMealPlanState.tuesdayDinner,
    tuesdayDinnerNotes: weekdayMealPlanState.tuesdayDinnerNotes,
    wednesdayDinner: weekdayMealPlanState.wednesdayDinner,
    wednesdayDinnerNotes: weekdayMealPlanState.wednesdayDinnerNotes,
    thursdayDinner: weekdayMealPlanState.thursdayDinner,
    thursdayDinnerNotes: weekdayMealPlanState.thursdayDinnerNotes,
    fridayDinner: weekdayMealPlanState.fridayDinner,
    fridayDinnerNotes: weekdayMealPlanState.fridayDinnerNotes,
    saturdayLunch: weekendMealPlanState.saturdayLunch,
    saturdayLunchNotes: weekendMealPlanState.saturdayLunchNotes,
    saturdayDinner: weekendMealPlanState.saturdayDinner,
    saturdayDinnerNotes: weekendMealPlanState.saturdayDinnerNotes,
    sundayLunch: weekendMealPlanState.sundayLunch,
    sundayLunchNotes: weekendMealPlanState.sundayLunchNotes,
    sundayDinner: weekendMealPlanState.sundayDinner,
    sundayDinnerNotes: weekendMealPlanState.sundayDinnerNotes,
    startDate: startDate,
    endDate: endDate,
    email: {
      lester: import.meta.env.VITE_LESTER_EMAIL,
      cath: import.meta.env.VITE_CATH_EMAIL,
    },
    emailFrom: localStorage.getItem("userEmail"),
    name: localStorage.getItem("username"),
  };

  // handles input changes for text and text area inputs (weekdays)
  const handleWeekdayInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    setWeekdayMealPlanState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleWeekendInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    setWeekendMealPlanState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { templateParams },
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        },
      );
      console.log("SUCCESS!");
      console.log(templateParams);
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }
      console.log("ERROR", err);
    }
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
            value={startDate}
            onChange={setStartDate}
            label='Meal plan start date'
            placeholder='meal plan start date'
            name='startDate'
            minDate={convertedDate}
            // onChange={handleDateChange}
          />
          <DateInput
            value={endDate}
            onChange={setEndDate}
            label='Meal plan end date'
            placeholder='meal plan end date'
            name='endDate'
            minDate={convertedDate}
            // onChange={handleDateChange}
          />
        </aside>
        {/* <p>{mealPlanDate.startDate}</p> */}
        {/** Iterate the meal plan props to render necessary input elements */}
        {weekdayMealPlan.map((allMealPlan, key) => (
          <section key={key}>
            <aside
              className={`flex flex-col gap-2 ${allMealPlan.color} p-1 pb-2 rounded-t-sm`}
            >
              <TextInput
                size='xs'
                label={allMealPlan.label}
                // description='Enter planned meal for Dinner'
                placeholder="What's for dinner"
                name={allMealPlan.name}
                required
                onChange={handleWeekdayInputChange}
              />
            </aside>
            <aside className={`${allMealPlan.color} rounded-b-sm p-1 pb-2`}>
              <Textarea
                size='sm'
                label={allMealPlan.label}
                placeholder='Anything you want to note about the meal?'
                name={allMealPlan.notesName}
                required
                onChange={handleWeekdayInputChange}
              />
            </aside>
            {/* <p>{weekdayMealPlanState.mondayDinner}</p> */}
          </section>
        ))}
        {/** weekend inputs */}
        <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-red-200 p-1 pb-2'>
          <TextInput
            size='xs'
            label='Saturday Meal (Lunch)'
            description='Enter planned meal for Lunch'
            placeholder="What's up for Lunch?"
            name='saturdayLunch'
            required
            onChange={handleWeekendInputChange}
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            placeholder='Anything you want to note about the meal?'
            name='saturdayLunchNotes'
            onChange={handleWeekendInputChange}
          />
          <TextInput
            size='xs'
            label='Saturday Meal (Dinner)'
            placeholder="What's for dinner?"
            name='saturdayDinner'
            required
            onChange={handleWeekendInputChange}
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            placeholder='Anything you want to note about the meal?'
            name='saturdayDinnerNotes'
            onChange={handleWeekendInputChange}
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
            onChange={handleWeekendInputChange}
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            placeholder='Anything you want to note about the meal?'
            name='sundayLunchNotes'
            onChange={handleWeekendInputChange}
          />
          <TextInput
            size='xs'
            label='Sunday Meal (Dinner)'
            placeholder="What's for dinner?"
            name='sundayDinner'
            required
            onChange={handleWeekendInputChange}
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            placeholder='Anything you want to note about the meal?'
            name='sundayDinnerNotes'
            onChange={handleWeekendInputChange}
          />
        </aside>
        <section className='flex justify-center p-4'>
          <Button
            variant='filled'
            type='button'
            className=''
            onClick={handleClick}
          >
            Send meal plan
          </Button>
        </section>
      </section>
    </>
  );
}
export default MealPlanForm;
