import { Modal, Button, ScrollArea, Text } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Table } from "@mantine/core";

interface ModalFuncType {
  opened: boolean;
  closed: () => void;
  mealData?: { (key: string): string } | null; // type check for multiple key:value pair object
}
// Rendered in MealPlanForm
function ModalComponent({ opened, closed, mealData }: ModalFuncType) {
  const meals = mealData?.mealData;
  console.log(meals);

  /** @labels used to render labels for table cells using the iterated keys from the @meals state */
  const labels = {
    startDate: "Meal Plan Starting Date",
    endDate: "Meal Plan Starting Date",
    mondayDinner: "Monday Dinner Meal",
    mondayDinnerNotes: "Monday Dinner Notes",
    tuesdayDinner: "Tuesday Dinner Meal",
    tuesdayDinnerNotes: "Tuesday Dinner Notes",
    wednesdayDinner: "Wednesday Dinner Meal",
    wednesdayDinnerNotes: "Wednesday Dinner Notes",
    thursdayDinner: "Thursday Dinner Meal",
    thursdayDinnerNotes: "Thursday Dinner Notes",
    fridayDinner: "Friday Dinner Meal",
    fridayDinnerNotes: "Friday Dinner Notes",
    saturdayLunch: "Saturday Lunch Meal",
    saturdayLunchNotes: "Saturday Lunch Notes",
    saturdayDinner: "Saturday Dinner Meal",
    saturdayDinnerNotes: "Saturday Dinner Notes",
    sundayLunch: "Sunday Lunch Meal",
    sundayLunchNotes: "Sunday Lunch Notes",
    sundayDinner: "Sunday Dinner Meal",
    sundayDinnerNotes: "Sunday Dinner Notes",
  };

  const rows =
    meals !== null &&
    meals !== undefined &&
    Object.entries(meals).map(([key, value], idx) => (
      <Table.Tr key={meals.idx}>
        <Table.Td>{labels[key]}</Table.Td>
        <ScrollArea w={150} h={90} offsetScrollbars type='always'>
          <Text size='sm' className='break-words' align='center'>
            {value}
          </Text>
        </ScrollArea>
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

        <Button variant='filled' type='submit'>
          Create the meal plan
        </Button>
      </Modal>
    </>
  );
}
export default ModalComponent;
