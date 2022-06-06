import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";

export const Header = ({onClick}) => {
  
  return (
    <header className="header-all">
      <Button className="btn-exit"  onClick= {onClick}>
        <FiLogOut/>
      </Button>
    </header>

  );
};