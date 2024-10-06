import style from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className="container">
      <h3 className={style.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={style.image} />
      <p>
        <strong className={style.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
