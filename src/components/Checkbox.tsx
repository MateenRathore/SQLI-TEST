import {useState} from "react";

type checkObjOptions = {
  [key: string]: boolean
}

type Props = {
  label: string;
  toggle : (a: string) => void;
  bobIndex: string
  checkObj:object
};

const Checkbox = ({ label,toggle,bobIndex,checkObj }: Props) => {
    //@ts-ignore
  const checked = checkObj[bobIndex];
  console.log({checked});
  return (
    <div style={{display:"flex"}}>
      <input checked={checked} type="checkbox" onChange={() =>{
        toggle(bobIndex);
      }
      } />
        <div onClick={() =>{
          toggle(bobIndex);
        }}>{label}</div>
    </div>
  );
};

export default Checkbox;
