import { useState } from "react";
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
  sundayDinnerMotes: "",
});

// handles input changes for text and text area inputs (weekdays)
export const handleWeekdayInputChange = (
  e:
    | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
) => {
  setWeekdayMealPlanState((prev) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
};

export const handleWeekendInputChange = (
  e:
    | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
) => {
  setWeekendMealPlanState((prev) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
};
