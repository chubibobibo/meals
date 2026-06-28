import MealPlanForm from "../components/MealPlanForm";

import Footer from "../components/Footer";

// import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
// import ModalComponent from "../components/ModalComponent";

function IndexPage() {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <main className='p-2 pt-5 w-screen h-screen flex flex-col items-center'>
      <section>
        <MealPlanForm />
        <section className='flex justify-center p-4'>
          {/* <Button variant='filled' type='button' onClick={open} className=''>
            Create the meal plan
          </Button> */}
        </section>
        <section className='inset-x-0 bottom-0'>
          <Footer />
        </section>
      </section>
      {/* </form> */}
    </main>
  );
}

export default IndexPage;
