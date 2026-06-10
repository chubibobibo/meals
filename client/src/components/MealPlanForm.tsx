// rendered in Indexpage.tsx
import { TextInput, Textarea } from "@mantine/core";
const currentUser = localStorage.getItem("username");

function MealPlanForm() {
  return (
    <>
      <section className='border-2 rounded-sm p-1'>
        <h1 className='font-Montserrat text-2xl font-bold text-gray-700 text-center'>
          {`Hi ${currentUser} 👋👋👋,`}
        </h1>
        <h1 className='font-Montserrat text-2xl font-bold text-gray-700 text-center'>
          Create your menu for the week!
        </h1>
      </section>
      {/** Meal plan form */}
      <section className='flex flex-col justify-center gap-2 border-2 mt-3 p-2 rounded-sm'>
        <aside className='flex gap-1'>
          <p className='text-red-800 text-xs'>*</p>
          <p className='text-xs'>Required fields</p>
        </aside>

        <aside className='flex gap-2'>
          <TextInput
            size='xs'
            label='Monday Meal'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='mondayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='mondayDinnerNotes'
          />
        </aside>
        <aside className='flex gap-2'>
          <TextInput
            size='xs'
            label='Tuesday Meal'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='tuesdayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='tuesdayDinnerNotes'
          />
        </aside>
        <aside className='flex gap-2'>
          <TextInput
            size='xs'
            label='Wednesday Meal'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='wednesdayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='wednesdayDinnerNotes'
          />
        </aside>
        <aside className='flex gap-2'>
          <TextInput
            size='xs'
            label='Thursday Meal'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='thursdayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            name='thursdayDinnerNotes'
            placeholder='Is there anything else should I know?'
          />
        </aside>
        <aside className='flex gap-2'>
          <TextInput
            size='xs'
            label='Friday Meal'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='fridayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='fridayDinnerNotes'
          />
        </aside>
        <aside className='flex gap-2 grid grid-cols-2 grid-cols-2'>
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
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='saturdayLunchNotes'
          />
          <TextInput
            size='xs'
            label='Saturday Meal (Dinner)'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='saturdayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='saturdayDinnerNotes'
          />
        </aside>
        <aside className='flex gap-2 grid grid-cols-2 grid-cols-2'>
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
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='sundayLunchNotes'
          />
          <TextInput
            size='xs'
            label='Sunday Meal (Dinner)'
            description='Enter planned meal for Dinner'
            placeholder="What's up for Dinner?"
            name='sundayDinner'
            required
          />
          <Textarea
            size='xs'
            label='Notes about meal'
            description='Any notes you want to share?'
            placeholder='Is there anything else should I know?'
            name='sundayDinnerNotes'
          />
        </aside>
      </section>
    </>
  );
}
export default MealPlanForm;
