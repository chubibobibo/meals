import { Modal, Button, ScrollArea } from "@mantine/core";

import { Table } from "@mantine/core";
import { labels } from "../utils/ModalLabels";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";

interface ModalFuncType {
  opened: boolean;
  closed: () => void;
  mealData?: { (key: string): string } | null; // type check for multiple key:value pair object
}
// Rendered in MealPlanForm
function ModalComponent({ opened, closed, mealData }: ModalFuncType) {
  // Obtain userData from localStorage
  const currentUser = localStorage.getItem("username");
  const currentUserEmail = localStorage.getItem("userEmail");
  const meals = mealData?.mealData;
  const navigate = useNavigate({ from: "/dashboard/index" });
  console.log(meals);

  const templateParams = {
    username: currentUser,
    userEmail: currentUserEmail,
    emailLester: import.meta.env.VITE_LESTER_EMAIL,
    emailCath: import.meta.env.VITE_CATH_EMAIL,
    mondayDinner: meals?.mondayDinner,
    mondayDinnerNotes: meals?.mondayDinnerNotes,
    tuesdayDinner: meals?.tuesdayDinner,
    tuesdayDinnerNotes: meals?.tuesdayDinnerNotes,
    wednesdayDinner: meals?.wednesdayDinner,
    wednesdayDinnerNotes: meals?.wednesdayDinnerNotes,
    thursdayDinner: meals?.thursdayDinner,
    thursdayDinnerNotes: meals?.thursdayDinnerNotes,
    fridayDinner: meals?.fridayDinner,
    fridayDinnerNotes: meals?.fridayDinnerNotes,
    saturdayLunch: meals?.saturdayLunch,
    saturdayLunchNotes: meals?.saturdayLunchNotes,
    saturdayDinner: meals?.saturdayDinner,
    saturdayDinnerNotes: meals?.saturdayDinnerNotes,
    sundayLunch: meals?.sundayLunch,
    sundayLunchNotes: meals?.sundayLunchNotes,
    sundayDinner: meals?.sundayDinner,
    sundayDinnerNotes: meals?.sundayDinnerNotes,
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
      toast.success("Meal plan Created");
      navigate({ to: "/" });
      // console.log("SUCCESS!");
      // console.log(templateParams);
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.error("Meal plan cannot be created");
        console.log("EMAILJS FAILED...", err);
        return;
      }
      console.log("ERROR", err);
    }
  };

  const rows =
    meals !== null &&
    meals !== undefined &&
    Object.entries(meals).map(([key, value], idx) => (
      <Table.Tr key={idx}>
        <Table.Td
          style={{
            fontWeight: 600,
            backgroundColor: idx % 2 === 0 ? "lightCoral" : "powderBlue",
          }}
        >
          {labels[key]}
        </Table.Td>
        <Table.Td>
          <ScrollArea w={150} h={80} offsetScrollbars type='always'>
            {/* <Text size='sm' className='break-words' align='center'>
            {value}
          </Text> */}
            <p className='flex justify-center scrolling-x-scroll break-all p-1 '>
              {value}
            </p>
          </ScrollArea>
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={closed}
        title='Confirm Meal Plan'
        // fullScreen={isMobile}
        centered
      >
        <Table
          variant='vertical'
          stickyHeader
          stickyHeaderOffset={5}
          withTableBorder
          withColumnBorders
          verticalSpacing='xs'
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Meal Plan</Table.Th>
              <Table.Th>Values</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {/** BODY */}
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

        {/** This is the GRID SOLUTION */}

        {/* </Table.ScrollContainer> */}
        {/* {meals !== null &&
          meals !== undefined &&
          Object.entries(meals).map(([key, value], idx) => (
            <div key={idx}>
              <Grid className='border-2' justify='center' align='center'>
                <Grid.Col span={6} align='center'>
                  {labels[key]}
                </Grid.Col>
                <Grid.Col span={6} align='center'>
                  {value}
                </Grid.Col>
              </Grid>
            </div>
          ))} */}

        <Button
          variant='filled'
          type='button'
          className='mt-3'
          onClick={handleClick}
        >
          Create the meal plan
        </Button>
      </Modal>
    </>
  );
}
export default ModalComponent;
