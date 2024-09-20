
import { ButtonGroup, Button } from "./components/button-group";

export default function Home() {
  return (
    <div className="container flex w-[100%] h-[100vh] bg-white mx-auto p-4 justify-center items-center ">
      <ButtonGroup variant='text'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </ButtonGroup>
    </div>
  );
}
