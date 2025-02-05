import classNames from "classnames";

export interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  const onToggleOpen = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("_lock");
  };

  return (
    <div className="z-50 lg:hidden">
      <div
        onClick={onToggleOpen}
        className={classNames(`tham tham-e-squeeze tham-w-9`, { "tham-active": isOpen })}>
        <div className="tham-box">
          <div className="tham-inner bg-white" />
        </div>
      </div>
    </div>
  );
}
