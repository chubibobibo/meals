// rendered in Indexpage.tsx
import { TextInput, Textarea, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

import ModalComponent from "./ModalComponent";
import { useDisclosure } from "@mantine/hooks";

import { weekdayMealPlan } from "../utils/mealPlanProps";
import { useNavigate } from "@tanstack/react-router";

function MealPlanForm() {
  const navigate = useNavigate({ from: "/dashboard/index" });
  // Obtain current date and convert to date that Mantine can parse
  const currentDate = new Date().getTime();
  const convertedDate = dayjs(currentDate).format("YYYY-MM-DD");
  // Obtain userData from localStorage
  const currentUser = localStorage.getItem("username");
  // states to control calendar data
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  // State that contains meal to be used as props for the modal to display
  const [mealDataState, setMealDataState] = useState({});
  // Controls opening of modal
  const [opened, { open, close }] = useDisclosure(false);

  // handling submit of the for to set mealDataState that is used in the modal
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mealData = Object.fromEntries(formData);
    setMealDataState((prev) => {
      return { ...prev, mealData };
    });
  };

  // console.log(mealDataState);

  const handleClickNav = () => {
    navigate({ to: "/" });
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
        <form onSubmit={handleSubmit}>
          <>
            <ModalComponent
              opened={opened}
              closed={close}
              mealData={mealDataState}
            />
          </>
          <aside className='bg-gray-200 p-1 rounded-t-sm flex justify-center gap-2'>
            <DateInput
              value={startDate}
              onChange={setStartDate}
              label='Meal plan start date'
              placeholder='meal plan start date'
              name='startDate'
              minDate={convertedDate}
            />
            <DateInput
              value={endDate}
              onChange={setEndDate}
              label='Meal plan end date'
              placeholder='meal plan end date'
              name='endDate'
              minDate={convertedDate}
            />
          </aside>

          {/** Iterate the meal plan props to render necessary input elements */}
          {weekdayMealPlan.map((allMealPlan, key) => (
            <section key={key}>
              <aside
                className={`flex flex-col gap-2 ${allMealPlan.color} p-1 pb-2 rounded-t-sm`}
              >
                <TextInput
                  size='sm'
                  label={allMealPlan.label}
                  // description='Enter planned meal for Dinner'
                  placeholder="What's for dinner"
                  name={allMealPlan.name}
                  required
                  // onChange={handleWeekdayInputChange}
                />
              </aside>
              <aside className={`${allMealPlan.color} rounded-b-sm p-1 pb-2`}>
                <Textarea
                  size='sm'
                  label={allMealPlan.notesLabel}
                  placeholder='Anything you want to note about the meal?'
                  name={allMealPlan.notesName}
                />
              </aside>
            </section>
          ))}
          {/** weekend inputs */}
          <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-red-200 p-1 pb-2'>
            <TextInput
              size='sm'
              label='Saturday Meal (Lunch)'
              description='Enter planned meal for Lunch'
              placeholder="What's up for Lunch?"
              name='saturdayLunch'
              required
            />
            <Textarea
              size='sm'
              label='Notes about meal'
              placeholder='Anything you want to note about the meal?'
              name='saturdayLunchNotes'
            />
            <TextInput
              size='sm'
              label='Saturday Meal (Dinner)'
              placeholder="What's for dinner?"
              name='saturdayDinner'
              required
            />
            <Textarea
              size='sm'
              label='Notes about meal'
              placeholder='Anything you want to note about the meal?'
              name='saturdayDinnerNotes'
            />
          </aside>
          <aside className='flex gap-2 grid grid-cols-1 grid-rows-2 bg-blue-200 p-1 pb-2 rounded-b-sm'>
            <TextInput
              size='sm'
              label='Sunday Meal (Lunch)'
              description='Enter planned meal for Lunch'
              placeholder="What's up for Lunch?"
              name='sundayLunch'
              required
            />
            <Textarea
              size='sm'
              label='Notes about meal'
              placeholder='Anything you want to note about the meal?'
              name='sundayLunchNotes'
            />
            <TextInput
              size='sm'
              label='Sunday Meal (Dinner)'
              placeholder="What's for dinner?"
              name='sundayDinner'
              required
            />
            <Textarea
              size='sm'
              label='Notes about meal'
              placeholder='Anything you want to note about the meal?'
              name='sundayDinnerNotes'
            />
          </aside>
          {/** onClick bubbles up from the button */}
          <section className='flex justify-center p-4 gap-2' onClick={open}>
            <Button variant='filled' type='submit'>
              Send meal plan
            </Button>
            <Button variant='filled' type='button' onClick={handleClickNav}>
              Back
            </Button>
          </section>
        </form>
      </section>
    </>
  );
}
export default MealPlanForm;
