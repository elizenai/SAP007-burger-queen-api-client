import { Button } from "../Button";

export const Header = ({onClick}) => {
  
  return (
    <header className="header-all">
      <Button className="btn-exit"  onClick= {onClick}> Sair </Button>
    </header>

  );
};