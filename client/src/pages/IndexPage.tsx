import MealPlanForm from "../components/MealPlanForm";
import { useState } from "react";

import Footer from "../components/Footer";

import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
// import ModalComponent from "../components/ModalComponent";
import { Grid } from "@mantine/core";

function IndexPage() {
  const [mealPlanState, setMealPlanState] = useState(null);

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <main className='p-2 pt-5 w-screen h-screen flex flex-col items-center'>
      {/* <form onSubmit={handleSubmit}> */}
      <section>
        <Modal
          opened={opened}
          onClose={close}
          title='Confirm Meal Plan'
          // fullScreen={isMobile}
          centered
        >
          <Grid className='border-2'>
            <Grid.Col span={6} className='w-full border-r-2'>
              test1
            </Grid.Col>
            <Grid.Col span={6} className='w-full border-l-2'>
              test2
            </Grid.Col>
          </Grid>

          <Button variant='filled' type='button'>
            Send Meal Plan
          </Button>
        </Modal>
        {/* <ModalComponent /> */}
        {/* <form method='POST' onSubmit={handleSubmit}> */}
        <MealPlanForm />
        <section className='flex justify-center p-4'>
          <Button variant='filled' type='button' onClick={open} className=''>
            Create the meal plan
          </Button>
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
