import MealPlanForm from "../components/MealPlanForm";
import { Button } from "@mantine/core";

function IndexPage() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    // localStorage.setItem("mealData", JSON.stringify(data));
  };

  return (
    <main className='p-2 pt-5 w-screen flex flex-col items-center'>
      <form method='POST' onSubmit={handleSubmit}>
        <MealPlanForm />
        <section className='flex justify-center p-2'>
          <Button variant='filled' type='submit' className=''>
            Create the meal plan
          </Button>
        </section>
      </form>
    </main>
  );
}
export default IndexPage;
