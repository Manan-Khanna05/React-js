import styles from "./Item.module.css";
const Item = ({ item }) => {
  return (
    <li
        span className="mk-span">{item}</span> </li >
  );
};

export default Item;
