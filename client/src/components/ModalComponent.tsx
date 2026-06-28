import { Modal, Button } from "@mantine/core";
import { Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function ModalComponent() {
  const [{ open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={open}
        onClose={close}
        title='Confirm Meal Plan'
        // fullScreen={isMobile}
        centered
      >
        <Grid className='border-2'>
          <Grid.Col span={6} className='w-full border-r-2'>
            test
          </Grid.Col>
          <Grid.Col span={6} className='w-full border-l-2'>
            test2
          </Grid.Col>
        </Grid>

        <Button variant='filled' type='submit'>
          Create the meal plan
        </Button>
      </Modal>
    </>
  );
}
export default ModalComponent;
